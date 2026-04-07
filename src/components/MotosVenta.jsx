import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const motos = [
    {
        id: 1,
        titulo: "Yamaha FZ 2019",
        precio: "$4.800.000",
        info: "32.000 km · Muy buen estado · Service al día",
        imagen:
            "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1200&q=80",
        disponible: true,
    },
    {
        id: 2,
        titulo: "Honda CG Titan 150",
        precio: "$3.200.000",
        info: "28.000 km · Papeles al día · Lista para transferir",
        imagen:
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
        disponible: true,
    },
    {
        id: 3,
        titulo: "Rouser NS 200",
        precio: "$4.100.000",
        info: "26.500 km · Excelente mecánica · Cubiertas nuevas",
        imagen:
            "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
        disponible: false,
    },
];

function MotosVenta() {
    return (
        <section id="motos-venta" className="section-light py-5">
            <Container>
                <div className="section-header text-center mb-5">
                    <span className="section-tag">Motos en venta</span>
                    <h2>Unidades disponibles del taller</h2>
                </div>

                <Row className="g-4">
                    {motos.map((moto) => {
                        const mensaje = encodeURIComponent(
                            `Hola, me interesa la moto: ${moto.titulo} (${moto.precio})`
                        );

                        return (
                            <Col md={6} lg={4} key={moto.id}>
                                <Card className="sale-card h-100">
                                    <div className="blog-image-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={moto.imagen}
                                            alt={moto.titulo}
                                            className="blog-image"
                                        />
                                    </div>

                                    <Card.Body>
                                        <h4>{moto.titulo}</h4>
                                        <h5 className="sale-price">{moto.precio}</h5>
                                        <p>{moto.info}</p>

                                        <div className="d-flex gap-2 flex-wrap">
                                            <Button
                                                as={Link}
                                                to={`/motos/${moto.id}`}
                                                className="btn-card-action"
                                            >
                                                Ver publicación
                                            </Button>

                                            <Button
                                                href={`https://wa.me/5493471319838?text=${mensaje}`}
                                                target="_blank"
                                                className="btn-card-secondary"
                                            >
                                                Consultar
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default MotosVenta;