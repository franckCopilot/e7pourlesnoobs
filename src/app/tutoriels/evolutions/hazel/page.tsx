'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Hazel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>HAZEL</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQRZefg-ads-IFulxakC61G5MK9kx1r3RMLrkEYvJe7J3e6hgcAUJNgvdYcb9CwCjuDEQq1GRTpG1GKDKFj5vX0JIlnW2t8cFn88RlKtNelqklhz5aHLqhJnAi4WCqXqhFxzVn8a0-D_6JqiDHe8q5TZ0K3O3f1X2ufExHLaJ5XqjUjOiYH9wR1gC=w1280"
              alt="Hazel"
              className={styles.infoImage}
            />
          </div>
          <p>
            Hazel est une Clerc de type Feu. Son évolution est optionnelle mais très utile
            en expédition Feu, lors du raid avec Secrétaire Vera, et dans le Mode Rift.
            Elle s&apos;obtient via les <strong>Relations</strong>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Hazel ?</h2>
          <p>Hazel s&apos;obtient via les <strong>Relations</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRQVCE9Un0dVEGVJ3hFHFEjpX5AaSHSHxGC59j3d8ZvNyEcRnzBhz0VnJ4TGgQNnS7-f6M9fJ-yIQ3sdqF2Vu4I6d7sP2-gVZhFKaRwImqqaCj19OhBrOlZYBknqRQzSCnbLbklxCvB7cqMT-TtcVnxKv0g8G9lYAH3aSMKLlnE8VUjlVXc8Kv_Lg=w1280"
              alt="Mission Hazel"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Mysterious Magic Experiment Subjects :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 4 : 7 éliminations par run — 72 répétitions</li>
            <li>6-5 labyrinthe : 11 éliminations par run — 23 répétitions</li>
          </ul>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQw8Xr3_rVpBMmF3sMFP0X6lbSg3sOhHBDmLRFTgqZ1e4qF4dL4JDQq3WVt63Ox8W-RkzaC46apWfI5pqnhXsTT0q4BnNFULqRB3sSuHrdZo3hPnBY6FRCZ3dXHVbV_B-z4r-8DJHY4y45cbpHNhZ65P_bqNi33bQREBtQXwf9cP07hGl5VDsZEI=w1280"
              alt="Hazel en action"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le raid cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('PWN-TUd4Ngo')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/PWN-TUd4Ngo/maxresdefault.jpg" alt="Hazel raid cauchemar" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le raid cauchemar en mode auto</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('m2ji6WwPUxg')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/m2ji6WwPUxg/maxresdefault.jpg" alt="Hazel raid auto" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le mode Rift</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('XPK7zWymbkI')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/XPK7zWymbkI/maxresdefault.jpg" alt="Hazel mode Rift" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
