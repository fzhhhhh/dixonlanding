import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const motos = [
  {
    id: 1,
    titulo: "Yamaha FZ 2019",
    precio: "$4.800.000",
    descripcion: "Muy buen estado, lista para transferir.",
    imagen:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    titulo: "Honda CG Titan 150",
    precio: "$3.200.000",
    descripcion: "Papeles al día, excelente para uso diario.",
    imagen:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    titulo: "Rouser NS 200",
    precio: "$4.100.000",
    descripcion: "Muy cuidada, service recién hecho.",
    imagen:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
  },
];

function DetalleMoto() {
  const { id } = useParams();

  const moto = motos.find((m) => m.id === Number(id));

  if (!moto) {
    return <p style={{ padding: 40 }}>Moto no encontrada</p>;
  }

  const mensaje = encodeURIComponent(
    `Hola, tengo una consulta por la moto: ${moto.titulo} (${moto.precio})`
  );

  return (
    <Container style={{ paddingTop: 120 }}>
      <h1>{moto.titulo}</h1>

      <img
        src={moto.imagen}
        alt={moto.titulo}
        style={{ width: "100%", borderRadius: 12 }}
      />

      <h2 style={{ marginTop: 20 }}>{moto.precio}</h2>

      <p>{moto.descripcion}</p>

      <Button
        href={`https://wa.me/5493471319838?text=${mensaje}`}
        target="_blank"
      >
        Consultar por WhatsApp
      </Button>
    </Container>
  );
}

export default DetalleMoto;