"use client";
import Image from "next/image";
import { useCart } from "../context/cartcontext";
import QuantityControl from "../components/quantitycontrol";
import { useState } from "react";
import MenuItem from "../components/menuitem";
import VariantModal from "../components/VariantModal";


// @ts-nocheck

export default function MenuPage() {
  const { items, inc, dec } = useCart();
const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <main
  className="relative min-h-screen text-black font-[Noto_Serif_JP] overflow-hidden"
  style={{
    backgroundColor: "#FAF7F2",
    backgroundImage: "url('/background-menu.png')",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
  }}
>

      {/* --- Section Plateaux --- */}
<section id="plateaux" className="py-16 px-6 relative z-10">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
    Plateaux
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Plateaux existants */}
    {[
      {
        id: "menu-sachi",
        name: "Menu Sachi (22 pcs)",
        desc: "2 Nigiri saumon • 2 Nigiri thon • 2 Nigiri crevette • 8 Maki California saumon-avocat • 8 Spring Roll poulet-mangue",
        price: 19.9,
        img: "/menu/menu-sachi.jpg",
      },
      {
        id: "menu-kyoto",
        name: "Menu Kyoto (37 pcs)",
        desc: "1 Ikura Flower • 2 Nigiri thon • 2 Nigiri saumon • 4 Maki saumon • 4 Maki concombre • 4 Spicy Cali Roll • 4 Crunch Cali Roll • 8 Maki Cali saumon avocat • 8 Spring Roll thonmayo concombre",
        price: 29.0,
        img: "/menu/menu-kyoto.jpg",
      },
      {
        id: "plateau-haluka",
        name: "Plateau Haluka (42 pcs)",
        desc: "2 Nigiri saumon • 2 Nigiri thon • 2 Nigiri crevette • 2 Nigiri omelette • 8 Maki Cali saumon fromage • 8 Spring Roll poulet mangue • 9 Spicy California Roll • 9 Crunch California Roll",
        price: 36.0,
        img: "/menu/plateau-haluka.jpg",
      },
      {
        id: "plateau-nagoya",
        name: "Plateau Nagoya (75 pcs)",
        desc: "1 Ikura Flower • 6 Maki avocat • 6 Maki concombre • 6 Maki fromage • 12 Maki saumon • 12 Maki thon • 8 Maki Cali saumon avocat • 8 Maki Cali thonmayo concombre • 8 Spring Roll saumon avocat • 8 Spring Roll thonmayo concombre",
        price: 44.0,
        img: "/menu/plateau-nagoya.jpg",
      },
      {
        id: "plateau-tokyo",
        name: "Plateau Tokyo (56 pcs)",
        desc: "3 Ikura Flower • 9 Sashimi saumon • 6 Sashimi thon • 6 Nigiri saumon • 4 Nigiri crevette • 4 Nigiri thon • 8 Maki saumon • 8 Maki thon • 8 Maki Cali saumon avocat",
        price: 53.0,
        img: "/menu/plateau-tokyo.jpg",
      },
      {
        id: "plateau-osaka",
        name: "Plateau Osaka (67 pcs)",
        desc: "3 Ikura Flower • 8 Nigiri saumon • 4 Nigiri crevette • 6 Nigiri thon • 6 Nigiri dorade • 8 Maki saumon • 8 Maki concombre • 8 Maki thon • 8 Maki Cali saumon avocat • 8 Spring Roll saumon avocat",
        price: 68.0,
        img: "/menu/plateau-osaka.jpg",
      },
      {
        id: "plateau-fuji",
        name: "Plateau Fuji (70 pcs)",
        desc: "7 Nigiri thon • 7 Nigiri saumon • 8 Maki thon • 8 Maki saumon • 8 Crunch Thon Roll • 8 Crunch Saumon Roll • 16 Maki Cali saumon avocat • 8 Spring Roll saumon avocat",
        price: 66.0,
        img: "/menu/plateau-fuji.jpg",
      },
      {
        id: "menu-crevette",
        name: "Menu Crevette (28 pcs)",
        desc: "4 Nigiri crevette • 8 Maki crevette • 8 Maki California crevette • 8 Spring Roll crevette",
        price: 21.4,
        img: "/menu/menu-crevette.jpg",
      },
      // Menus M1 à M10
      {
        id: "m1",
        name: "M1 (11 pcs)",
        desc: "3 Nigiri saumon • 4 Crunch Cali Roll • 4 Spicy Cali Roll",
        price: 10.8,
        img: "/menu/menu-m1.jpg",
      },
      {
        id: "m2",
        name: "M2 (16 pcs)",
        desc: "4 Nigiri thon • 4 Nigiri saumon • 8 Maki Cali saumon avocat",
        price: 15.9,
        img: "/menu/menu-m2.jpg",
      },
      {
        id: "m3",
        name: "M3 (24 pcs)",
        desc: "8 Spring Roll surimi avocat • 8 Classic Veggie Cali Roll • 8 Spring Roll saumon avocat",
        price: 15.2,
        img: "/menu/menu-m3.jpg",
      },
      {
        id: "m4",
        name: "M4 (20 pcs)",
        desc: "4 Nigiri mix • 8 Maki saumon • 8 Crunch Cali Roll",
        price: 16.8,
        img: "/menu/menu-m4.jpg",
      },
      {
        id: "m5",
        name: "M5 (21 pcs)",
        desc: "2 Nigiri saumon • 3 Sashimi saumon • 4 Maki avocat • 4 Crunch Cali Roll • 4 Spicy Cali Roll • 4 Maki Cali saumon avocat",
        price: 18.9,
        img: "/menu/menu-m5.jpg",
      },
      {
        id: "m6",
        name: "M6 (28 pcs)",
        desc: "4 Nigiri saumon • 8 Maki saumon • 8 Maki Cali saumon avocat • 8 Spring Roll saumon avocat",
        price: 24.9,
        img: "/menu/menu-m6.jpg",
      },
      {
        id: "m7",
        name: "M7 (32 pcs)",
        desc: "8 Maki Cali thon avocat • 8 Maki Cali poulet avocat • 8 Maki Cali saumon avocat • 8 Maki Cali thonmayo concombre",
        price: 22.8,
        img: "/menu/menu-m7.jpg",
      },
      {
        id: "m8",
        name: "M8 (32 pcs)",
        desc: "4 Nigiri thon • 4 Nigiri saumon • 8 Maki surimi • 8 Maki Cali saumon avocat • 8 Spring Roll thonmayo concombre",
        price: 25.9,
        img: "/menu/menu-m8.jpg",
      },
      {
        id: "m9",
        name: "M9 (33 pcs)",
        desc: "8 Saumon Roll’n Fromage • 8 Spring Roll saumon avocat • 8 Maki Cali saumon avocat • 9 Crunch Saumon Roll",
        price: 28.5,
        img: "/menu/menu-m9.jpg",
      },
      {
        id: "m10",
        name: "M10 (40 pcs)",
        desc: "4 Crunch Poulet Roll • 4 Spicy Poulet Roll • 8 Maki saumon • 8 Maki avocat • 8 Maki concombre • 8 Spring Roll saumon avocat",
        price: 25.8,
        img: "/menu/menu-m10.jpg",
      },
    ].map(({ id, name, desc, price, img }) => (
      <div
        key={id}
        className="bg-white rounded-2xl shadow p-5 text-center flex flex-col w-full max-w-[320px] mx-auto md:w-80"
      >
        <Image
          src={String(img)}
          alt={String(name)}
          width={600}
          height={400}
          className="rounded-lg mb-4 object-cover"
        />
<h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
        <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>

        {/* Bouton aligné en bas */}
        <div className="mt-auto flex justify-center">
          <QuantityControl
            value={items[String(id)]?.qty || 0}
            onInc={() => inc(String(id), { name: String(name), price: Number(price) })}
            onDec={() => dec(String(id))}
          />
        </div>
      </div>
    ))}

  </div>
