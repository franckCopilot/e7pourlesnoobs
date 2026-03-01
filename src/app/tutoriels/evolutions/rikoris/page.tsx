'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Rikoris() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RIKORIS</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSM76prokyR8OEPHiHcwKaooEmjzBPIqaclN1JPy6k_NK95JSf27iRshILFAimOqVs2_lEVuNK3exE-pcHcchlB9sMH9wJmp19GQWSM3iP5A5eoFp53zZNmFQrMfzXxckVR9wNE8uwK5IbjuQI015MGvPqv9XGNCbJWFatwjftjnKymZfW4hoWGY1o=w1280" alt="Rikoris" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Rikoris est peu jouée, il peut être joué en PvE : en chasse pour l&apos;Azimanak 13 ou pour le Caides 13.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Rikoris ?</h2>
          <p>Rikoris s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQWPzAq_GFBY9-em_nxrPPBWGJLP3zAPVuLQpfofgagOIUQ4rxX4_y1ZJjdl5BU0hc33d5I9eiegL7xdQy4KQLeU8Lp2RznOIW2jTvyYvdUYtMmv03AO_ni1foGzPSh_okH0Y8d6bElIUPpOZ_nacTWY570NyVTjeU2cIxqJOngwRh8-TQmY5WvTLtYwYjXm_N7FlT5GY3f95_6SEeZdh-epti9pA5gCnyIus8=w1280" alt="Mission Rikoris" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Artificial Creatures :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 28 : 10 éliminations pour 50 répétitions</li>
            <li>EP1 9-7 (labyrinthe) : TBD</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
