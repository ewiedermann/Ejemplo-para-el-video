import React from "react";
import { createRoot } from "react-dom/client";
import SignUpForm from "./auth/components/SignUpForm"; // Asegúrate de que la ruta es correcta

const container = document.getElementById("root");
const root = createRoot(container); // crea la raíz del React

root.render(
  <React.StrictMode>
    <SignUpForm />
  </React.StrictMode>
);
