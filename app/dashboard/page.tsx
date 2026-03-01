"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const s = localStorage.getItem("session");
    if (!s) { router.push("/login"); return; }
    setSession(JSON.parse(s));
  }, []);

  if (!session) return null;

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a1a2e" }}>
          Välkommen, {session.name}! 👋
        </h1>
        <p style={{ color: "#9ca3af", marginTop: 8 }}>Du är inloggad som {session.email}</p>
        <button
          onClick={() => { localStorage.removeItem("session"); router.push("/login"); }}
          style={{ marginTop: 24, padding: "10px 20px", background: "#1a1a2e", color: "white", border: "none", borderRadius: 10, cursor: "pointer", fontSize: 14 }}>
          Logga ut
        </button>
      </div>
    </div>
  );
}