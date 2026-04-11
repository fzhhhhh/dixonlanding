import { useState } from "react";
import wordmark from "../assets/branding/logo-wordmark.svg";
import "../styles/bloqueado.css";

function Bloqueado() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const PASSWORD = "dixon123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === PASSWORD) {
      localStorage.setItem("auth", "ok");
      window.location.reload();
    } else {
      setError(true);
    }
  };

  return (
    <section className="bloqueado-page">
      <div className="bloqueado-smoke-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bloqueado-smoke-video"
        >
          <source src="/videos/smoke.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="bloqueado-overlay" />

      <div className="bloqueado-content">
        <div className="bloqueado-logo-wrap">
          <img
            src={wordmark}
            alt="Dixon Moto Garage"
            className="bloqueado-logo"
          />
        </div>

        <span className="bloqueado-badge">Acceso privado</span>

        <h1 className="bloqueado-title">Sitio en producción</h1>

        <p className="bloqueado-text">
          El sitio se encuentra en revisión final. Ingresá la clave para acceder
          a la versión completa.
        </p>

        <form onSubmit={handleSubmit} className="bloqueado-form">
          <input
            type="password"
            placeholder="Ingresar contraseña"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            className="bloqueado-input"
          />

          <button type="submit" className="bloqueado-button">
            Ingresar
          </button>
        </form>

        {error && (
          <p className="bloqueado-error">Contraseña incorrecta</p>
        )}
      </div>
    </section>
  );
}

export default Bloqueado;