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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSOCDmzAbERFkpv_BjxSJhN5Lf_jTdCXdMfOZ2BNuLOBqPFunS2S4BnCLiFLWjKYgdMbDfqUBpWFuaFiwpbulurNNQWXevBHjMOVEaSwdGpvq5C9p24lHH72EpCiJfpBLxJ8Ks2uPp6kzJOPOO4G3FuaWAMKKBJ9M3cMcjjJP8T6yVYjJDIhlqbX4=w1280"
              alt="Carrot"
              className={styles.infoImage}
            />
          </div>
          <p>
            Carrot est une Mage de type Feu. Son évolution est optionnelle mais intéressante en
            PvE contre Arahakan et en PvP. Elle s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Carrot ?</h2>
          <p>Carrot s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiSemab2KEOzTg2mXHHH4-V8Q3c5c3wLhxJMqTnMDUoE-vWmCdJkwEBFE8pPjVEFgHzA_VXWjiqshx6_APxmT2IXmZ-K4bKaJRFy8cpbbP0QT9WbMR7AXsezZBynmQo34IgcEGv_-4F0n_9QLKZFZ0Fd2t0hSiB5N9n8FJP6FHvI2RvMa4ykmjQuk=w1280"
              alt="Mission Carrot"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Machinery :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH S1 : 9 éliminations par run — 56 répétitions</li>
            <li>EP1 2-9 labyrinthe : 18 éliminations par run — 28 répétitions</li>
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
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/U6UguwGr2Pw/maxresdefault.jpg" alt="Carrot Arahakan Cauchemar" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
