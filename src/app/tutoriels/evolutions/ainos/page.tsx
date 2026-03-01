'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ainos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>AINOS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STvMOCAxaidVkEIgU8U3lfTvbb-FuVK0Kuz8B0C8kW9P0uZweYSRshaaxXbYRvuHlI86wm9ZJWbGjOWNcIi7XU1bovW-AjOvWeU7Oxgt571Mfc7LXH59uAeZX98JKeDuJTRRZ6pTiiWBXo7ei2NCU7J_zVAPwgu7JVtr--JY0-QP56-flqyKlB_xd0=w1280" alt="Ainos" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution d&apos;ainos est plaisante à jouer en PvP pour booster sa team et en PvE pour les challenges de l&apos;abîme ou pour les teams OS de la chasse A13.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Ainos ?</h2>
          <p>Ainos s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRDskgeMLShnW6g1O_tn2RNdndwBOwUvfpS-BqtQBCB1Imi28FACwrKNKN1o3iz0CJR6uZbou15aUm3CREx2FZN2wdbCNecyvIrTKvDWn8xU1UxrhD3Pznxxzdfsed-5b887S1vU9sBOW1-TPk9QftXvsFM7zV_A33asrli6FcBXC9kSiSSnLvCIBOduR6FXQId3-7NCLPSe399Q-qlVlXKdr5uoVU0zLmmFgA=w1280" alt="Mission Ainos" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 30 Analysis Drone monsters avec Ainos dans l&apos;équipe :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 7S-5 ou 10-S1 : 1 élimination pour 30 répétitions</li>
            <li>EP3 6-5 ou 6-9 (labyrinthe) : 2 éliminations pour 15 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo de présentation d&apos;Ainos</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8xd-IP-eT1M')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/8xd-IP-eT1M/maxresdefault.jpg" alt="Présentation Ainos" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo d&apos;Ainos avec Dass qui apprécie le héros</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('-nzjlIEA_k4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/-nzjlIEA_k4/maxresdefault.jpg" alt="Ainos avec Dass" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
