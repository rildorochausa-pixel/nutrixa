export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      
      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #2563EB, #22C55E)",
        color: "white",
        padding: 20,
        borderRadius: 20,
        marginBottom: 20
      }}>
        <h1>Você está evoluindo</h1>
        <p>🔥 3 dias seguidos</p>
        <p>Progresso: 3/7</p>
      </div>

      {/* BOTÃO PRINCIPAL */}
      <div style={{
        background: "white",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20
      }}>
        <h2>Registrar progresso</h2>
        <button style={{
          marginTop: 10,
          background: "#22C55E",
          color: "white",
          padding: "10px 20px",
          borderRadius: 10,
          border: "none"
        }}>
          Registrar agora
        </button>
      </div>

      {/* MÉTRICAS */}
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, background: "white", padding: 15, borderRadius: 12 }}>
          <p>🔥</p>
          <h2>3</h2>
          <small>dias</small>
        </div>

        <div style={{ flex: 1, background: "white", padding: 15, borderRadius: 12 }}>
          <p>⚖️</p>
          <h2>96kg</h2>
        </div>

        <div style={{ flex: 1, background: "white", padding: 15, borderRadius: 12 }}>
          <p>📈</p>
          <h2>-1.2kg</h2>
        </div>
      </div>

    </div>
  )
}
