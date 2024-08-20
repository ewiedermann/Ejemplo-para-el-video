import React, { useState } from "react";

const AsignaturaAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [habilitar, setHabilitar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = { nombre, horario, habilitar };
    onAdd(nuevoAlumno);
    setNombre("");
    setHorario("");
    setHabilitar("true");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Horario:</label>
        <input
          type="text"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Asignatura</button>
    </form>
  );
};

export default AsignaturaAdd;
