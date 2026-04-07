import { Container, Row, Col, Card } from "react-bootstrap";

const testimonios = [
  {
    nombre: "Lucas M.",
    texto: "Me explicaron todo claro, cumplieron con el tiempo y la moto quedó excelente."
  },
  {
    nombre: "Mariano R.",
    texto: "Muy buena atención. Llevé la moto por un problema eléctrico y lo resolvieron rápido."
  },
  {
    nombre: "Sofía G.",
    texto: "Se nota que trabajan con cuidado. Volví por el service y quedé muy conforme."
  }
];

function Testimonios() {
  return (
    <section id="testimonios" className="section-dark py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-tag">Opiniones</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>

        <Row className="g-4">
          {testimonios.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <p>"{item.texto}"</p>
                  <h5>{item.nombre}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonios;