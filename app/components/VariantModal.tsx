"use client";
import { useCart } from "../context/cartcontext";
import QuantityControl from "./quantitycontrol";
import { useMemo } from "react";

export default function VariantModal({
  productId,
  productName,
  variants,
  price,
  onClose,
}: {
  productId: string;
  productName: string;
  variants: string[];
  price: number;
  onClose: () => void;
}) {
  const { items, inc, dec } = useCart();

  // vérifie s'il y a au moins une quantité > 0
  const hasSelection = useMemo(() => {
    return variants.some(
      (v) => items[`${productId}-${v.toLowerCase()}`]?.qty > 0
    );
  }, [items, variants, productId]);

  // nom final: une seule fois “Nigiri Veggie Inari”
  const buildName = (variant: string) => {
    // retire tout doublon de mots identiques côte à côte
    const clean = productName
      .replace(/\b(\w+)\s+\1\b/gi, "$1")
      .replace(/\s+/g, " ")
      .trim();
    return `${clean} ${variant}`.trim();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl"
      >
        <h2 className="text-2xl font-bold text-[#B51E1E] mb-6">
          {productName}
        </h2>

        <div className="space-y-4 mb-6">
          {variants.map((v) => {
            const id = `${productId}-${v.toLowerCase()}`;
            const qty = items[id]?.qty || 0;
            return (
              <div
                key={id}
                className="flex justify-between items-center border-b border-gray-200 pb-2"
              >
                <span className="font-medium">{v}</span>
                <QuantityControl
                  value={qty}
                  onInc={() => inc(id, { name: buildName(v), price })}
                  onDec={() => dec(id)}
                />
              </div>
            );
          })}
        </div>

        <button
          disabled={!hasSelection}
          onClick={onClose}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            hasSelection
              ? "bg-[#B51E1E] text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Ajouter à la commande
        </button>
      </div>
    </div>
  );
}
