import "./globals.css";
import Navbar from "./Navbar";
import { CartProvider } from "./context/cartcontext";

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
        // fond d'accueil (inchangé)
        body.classList.add("home-background");
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#FAF7F2";
      } else if (
        window.location.pathname === "/menu" ||
        window.location.pathname === "/panier"
      ) {
        // fond doré pour menu et panier (mobile + desktop)
        body.style.backgroundImage = "url('/background-menu-mobile.png')";
        body.style.backgroundSize = "200px auto"; // adaptatif desktop
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundAttachment = "fixed"; // pour qu'il reste visible au scroll
        body.style.backgroundPosition = "center top";
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

      <CartProvider>
        <body
          className="text-[#222] font-[Noto_Serif_JP] antialiased"
          style={{
            backgroundImage: "url('/background-menu.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px auto", // rend bien sur PC
            backgroundColor: "#FAF7F2",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <main className="pt-24 px-4 md:px-10">{children}</main>
          <footer className="bg-[#fff3dc] text-center text-sm py-6 mt-20 text-[#b12c20] border-t border-[#b12c20]/20">
            © {new Date().getFullYear()} Futari — Traiteur Japonais
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}
