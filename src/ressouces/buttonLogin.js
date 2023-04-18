import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      // Récupérer l'image de profil de l'utilisateur
      const user = result.user;
      console.log(user)
      console.log(user.displayName)
      console.log(user.email)
      setDisplayName(user.displayName);
      setEmail(user.email);
      setPhotoURL(user.photoURL);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <div>
      <p>{displayName}</p>
      <p>{email}</p>
      {photoURL && <img src={photoURL} alt="User profile" />}
      {displayName && <p>{displayName}</p>}
      {photoURL && <img src={photoURL} alt="User profile" />}
      <button onClick={handleSignIn} disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
}
