import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const trabajos = [
  {
    id: 1,
    titulo: "Service completo Honda Tornado 250",
    descripcion:
      "Se realizó service completo incluyendo cambio de aceite, filtros, revisión de transmisión y regulación general.",
    imagen:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    titulo: "Reparación eléctrica Yamaha FZ",
    descripcion:
      "Se solucionó falla en sistema eléctrico, cambio de batería y revisión de carga.",
    imagen:
      "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80",
  },
];

function DetalleTrabajo() {
  const { id } = useParams();

  const trabajo = trabajos.find((t) => t.id === Number(id));

  if (!trabajo) {
    return <p style={{ padding: 40 }}>Trabajo no encontrado</p>;
  }

  return (
    <Container style={{ paddingTop: 120 }}>
      <h1>{trabajo.titulo}</h1>

      <img
        src={trabajo.imagen}
        alt={trabajo.titulo}
        style={{ width: "100%", borderRadius: 12 }}
      />

      <p style={{ marginTop: 20 }}>{trabajo.descripcion}</p>
    </Container>
  );
}

export default DetalleTrabajo;