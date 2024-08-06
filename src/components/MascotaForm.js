import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const MascotaForm = ({ mascota, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '',
    edad: '',
    raza: '',
    peso: '',
    procedimiento: '',
  });

  useEffect(() => {
    if (mascota) {
      setFormData({
        nombre: mascota.nombre,
        especie: mascota.especie,
        edad: mascota.edad,
        raza: mascota.raza,
        peso: mascota.peso,
        procedimiento: mascota.procedimiento,
      });
    } else {
      setFormData({
        nombre: '',
        especie: '',
        edad: '',
        raza: '',
        peso: '',
        procedimiento: '',
      });
    }
  }, [mascota]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      nombre: '',
      especie: '',
      edad: '',
      raza: '',
      peso: '',
      procedimiento: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formEspecie">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              type="text"
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Group controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formRaza">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              name="raza"
              value={formData.raza}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formPeso">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="number"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formProcedimiento">
            <Form.Label>Procedimiento Realizado</Form.Label>
            <Form.Control
              type="text"
              name="procedimiento"
              value={formData.procedimiento}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="mt-3">
        {mascota ? 'Guardar Cambios' : 'Agregar Mascota'}
      </Button>
    </Form>
  );
};

export default MascotaForm;
