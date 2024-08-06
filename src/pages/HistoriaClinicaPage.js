import React, { useState } from 'react';
import HistoriaClinicaForm from '../components/HistoriaClinicaForm';
import { Container, ListGroup, Button } from 'react-bootstrap';

const HistoriaClinicaPage = () => {
  const [historias, setHistorias] = useState([]);
  const [editingHistoria, setEditingHistoria] = useState(null);

  const addHistoria = (historia) => {
    setHistorias([...historias, historia]);
    setEditingHistoria(null);
  };

  const deleteHistoria = (index) => {
    setHistorias(historias.filter((_, i) => i !== index));
  };

  const editHistoria = (index) => {
    setEditingHistoria({ ...historias[index], index });
  };

  const handleSave = (historia) => {
    if (editingHistoria) {
      const updatedHistorias = historias.map((h, i) => (i === editingHistoria.index ? historia : h));
      setHistorias(updatedHistorias);
      setEditingHistoria(null);
    } else {
      addHistoria(historia);
    }
  };

  return (
    <Container>
      <h1>Gestión de Historias Clínicas</h1>
      <HistoriaClinicaForm historia={editingHistoria} onSave={handleSave} />
      <ListGroup>
        {historias.map((historia, index) => (
          <ListGroup.Item key={index}>
            <h5>{historia.fecha}</h5>
            <p>{historia.descripcion}</p>
            <p>{historia.diagnostico}</p>
            <Button variant="warning" onClick={() => editHistoria(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deleteHistoria(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default HistoriaClinicaPage;
