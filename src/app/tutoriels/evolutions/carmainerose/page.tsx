'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Carmainerose() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CARMAINEROSE</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STznXDrj6MP-TYmBI_l-qcT_ObHSf5SIIRNbyhl6Y-R6Bt8kRFz9Svn_mp1aCXcy184aJPeVoZozZc9ozOrF_JQ4ViQy5iTa2QzhzJK-ij-WSdKw22GCCqC-B7g51ylSgd5pmNFeIwA4MG0Gk5f7Zm7D4Di3WalVoBZV5mWD_MG0D-T4ChUrwqpdYI=w1280" alt="Carmainerose" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Carmainerose est principalement utilisée en PvE pour effectuer l&apos;expédition lumière.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Carmainerose ?</h2>
          <p>Carmainerose s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ4IvEKu663oYLOMYv3MJCRK0vJy9IiskRgyQEdrK4hNKuiLiaew_ftlpLdXO-MQIz9zK_8aAgKoCjrglfWBQRE4SYeHI7TGix6WRDFhoyvCdgK-eaVenYyrDVp53lhzkJ2aOVaYzB2EgIZuFHA0XCv9WJ6xdC2zTE7bN92gnk2x0jwLH6mcSCCL4wm6FXZevIaO-zR0fN8iq-nKH0Tzsfkt70XiZ2rVfCqpmk=w1280" alt="Mission Carmainerose" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 250 monsters from the Sacred Kingdom :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 19 : 5 éliminations pour 50 répétitions</li>
            <li>EP1 6-5 (labyrinthe) : 11 éliminations pour 23 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
