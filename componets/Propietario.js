// src/components/Propietario.js
import React from 'react';

const Propietario = ({ propietario }) => (
  <div>
    <h2>Propietario</h2>
    <p>Nombre: {propietario.nombre}</p>
    <p>Dirección: {propietario.direccion}</p>
    <p>Teléfono: {propietario.telefono}</p>
    <p>Email: {propietario.email}</p>
  </div>
);

export default Propietario;
