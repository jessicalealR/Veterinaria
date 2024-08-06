// src/components/Servicio.js
import React from 'react';

const Servicio = ({ servicio }) => (
  <div>
    <h2>Servicio</h2>
    <p>Nombre: {servicio.nombre}</p>
    <p>Descripción: {servicio.descripcion}</p>
    <p>Costo: ${servicio.costo}</p>
  </div>
);

export default Servicio;
