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
  pieces?: number; // ← nombre de pièces
  details?: Record<"base" | "protein" | "salad" | "sauce" | "topping", string[]>;
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

  // --- localStorage ---
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
    () =>
      Object.values(items).reduce(
        (s, it) => s + it.qty * (it.price ?? 0),
        0
      ),
    [items]
  );

  const setQty = (id: string, qty: number, data: Partial<CartItem> = {}) => {
  setItems((prev) => {
    const next = { ...prev };

    // si quantité 0 → suppression
    if (qty <= 0) {
      delete next[id];
      return next;
    }

    const base = next[id] || { id, name: "", price: 0, qty: 0 };

    // --- reconstruit le nom EXACTEMENT comme inc() ---
    const rawName = cleanSpaces(String(data.name ?? base.name ?? ""));
    const lower = rawName.toLowerCase();

    const { idCode, typeWord } = inferTypeById(id, lower);
    const baseName = cleanSpaces(dedupeWords(rawName));

    const parts: string[] = [];
    if (idCode) parts.push(idCode);
    if (typeWord && !new RegExp(typeWord, "i").test(baseName))
      parts.push(typeWord);
    parts.push(baseName);

    const finalName = cleanSpaces(parts.join(" "));

    // --- AJOUT DES PIECES COMME DANS inc() ---
    const pieces = data.pieces ?? base.pieces;
    const nameWithPieces =
      pieces && pieces > 0
        ? `${finalName} (${pieces} pcs)`
        : finalName;

    // --- mise à jour de l’item ---
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


  // helpers
  const cleanSpaces = (s: string) => s.replace(/\s+/g, " ").trim();
  const dedupeWords = (s: string) => s.replace(/\b(\w+)\s+\1\b/gi, "$1");

  const inferTypeById = (id: string, rawNameLower: string) => {
    const idCode = (id.split("-")[0] || "").toUpperCase();
    const letters = idCode.replace(/\d+/g, "");
    const digits = idCode.replace(/\D+/g, "");

    if (
      /(spring roll|california roll|maki california|nigiri|temaki|sashimi|gunkan|futomaki|special roll|combo)/i.test(
        rawNameLower
      )
    )
      return { idCode, typeWord: "" };

    if (/^H\d+$/.test(idCode)) return { idCode, typeWord: "Spring Roll" };
    if (/^F\d+$/.test(idCode)) return { idCode, typeWord: "California Roll" };
    if (/^A\d+$/.test(idCode)) return { idCode, typeWord: "Nigiri" };
    if (/^B\d+$/.test(idCode)) return { idCode, typeWord: "Gunkan" };
    if (/^C\d+$/.test(idCode)) return { idCode, typeWord: "Temaki" };
    if (/^D\d+$/.test(idCode)) return { idCode, typeWord: "Sashimi" };
    if (/^E\d+$/.test(idCode)) {
      const n = parseInt(digits || "0", 10);
      return { idCode, typeWord: n >= 10 ? "Maki California" : "Maki" };
    }
    if (/^g\d+/i.test(id)) return { idCode, typeWord: "" }; // G1, G3 → on ne rajoute rien
    if (/^futo-/i.test(id)) return { idCode, typeWord: "Futomaki" };
    if (/^combo-/i.test(id)) return { idCode: "", typeWord: "Combo" };

    return { idCode: letters && digits ? idCode : "", typeWord: "" };
  };

  // INC
  const inc = (id: string, data: Partial<CartItem> = {}) => {
    setItems((prev) => {
      const cur = prev[id]?.qty || 0;
      const base = prev[id] || { id, name: "", price: 0, qty: 0 };

      // Menus M1..M10 : on garde le nom tel quel
      if (/^m\d+$/i.test(id)) {
        return {
          ...prev,
          [id]: {
            ...base,
            ...data,
            id,
            name: String(data.name ?? base.name),
            qty: cur + 1,
            price: Number(data.price ?? base.price ?? 0),
            pieces: data.pieces ?? base.pieces,
          },
        };
      }

      const rawName = cleanSpaces(String(data.name ?? base.name ?? ""));
      const lower = rawName.toLowerCase();
      const isVeggie =
        lower.includes("veggie") || id.toLowerCase().includes("veggie");

      let finalName = "";

      if (isVeggie) {
        const withoutVeggie = cleanSpaces(
          dedupeWords(rawName.replace(/veggie/gi, ""))
        );
        finalName = cleanSpaces(`Veggie ${withoutVeggie}`);
      } else {
        const { idCode, typeWord } = inferTypeById(id, lower);
        const baseName = cleanSpaces(dedupeWords(rawName));
        const parts: string[] = [];
        if (idCode) parts.push(idCode);
        if (typeWord && !new RegExp(typeWord, "i").test(baseName))
          parts.push(typeWord);
        parts.push(baseName);
        finalName = cleanSpaces(parts.join(" "));
      }

      // ---> AJOUT DES PIECES DANS LE NOM <---
      const pieces = data.pieces ?? base.pieces;
      const nameWithPieces =
        pieces && pieces > 0
          ? `${finalName} (${pieces} pcs)`
          : finalName;

      return {
        ...prev,
        [id]: {
          ...base,
          ...data,
          id,
          name: nameWithPieces,
          qty: cur + 1,
          price: Number(data.price ?? base.price ?? 0),
          pieces,
        },
      };
    });
  };

  const dec = (id: string) => {
    setItems((prev) => {
      const cur = prev[id]?.qty || 0;
      const nextQty = cur - 1;
      const next = { ...prev };
      if (nextQty <= 0) delete next[id];
      else next[id] = { ...next[id], qty: nextQty };
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
