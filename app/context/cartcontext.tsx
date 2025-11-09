"use client";
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number; // forcé à number
  qty: number;
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

  const setQty = (id: string, qty: number, data: Partial<CartItem> = {}) => {
    setItems(prev => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[id];
        return next;
      }
      const base = next[id] || { id, name: "", price: 0, qty: 0 };
      next[id] = { ...base, ...data, id, qty, price: Number(data.price ?? base.price ?? 0) };
      return next;
    });
  };

  const inc = (id: string, data: Partial<CartItem> = {}) => {
    setItems(prev => {
      const cur = prev[id]?.qty || 0;
      const base = prev[id] || { id, name: "", price: 0, qty: 0 };
      return {
        ...prev,
        [id]: {
          ...base,
          ...data,
          id,
          qty: cur + 1,
          price: Number(data.price ?? base.price ?? 0),
        },
      };
    });
  };

  const dec = (id: string) => {
    setItems(prev => {
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
    <CartContext.Provider value={{ items, totalCount, totalPrice, setQty, inc, dec, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
