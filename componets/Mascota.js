// src/components/Mascota.js
import React from 'react';

const Mascota = ({ mascota }) => (
  <div>
    <h2>Mascota</h2>
    <p>Nombre: {mascota.nombre}</p>
    <p>Especie: {mascota.especie}</p>
    <p>Raza: {mascota.raza}</p>
    <p>Fecha de Nacimiento: {mascota.fechaNacimiento}</p>
    <p>Propietario: {mascota.propietario.nombre}</p>
  </div>
);

export default Mascota;