</section>



     {/* --- Section Sashimi --- */}
<section id="sashimi" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-4 text-center">
    Sashimi
  </h2>

  <p className="text-center text-black-700 text-lg font-bold mb-10">
    Servis par 7 pièces
  </p>

  <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
    {[
      ["D1", "Sashimi Saumon (7 tranches)", 8.6, "/menu/sashimi-saumon.jpg"],
      ["D2", "Sashimi Thon (7 tranches)", 8.9, "/menu/sashimi-thon.jpg"],
    ].map(([id, name, price, img]) => (
      <div
        key={id}
        className="bg-white rounded-2xl shadow p-6 w-80 text-center flex flex-col justify-between"
      >
        {/* Image, titre, prix */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={String(img)}
            alt={String(name)}
            width={400}
            height={300}
            className="rounded-xl mb-4 object-cover"
          />

          <h3 className="text-xl font-semibold mb-1">{`${id} – ${name}`}</h3>

          <p className="text-black font-semibold">
            {Number(price).toFixed(2)} €
          </p>
        </div>

        {/* Boutons + / - alignés */}
        <div className="mt-auto flex justify-center">
          <QuantityControl
            value={items[String(id)]?.qty || 0}
            onInc={() =>
              inc(String(id), { name: String(name), price: Number(price) })
            }
            onDec={() => dec(String(id))}
          />
        </div>
      </div>
    ))}
  </div>
</section>



      {/* --- Section Chirashi --- */}
<section id="chirashi" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Chirashi</h2>
  <p className="text-center font-bold text-black-600 mb-8">Servis dans un bol</p>

  <div className="flex justify-center mb-10">
    <Image
      src="/menu/chirashi-bol.jpg"
      alt="Illustration Chirashi"
      width={400}
      height={300}
      className="rounded-2xl shadow-lg object-cover"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      ["I1", "Tranches de Saumon Avocat", "Riz vinaigré garni de saumon et avocat", 15.0],
      ["I2", "Tranches de Thon Avocat", "Riz vinaigré garni de thon et avocat", 15.0],
      ["I3", "Tranches de Saumon Thon Avocat", "Mélange saumon-thon sur riz vinaigré", 15.0],
    ].map(([id, name, desc, price]) => (
      <div
        key={id}
        className="bg-white rounded-2xl shadow p-5 text-center flex flex-col"
      >
        <h3 className="text-xl font-semibold">{`${id} – ${name}`}</h3>

        <p className="text-gray-600 mt-2 flex-grow">{desc}</p>

        <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>

        <div className="mt-auto">
          <QuantityControl
            value={items[String(id)]?.qty || 0}
            onInc={() =>
              inc(String(id), { name: String(name), price: Number(price) })
            }
            onDec={() => dec(String(id))}
          />
        </div>
      </div>
    ))}
  </div>
