import { Container, Row, Col } from "react-bootstrap";

function Nosotros() {
  return (
    <section id="nosotros" className="section-light py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <img
              src="https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80"
              alt="Trabajo de taller"
              className="about-image"
            />
          </Col>

          <Col lg={6}>
            <span className="section-tag">Nosotros</span>
            <h2 className="mb-4">Pasión por las motos, experiencia en cada trabajo</h2>
            <p className="about-text">
              Somos un taller enfocado en brindar soluciones reales, honestas y duraderas.
              Nos importa que entiendas qué se le hace a tu moto, por qué se hace y cuál es la mejor opción para cuidarla.
            </p>
            <p className="about-text">
              Atendemos motos para uso diario, trabajo y recreación, con un enfoque práctico,
              prolijo y responsable en cada servicio.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Nosotros;