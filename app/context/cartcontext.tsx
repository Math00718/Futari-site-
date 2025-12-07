"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  pieces?: number;
  details?: Record<
    "base" | "protein" | "salad" | "sauce" | "topping",
    string[]
  >;
};

type CartState = Record<string, CartItem>;

type CartCtx = {
  items: CartState;
  totalCount: number;
  totalPrice: number;
  setQty: (id: string, qty: number, data?: Partial<CartItem>) => void;
  inc: (id: string, data?: Partial<CartItem>) => void;
  dec: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartCtx | null>(null);
const LS_KEY = "futari_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartState>({});

  /* LOCAL STORAGE */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const totalCount = useMemo(
    () => Object.values(items).reduce((s, it) => s + (it.qty || 0), 0),
    [items]
  );

  const totalPrice = useMemo(
    () => Object.values(items).reduce((s, it) => s + it.qty * (it.price ?? 0), 0),
    [items]
  );

  /* HELPERS */
  const cleanSpaces = (s: string) => s.replace(/\s+/g, " ").trim();
  const dedupeWords = (s: string) => s.replace(/\b(\w+)\s+\1\b/gi, "$1");

  /* PREFIX INFERENCE */
  const inferTypeById = (id: string, rawLower: string) => {
    const idCode = (id.split("-")[0] || "").toUpperCase();
    const letters = idCode.replace(/\d+/g, "");
    const digits = idCode.replace(/\D+/g, "");

    if (/^veggie-/i.test(id)) return { idCode: "", typeWord: "" };

    if (/^nigiri-/i.test(id)) return { idCode: "", typeWord: "" };
    if (/^futo-/i.test(id)) return { idCode: "", typeWord: "" };

    if (
      /(spring roll|california roll|maki california|nigiri|temaki|sashimi|gunkan|futomaki|combo)/i.test(
        rawLower
      )
    )
      return { idCode, typeWord: "" };

    if (/^H\d+$/i.test(idCode)) return { idCode, typeWord: "Spring Roll" };
    if (/^F\d+$/i.test(idCode)) return { idCode, typeWord: "California Roll" };
    if (/^A\d+$/i.test(idCode)) return { idCode, typeWord: "Nigiri" };
    if (/^B\d+$/i.test(idCode)) return { idCode, typeWord: "Gunkan" };
    if (/^C\d+$/i.test(idCode)) return { idCode, typeWord: "Temaki" };
    if (/^D\d+$/i.test(idCode)) return { idCode, typeWord: "Sashimi" };
    if (/^E\d+$/i.test(idCode)) {
      const n = Number(digits || "0");
      return { idCode, typeWord: n >= 10 ? "Maki California" : "Maki" };
    }

    return { idCode: letters && digits ? idCode : "", typeWord: "" };
  };

  /* SET QTY */
  const setQty = (id: string, qty: number, data: Partial<CartItem> = {}) => {
    setItems((prev) => {
      const next = { ...prev };

      if (qty <= 0) {
        delete next[id];
        return next;
      }

      const base = next[id] || { id, name: "", price: 0, qty: 0 };

      let rawName = cleanSpaces(String(data.name ?? base.name ?? ""));
      const lower = rawName.toLowerCase();
      const pieces = data.pieces ?? base.pieces;

      /* RÈGLE VEGGIE SPÉCIALE */
      if (id.startsWith("veggie-")) {
        const cleaned = cleanSpaces(
          rawName.replace(/veggie/gi, "").replace(/\s+/g, " ")
        );
        const final = `Veggie ${cleaned}`;
        const nameWithPieces =
          pieces && pieces > 0 ? `${final} (${pieces} pcs)` : final;

        next[id] = {
          ...base,
          ...data,
          id,
          qty,
          name: nameWithPieces,
          price: Number(data.price ?? base.price ?? 0),
          pieces,
        };
        return next;
      }
    /* RÈGLE SPÉCIALE NEMS */
if (/^nems/i.test(rawName) || rawName.toLowerCase().includes("porc/poulet")) {
  const pieces = data.pieces ?? base.pieces ?? 4;

  // extrait le dernier porc/poulet dans la chaîne
  const typeMatches = rawName.match(/(porc|poulet)/gi);
  const type = typeMatches ? typeMatches[typeMatches.length - 1] : "";

  const final = `Nems ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  const nameWithPieces = `${final} (${pieces} pcs)`;

  next[id] = {
    ...base,
    ...data,
    id,
    qty,
    name: nameWithPieces,
    price: Number(data.price ?? base.price ?? 0),
    pieces,
  };

  return next;
}




      /* NORMAL FLOW */
      const { idCode, typeWord } = inferTypeById(id, lower);
      const baseName = cleanSpaces(dedupeWords(rawName));

      const parts: string[] = [];
      if (idCode && !baseName.toLowerCase().startsWith(idCode.toLowerCase()))
        parts.push(idCode);

      if (typeWord && !new RegExp(typeWord, "i").test(baseName))
        parts.push(typeWord);

      parts.push(baseName);

      const finalName = cleanSpaces(parts.join(" "));
      const nameWithPieces =
        pieces && pieces > 0 ? `${finalName} (${pieces} pcs)` : finalName;

      next[id] = {
        ...base,
        ...data,
        id,
        qty,
        name: nameWithPieces,
        price: Number(data.price ?? base.price ?? 0),
        pieces,
      };

      return next;
    });
  };

  /* INC */
  const inc = (id: string, data: Partial<CartItem> = {}) => {
    return setQty(id, (items[id]?.qty || 0) + 1, data);
  };

  /* DEC */
  const dec = (id: string) => {
    setItems((prev) => {
      const cur = prev[id]?.qty || 0;
      const nq = cur - 1;
      const next = { ...prev };
      if (nq <= 0) delete next[id];
      else next[id] = { ...next[id], qty: nq };
      return next;
    });
  };

  const clear = () => setItems({});

  return (
    <CartContext.Provider
      value={{ items, totalCount, totalPrice, setQty, inc, dec, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
