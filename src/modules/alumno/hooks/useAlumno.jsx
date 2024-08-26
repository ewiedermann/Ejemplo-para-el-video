import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useAlumno = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre,
      apellido,
      email,
      telefono,
      desabilitar,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("alumnos").add(nuevoAlumno);
      alert("Alumno registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
      setDesabilitar("1");
    } catch (error) {
      console.error("Error al registrar al alumno: ", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre,
      apellido,
      email,
      telefono,
      desabilitar,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await firebase.firestore().collection("alumnos").update(nuevoAlumno);
      alert("Alumno registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
      setDesabilitar("1");
    } catch (error) {
      console.error("Error al registrar al alumno: ", error);
    }
  };

  return {
    nombre,
    setNombre,
    apellido,
    setApellido,
    email,
    setEmail,
    telefono,
    setTelefono,
    handleSubmit,
  };
};

export default useAlumno;