</section>



      {/* --- Section Maki California --- */}
<section id="maki-california" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Maki California</h2>
  <p className="text-center font-bold text-black-600 mb-8">Servis par 8 pièces</p>

  <div className="flex justify-center gap-6 mb-10 flex-wrap">
    <Image src="/menu/maki-california-1.jpg" alt="Assortiment 1" width={400} height={300} className="rounded-2xl object-cover shadow" />
    <Image src="/menu/maki-california-2.jpg" alt="Assortiment 2" width={400} height={300} className="rounded-2xl object-cover shadow" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      ["E10", "Saumon Fromage"],
      ["E11", "Saumon Avocat"],
      ["E12", "Thon Mayo Concombre"],
      ["E13", "Thon Avocat"],
      ["E14", "Crevette Avocat"],
      ["E15", "Ebi Frit Avocat"],
      ["E16", "Poulet Avocat"],
      ["E17", "Surimi Avocat"],
      ["E18", "Poulet Ananas"],
      ["E21", "Saumon Mangue"],
      ["E22", "Thon Mayo Mangue"],
      ["E23", "Thon Mangue"],
      ["E24", "Crevette Mangue"],
      ["E25", "Ebi Frit Mangue"],
      ["E26", "Poulet Mangue"],
      ["E27", "Surimi Mangue"],
    ].map(([id, name]) => (
      <div key={id} className="bg-white rounded-2xl shadow p-5 text-center">
        <h3 className="text-xl font-semibold">{`${id} – ${name}`}</h3>
        <p className="mt-2 font-bold">5,90 €</p>
        <QuantityControl
          value={items[id]?.qty || 0}
          onInc={() => inc(id, { name, price: 5.9, pieces: 8 })}
          onDec={() => dec(id)}
        />
      </div>
    ))}
  </div>
</section>

   {/* --- Section California Roll --- */}
<section id="california-roll" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
    California Roll
  </h2>
  <p className="text-center font-bold text-black-600 mb-8">Servis par 9 pièces</p>

  <div className="flex justify-center mb-10">
    <Image
      src="/menu/california-roll.jpg"
      alt="Assortiment California Roll"
      width={500}
      height={350}
      className="rounded-2xl object-cover shadow-lg"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* F1 — inchangé */}
    <div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
      <h3 className="text-xl font-semibold">F1 – Classic California Roll (surimi, concombre, avocat)</h3>
      <p className="mt-2 font-bold">6,90 €</p>
      <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items["F1"]?.qty ?? 0}
          onInc={() => inc("F1", { name: "Classic California Roll (surimi, concombre, avocat)", price: 6.9, pieces: 9 })}
          onDec={() => dec("F1")}
        />
      </div>
    </div>

    {/* F2 — inchangé */}
    <div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
      <h3 className="text-xl font-semibold">F2 – Spicy California Roll (surimi, concombre, avocat)</h3>
      <p className="mt-2 font-bold">7,60 €</p>
      <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items["F2"]?.qty ?? 0}
          onInc={() => inc("F2", { name: "Spicy California Roll", price: 7.6, pieces: 9 })}
          onDec={() => dec("F2")}
        />
      </div>
    </div>

    {/* F3 — inchangé */}
    <div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
      <h3 className="text-xl font-semibold">F3 – Crunch California Roll (surimi, concombre, avocat)</h3>
      <p className="mt-2 font-bold">7,60 €</p>
      <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items["F3"]?.qty ?? 0}
          onInc={() => inc("F3", { name: "Crunch California Roll", price: 7.6, pieces: 9 })}
          onDec={() => dec("F3")}
        />
      </div>
    </div>

    {/* F4 — inchangé */}
    <div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
      <h3 className="text-xl font-semibold">F4 – Fromage California Roll (surimi, concombre, avocat)</h3>
      <p className="mt-2 font-bold">7,60 €</p>
      <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items["F4"]?.qty ?? 0}
          onInc={() => inc("F4", { name: "Fromage California Roll", price: 7.6, pieces: 9 })}
          onDec={() => dec("F4")}
        />
      </div>
    </div>

    {/* F5 — inchangé */}
    <div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
      <h3 className="text-xl font-semibold">F5 – Wagame California Roll (surimi, concombre, avocat)</h3>
      <p className="mt-2 font-bold">7,60 €</p>
      <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items["F5"]?.qty ?? 0}
          onInc={() => inc("F5", { name: "Wagame California Roll", price: 7.6, pieces: 9 })}
          onDec={() => dec("F5")}
        />
      </div>
    </div>

    {/* F8 → F13 — popup avec MenuItem */}
    
    <MenuItem
      id="F8"
      name="F8 California Roll au Saumon"
      price={8.9}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

    <MenuItem
      id="F9"
      name="F9 California Roll au Thon"
      price={8.9}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

    <MenuItem
      id="F10"
      name="F10 California Roll aux Crevettes"
      price={9.3}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

    <MenuItem
      id="F11"
      name="F11 California Roll au Poulet"
      price={8.8}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

    <MenuItem
      id="F12"
      name="F12 California Roll au Thon Mayo"
      price={8.8}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

    <MenuItem
      id="F13"
      name="F13 California Roll aux Ebi Frits"
      price={9.5}
      variants={["Classic", "Crunch", "Spicy", "Wakame", "Fromage"]}
      pieces={9}
    />

  </div>
