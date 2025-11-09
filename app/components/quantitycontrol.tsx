"use client";
type Props = { value?: number; onInc: () => void; onDec: () => void };

export default function QuantityControl({ value = 0, onInc, onDec }: Props) {
  if (value <= 0) {
    return (
      <button
        aria-label="Ajouter"
        onClick={onInc}
        style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 6, background: "#fff", cursor: "pointer" }}
      >
        +
      </button>
    );
  }
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <button
        aria-label="Diminuer"
        onClick={onDec}
        style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 6, background: "#fff", cursor: "pointer" }}
      >
        −
      </button>
      <span aria-live="polite" style={{ minWidth: 16, textAlign: "center" }}>{value}</span>
      <button
        aria-label="Augmenter"
        onClick={onInc}
        style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: 6, background: "#fff", cursor: "pointer" }}
      >
        +
      </button>
    </div>
  );
}
