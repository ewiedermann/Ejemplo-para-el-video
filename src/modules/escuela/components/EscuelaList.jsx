import React, { useState } from "react";

const EscuelaList = ({ escuelas, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editEscuela, setEditEscuela] = useState({
    nombre: "",
    domicilio: "",
    celular: "",
    cue: "",
    habilitar: "0",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEscuela({ ...editEscuela, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editEscuela);
    setEditIndex(null);
  };

  return (
    <ul>
      {escuela.map((escuela, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="nombre"
                value={editEscuela.nombre}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="domicilio"
                value={editEscuela.domicilio}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="celular"
                value={editEscuela.celular}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="cue"
                value={editEscuela.cue}
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
              {escuela.nombre} {escuela.celular} {escuela.domicilio}{" "}
              {escuela.cue}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditEscuela(escuela);
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

export default EscuelaList;
