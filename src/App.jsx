import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import NavbarTaller from "./components/NavbarTaller";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import TrabajosRealizados from "./components/TrabajosRealizados";
import MotosVenta from "./components/MotosVenta";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import DetalleTrabajo from "./pages/DetalleTrabajo";
import DetalleMoto from "./pages/DetalleMoto";

function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Nosotros />
      <TrabajosRealizados />
      <MotosVenta />
      <Testimonios />
      <Contacto />
    </>
  );
}

function App() {
  const mensaje = encodeURIComponent(
    "Hola, quiero hacer una consulta sobre una moto o un servicio del taller."
  );

  return (
    <BrowserRouter>
      <NavbarTaller />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajos/:id" element={<DetalleTrabajo />} />
        <Route path="/motos/:id" element={<DetalleMoto />} />
      </Routes>

      <a
        href={`https://wa.me/5493471319838?text=${mensaje}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;