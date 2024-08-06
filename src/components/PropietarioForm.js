import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Importa axios

const PropietarioForm = ({ propietario, onSave }) => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (propietario) {
      setNombre(propietario.nombre || '');
      setDireccion(propietario.direccion || '');
      setTelefono(propietario.telefono || '');
      setEmail(propietario.email || '');
    }
  }, [propietario]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoPropietario = { nombre, direccion, telefono, email };

    try {
      const response = await axios.post('http://localhost:8080/api/propietarios', nuevoPropietario);
      onSave(response.data); // Llama a la función onSave para actualizar el estado en el componente padre
    } catch (error) {
      console.error('Error al guardar el propietario:', error);
    }
  };

  const handleTelefonoChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTelefono(value);
    }
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
      <Form.Group controlId="formDireccion">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formTelefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          value={telefono}
          onChange={handleTelefonoChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default PropietarioForm;
