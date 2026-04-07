import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

function Contacto() {
  // 🔥 estados
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [moto, setMoto] = useState("");
  const [consulta, setConsulta] = useState("");

  // 🔥 mensaje dinámico
  const mensaje = encodeURIComponent(
    `Hola, soy ${nombre}.
Tel: ${telefono}
Moto: ${moto}
Consulta: ${consulta}`
  );

  return (
    <section id="contacto" className="section-light py-5">
      <Container>
        <Row className="g-5">

          {/* INFO */}
          <Col lg={6}>
            <span className="section-tag">Contacto</span>
            <h2 className="mb-4">Pedí tu turno o hacenos una consulta</h2>
            <p className="contact-text">
              Escribinos para consultar disponibilidad, presupuesto o mantenimiento de tu moto.
            </p>

            <div className="contact-info">
              <p><FaWhatsapp /> WhatsApp: +54 9 3471 31-9838</p>
              <p><FaMapMarkerAlt /> Dirección: Mitre 286, Cañada de Gómez</p>
              <p><FaClock /> Lunes a viernes de 8:30 a 18:00</p>
            </div>
          </Col>

          {/* FORM */}
          <Col lg={6}>
            <Form className="contact-form">

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Tu teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Marca y modelo de tu moto"
                  value={moto}
                  onChange={(e) => setMoto(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Contanos qué necesitás"
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                />
              </Form.Group>

              <Button
                className="btn-contacto"
                href={`https://wa.me/5493471319838?text=${mensaje}`}
                target="_blank"
              >
                Enviar consulta por WhatsApp
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;