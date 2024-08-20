import React from "react";
import AlumnoForm from "./AlumnoForm";
import useAlumno from "../hooks/useAlumno";

const AlumnoAdd = () => {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    email,
    setEmail,
    telefono,
    setTelefono,
    handleSubmit,
  } = useAlumno();

  return (
    <div>
      <h1>Alta de Alumno</h1>
      <AlumnoForm
        nombre={nombre}
        setNombre={setNombre}
        apellido={apellido}
        setApellido={setApellido}
        email={email}
        setEmail={setEmail}
        telefono={telefono}
        setTelefono={setTelefono}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AlumnoAdd;
