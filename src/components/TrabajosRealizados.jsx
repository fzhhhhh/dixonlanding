import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";


const trabajos = [
    {
        id: 1,
        titulo: "Service completo Honda Tornado 250",
        moto: "Honda Tornado 250",
        resumen: "Cambio de aceite, filtros, transmisión y regulación general.",
        fecha: "Marzo 2026",
        imagen:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        destacado: true,
    },
    {
        id: 2,
        titulo: "Reparación eléctrica Yamaha FZ",
        moto: "Yamaha FZ",
        resumen: "Diagnóstico de falla de arranque, batería y sistema de carga.",
        fecha: "Febrero 2026",
        imagen:
            "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80",
        destacado: false,
    },
    {
        id: 3,
        titulo: "Cambio de frenos y transmisión",
        moto: "Rouser NS 200",
        resumen: "Pastillas nuevas, kit de transmisión y ajuste completo.",
        fecha: "Enero 2026",
        imagen:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        destacado: false,
    },
];

function TrabajosRealizados() {
    return (
        <section id="trabajos" className="section-dark py-5">
            <Container>
                <div className="section-header text-center mb-5">
                    <span className="section-tag">Trabajos realizados</span>
                    <h2>Algunos trabajos recientes del taller</h2>
                    <p>
                        Mostramos reparaciones, services y trabajos reales para que veas cómo
                        trabajamos y el tipo de motos que atendemos.
                    </p>
                </div>

                <Row className="g-4">
                    {trabajos.map((trabajo) => (
                        <Col md={6} lg={4} key={trabajo.id}>
                            <Card className="blog-card h-100">
                                <div className="blog-image-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={trabajo.imagen}
                                        alt={trabajo.titulo}
                                        className="blog-image"
                                    />
                                    {trabajo.destacado && (
                                        <Badge className="blog-badge">Destacado</Badge>
                                    )}
                                </div>

                                <Card.Body>
                                    <small className="blog-meta">
                                        {trabajo.fecha} · {trabajo.moto}
                                    </small>
                                    <h4 className="mt-2">{trabajo.titulo}</h4>
                                    <p>{trabajo.resumen}</p>
                                    <Button as={Link} to={`/trabajos/${trabajo.id}`} className="btn-card-action">
                                        Ver trabajo
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default TrabajosRealizados;