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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQOKJVEFX-NuuIwmPUl7oL7VE6Z0OvjD0lIVdH8nJWRUcWNiSYWbGYrBUy77fqvFVGvHj3-xSfqeMV7cPi3Spu3bT-xgZrk05dCfMFz3xnZD5-j5GnxeFJB5TGVBDNp5aFqVZgLH-GcJDMbE-UdAB5sI0rp2W2a1JgAVoGJpkVkuJx1TJ5SqnUA0=w1280"
              alt="Ainos"
              className={styles.infoImage}
            />
          </div>
          <p>
            Ainos est un héros de type Serviteur (Mage). Il est peu utilisé dans le méta actuel,
            mais peut servir dans certaines compositions de niche. Son évolution se débloque via
            des Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Ainos ?</h2>
          <p>Ainos s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSKVwLIDzkY6hH8mWj5xRjfz1XSfVkTF5wEJZxBgpR0Y0LVkAHIknA6f4MGAB4E2IjUibbE-q7MSmElZlipf_Fk6xwXbSlI5oGQzRzSqNBxbrRGIe0i6cxgpDJXhJAHGpGSCXnMvWQhI9nqBfQd6dvJdA9RPaJfLTuyD7u4cJvVMZC0VCHWPmCA=w1280"
              alt="Mission Ainos"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 30 Analysis Drone avec Ainos dans l&apos;équipe :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 7S-5 ou 10-S1 : 1 élimination par run — 30 répétitions</li>
            <li>EP3 6-5 ou 6-9 labyrinthe : 2 éliminations par run — 15 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo de présentation d&apos;Ainos</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8xd-IP-eT1M')}>
              <img
                className={styles.videoThumb}
                src="https://img.youtube.com/vi/8xd-IP-eT1M/maxresdefault.jpg"
                alt="Vidéo de présentation d'Ainos"
              />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo d&apos;Ainos avec Dass qui apprécie le héros</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('-nzjlIEA_k4')}>
              <img
                className={styles.videoThumb}
                src="https://img.youtube.com/vi/-nzjlIEA_k4/maxresdefault.jpg"
                alt="Ainos avec Dass"
              />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
