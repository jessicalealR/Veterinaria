import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ServicioForm from '../components/ServicioForm';  // Asegúrate de importar el formulario

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

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleSave = (newServiceData) => {
    // Aquí puedes manejar el guardado de la cita, por ejemplo, enviando la fecha a un servidor
    console.log('Cita agendada:', selectedService, newServiceData.fechaCita);
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
            <ServicioForm
              servicio={selectedService}
              onSave={handleSave}
              onCancel={handleCloseModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default ServicioPage;
