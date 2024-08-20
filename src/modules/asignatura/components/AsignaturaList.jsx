import React, { useState } from "react";

const AsignaturaList = ({ alumnos, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editAsignatura, setEditAsignatura] = useState({
    nombre: "",
    horario: "",
    habilitar: "0",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAlumno({ ...editAsignatura, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editAsignatura);
    setEditIndex(null);
  };

  return (
    <ul>
      {asignatura.map((asignatura, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editAsignatura.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="horario"
                value={editAsignatura.horario}
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
              {alumno.nombre} {alumno.horario}
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
