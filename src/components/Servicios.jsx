import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTools, FaOilCan, FaBolt, FaCogs, FaStopwatch, FaMotorcycle } from "react-icons/fa";

const servicios = [
  {
    icon: <FaTools />,
    title: "Mecánica general",
    text: "Diagnóstico y reparación de fallas mecánicas para todo tipo de motos."
  },
  {
    icon: <FaOilCan />,
    title: "Service completo",
    text: "Cambio de aceite, filtros, revisión integral y mantenimiento preventivo."
  },
  {
    icon: <FaBolt />,
    title: "Electricidad",
    text: "Batería, luces, arranque, carga y solución de problemas eléctricos."
  },
  {
    icon: <FaCogs />,
    title: "Transmisión y frenos",
    text: "Ajuste, cambio y puesta a punto para mejor seguridad y rendimiento."
  },
  {
    icon: <FaStopwatch />,
    title: "Atención rápida",
    text: "Turnos ágiles y tiempos claros para que vuelvas a rodar cuanto antes."
  },
  {
    icon: <FaMotorcycle />,
    title: "Preparación y puesta a punto",
    text: "Dejamos tu moto lista para uso diario, viajes o trabajo."
  }
];

function Servicios() {
  return (
    <section id="servicios" className="section-dark py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-tag">Servicios</span>
          <h2>Todo lo que tu moto necesita en un solo lugar</h2>
          <p>
            Trabajamos con atención detallada, repuestos de calidad y seguimiento personalizado.
          </p>
        </div>

        <Row className="g-4">
          {servicios.map((servicio, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">{servicio.icon}</div>
                  <h4>{servicio.title}</h4>
                  <p>{servicio.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Servicios;