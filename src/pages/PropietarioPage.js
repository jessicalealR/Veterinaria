import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import PropietarioForm from '../components/PropietarioForm';

const PropietarioPage = () => {
  const [propietarios, setPropietarios] = useState([]);
  const [editingPropietario, setEditingPropietario] = useState(null);

  const addPropietario = (propietario) => {
    setPropietarios([...propietarios, propietario]);
    setEditingPropietario(null);
  };

  const deletePropietario = (index) => {
    setPropietarios(propietarios.filter((_, i) => i !== index));
  };

  const editPropietario = (index) => {
    setEditingPropietario({ ...propietarios[index], index });
  };

  const handleSave = (propietario) => {
    if (editingPropietario) {
      const updatedPropietarios = propietarios.map((p, i) => (i === editingPropietario.index ? propietario : p));
      setPropietarios(updatedPropietarios);
      setEditingPropietario(null);
    } else {
      addPropietario(propietario);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Gestión de Propietarios</h1>
      <PropietarioForm propietario={editingPropietario} onSave={handleSave} />
      <h2 className="my-4">Lista de Propietarios</h2>
      <ListGroup>
        {propietarios.map((propietario, index) => (
          <ListGroup.Item key={index}>
            <h5>{propietario.nombre}</h5>
            <p>Teléfono: {propietario.telefono}</p>
            <p>Email: {propietario.email}</p>
            <Button variant="warning" className="me-2" onClick={() => editPropietario(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deletePropietario(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PropietarioPage;