</section>



      {/* --- Section Spring Roll --- */}
      <section id="spring-roll" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          Spring Roll
        </h2>
        <p className="text-center font-bold text-black-600 mb-8">Servis par 8 pièces</p>

        <div className="flex justify-center mb-10">
          <Image
            src="/menu/spring-roll.jpg"
            alt="Assortiment Spring Roll"
            width={500}
            height={350}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "H1 Saumon Avocat",
            "H2 Thon Avocat",
            "H3 Ebi Frit",
            "H4 Crevette Avocat",
            "H5 Surimi Avocat",
            "H6 Thon Mayo Concombre",
            "H8 Poulet Avocat",
            "H9 Saumon Mangue",
            "H10 Thon Mangue",
            "H11 Ebi Frit Mangue",
            "H12 Crevette Mangue",
            "H13 Poulet Mangue",
            "H14 Surimi Mangue",
            "H15 Poulet Ananas",
            "H16 Saumon Fromage",
          ].map((item) => {
            const [id, ...rest] = item.split(" ");
            const name = rest.join(" ");
            return (
              <div key={id} className="bg-white rounded-2xl shadow p-5 text-center flex flex-col items-center">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-2 font-bold">6,60 €</p>
                <QuantityControl
                  value={items[id]?.qty || 0}
                  onInc={() => inc(id, { name, price: 6.6, pieces: 8 })}
                  onDec={() => dec(id)}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Section Special Roll --- */}
      <section id="special-roll" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-8 text-center">
          Special Rolls
        </h2>

        <div className="flex justify-center gap-10 flex-wrap max-w-5xl mx-auto">
          {[
            {
              id: "g1",
              name: "G1 Rainbow Mix (8 pcs)",
              desc: "(Saumon, thon, avocat, concombre)",
              price: 13.5,
              img: "/menu/special-roll-g1.jpg",
            },
            {
              id: "g3",
              name: "G3 Saumon Roll’n Fromage (9 pcs)",
              desc: "(Saumon, fromage, riz)",
              price: 13.8,
              img: "/menu/special-roll-g3.jpg",
            },
          ].map((r) => (
            <div key={r.id} className="bg-white rounded-2xl shadow p-5 w-80 text-center">
              <Image
                src={r.img}
                alt={r.name}
                width={400}
                height={300}
                className="rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="text-gray-600 mt-2">{r.desc}</p>
              <p className="mt-2 font-bold">{r.price.toFixed(2)} €</p>
              <QuantityControl
                value={items[r.id]?.qty || 0}
                onInc={() => inc(r.id, { name: r.name, price: r.price })}
                onDec={() => dec(r.id)}
              />
            </div>
          ))}
        </div>
      </section>
      {/* --- Section Combinaisons --- */}
      <section id="combinaison" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          Combinaisons
        </h2>

        <div className="flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
          {[
            {
              id: "combo-a",
              name: "Combo A (9 pcs)",
              desc: "3 Spicy Cali Surimi • 3 Crunch Cali Surimi • 3 Fromage Cali Surimi",
              price: 8.5,
              img: "/menu/combo-a.jpg",
            },
            {
              id: "combo-b",
              name: "Combo B (12 pcs)",
              desc: "8 Maki Surimi • 2 Crunch Cali • 2 Nigiri Saumon",
              price: 8.9,
              img: "/menu/combo-b.jpg",
            },
            {
              id: "combo-c",
              name: "Combo C (9 pcs)",
              desc: "3 Maki Cali Saumon Avocat • 2 Nigiri Saumon • 2 Nigiri Thon • 2 Nigiri Crevette",
              price: 11.4,
              img: "/menu/combo-c.jpg",
            },
            {
              id: "combo-d",
              name: "Combo D (9 pcs)",
              desc: "3 Spring Cali Saumon • 3 Crunch Cali Saumon • 3 Fromage Cali Saumon",
              price: 9.5,
              img: "/menu/combo-d.jpg",
            },
          ].map((c) => (
            <div key={c.id} className="bg-white rounded-2xl shadow p-5 w-80 text-center">
               <Image
                src={c.img}
                alt={c.name}
                width={400}
                height={300}
                className="rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{c.name}</h3>
              <p className="text-gray-600 mt-2">{c.desc}</p>
              <p className="mt-2 font-bold">{c.price.toFixed(2)} €</p>
              <QuantityControl
                value={items[c.id]?.qty || 0}
                onInc={() => inc(c.id, { name: c.name, price: c.price })}
                onDec={() => dec(c.id)}
              />
            </div>
          ))}
        </div>
      </section>
     {/* --- Section Menu Végétarien --- */}
<section id="menu-vegetarien" className="py-16 px-6">
  <h2 className="text-2xl font-bold text-[#B51E1E] mb-10 text-center">
    Menu Végétarien
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* 1) Nigiri Veggie — POPUP */}
    <MenuItem
      id="veggie-nigiri"
      name="Nigiri Veggie"
      desc="Inari / Avocat / Omelette / Mangue"
      price={1.7}
      img="/menu/veggie-nigiri.jpg"
      variants={["Inari", "Avocat", "Omelette", "Mangue"]}
      perPiece={true}
    />

    {/* 2) Temaki Veggie — POPUP */}
    <MenuItem
      id="veggie-temaki"
      name="Temaki Veggie"
      desc="Concombre-Avocat-Fromage / Concombre-Mangue-Fromage"
      price={5.3}
      img="/menu/veggie-temaki.jpg"
      variants={["Concombre-Avocat-Fromage", "Concombre-Mangue-Fromage"]}
      perPiece={true}
    />

    {/* 3) Maki Veggie (8 pcs) — POPUP */}
    <MenuItem
      id="veggie-maki"
      name="Maki Veggie (8 pcs)"
      desc="Concombre / Avocat / Mangue / Fromage / Omelette"
      price={4.6}
      img="/menu/veggie-maki.jpg"
      variants={["Concombre", "Avocat", "Mangue", "Fromage", "Omelette"]}
      perPiece={true}
    />

    {/* 4) Maki California Veggie (9 pcs) — POPUP */}
   <MenuItem
  id="veggie-roll"
  name="California Veggie Roll (9 pcs)"
  desc="Classic 6,90 € – Crunch/Spicy/Fromage/Wakame 7,50 €"
  price={6.9}
  img="/menu/veggie-roll.jpg"
  variants={["Classic", "Crunch", "Spicy", "Fromage", "Wakame"]}
  variantPrices={{
    Classic: 6.9,
    Crunch: 7.5,
    Spicy: 7.5,
    Fromage: 7.5,
    Wakame: 7.5,
  }}
