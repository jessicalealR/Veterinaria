import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

// Lista de servicios (esto normalmente vendría de una API)
const servicios = [
  { id: 1, nombre: 'Vacunación', precio: 50 },
  { id: 2, nombre: 'Desparasitacion', precio: 30 },
  { id: 3, nombre: 'Esterilización', precio: 80 },
  // Agrega más servicios según sea necesario
];

const ServicioPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [fechaCita, setFechaCita] = useState('');

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setFechaCita('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el guardado de la cita, por ejemplo, enviando la fecha a un servidor
    console.log('Cita agendada:', selectedService, fechaCita);
    handleCloseModal();
  };

  return (
    <Container className="my-4">
      <Row>
        {servicios.map((service) => (
          <Col md={4} className="mb-4" key={service.id}>
            <Button
              variant="info"
              className="w-100 text-center"
              onClick={() => handleSelectService(service)}
            >
              <h5>{service.nombre}</h5>
              <p>Precio: ${service.precio}</p>
            </Button>
          </Col>
        ))}
      </Row>

      {selectedService && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Agendar Cita para {selectedService.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSave}>
              <Form.Group controlId="formFechaCita">
                <Form.Label>Fecha de Cita</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaCita}
                  onChange={(e) => setFechaCita(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Agendar Cita
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default ServicioPage;
