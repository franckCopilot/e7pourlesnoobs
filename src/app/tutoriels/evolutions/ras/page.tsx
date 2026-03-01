'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ras() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RAS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS91zqvnSm5gy_8VJuWkgqBCUHjO4_6Cm5c95jDLjXbWVW7VJnAYFrY4P8NeOgM_8ZElY6IxjvocHHtHMJO6BDSZ2l2KHY0lVlxT3tqxwuywvSKmXCvt3WVRhJQzB8-dpgU8HQLbzIjMfN7x4SKi1g0I5zY-N7XT9HIQBS1HFKnPkKHTIasnnpLUE=w1280"
              alt="Ras"
              className={styles.infoImage}
            />
          </div>
          <p>
            Ras est le protagoniste de l&apos;aventure principale. Son évolution est
            <strong> fortement recommandée</strong> car elle l&apos;améliore considérablement.
            Il est polyvalent, utilisable aussi bien en PvE (Golem 13, Raid Arahakan,
            Expéditions Feu et Lumière) qu&apos;en PvP.
          </p>
          <p>
            <strong>Prérequis :</strong> Terminer le continent 2 (Cidonia) et vaincre Fastus Imparfait.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Ras ?</h2>
          <p>Ras est le héros principal — il est obtenu en progressant dans l&apos;<strong>aventure principale</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STu8scSGw4iblKWaSKbP8HtRJkf3lK6Z1P3YPjdqVMgcHqeSB5AEhS0TBDrZ9yNMY0yw2PVVkimBYnGPYZ6xrNRqXq2IfHpDmGJarJnqdR0R4qpkW-kVPPUOFdqNfF93J_9X36_K2jTjq71X4G74FYxO6JuSqN8Z8D1zLHmKUSBCqb5OhBW25SnmA=w1280"
              alt="Missions Ras"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Unknown :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 7 : 8 éliminations par run — 63 répétitions</li>
            <li>EP2 10-7 labyrinthe : 21 éliminations par run — 24 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en Golem 13 pour débutant</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('9rq5X8G5G5o')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/9rq5X8G5G5o/maxresdefault.jpg" alt="Ras Golem 13" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras dans le raid cauchemar contre Arahakan</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('jFrIqJwIin8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/jFrIqJwIin8/maxresdefault.jpg" alt="Ras raid Arahakan" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras dans le raid contre Arahakan</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('U6UguwGr2Pw')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/U6UguwGr2Pw/maxresdefault.jpg" alt="Ras raid Arahakan bis" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en expédition feu</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('rGE-g1EReiM')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/rGE-g1EReiM/maxresdefault.jpg" alt="Ras expédition feu" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en expédition lumière</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('YX0rqwizzH8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/YX0rqwizzH8/maxresdefault.jpg" alt="Ras expédition lumière" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
