import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <h1>Bienvenido a la Veterinaria</h1>
      <Button href="/citas" variant="primary">Gestionar Citas</Button>
      <Button href="/historias-clinicas" variant="secondary">Gestionar Historias Clínicas</Button>
      <Button href="/propietarios" variant="success">Gestionar Propietarios</Button>
      <Button href="/mascotas" variant="info">Gestionar Mascotas</Button>
      <Button href="/servicios" variant="warning">Gestionar Servicios</Button>
    </Container>
  );
};

export default HomePage;
