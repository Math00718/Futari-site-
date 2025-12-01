"use client";

import Image from "next/image";
import { useState } from "react";
import QuantityControl from "./quantitycontrol";
import { useCart } from "../context/cartcontext";
import VariantModal from "./VariantModal";

export default function SupplItem({
  id,
  name,
  price,
  vegan,
  variants,
  pieces,
}: {
  id: string;
  name: string;
  price: number;
  vegan: boolean;
  variants: string[] | null;
  pieces?: number;
}) {
  const { items, inc, dec } = useCart();
  const [showModal, setShowModal] = useState(false);

  const hasVariants = Array.isArray(variants);

  return (
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center flex flex-col">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        {name}
        {vegan && (
          <Image
            src="/icons/veggie.png"
            alt="Vegan"
            width={18}
            height={18}
            className="inline-block"
          />
        )}
      </h3>

      <p className="mt-2 font-bold">{price.toFixed(2)} €</p>

      <div className="mt-auto flex justify-center">
        {hasVariants ? (
          <button
            aria-label="Ajouter"
            onClick={() => setShowModal(true)}
            style={{
              padding: "6px 10px",
              border: "1px solid #ddd",
              borderRadius: 6,
              background: "#fff",
              cursor: "pointer",
            }}
          >
            +
          </button>
        ) : (
          <QuantityControl
            value={items[id]?.qty || 0}
            onInc={() => inc(id, { name, price })}
            onDec={() => dec(id)}
          />
        )}
      </div>

      {showModal && hasVariants && (
        <VariantModal
          productId={id}
          productName={name}
          variants={variants}
          price={price}
          pieces={pieces}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
