import styles from './section5.module.css'
import Image from 'next/image'

export default function Section5() {
    return (
        <div className={styles.section5}>

        <Image src="/iglesia.jpg" width={250} height={200} alt="Church Image" />

        <p>Ceremonia Religiosa</p>

        <h3 style={{fontFamily: 'auto', fontSize: '25px'}}>Av. José María Morelos 1, Tecamachalco, 56500 Tecamachalco, Méx.</h3>
        <h3 style={{fontFamily: 'auto', fontSize: '25px'}}>5:30 p.m</h3>

        <button className={styles.button3}><a href="https://maps.app.goo.gl/2kGPY8AALF4GsYv66" style={{textDecoration: 'none', color: 'white'}}>Ver Mapa</a></button>
        </div>
    )
}

