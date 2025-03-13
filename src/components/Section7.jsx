"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./section7.module.css";
import Image from "next/image";

export default function Section7() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            setVisibleSections((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    };

    handleScroll(); // Run once on mount in case elements are already visible
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.timelineCover}>
    <p style={{
        fontFamily: "Dancing Script",
        fontSize: "30px",
        textAlign: "center"
        
        }}>Te compartimos los detalles de la celebración</p>
      <div className={styles.timeline}>
        <ul>
          {steps.map((step, index) => (
            <li key={index} ref={(el) => (sectionRefs.current[index] = el)}>
              <div
                className={`${styles.content} ${
                  visibleSections[index] ? styles.visible : styles.hidden
                }`}
              >
                <Image src={step.title} width={100} height={100} alt="Church Image" />
                <div style={{
                    padding: "0 0 0 30px"
                }}>
                    <p style={{
                        fontFamily: "Dancing Script",
                        fontSize: "30px"
                    }}>{step.name}</p>
                    <p style={{
                        fontFamily: "Dancing Script",
                        fontSize: "20px"
                    }}>{step.description}</p>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "/iconocolordoradoiglesia-300x300.png",
    name: "Misa",
    description:
      "17:30 HRS",
  },
  {
    title: "/EB-Iconos-web-41-300x300.png",
    name:"Presentación",
    description:
      "19:00 HRS",
  },
  {
    title: "/iconocolordoradoplato-300x300.png",
    name: "Celebración",
    description:
      "20:00 HRS",
  },
  {
    title: "/iconocolordoradomusica-300x300.png",
    name: "A bailar",
    description:
      "21:30 HRS",
  },
];
