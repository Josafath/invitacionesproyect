import styles from './section6.module.css'
import Image from 'next/image'

export default function Section6() {
    return (
        <div className={styles.section5}>

        <Image src="/sanisidro.jpg"  width={250} height={200} alt="Salon Photo" />

        <p>Recepción</p>

        <h3 style={{fontFamily: 'auto', fontSize: '25px'}}>
        Santos Degollado 108, Col. La Magdalena Atlicpac, 52565 La Magdalena Atlicpac, Méx.</h3>
        <h3 style={{fontFamily: 'auto', fontSize: '25px'}}>7:00 p.m</h3>

        <button className={styles.button3}><a href="https://maps.app.goo.gl/uyWARcgBp7aoH6Kw6" style={{textDecoration: 'none', color: 'white'}}>Ver Mapa</a></button>
        </div>
    )
}
