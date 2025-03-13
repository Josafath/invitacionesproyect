"use client"
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase"; // Asegúrate de que la ruta sea correcta
import styles from "./section8.module.css";

export default function Section8() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Por favor, escribe tu nombre.");

    setLoading(true);
    try {
      await addDoc(collection(db, "confirmations"), { name });
      setMessage("¡Gracias por confirmar tu asistencia! 💚");
      setName("");
    } catch (error) {
      console.error("Error al guardar:", error);
      setMessage("Hubo un error, intenta nuevamente.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Confirmar Asistencia</h2>
        <label htmlFor="name" className={styles.label}>Tu Nombre (y Apellido):</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Escribe tu nombre aquí..."
          autoComplete="off"
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Enviando..." : "Confirmar"}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