/>


    {/* 5) Futomaki Veggie (4 pcs) — POPUP */}
    <MenuItem
      id="veggie-futomaki"
      name="Futomaki Veggie (4 pcs)"
      desc="Concombre • Avocat • Mangue • Radis Jaune • Carotte • Omelette"
      price={7.5}
      img="/menu/veggie-futomaki.jpg"
      variants={["Concombre", "Avocat", "Mangue", "Radis Jaune", "Carotte", "Omelette"]}
    />

    {/* 6) Spring Roll Veggie (8 pcs) — POPUP */}
    <MenuItem
      id="veggie-spring"
      name="Spring Roll Veggie (8 pcs)"
      desc="Concombre-Fromage / Avocat-Fromage / Concombre-Carotte-Avocat"
      price={6.1}
      img="/menu/veggie-spring.jpg"
      variants={["Concombre-Fromage", "Avocat-Fromage", "Concombre-Carotte-Avocat"]}
    />

    {/* Les 3 autres SANS POPUP — ALIGNÉS EN BAS */}
<div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
  <Image
    src="/menu/veggie-vert.jpg"
    alt="Menu Vert (11 pcs)"
    width={400}
    height={300}
    className="rounded-xl mb-4 object-cover"
  />
  <h3 className="text-xl font-semibold">Menu Vert (11 pcs)</h3>
  <p className="text-gray-600 mt-2">3 Nigiri Avocat • 8 Maki Concombre</p>
  <p className="mt-2 font-bold">7,80 €</p>

  <div className="mt-auto flex justify-center">
    <QuantityControl
      value={items["menu-vert"]?.qty || 0}
      onInc={() => inc("menu-vert", { name: "Menu Vert (11 pcs)", price: 7.8 })}
      onDec={() => dec("menu-vert")}
    />
  </div>
</div>


<div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
  <Image
    src="/menu/veggie-crunch.jpg"
    alt="Menu Crunch (19 pcs)"
    width={400}
    height={300}
    className="rounded-xl mb-4 object-cover"
  />
  <h3 className="text-xl font-semibold">Menu Crunch (19 pcs)</h3>
  <p className="text-gray-600 mt-2">
    2 Nigiri Omelette • 8 Maki Cali Avocat Fromage • 9 Crunch Cali Roll Veggie
  </p>
  <p className="mt-2 font-bold">14,50 €</p>

  <div className="mt-auto flex justify-center">
    <QuantityControl
      value={items["menu-crunch"]?.qty || 0}
      onInc={() => inc("menu-crunch", { name: "Menu Crunch (19 pcs)", price: 14.5 })}
      onDec={() => dec("menu-crunch")}
    />
  </div>
