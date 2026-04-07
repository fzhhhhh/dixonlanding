import { Container } from "react-bootstrap";
import wordmark from "../assets/branding/logo-wordmark.svg";
import roundMark from "../assets/branding/logo-round.svg";

function Footer() {
  return (
    <footer className="footer-taller py-5">
      <Container className="text-center">
        <div className="footer-brand-wrap">
          <img src={roundMark} alt="Emblema Dixon Moto Garage" className="footer-seal" />
          <img src={wordmark} alt="Dixon Moto Garage" className="footer-wordmark" />
        </div>

        <p className="footer-copy mb-0">
          © 2026 Dixon Moto Garage · Taller de motocicletas, service y custom garage.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
