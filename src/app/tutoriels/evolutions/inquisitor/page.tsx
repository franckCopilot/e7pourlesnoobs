'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Inquisitor() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>INQUISITOR KASIM</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQwbNCqUguVBuSXF_cFVhLOe8cFcZHTMSUVdylqJBhxTYqOSovRSoitNJ5OsGl8d0lBXb4VMX1hfJVzLs_aPkj15YZxFR4WKQM8JUF0Iqk08AzJj8-bGAWTcOaJ9ym7_VXLrGHklEEXmidGvyNWvMmLHlpNnW0rk62RFzJBWEHwDxvEoK9MsWcw0=w1280"
              alt="Inquisitor Kasim"
              className={styles.infoImage}
            />
          </div>
          <p>
            Inquisitor Kasim est un Guerrier de type Feu. Son évolution est de niche, héros
            intéressant en héritage pour du PvP et PvE. Il s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Inquisitor Kasim ?</h2>
          <p>Inquisitor Kasim s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiSemab2KEOzTg2mXHHH4-V8Q3c5c3wLhxJMqTnMDUoE-vWmCdJkwEBFE8pPjVEFgHzA_VXWjiqshx6_APxmT2IXmZ-K4bKaJRFy8cpbbP0QT9WbMR7AXsezZBynmQo34IgcEGv_-4F0n_9QLKZFZ0Fd2t0hSiB5N9n8FJP6FHvI2RvMa4ykmjQuk=w1280"
              alt="Missions Inquisitor"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 250 Monsters from Sacred Kingdom :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 19 : 5 éliminations par run — 50 répétitions</li>
          </ul>
          <p><strong>Éliminer 25 enemies dans le labyrinthe Rose Apostles Meeting Hall :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Tirel Castle in Chaos Zone 3</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
