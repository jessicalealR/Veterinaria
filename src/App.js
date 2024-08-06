import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import HomePage from './pages/HomePage';
import CitaPage from './pages/CitaPage';
import ServicioPage from './pages/ServicioPage';
import PropietarioPage from './pages/PropietarioPage';
import MascotaPage from './pages/MascotaPage';
import HistoriaClinicaPage from './pages/HistoriaClinicaPage';

const App = () => {
  return (
    <Router>
      <Container fluid>
      
        <Row>
          <Col md={2} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/citas">Citas</Nav.Link>
              <Nav.Link as={Link} to="/propietarios">Propietarios</Nav.Link>
              <Nav.Link as={Link} to="/mascotas">Mascotas</Nav.Link>
              <Nav.Link as={Link} to="/historias-clinicas">Historias Clínicas</Nav.Link>
            </Nav>
          </Col>
          <Col md={10} className="main-content">
            <div className="hero-section">
              <h1>Bienvenido a JR.JR PETS</h1>
              <p>La mejor atención para tus mascotas.</p>
              <img src="/logo.png" alt="Logo" className="hero-image" />
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicioPage />} />
              <Route path="/citas" element={<CitaPage />} />
              <Route path="/propietarios" element={<PropietarioPage />} />
              <Route path="/mascotas" element={<MascotaPage />} />
              <Route path="/historias-clinicas" element={<HistoriaClinicaPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
