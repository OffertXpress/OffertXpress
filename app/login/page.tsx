"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7f4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{ background: "white", borderRadius: 18, padding: 40, width: 380, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>Logga in</h1>
        <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 32 }}>Välkommen tillbaka till OffertXpress</p>
        
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
            placeholder="••••••••"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid #e8e4dc", fontSize: 14, outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <button
          style={{ width: "100%", padding: "12px", background: "#1a1a2e", color: "white", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Logga in
        </button>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#9ca3af" }}>
          Inget konto? <a href="/register" style={{ color: "#f97316", fontWeight: 600 }}>Skapa ett gratis</a>
        </p>
      </div>
    </div>
  );
}