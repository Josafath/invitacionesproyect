"use client"

import styles from './section11.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Section11() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Animate only once
                }
            },
            { threshold: 0.3 } // Trigger when 30% is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.container} ${isVisible ? styles.show : ''}`}
        >
            <h3 style={{ fontFamily: "Dancing Script", fontSize: '25px' }}>Código de Vestimenta</h3>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>Formal</p>

            <Image src="/iconodresscode.png" width={120} height={120} alt="Dress Code" />

            <p style={{ fontSize: '18px', fontStyle: 'italic', marginTop: '15px', color: 'green' }}>
                El color esmeralda queda reservado para la quinceañera.
            </p>
        </div>
    );
}