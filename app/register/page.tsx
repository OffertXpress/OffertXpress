"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setError("");
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error);
      return;
    }
    localStorage.setItem("session", JSON.stringify(data));
    router.push("/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7f4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{ background: "white", borderRadius: 18, padding: 40, width: 380, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>Skapa konto</h1>
        <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 32 }}>Kom igång med OffertXpress gratis</p>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 6 }}>Namn</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Anna Svensson"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #e8e4dc", fontSize: 14, outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 6 }}>E-post</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="din@email.se"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #e8e4dc", fontSize: 14, outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 6 }}>Lösenord</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Minst 6 tecken"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #e8e4dc", fontSize: 14, outline: "none", boxSizing: "border-box" }}
          />
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 16 }}>{error}</p>}

        <button
          onClick={handleRegister}
          disabled={loading}
          style={{ width: "100%", padding: "12px", background: "#f97316", color: "white", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          {loading ? "Skapar konto..." : "Skapa konto gratis"}
        </button>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#9ca3af" }}>
          Har du redan ett konto? <a href="/login" style={{ color: "#f97316", fontWeight: 600 }}>Logga in</a>
        </p>
      </div>
    </div>
  );
}