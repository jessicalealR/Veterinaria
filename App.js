// src/App.js
import React from 'react';
import Dueño from './components/Dueño';
import Mascota from './components/Mascota';
import Servicio from './components/Servicio';
import HistoriaClinica from './components/HistoriaClinica';
import Cita from './components/Cita';

function App() {
  const dueñoEjemplo = {
    id: 1,
    nombre: 'Juan Perez',
    direccion: 'Calle 123',
    telefono: '123456789',
    email: 'juan@example.com'
  };

  const mascotaEjemplo = {
    id: 1,
    nombre: 'Firulais',
    especie: 'Perro',
    raza: 'Labrador',
    fechaNacimiento: '2018-01-01',
    dueño: dueñoEjemplo
  };

  const servicioEjemplo = {
    id: 1,
    nombre: 'Vacunación',
    descripcion: 'Vacuna contra la rabia',
    costo: 50.0
  };

  const historiaEjemplo = {
    id: 1,
    mascota: mascotaEjemplo,
    notasMedicas: [
      'Vacunado contra la rabia',
      'Desparasitado en 2020'
    ]
  };

  const citaEjemplo = {
    id: 1,
    mascota: mascotaEjemplo,
    servicio: servicioEjemplo,
    fechaHora: '2024-08-10T10:00:00',
    estado: 'Confirmada'
  };

  return (
    <div className="container">
      <h1>Veterinaria</h1>
      <Dueño dueño={dueñoEjemplo} />
      <Mascota mascota={mascotaEjemplo} />
      <Servicio servicio={servicioEjemplo} />
      <HistoriaClinica historia={historiaEjemplo} />
      <Cita cita={citaEjemplo} />
    </div>
  );
}

export default App;
