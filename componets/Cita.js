// src/components/Cita.js
import React from 'react';

const Cita = ({ cita }) => (
  <div>
    <h2>Cita</h2>
    <p>Mascota: {cita.mascota.nombre}</p>
    <p>Servicio: {cita.servicio.nombre}</p>
    <p>Fecha y Hora: {new Date(cita.fechaHora).toLocaleString()}</p>
    <p>Estado: {cita.estado}</p>
  </div>
);

export default Cita;
