'use client';

import { useEffect, useState } from 'react';
import styles from './section4.module.css'
export default function Countdown() {
  const targetDate = new Date('2025-06-28T23:59:59');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.section4}>
      <h2 className="countdown-title" style={{fontFamily: "Dancing Script"}}>Faltan</h2>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <span className="number">{timeLeft.days}</span>
          <span className="label">Días</span>
        </div>
        <div className="countdown-item">
          <span className="number">{timeLeft.hours}</span>
          <span className="label">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="number">{timeLeft.minutes}</span>
          <span className="label">Minutos</span>
        </div>
        <div className="countdown-item">
          <span className="number">{timeLeft.seconds}</span>
          <span className="label">Segundos</span>
        </div>
      </div>
      <p className="countdown-footer">Para mis XV años</p>
      <style jsx>{`
        
        .countdown-title {
          font-family: 'Dancing Script", serif';
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .countdown-wrapper {
          display: flex;
          justify-content: center;
    
        }
        .countdown-item {
          text-align: center;
          padding: 5px;
          min-width: 70px;
        }
        .number {
          font-size: 30px;
          font-weight: bold;
        }
        .label {
          font-size: 15px;
          display: block;
          margin-top: 5px;
        }
        .countdown-footer {
          margin-top: 30px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
