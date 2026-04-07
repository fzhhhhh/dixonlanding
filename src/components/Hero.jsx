import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import heroImg from "../assets/dixonfondotransp.webp";

function Hero() {
  return (
    <section id="inicio" className="hero-section">

      {/* 🔥 HUMO REAL DE FONDO */}
      <div className="hero-smoke-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-smoke-video"
        >
          <source src="/videos/smoke.mp4" type="video/mp4" />
        </video>
      </div>

      <Container>
        <Row className="align-items-center py-5 g-5 hero-row">

          {/* TEXTO */}
          <Col lg={6} className="hero-content">

            <Badge className="hero-badge mb-3">
              Taller especializado en motocicletas
            </Badge>

            <h1 className="hero-title">
              Tu moto en manos de un taller que trabaja en serio
            </h1>

            <p className="hero-text">
              Mecánica, diagnóstico y service con atención personalizada para
              motos de calle, trabajo y alta cilindrada.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 hero-actions">
              <Button className="btn-hero-primary" href="#contacto">
                Pedir presupuesto
              </Button>

              <Button className="btn-hero-secondary" href="#servicios">
                Ver servicios
              </Button>
            </div>

            <div className="hero-proof mt-4">
              Turnos, revisiones y reparaciones con trato directo y enfoque
              profesional.
            </div>

            <div className="hero-stats mt-5">
              <div className="hero-stat-item">
                <h3>+500</h3>
                <p>Motos atendidas</p>
              </div>

              <div className="hero-stat-item">
                <h3>+8</h3>
                <p>Años de experiencia</p>
              </div>

              <div className="hero-stat-item">
                <h3>100%</h3>
                <p>Atención personalizada</p>
              </div>
            </div>

          </Col>

          {/* LOGO INTEGRADO */}
          <Col lg={6} className="mt-4 mt-lg-0 hero-image-col">
            <div className="hero-image-shell">
              <img
                src={heroImg}
                alt="Dixon Moto Garage"
                className="hero-image"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;