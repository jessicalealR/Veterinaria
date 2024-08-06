import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const HistoriaClinicaForm = ({ historia, onSave }) => {
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

  useEffect(() => {
    if (historia) {
      setFecha(historia.fecha);
      setDescripcion(historia.descripcion);
      setDiagnostico(historia.diagnostico);
    }
  }, [historia]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ fecha, descripcion, diagnostico });
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
      <Form.Group controlId="formDiagnostico">
        <Form.Label>Diagnóstico</Form.Label>
        <Form.Control
          type="text"
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default HistoriaClinicaForm;
