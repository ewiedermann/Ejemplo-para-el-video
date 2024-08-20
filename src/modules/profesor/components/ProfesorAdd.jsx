import React, { useState } from "react";
import { app } from "../../../firebase";

const ProfesorAdd = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [documento, setDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [habilitar, setHabilitar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAlumno = {
      nombre,
      apellido,
      domicilio,
      documento,
      celular,
      email,
      habilitar,
    };
    onAdd(nuevoAlumno);
    setNombre("");
    setApellido("");
    setDomicilio("");
    setDocumento("");
    setCelular("");
    setEmail("");
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
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Profesor</button>
    </form>
  );
};

export default ProfesorAdd;
