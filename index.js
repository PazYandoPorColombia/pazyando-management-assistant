
export default function Home() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", height: "100vh", backgroundColor: "#fff8f0"
    }}>
      <img src="/logo.png" alt="PazYando Logo" style={{ maxWidth: "200px", marginBottom: "20px" }} />
      <h1 style={{ color: "#222", textAlign: "center" }}>
        Retribuir, organizar, transformar.
      </h1>
      <p style={{ textAlign: "center", maxWidth: "500px", color: "#444" }}>
        Esta es la herramienta para quienes hacen del turismo un camino hacia la paz.
        <br /><br />
        Bienvenido al sistema de gestión integral de PazYando Por Colombia.
      </p>
    </div>
  );
}
