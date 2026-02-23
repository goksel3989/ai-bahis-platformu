export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0B1C2D",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "48px", color: "#00B3FF"}}>
        Tahminova
      </h1>
      <p style={{fontSize: "20px", marginTop: "20px"}}>
        Yapay Zeka Destekli Profesyonel Maç Analizi
      </p>
      <button style={{
        marginTop: "30px",
        padding: "15px 30px",
        backgroundColor: "#00FF88",
        border: "none",
        borderRadius: "10px",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Günün AI Tahminini Gör
      </button>
    </main>
  )
}
