import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import wordmark from "../assets/branding/logo-wordmark.svg";

function NavbarTaller() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar-taller py-3">
      <Container>
        <Navbar.Brand
          onClick={() => goToSection("inicio")}
          className="brand-taller d-flex align-items-center gap-3"
          style={{ cursor: "pointer" }}
        >
          <img
            src={wordmark}
            alt="Dixon Moto Garage"
            className="brand-wordmark"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link onClick={() => goToSection("servicios")}>
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => goToSection("nosotros")}>
              Nosotros
            </Nav.Link>
            <Nav.Link onClick={() => goToSection("trabajos")}>
              Trabajos
            </Nav.Link>
            <Nav.Link onClick={() => goToSection("motos-venta")}>
              Motos en venta
            </Nav.Link>
            <Nav.Link onClick={() => goToSection("contacto")}>
              Contacto
            </Nav.Link>

            <Button onClick={() => goToSection("contacto")} className="btn-turno">
              Reservá tu turno
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTaller;