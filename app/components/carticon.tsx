"use client";
import Link from "next/link";
import { useCart } from "../context/cartcontext";

export default function CartIcon() {
  const { totalCount } = useCart();

  return (
    <Link
      href="/panier"
      aria-label="Ouvrir le panier"
      style={{ position: "relative", display: "inline-block" }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 6h15l-1.5 9h-12L6 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="9" cy="20" r="1.5" fill="currentColor" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
      </svg>

      {totalCount > 0 && (
        <span
          aria-label={`${totalCount} articles dans le panier`}
          style={{
            position: "absolute",
            top: -4,
            right: -6,
            background: "#e11",
            color: "#fff",
            borderRadius: 999,
            fontSize: 11,
            lineHeight: "16px",
            minWidth: 16,
            height: 16,
            textAlign: "center",
            padding: "0 4px",
          }}
        >
          {totalCount}
        </span>
      )}
    </Link>
  );
}
