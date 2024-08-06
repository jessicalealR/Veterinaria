import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="/descarga.png" alt="Servicios" />
            <Card.Body>
              <Card.Title>Servicios</Card.Title>
              <Card.Text>
                Consulta y administra los servicios ofrecidos por nuestra clínica.
              </Card.Text>
              <Button href="/servicios" variant="warning" className="w-100">Gestionar Servicios</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="/cita.jpg" alt="Citas" />
            <Card.Body>
              <Card.Title>Citas</Card.Title>
              <Card.Text>
                Programa y administra las citas para tus mascotas.
              </Card.Text>
              <Button href="/citas" variant="primary" className="w-100">Gestionar Citas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="/h.jpg" alt="Historias Clínicas" />
            <Card.Body>
              <Card.Title>Historias Clínicas</Card.Title>
              <Card.Text>
                Mantén un registro detallado de las historias clínicas de tus mascotas.
              </Card.Text>
              <Button href="/historias-clinicas" variant="secondary" className="w-100">Gestionar Historias Clínicas</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="/dueño.jpg" alt="Propietarios" />
            <Card.Body>
              <Card.Title>Propietarios</Card.Title>
              <Card.Text>
                Información de los propietarios de las mascotas.
              </Card.Text>
              <Button href="/propietarios" variant="success" className="w-100">Gestionar Propietarios</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="/mascotas.jpg" alt="Mascotas" />
            <Card.Body>
              <Card.Title>Mascotas</Card.Title>
              <Card.Text>
                Registro de todas las mascotas en nuestra clínica.
              </Card.Text>
              <Button href="/mascotas" variant="info" className="w-100">Gestionar Mascotas</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
