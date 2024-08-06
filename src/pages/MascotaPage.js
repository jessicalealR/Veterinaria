import React, { useState } from 'react';
import MascotaForm from '../components/MascotaForm';
import { Container, ListGroup, Button } from 'react-bootstrap';

const MascotaPage = () => {
  const [mascotas, setMascotas] = useState([]);
  const [editingMascota, setEditingMascota] = useState(null);

  const addMascota = (mascota) => {
    setMascotas([...mascotas, mascota]);
    setEditingMascota(null);
  };

  const deleteMascota = (index) => {
    setMascotas(mascotas.filter((_, i) => i !== index));
  };

  const editMascota = (index) => {
    setEditingMascota({ ...mascotas[index], index });
  };

  const handleSave = (mascota) => {
    if (editingMascota) {
      const updatedMascotas = mascotas.map((m, i) => (i === editingMascota.index ? mascota : m));
      setMascotas(updatedMascotas);
      setEditingMascota(null);
    } else {
      addMascota(mascota);
    }
  };

  return (
    <Container>
      <h1>Gestión de Mascotas</h1>
      <MascotaForm mascota={editingMascota} onSave={handleSave} />
      <ListGroup>
        {mascotas.map((mascota, index) => (
          <ListGroup.Item key={index}>
            <h5>{mascota.nombre}</h5>
            <p>Especie: {mascota.especie}</p>
            <p>Edad: {mascota.edad} años</p>
            <p>Raza: {mascota.raza}</p>
            <p>Peso: {mascota.peso} kg</p>
            <p>Procedimiento: {mascota.procedimiento}</p>
            <Button variant="warning" onClick={() => editMascota(index)}>Editar</Button>
            <Button variant="danger" onClick={() => deleteMascota(index)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default MascotaPage;
