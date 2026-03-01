'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Glenn() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>GLENN</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STujfgBfyLf4f8HKWrAkEk0A4SqovBl-0x0hDCnOifwJ-xoqLe5RQkL3pIaOcCWDy4x413grpSnV3WYVScl5m7-xGnXnr2cVlBINlI0YxfcZ14hzH1gW1DxTuO1RQFd1VRZYpJ3gU5h3pM2LqTllCkBY0ik7UiJbqZ-GmYVcJc5CKXixXYqNxWbqY=w1280"
              alt="Glenn"
              className={styles.infoImage}
            />
          </div>
          <p>
            Glenn est un Guerrier de type Glace. Son évolution est de niche, utilisée
            principalement en PvP comme DPS. Il s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Glenn ?</h2>
          <p>Glenn s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiSemab2KEOzTg2mXHHH4-V8Q3c5c3wLhxJMqTnMDUoE-vWmCdJkwEBFE8pPjVEFgHzA_VXWjiqshx6_APxmT2IXmZ-K4bKaJRFy8cpbbP0QT9WbMR7AXsezZBynmQo34IgcEGv_-4F0n_9QLKZFZ0Fd2t0hSiB5N9n8FJP6FHvI2RvMa4ykmjQuk=w1280"
              alt="Missions Glenn"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Old Model Cyborgs in Politia :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 2-S1 : 7 éliminations par run — 72 répétitions</li>
          </ul>
          <p><strong>Éliminer 500 Fighters in Politis avec Glenn dans l&apos;équipe :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 2-S4 : 5 éliminations par run — 100 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
