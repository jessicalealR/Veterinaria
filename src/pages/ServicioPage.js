import React, { useState } from 'react';
import ServicioForm from '../components/ServicioForm';
import { Container, ListGroup, Button } from 'react-bootstrap';

const ServicioPage = () => {
  const [servicios, setServicios] = useState([]);
  const [editingServicio, setEditingServicio] = useState(null);

  const addServicio = (servicio) => {
    setServicios([...servicios, servicio]);
    setEditingServicio(null);
  };

  const deleteServicio = (index) => {
    setServicios(servicios.filter((_, i) => i !== index));
  };

  const editServicio = (index) => {
    setEditingServicio({ ...servicios[index], index });
  };

  const handleSave = (servicio) => {
    if (editingServicio) {
      const updatedServicios = servicios.map((s, i) => (i === editingServicio.index ? servicio : s));
      setServicios(updatedServicios);
      setEditingServicio(null);
    } else {
      addServicio(servicio);
    }
  };

  return (
    <Container>
      <h1>Gestión de Servicios</h1>
      <ServicioForm servicio={editingServicio} onSave={handleSave} />
      <ListGroup>
        {servicios.map((servicio, index) => (
          <ListGroup.Item key={index}>
            <h5>{servicio.nombre}</h5>
            <p>{servicio.descripcion}</p>
            <p>${servicio.precio}</p>
            <Button variant="warning" onClick={() => editServicio(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deleteServicio(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ServicioPage;
