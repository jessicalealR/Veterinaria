import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ServicioForm = ({ servicio, onSave, onCancel }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [fechaCita, setFechaCita] = useState(''); // Nuevo estado para la fecha de la cita

  useEffect(() => {
    if (servicio) {
      setNombre(servicio.nombre || '');
      setDescripcion(servicio.descripcion || '');
      setPrecio(servicio.precio || '');
      setFechaCita(servicio.fechaCita || ''); // Inicializa el estado con la fecha de la cita si existe
    }
  }, [servicio]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nombre, descripcion, precio, fechaCita });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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
      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </Form.Group>
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
        Guardar
      </Button>
      <Button variant="secondary" onClick={onCancel} className="ms-2">
        Cancelar
      </Button>
    </Form>
  );
};

export default ServicioForm;
