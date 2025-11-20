import Image from "next/image";

export default function HomePage() {
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
            src="/poissons.jpg"
            alt="Logo Futari"
            width={260}
            height={260}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* --- Phrase explicative --- */}
        <p className="text-base md:text-lg text-gray-700 max-w-md mb-10">
          Choisissez vos plats dans le <strong>menu</strong>, ajoutez-les à votre
          <strong> panier</strong>, puis appuyez sur{" "}
          <strong>“Commander par téléphone”</strong> pour appeler l’établissement et passer votre commande.
        </p>

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

      {/* --- FOOTER --- */}
      <footer className="bg-[#FAF7F2] text-center text-gray-800 py-10 border-t border-[#B51E1E]/20">
        <div className="max-w-xl mx-auto space-y-6">


          {/* Heures d'ouverture */}
          <div className="space-y-1">
            <p className="font-semibold text-[#B51E1E]">Heures d’ouverture</p>
            <p>11:00 – 14:30 &nbsp;&nbsp;•&nbsp;&nbsp; 16:30 – 20:30</p>
            <p>Fermé le mercredi</p>
          </div>

          <p className="text-[#B51E1E] font-semibold uppercase tracking-wide">
            Ouvert les dimanches et jours fériés
          </p>

          {/* GOOGLE MAPS — TOUT EN BAS */}
          <a
            href="https://www.google.com/maps/place/Rue+Notre+Dame+de+Gr%C3%A2ces+3,+6900+Marche-en-Famenne"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full pt-4"
          >
            <Image
              src="/maps-futari.png"
              alt="Voir sur Google Maps"
              width={600}
              height={400}
              className="rounded-xl shadow-md mx-auto cursor-pointer hover:opacity-90 transition"
            />
          </a>

        </div>
      </footer>
    </main>
  );
}
