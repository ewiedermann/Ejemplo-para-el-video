import React from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const SignUpForm = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("User Info:", user);
        // Puedes manejar el objeto de usuario como desees
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div>
      <h2>Sign Up with Google</h2>
      <button onClick={handleGoogleSignIn}>Sign Up with Google</button>
    </div>
  );
};
