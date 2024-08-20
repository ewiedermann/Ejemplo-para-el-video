import React, { useState } from "react";

const EscuelaAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [celular, setCelular] = useState("");
  const [cue, setCue] = useState("");
  const [habilitar, setHabilitar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = { nombre, domicilio, celular, cue, habilitar };
    onAdd(nuevoAlumno);
    setNombre("");
    setDomicilio("");
    setCelular("");
    setCue("");
    setHabilitar("True");
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
        <label>Domicilio:</label>
        <input
          type="text"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Celular:</label>
        <input
          type="text"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cue:</label>
        <input
          type="text"
          value={cue}
          onChange={(e) => setCue(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Escuela</button>
    </form>
  );
};

export default EscuelaAdd;
