import React, { useState } from 'react';
import CitaForm from '../components/CitaForm'; // Asegúrate de que esta ruta sea correcta
import { Container, ListGroup, Button } from 'react-bootstrap';

const CitaPage = () => {
  const [citas, setCitas] = useState([]);
  const [editingCita, setEditingCita] = useState(null);

  const addCita = (cita) => {
    setCitas([...citas, cita]);
    setEditingCita(null);
  };

  const deleteCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  const editCita = (index) => {
    setEditingCita({ ...citas[index], index });
  };

  const handleSave = (cita) => {
    if (editingCita) {
      const updatedCitas = citas.map((c, i) => (i === editingCita.index ? cita : c));
      setCitas(updatedCitas);
      setEditingCita(null);
    } else {
      addCita(cita);
    }
  };

  return (
    <Container>
      <h1>Gestión de Citas</h1>
      <CitaForm cita={editingCita} onSave={handleSave} />
      <ListGroup>
        {citas.map((cita, index) => (
          <ListGroup.Item key={index}>
            <h5>{cita.fecha}</h5>
            <p>{cita.hora}</p>
            <p>{cita.descripcion}</p>
            <Button variant="warning" onClick={() => editCita(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deleteCita(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CitaPage;
