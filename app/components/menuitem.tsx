"use client";

import { useState } from "react";
import Image from "next/image";
import QuantityControl from "./quantitycontrol";
import VariantModal from "./VariantModal";
import { useCart } from "../context/cartcontext";

type Props = {
  id: string;
  name: string;
  desc?: string;
  price: number;
  img?: string;
  variants?: string[];
  extra?: Record<string, unknown>;
  perPiece?: boolean;
  variantPrices?: Record<string, number>;
  pieces?: number; // optionnel
};

export default function MenuItem({
  id,
  name,
  desc,
  price,
  img,
  variants = [],
  extra,
  perPiece,
  variantPrices,
  pieces,
}: Props) {
  const { items, inc, dec } = useCart();
  const qty = items[id]?.qty || 0;
  const hasVariants = variants.length > 0;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (!hasVariants) {
      inc(id, { name, price, pieces });
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow p-5 text-center flex flex-col cursor-pointer"
      >
        {img && (
          <Image
            src={img}
            alt={name}
            width={600}
            height={400}
            className="rounded-lg mb-4 object-cover"
            onClick={openModal}
          />
        )}

        <h3
          className="text-xl font-semibold"
          onClick={openModal}
        >
          {name}
        </h3>

        {desc && (
          <p
            className="text-gray-600 mt-2"
            onClick={openModal}
          >
            {desc}
          </p>
        )}

        <p className="mt-2 font-bold">{price.toFixed(2)} €</p>

        {/* --- SI PAS DE VARIANTES → CONTROLS DIRECTS --- */}
        {!hasVariants && (
          <div className="mt-auto flex justify-center">
            <QuantityControl
              value={qty}
              onInc={() => inc(id, { name, price, pieces })}
              onDec={() => dec(id)}
            />
          </div>
        )}

        {/* --- SI VARIANTES → BOUTON "+" QUI OUVRE LA MODAL --- */}
        {hasVariants && (
          <div className="mt-auto flex justify-center">
            <button
              aria-label="Ajouter"
              onClick={openModal}
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
          </div>
        )}
      </div>

      {/* --- MODAL DES VARIANTES --- */}
      {showModal && hasVariants && (
        <VariantModal
          productId={id}
          productName={name}
          variants={variants}
          price={price}
          onClose={() => setShowModal(false)}
          extra={extra}
          variantPrices={variantPrices}
          pieces={pieces}
        />
      )}
    </>
  );
}
