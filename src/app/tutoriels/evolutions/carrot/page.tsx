'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Carrot() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CARROT</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STRIsp-Ob0JXwtANNdVMF-_eRyYllRQmIZQG-WM_mcin0Gm9mursk5gWDVAZgNeSxw4avXjocKfWahuAyOmN7VpE_-Vi7k32aiv-E7pfN-mqh_Rv8mb5ZEudz2LsASrND0VAPuvL6bnuY-Y2NfOS2MURNpWYw6p_14K7XGgHvicyk7gI73ZMC_xEgs=w1280" alt="Carrot" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Carrot est utile en PvE pour effectuer Arahakan dans le Raid Cauchemar et elle est aussi bien en PvP. Elle tape principalement avec des brûlures, sans infliger de coup critique.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Carrot ?</h2>
          <p>Carrot s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ4IvEKu663oYLOMYv3MJCRK0vJy9IiskRgyQEdrK4hNKuiLiaew_ftlpLdXO-MQIz9zK_8aAgKoCjrglfWBQRE4SYeHI7TGix6WRDFhoyvCdgK-eaVenYyrDVp53lhzkJ2aOVaYzB2EgIZuFHA0XCv9WJ6xdC2zTE7bN92gnk2x0jwLH6mcSCCL4wm6FXZevIaO-zR0fN8iq-nKH0Tzsfkt70XiZ2rVfCqpmk=w1280" alt="Mission Carrot" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Machinery :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) S1 : 9 éliminations pour 56 répétitions</li>
            <li>EP1 2-9 (labyrinthe) : 18 éliminations pour 28 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo de présentation de Carrot</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('dHlPxbs--L8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/dHlPxbs--L8/maxresdefault.jpg" alt="Présentation Carrot" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>SC Carrot pour faire Arahakan dans le mode cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('U6UguwGr2Pw')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/U6UguwGr2Pw/maxresdefault.jpg" alt="Carrot Arahakan" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
