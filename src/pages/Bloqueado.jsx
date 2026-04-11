function Bloqueado() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>
        Sitio en construcción
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: "600px" }}>
        Estamos terminando los últimos detalles. Muy pronto vas a poder ver el
        sitio completo.
      </p>
    </div>
  );
}

export default Bloqueado;