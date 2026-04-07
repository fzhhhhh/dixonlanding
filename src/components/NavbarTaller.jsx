import { Container, Nav, Navbar, Button } from "react-bootstrap";
import wordmark from "../assets/branding/logo-wordmark.svg";

function NavbarTaller() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-taller py-3">
      <Container>
        <Navbar.Brand href="#inicio" className="brand-taller d-flex align-items-center gap-3">
          <img
            src={wordmark}
            alt="Dixon Moto Garage"
            className="brand-wordmark"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#trabajos">Trabajos</Nav.Link>
            <Nav.Link href="#motos-venta">Motos en venta</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Button href="#contacto" className="btn-turno">
              Reservá tu turno
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTaller;
