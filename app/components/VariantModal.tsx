"use client";
import { useCart } from "../context/cartcontext";
import { useState } from "react";

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
  const { items, setQty } = useCart();
  const [selected, setSelected] = useState<Record<string, number>>({});

  // Pour les softs, on garde le préfixe (Eau, Coca, etc.)
  const shouldPrefix =
    productName.includes("Eau") ||
    productName.includes("Coca") ||
    productName.includes("Ice Tea") ||
    productName.includes("Thé vert froid");

  // Pour le menu végétarien, il faut aussi le nom complet
  const isVeggie =
    productName.includes("Veggie") ||
    productName.includes("Végétarien");

  const handleApply = () => {
    Object.entries(selected).forEach(([key, qty]) => {
      if (qty > 0) {
        const variant = key.split("-").slice(2).join("-");
        let finalName = variant;

        if (shouldPrefix) {
          finalName = `${productName} ${variant}`;
        } else if (isVeggie) {
          // Exemple : Nigiri Veggie Inari
          finalName = `${productName} ${variant}`;
        }

        setQty(key, qty, { name: finalName, price });
      } else {
        setQty(key, 0);
      }
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">{productName}</h3>

        <div className="space-y-3 mb-4">
          {variants.map((variant) => {
            const key = `${productId}-${variant}`;
            const qty =
              selected[key] ??
              items[key]?.qty ??
              0;

            return (
              <div
                key={key}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>{variant}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSelected((prev) => ({
                        ...prev,
                        [key]: Math.max(qty - 1, 0),
                      }))
                    }
                    className="px-2 border rounded"
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() =>
                      setSelected((prev) => ({
                        ...prev,
                        [key]: qty + 1,
                      }))
                    }
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleApply}
          className={`w-full py-2 rounded font-semibold transition ${
            Object.values(selected).some((v) => v > 0)
              ? "bg-[#B51E1E] text-white hover:bg-[#a11b1b]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Ajouter à la commande
        </button>
      </div>
    </div>
  );
}
