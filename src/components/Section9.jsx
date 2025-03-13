"use client"; // Necesario si usas Next.js App Router
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./section9.module.css";

const images = [
  "/foto1.jpeg",
  "/foto2.jpeg",
  "/foto3.jpeg",
  "/foto4.jpeg",
  "/foto5.jpeg",
];

export default function Section9() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia de imagen cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className={styles.image}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      
    </div>
  );
}
