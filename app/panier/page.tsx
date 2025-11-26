"use client";
import Link from "next/link";
import { useCart } from "../context/cartcontext";
import QuantityControl from "../components/quantitycontrol";

export default function PanierPage() {
  const { items, totalPrice, inc, dec, clear } = useCart();
  const list = Object.values(items);

  // --- Composant Ticket ---
  const Ticket = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: 420,
        padding: "40px 20px",
        borderRadius: 12,
        boxShadow:
          "0 0 0 1px #e6e6e6 inset, 0 6px 14px rgba(0,0,0,0.1)",
        fontFamily: "monospace",
        overflow: "hidden",
        margin: "auto", // centre le ticket verticalement si contenu court
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 700,
          color: "#B51E1E",
          marginBottom: 12,
        }}
      >
        Futari
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        Commande
      </p>
      {children}
    </div>
  );

  // --- Si panier vide ---
  if (list.length === 0) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 60,
          paddingBottom: 60,
          background: "transparent",
        }}
      >
        <Ticket>
          <p
            style={{
              textAlign: "center",
              color: "#777",
              fontSize: 15,
              marginBottom: 24,
            }}
          >
            Vous n’avez encore rien ajouté à votre commande.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/menu"
              style={{
                display: "inline-block",
                padding: "12px 20px",
                border: "1px solid #222",
                borderRadius: 8,
                textDecoration: "none",
                color: "#111",
                fontWeight: 600,
              }}
            >
              Voir le menu
            </Link>
          </div>
        </Ticket>
      </main>
    );
  }

  // --- Si panier contient des éléments ---
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 60,
        paddingBottom: 60,
        background: "transparent",
      }}
    >
      <Ticket>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {list.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px dashed #ccc",
              }}
            >
              <div style={{ maxWidth: "60%" }}>
                {/* suppression de l'affichage de l'id */}
                <div style={{ fontWeight: 600, fontSize: 14, textTransform: "capitalize" }}>
  {item.name}
</div>

                {item.details && (
  <div style={{ color: "#444", fontSize: 12, marginTop: 4 }}>
    {Object.values(item.details)
  .filter(arr => Array.isArray(arr) && arr.length > 0)
  .map(arr => arr.join(", "))
  .join(" • ")}
  </div>
)}
                {typeof item.price === "number" && (
                  <div style={{ color: "#666", fontSize: 12 }}>
                    {item.price.toFixed(2)} € / unité
                  </div>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <QuantityControl
                  value={item.qty}
                  onInc={() => inc(item.id)}
                  onDec={() => dec(item.id)}
                />
                <div
                  style={{
                    minWidth: 70,
                    textAlign: "right",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {typeof item.price === "number"
                    ? (item.price * item.qty).toFixed(2) + " €"
                    : ""}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div
          style={{
            borderTop: "2px solid #B51E1E",
            marginTop: 24,
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          <span>Total</span>
          <span>{totalPrice.toFixed(2)} €</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <a
            href="tel:0485876988"
            style={{
              flex: 1,
              padding: "12px 16px",
              background: "#111",
              color: "#fff",
              borderRadius: 8,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Commander par téléphone
          </a>
          <button
            onClick={clear}
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "1px solid #aaa",
              borderRadius: 8,
              background: "#fff",
            }}
          >
            Vider le panier
          </button>
        </div>
      </Ticket>
    </main>
  );
}
