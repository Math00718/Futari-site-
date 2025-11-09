"use client";

import Image from "next/image";

export default function HomePage() {
  // Numéro de téléphone
  const phoneNumber = "084860482";

  return (
    <main
      className="min-h-screen text-black font-[Noto_Serif_JP]"
      style={{
        backgroundColor: "#f8f4ec",
      }}
    >
      {/* --- Section d'accueil --- */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-[#B51E1E] mb-6">
          BIENVENUE<br />CHEZ FUTARI
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Traiteur japonais
        </p>

        <div className="mb-10">
          <Image
            src="/poissons.jpg" // remplace par ton vrai fichier si différent
            alt="Logo Futari"
            width={260}
            height={260}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
         <a
  href="/menu"
  className="bg-[#B51E1E] text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform duration-100 ease-in-out hover:bg-[#a11b1b] active:scale-90"
>
  Voir le menu
</a>

<a
  href="tel:0485876988"
  className="border-2 border-[#B51E1E] text-[#B51E1E] px-8 py-4 rounded-full text-lg font-semibold transition-transform duration-100 ease-in-out hover:bg-[#B51E1E] hover:text-white active:scale-90"
>
  Commander
</a>


        </div>
      </section>
      <footer className="bg-[#FAF7F2] text-center text-gray-800 py-8 border-t border-[#B51E1E]/20">
  <div className="max-w-xl mx-auto space-y-3">
    <p className="font-medium">
      Rue Notre Dame de Grâces 3<br />
      6900 Marche-en-Famenne
    </p>

    <div className="space-y-1">
      <p className="font-semibold text-[#B51E1E]">Heures d’ouverture</p>
      <p>11:00 – 14:30 &nbsp;&nbsp;•&nbsp;&nbsp; 16:30 – 20:30</p>
      <p>Fermé le mercredi</p>
    </div>

    <p className="text-[#B51E1E] font-semibold uppercase">
      Ouvert les dimanches et jours fériés
    </p>
  </div>
</footer>

    </main>
  );
}
