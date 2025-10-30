import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Futari – Traiteur Japonais à Liège",
  description:
    "Bienvenue chez Futari, traiteur japonais à Liège. Découvrez l’art du sushi à emporter — préparé avec passion et authenticité.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined") {
  const body = document.querySelector("body");
  if (body) {
    body.classList.remove("home-background");

    if (window.location.pathname === "/") {
      body.classList.add("home-background"); // fond beige accueil
    } else if (window.location.pathname === "/menu") {
      body.style.backgroundImage = "url('/background-menu-mobile.png')"; // fond menu
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "repeat";
      body.style.backgroundAttachment = "scroll";
      body.style.backgroundColor = "#FAF7F2";
    } else {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#ffffff";
    }
  }
}

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>

      <body className="bg-[#FAF7F2] text-[#222] font-[Noto_Serif_JP] antialiased">
        {/* Barre de navigation */}
        <Navbar />

        {/* Contenu principal (avec espace sous la barre fixe) */}
        <main className="pt-24 px-4 md:px-10">{children}</main>

        {/* Pied de page */}
        <footer className="bg-[#fff3dc] text-center text-sm py-6 mt-20 text-[#b12c20] border-t border-[#b12c20]/20">
          © {new Date().getFullYear()} Futari — Traiteur Japonais à Liège
        </footer>
      </body>
    </html>
  );
}