</div>


<div className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
  <Image
    src="/menu/veggie-mix.jpg"
    alt="Menu Veggie Mix (28 pcs)"
    width={400}
    height={300}
    className="rounded-xl mb-4 object-cover"
  />
  <h3 className="text-xl font-semibold">Menu Veggie Mix (28 pcs)</h3>
  <p className="text-gray-600 mt-2">
    4 Nigiri (Avocat / Mangue / Radis Jaune / Omelette) • 
    4 Crunch Cali Veggie • 4 Spicy Cali Veggie • 
    8 Spring Roll Mangue Fromage • 8 Maki Cali Concombre-Avocat
  </p>
  <p className="mt-2 font-bold">22,50 €</p>

  <div className="mt-auto flex justify-center">
    <QuantityControl
      value={items["menu-veggie-mix"]?.qty || 0}
      onInc={() => inc("menu-veggie-mix", { name: "Menu Veggie Mix (28 pcs)", price: 22.5 })}
      onDec={() => dec("menu-veggie-mix")}
    />
  </div>
</div>


  </div>
</section>


{/* --- Section Nigiri --- */} 
<section id="nigiri" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
  Nigiri
  <span className="block text-black text-lg font-bold">
    servi à la pièce
  </span>
</h2>


        <div className="flex justify-center mb-10">
          <Image
            src="/menu/nigiri.jpg"
            alt="Assortiment Nigiri"
            width={900}
            height={300}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["A1", "Saumon", 2.1],
            ["A2", "Thon", 2.1],
            ["A3", "Saumon Avocat", 2.1],
            ["A4", "Crevette", 2.1],
            ["A6", "Dorade", 2.1],
            ["A7", "Anguille", 2.1],
            ["A10", "Surimi", 2.1],
          ].map(([id, name, price]) => (
            <div key={id} className="bg-white rounded-2xl shadow p-5 text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold">{`${id} – ${name}`}</h3>
           <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>

              <QuantityControl
  value={items[id]?.qty || 0}
  onInc={() =>
    inc(String(id), {
      name: String(name),
      price: Number(price),
    })
  }
  onDec={() => dec(String(id))}
/>

            </div>
          ))}
        </div>
      {/* --- sous-section Nigiri Mi-Cuit --- */}
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-2xl font-bold text-[#B51E1E] mb-4">
      Nigiri Mi-Cuit 
      <span className="block text-black text-lg font-bold"> 
        servi à la pièce
        </span>
    </h3>

    <div className="flex justify-center gap-10 flex-wrap">
      {[
        ["Nigiri Thon Mi-Cuit", 2.7],
        ["Nigiri Saumon Mi-Cuit", 2.7],
      ].map(([name, price]) => {
        const id = String(name).toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={id} className="bg-white rounded-2xl shadow p-5 w-72 text-center">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>
            <QuantityControl
              value={items[id]?.qty || 0}
              onInc={() => inc(String(id), { name: String(name), price: Number(price) })}
              onDec={() => dec(String(id))}
            />
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* --- Section Gunkan --- */}
<section id="gunkan" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Gunkan 
    <span className="block text-black text-lg font-bold">
       servi à la pièce
       </span>
  </h2>

  <div className="flex justify-center mb-10">
    <Image
      src="/menu/gunkan.jpg"
      alt="Assortiment Gunkan"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
    {[
      ["B1", "Ikura Nori", 3.1],
      ["B2", "Ikura Flower", 3.1],
      ["B3", "Masago Nori", 3.1],
      ["B4", "Masago Flower", 3.1],
    ].map(([id, name, price]) => {
      const sid = String(id);
      const pname = String(name);
      const pprice = Number(price);

      return (
        <div key={sid} className="bg-white rounded-2xl shadow p-6 w-77 text-center">
          <h3 className="text-xl font-semibold">{`${sid} – ${pname}`}</h3>
          <p className="mt-2 font-bold">{pprice.toFixed(2)} € / pièce</p>

          <QuantityControl
            value={items[sid]?.qty || 0}
            onInc={() => inc(sid, { name: pname, price: pprice })}
            onDec={() => dec(sid)}
          />
        </div>
      );
    })}
  </div>
</section>


      {/* --- Section Temaki --- */}
      <section id="temaki" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
          Temaki 
          <span className="block text-black text-lg font-bold">
            servi à la pièce</span>
        </h2>

        <div className="flex justify-center mb-10">
          <Image
            src="/menu/temaki.jpg"
            alt="Assortiment Temaki"
            width={900}
            height={300}
            className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {[
            ["C1", "Saumon Avocat Concombre", 5.6],
            ["C2", "Thon Avocat Concombre", 5.7],
            ["C3", "Crevette Avocat Concombre", 5.9],
            ["C4", "Ebi Frit Avocat Concombre", 5.9],
            ["C5", "Surimi Avocat Concombre", 5.5],
            ["C6", "Thon Mayo Avocat Concombre", 5.5],
            ["C8", "Poulet Avocat Concombre", 5.6],
          ].map(([id, name, price]) => (
            <div key={id} className="bg-white rounded-2xl shadow p-5 w-80 text-center flex flex-col">
              <h3 className="text-xl font-semibold">{`${id} – ${name}`}</h3>
             <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>
               <div className="mt-auto flex justify-center">
               <QuantityControl
  value={items[String(id)]?.qty || 0}
  onInc={() => inc(String(id), { name: String(name), price: Number(price) })}
  onDec={() => dec(String(id))}
/>
</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section Maki --- */}
      <section id="maki" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">Maki</h2>
        <p className="text-center font-bold text-black-600 mb-8">Servis par 8 pièces</p>

        <div className="flex justify-center mb-10">
          <Image
            src="/menu/maki.jpg"
            alt="Assortiment Maki"
            width={900}
            height={300}
            className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {[
            ["E3", "Surimi", 5.5],
            ["E6", "Saumon", 5.5],
            ["E7", "Thon", 5.5],
            ["E8", "Poulet", 5.5],
            ["E9", "Crevette", 5.5],
          ].map(([id, name, price]) => (
            <div key={id} className="bg-white rounded-2xl shadow p-5 w-72 text-center">
              <h3 className="text-xl font-semibold">{`${id} – ${name}`}</h3>
              <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>
              <QuantityControl
  value={items[String(id)]?.qty || 0}
  onInc={() => inc(String(id), { name: String(name), price: Number(price), pieces: 8 })}
  onDec={() => dec(String(id))}
/>

            </div>
          ))}
        </div>
      </section>

      {/* --- Section Futo Maki --- */}
      <section id="futo maki" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-4 text-center">Futo Maki</h2>
        <p className="text-center font-bold text-black-600 mb-8">Servis par 4 pièces</p>

        <div className="flex justify-center mb-10">
          <Image
            src="/menu/futomaki.jpg"
            alt="Assortiment Futo Maki"
            width={900}
            height={300}
            className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {[
            ["Futo Saumon", 8.3],
            ["Futo Thon", 8.3],
            ["Futo Poulet", 8.3],
            ["Futo Crevette", 8.3],
          ].map(([name, price], i) => {
            const id = `futo-${i + 1}`;
            return (
              <div key={id} className="bg-white rounded-2xl shadow p-5 w-80 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>
                <QuantityControl
  value={items[String(id)]?.qty || 0}
  onInc={() => inc(String(id), { name: String(name), price: Number(price), pieces: 4 })}
  onDec={() => dec(String(id))}
/>

              </div>
            );
          })}
        </div>
      </section>

{/* --- Section Suppléments --- */}
<section id="supplements" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Suppléments
  </h2>

  <div className="flex justify-center mb-10">
    <Image
      src="/menu/supplements.jpg"
      alt="Suppléments"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
    {[
      // name, price, vegan, variants?, pieces?
      ["Riz blanc chaud", 2.5, true],
      ["Riz vinaigré", 3.5, true],
      ["Edamame", 4.5, true],
      ["Wakame", 4.5, true],
      ["Soupe miso", 3.5, true],
      ["Loempia végétarien (6 pcs)", 4.4, true],
      ["Triangles au curry frits (6 pcs)", 4.4, true],

      // ⚠️ NEMS — texte complet + variantes + pieces = 4
      ["Nems (porc/poulet – 4 pcs)", 4.6, false, ["Porc", "Poulet"], 4],

      ["Raviolis japonais poulet (7 pcs)", 6.8, false],
      ["Raviolis scampis (7 pcs)", 7.2, false],
      ["Raviolis japonais végétarien (7 pcs)", 7.2, true],
      ["Dim sum cantonais (7 pcs)", 7.9, false],
    ].map(([name, price, vegan, variants, pieces], i) => {
      const id = `supp-${i + 1}`;
      const hasVariants = Array.isArray(variants);
      const [showModal, setShowModal] = useState(false);

      return (
        <div
          key={id}
          className="bg-white rounded-2xl shadow p-5 w-80 text-center flex flex-col"
        >
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

          <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>

          <div className="mt-auto flex justify-center">
            {/* --- BTN POUR VARIANTES --- */}
            {hasVariants ? (
              <button
                aria-label="Ajouter"
                onClick={() => setShowModal(true)}
                style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 6, background: "#fff", cursor: "pointer" }}
              >
                +
              </button>
            ) : (
              <QuantityControl
                value={items[id]?.qty || 0}
                onInc={() =>
                  inc(id, { name: String(name), price: Number(price) })
                }
                onDec={() => dec(id)}
              />
            )}
          </div>

          {/* --- MODAL DES VARIANTES --- */}
          {showModal && hasVariants && (
            <VariantModal
              productId={id}
              productName={String(name)}
              variants={variants}
              price={Number(price)}
              onClose={() => setShowModal(false)}
              pieces={4}  // 👈 ici, toujours un nombre !
            />
          )}
        </div>
      );
    })}
  </div>
</section>




{/* --- Section Poké Bowl --- */}
<section id="poke-bowl" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-2 text-center">
    Poké Bowl
  </h2>
  <p className="text-center font-bold text-black-700 mb-10 text-lg font-medium">
    Créez votre propre Poké Bowl
  </p>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    <MenuItem
  id="poke-small"
  name="Poké Petit"
  desc="1 base • 2 protéines • 2 salades • 1 sauce • 1 topping"
  price={8.5}
  img="/menu/poke-small.jpg"
  variants={["Créer votre bol"]}
  extra={{ 
        type: "poke",
        limits: {
          base: 1,
          protein: 2,
          salad: 2,
          sauce: 1,
          topping: 1
        }
      }}
    />

    <MenuItem
  id="poke-large"
  name="Poké Grand"
  desc="1 base • 3 protéines • 4 salades • 1 sauce • 1 topping"
  price={16.0}
  img="/menu/poke-large.jpg"
  variants={["Créer votre bol"]} 
  extra={{
    type: "poke",
    size: "large",      
    limits: {
      base: 1,
      protein: 3,
      salad: 4,
      sauce: 1,
      topping: 1,
    },
  }}
/>


  </div>
</section>



      {/* --- Section Softs --- */}
<section id="soft" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Softs</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        id: "soft-1",
        name: "Eau",
        price: 2,
        variants: ["Plate", "Pétillante"],
      },
      {
        id: "soft-2",
        name: "Coca-Cola",
        price: 2,
        variants: ["Classique", "Zero"],
      },
      {
        id: "soft-3",
        name: "Fanta / Sprite",
        price: 2,
        variants: ["Fanta", "Sprite"],
      },
      {
        id: "soft-4",
        name: "Ice Tea",
        price: 2,
        variants: ["Pétillant", "Pêche", "Green"],
      },
      {
        id: "soft-5",
        name: "Thé vert froid",
        price: 2.9,
        variants: ["Jasmin", "Melon", "Litchi"],
      },
      {
        id: "soft-6",
        name: "Ramune japonais (200 ml)",
        price: 3.2,
        variants: [],
      },
    ].map(({ id, name, price, variants }) => (
      <div
        key={id}
        className="bg-white rounded-2xl shadow p-5 text-center flex flex-col items-center"
      >
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>

        {variants.length > 0 ? (
          <>
            <button
              onClick={() => setOpenModal(id)}
              aria-label="Choisir une variante"
              className="border border-gray-300 rounded-md w-10 h-10 text-lg font-bold leading-none text-black bg-white hover:bg-gray-100 mt-2"
            >
              +
            </button>

            {openModal === id && (
              <VariantModal
                productId={id}
                productName={name}
                variants={variants}
                price={price}
                onClose={() => setOpenModal(null)}
              />
            )}
          </>
        ) : (
          <div className="mt-2 flex justify-center">
            <QuantityControl
              value={items[id]?.qty || 0}
              onInc={() => inc(id, { name, price })}
              onDec={() => dec(id)}
            />
          </div>
        )}
      </div>
    ))}
  </div>
