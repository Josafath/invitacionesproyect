"use client"

import styles from "./section1.module.css";

export default function Section1() {
    return (
        <div>
        <div className={styles.background}>
        
        </div>
        <div className={styles.text}>
            <h2>
                Mis XV años
            </h2>
            <h1 className={styles.cursive}>
                Katerin
            </h1>
            <h2>
                28 de Junio
            </h2>

            <div className={styles.scroll}>
                <span className={styles.arrow}></span>
                <span className={styles.arrow}></span>
            </div>
        </div>
        
        
        </div>
    )
}
