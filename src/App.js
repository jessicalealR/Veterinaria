import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importa tu archivo de estilos

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#appointments">Citas</Nav.Link>
            <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="main-content">
          <div className="hero-section">
            <h1>JR.JR PETS</h1>
            <img src="path-to-your-image.jpg" alt="Veterinaria" className="hero-image" />
          </div>
          <div className="buttons-section">
            <Button variant="primary" href="#services">Nuestros Servicios</Button>
            <Button variant="secondary" href="#appointments">Hacer Cita</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
