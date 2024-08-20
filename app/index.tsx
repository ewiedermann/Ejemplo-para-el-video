import React from "react";
  import { createRoot } from "react-dom/client";
import SignUpForm from "../src/modules/auth/components/SignUpForm"; // Asegúrate de que la ruta es correcta

const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container); // Ahora sabemos que container no es null

root.render(
  <React.StrictMode>
    <SignUpForm />
  </React.StrictMode>
);