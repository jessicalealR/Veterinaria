import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const MascotaForm = ({ mascota, onSave }) => {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    if (mascota) {
      setNombre(mascota.nombre);
      setEspecie(mascota.especie);
      setEdad(mascota.edad);
    }
  }, [mascota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nombre, especie, edad });
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
      <Form.Group controlId="formEspecie">
        <Form.Label>Especie</Form.Label>
        <Form.Control
          type="text"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEdad">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default MascotaForm;