</section>


      {/* --- Section Bières --- */}
      <section id="bieres" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">Bières</h2>

        <div className="flex justify-center mb-10">
          <Image
            src="/menu/bieres.jpg"
            alt="Bières japonaises et chinoises"
            width={900}
            height={300}
            className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            ["Bière Japonaise Asahi", 3.2],
            ["Bière Japonaise Iki (Bio)", 3.8],
            ["Bière Chinoise Tsing Tao", 3.2],
          ].map(([name, price], i) => {
            const id = `beer-${i + 1}`;
            return (
              <div key={id} className="bg-white rounded-2xl shadow p-5 w-96 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-2 font-bold">{Number(price).toFixed(2)} €</p>
                <QuantityControl
  value={items[String(id)]?.qty || 0}
  onInc={() => inc(String(id), { name: String(name ?? ""), price: Number(price ?? 0) })}
  onDec={() => dec(String(id))}
/>

              </div>
            );
          })}
        </div>
      </section>

      <section id="desserts" className="py-16 px-6 mb-16">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Desserts</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        id: "dessert-1",
        name: "Mochi (2 boules)",
        desc: "Parfums : mangue, coco ou thé vert",
        price: 4.5,
        img: "/menu/mochi.jpg",
      },
      {
        id: "dessert-2",
        name: "Maki Nutella Banana (8 pcs)",
        desc: "",
        price: 4.9,
        img: "/menu/maki-nutella-banana.jpg",
      },
    ].map((d) => (
      <div key={d.id} className="bg-white rounded-2xl shadow p-5 text-center flex flex-col">
        <Image
          src={d.img}
          alt={d.name}
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold">{d.name}</h3>
        {d.desc && <p className="text-gray-600 mt-2">{d.desc}</p>}
        <p className="mt-2 font-bold">{Number(d.price).toFixed(2)} €</p>
        <div className="mt-auto flex justify-center">
        <QuantityControl
          value={items[d.id]?.qty || 0}
          onInc={() => inc(d.id, { name: String(d.name), price: Number(d.price) })}
          onDec={() => dec(d.id)}
        />
      </div>
       </div>
           ))}
  </div>
</section>
</main>
);
}
