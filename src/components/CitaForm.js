import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CitaForm = ({ cita, onSave }) => {
  const [fecha, setFecha] = useState(cita ? cita.fecha : '');
  const [hora, setHora] = useState(cita ? cita.hora : '');
  const [descripcion, setDescripcion] = useState(cita ? cita.descripcion : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ fecha, hora, descripcion });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formHora">
        <Form.Label>Hora</Form.Label>
        <Form.Control
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default CitaForm;
