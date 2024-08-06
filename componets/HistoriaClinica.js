// src/components/HistoriaClinica.js
import React from 'react';

const HistoriaClinica = ({ historia }) => (
  <div>
    <h2>Historia Clínica</h2>
    <p>Mascota: {historia.mascota.nombre}</p>
    <ul>
      {historia.notasMedicas.map((nota, index) => (
        <li key={index}>{nota}</li>
      ))}
    </ul>
  </div>
);

export default HistoriaClinica;
