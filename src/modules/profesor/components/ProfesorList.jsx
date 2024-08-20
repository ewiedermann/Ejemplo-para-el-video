import React, { useState } from "react";

const ProfesorList = ({ profesores, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editProfesor, setEditProfesor] = useState({
    nombre: "",
    horario: "",
    habilitar: "0",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAlumno({ ...editProfesor, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editProfesor);
    setEditIndex(null);
  };

  return (
    <ul>
      {profesor.map((profesor, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editProfesor.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="apellido"
                value={editProfesor.apellido}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="habilitar"
                value={editHabilitar.habilitar}
                onChange={handleEditChange}
                required
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </form>
          ) : (
            <div>
              {profesor.nombre} {profesor.apellido} {profesor.documento}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditAlumno(asignatura);
                }}
              >
                Editar
              </button>
              <button onClick={() => onDelete(index)}>Eliminar</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AsignaturaList;
