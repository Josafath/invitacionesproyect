'use client'; // Needed if using Next.js 13+ with app router

import { useState, useRef, useEffect } from 'react';
import styles from './audio.module.css';

export default function Audio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const audioRef = useRef(null);

    // ✅ Handle scroll lock depending on modal visibility
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Clean up when component unmounts (just in case)
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showModal]);

    // ✅ Start music and close modal
    const startInvitation = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.play().catch((error) => {
            console.error('Audio play failed:', error);
        });
        setIsPlaying(true);
        setShowModal(false);
    };

    // ✅ Toggle music on/off
    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch((error) => {
                console.error('Audio play failed:', error);
            });
            setIsPlaying(true);
        }
    };

    return (
        <>
            <audio ref={audioRef} src="/background_sound.mp3" loop />

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h1 className={styles.modalTitle}>Estás cordialmente invitadx</h1>
                        <button onClick={startInvitation} className={styles.startButton}>
                            Abrir Invitación
                        </button>
                    </div>
                </div>
            )}

            {!showModal && (
                <button onClick={toggleMusic} className={styles.musicButton}>
                    {isPlaying ? '❚❚' : '▶️'}
                </button>
            )}
        </>
    );
}



