import React, { useState } from 'react';
import PropietarioForm from '../components/PropietarioForm';
import { Container, ListGroup, Button } from 'react-bootstrap';

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
      <h1>Gestión de Propietarios</h1>
      <PropietarioForm propietario={editingPropietario} onSave={handleSave} />
      <ListGroup>
        {propietarios.map((propietario, index) => (
          <ListGroup.Item key={index}>
            <h5>{propietario.nombre}</h5>
            <p>{propietario.telefono}</p>
            <p>{propietario.email}</p>
            <Button variant="warning" onClick={() => editPropietario(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deletePropietario(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PropietarioPage;
