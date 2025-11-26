"use client";
import { useCart } from "../context/cartcontext";
import { useState } from "react";

/* TYPES */

type PokeCategory = "base" | "protein" | "salad" | "sauce" | "topping";

type ExtraData = {
  isPoke?: boolean;
  type?: string;
  size?: "small" | "large";
  limits?: {
    base: number;
    protein: number;
    salad: number;
    sauce: number;
    topping: number;
  };
};



type SelectedVariants = Record<string, number>;

type PokeSelection = Record<PokeCategory, string[]>;

/* CONFIG */

const pokeOptions: Record<PokeCategory, string[]> = {
  base: ["Riz vinaigré"],
  protein: [
    "Saumon",
    "Thon",
    "Crevette",
    "Poulet",
    "Surimi",
    "Inari (Tofu)",
    "Omelette",
    "Thon Mayo",
    "Tofu",
  ],
  salad: [
    "Concombre",
    "Wakame",
    "Radis Jaune",
    "Avocat",
    "Carotte",
    "Edamame",
    "Mangue",
    "Oignon",
    "Maïs",
  ],
  sauce: [
    "Soja Salée",
    "Soja Sucrée",
    "Mayo",
    "Teriyaki",
    "Spicy Mayo",
    "Aigre Douce",
  ],
  topping: [
    "Sésame",
    "Wasabi",
    "Shichimi (7 épices)",
    "Algues Sèches",
    "Oignons Frits",
    "Gingembre",
  ],
};

const pokeLimits = {
  small: { base: 1, protein: 2, salad: 2, sauce: 1, topping: 1 },
  large: { base: 1, protein: 3, salad: 4, sauce: 1, topping: 1 },
};

/* COMPONENT */

export default function VariantModal({
  productId,
  productName,
  variants,
  price,
  onClose,
  extra,
  variantPrices,
  pieces, 
}: {
  productId: string;
  productName: string;
  variants: string[];
  price: number;
  onClose: () => void;
  extra?: ExtraData;
  variantPrices?: Record<string, number>;
  pieces?: number; 
}) {
  const { items, setQty } = useCart();

  const isPoke = !!(extra?.isPoke || extra?.type === "poke");
  const pokeSize: "small" | "large" =
    extra?.size === "large" ? "large" : "small";

  const [selected, setSelected] = useState<SelectedVariants>({});
  const [pokeSelected, setPokeSelected] = useState<PokeSelection>({
    base: [],
    protein: [],
    salad: [],
    sauce: [],
    topping: [],
  });
  // Préselection automatique de la base si Poké
if (isPoke && pokeSelected.base.length === 0) {
  setPokeSelected((prev) => ({
    ...prev,
    base: ["Riz vinaigré"],
  }));
}
  /* --- Toggle POKÉ (inchangé) --- */
  const togglePoke = (cat: PokeCategory, item: string) => {
    const limit = pokeLimits[pokeSize][cat];
    const already = pokeSelected[cat];

    if (already.includes(item)) {
      setPokeSelected((prev) => ({
        ...prev,
        [cat]: prev[cat].filter((v) => v !== item),
      }));
      return;
    }

    if (already.length >= limit) return;

    setPokeSelected((prev) => ({
      ...prev,
      [cat]: [...prev[cat], item],
    }));
  };

  /* --- APPLY --- */
  const handleApply = () => {
    /* --- MODE POKÉ (100% restauré) --- */
    if (isPoke) {
      const hasBase = pokeSelected.base.length >= 1;
      const hasSalad = pokeSelected.salad.length >= 1;

      if (!hasBase || !hasSalad) {
        onClose();
        return;
      }

      const finalName =
        "Poké " + (pokeSize === "small" ? "Petit" : "Grand");

      const uniqueId =
        productId + "-" + Math.random().toString(36).substring(2, 9);

      setQty(uniqueId, 1, {
        name: finalName,
        price,
        details: pokeSelected,
      });

      onClose();
      return;
    }

    /* --- MODE NORMAL (California Veggie Roll) --- */
    Object.entries(selected).forEach(([key, qty]) => {
      if (qty > 0) {
        let variant = "";
        const prefix = productId + "-";

        if (key.startsWith(prefix)) {
          variant = key.slice(prefix.length);
        } else {
          const parts = key.split("-");
          variant = parts.slice(1).join("-");
        }

        const finalPrice = variantPrices?.[variant] ?? price;

        setQty(key, qty, {
          name: `${productName} ${variant}`,
          price: finalPrice,
          pieces: pieces,
        });
      } else {
        setQty(key, 0);
      }
    });

    onClose();
  };

  /* --- RENDER --- */
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-[90%] max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">
          {productName}
        </h3>

        {/* --- UI POKÉ (100% restauré) --- */}
        {isPoke && (
          <div className="space-y-6">
            {(Object.entries(pokeOptions) as [
              PokeCategory,
              string[]
            ][]).map(([cat, list]) => (
              <div key={cat} className="mb-4">
                <h4 className="font-bold text-lg mb-2 capitalize">
                  {cat} (max {pokeLimits[pokeSize][cat]})
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  {list.map((item) => {
                    const active = pokeSelected[cat].includes(item);
                    const limitReached =
                      pokeSelected[cat].length >= pokeLimits[pokeSize][cat];

                    return (
                      <button
                        key={item}
                        onClick={() => togglePoke(cat, item)}
                        className={`border rounded p-2 text-sm ${
                          active
                            ? "bg-[#B51E1E] text-white"
                            : limitReached
                            ? "opacity-40 cursor-not-allowed"
                            : "bg-white"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- UI NORMAL (California Veggie Roll) --- */}
        {!isPoke && (
          <div className="space-y-3 mb-4">
            {variants.map((variant) => {
              const key = `${productId}-${variant}`;
              const qty = selected[key] ?? items[key]?.qty ?? 0;
              const vPrice = variantPrices?.[variant] ?? price;

              return (
                <div
                  key={key}
                  className="flex justify-between items-center border-b pb-1"
                >
                  <div className="flex items-center gap-2">
  <span>{variant}</span>

  {/* Affiche le prix UNIQUEMENT si variantPrices est fourni */}
  {variantPrices && (
    <span className="text-xs text-gray-500">
      {(variantPrices[variant] ?? price).toFixed(2)} €
    </span>
  )}
</div>

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
        )}

        <button
          onClick={handleApply}
          className="w-full py-3 rounded font-semibold bg-[#B51E1E] text-white mt-4"
        >
          Ajouter à la commande
        </button>
      </div>
    </div>
  );
}
