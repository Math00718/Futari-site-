"use client";
import { useCart } from "../context/cartcontext";
import QuantityControl from "./quantitycontrol";
import Image from "next/image";

export default function MenuItem({
  id,
  name,
  desc,
  price,
  img,
}: {
  id: string;
  name: string;
  desc?: string;
  price: number;
  img?: string;
}) {
  const { items, inc, dec } = useCart();
  const qty = items[id]?.qty || 0;

  return (
    <div className="bg-white rounded-2xl shadow p-5 relative flex flex-col text-center">
      {img && (
        <Image
          src={img}
          alt={name}
          width={600}
          height={400}
          className="rounded-lg mb-4 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      {desc && <p className="text-gray-600 mb-2 text-sm">{desc}</p>}
      <p className="font-bold text-lg mb-3">{price.toFixed(2)} €</p>

      <QuantityControl
        value={qty}
        onInc={() => inc(id, { name, price })}
        onDec={() => dec(id)}
      />
    </div>
  );
}

