'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Herais() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Constellation Herais</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Constellation Éternel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Constellation éternel Terre sans RNG</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('W5Cc_kf-mZs')}>
              <img src="https://img.youtube.com/vi/W5Cc_kf-mZs/hqdefault.jpg" alt="Constellation Herais" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>L&apos;objectif du combat est de régulièrement infliger des <strong>brulures</strong> en zone.</p>
          <p>Il existe cependant une stratégie pour contourner les mécaniques du boss en lui enlever des points de vie en fonction de ses HP.</p>
          <p><strong>Composition :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Devant : <strong>Aram</strong></li>
            <li><strong>Achates</strong></li>
            <li><strong>Hazel</strong></li>
            <li><strong>Tiera</strong></li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : la gestion des artefacts et de la speedtune est indispensable pour réussir la stratégie.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : la troisième bénédiction de <strong>Balance</strong> est recommandée.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: "Aram avec le plus de santé possible, aux alentours des 230 de vitesse et l'artefact gaieté de l'idole.", img: '/images/tutoriels/chasses/herais1.png' },
            { desc: "Hazel avec le plus de santé possible, aux alentours des 215/220 de vitesse avec l'artefact branche de l'arbre divin", img: '/images/tutoriels/chasses/herais2.png' },
            { desc: "Achates avec le plus de santé possible aux alentours des 205 de vitesse en fonction de votre speedtune. Cor de guerre est requis. troisième EE.", img: '/images/tutoriels/chasses/herais3.png' },
            { desc: "Tiera avec le plus de dégâts possible en set destru et infiltration. il faut qu'elle ait un peu de vitesse et au moins 14 500 HP. Joker de réverie est requis.", img: '/images/tutoriels/chasses/herais4.png' },
          ].map((hero, i) => (
            <div key={i} className={styles.infoBlock}>
              <img src={hero.img} alt={hero.desc} className={styles.infoImage} />
              <div className={styles.infoText}>
                <p>{hero.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
