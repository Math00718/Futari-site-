"use client";
import { useCart } from "../context/cartcontext";
import QuantityControl from "./quantitycontrol";
import Image from "next/image";
import { useState } from "react";
import VariantModal from "./VariantModal";

export default function MenuItem({
  id,
  name,
  desc,
  price,
  img,
  variants,
}: {
  id: string;
  name: string;
  desc?: string;
  price: number;
  img?: string;
  variants?: string[];
}) {
  const { items, inc, dec } = useCart();
  const qty = items[id]?.qty || 0;
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-5 relative flex flex-col items-center text-center">
      {img && (
        <Image
          src={img}
          alt={name}
          width={600}
          height={400}
          className="rounded-lg mb-4 object-cover mx-auto"
        />
      )}

      <h3 className="text-xl font-semibold mb-1">{name}</h3>

      {desc && <p className="text-gray-600 mb-2 text-sm">{desc}</p>}

      <p className="font-bold text-lg mb-3">{price.toFixed(2)} €</p>

      {variants?.length ? (
        <>
          <button
            onClick={() => setOpen(true)}
            aria-label="Choisir la variante"
            className="border border-gray-300 rounded-md w-10 h-10 text-lg font-bold leading-none text-black bg-white hover:bg-gray-100"
          >
            +
          </button>
          {open && (
  <VariantModal
    productId={id}
    productName={name}
    variants={variants}
    price={price}
    onClose={() => setOpen(false)}
  />
)}

        </>
      ) : (
        <QuantityControl
          value={qty}
          onInc={() => inc(id, { name, price })}
          onDec={() => dec(id)}
        />
      )}
    </div>
  );
}
