'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Roozid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ROOZID</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQOInU9woaH2FkUSzCFRaE2vLBiJA_rQBVXC0Bg9V5YYqAYpyCwsMzK0X3HnN5bDPeqzx_VV7b_ZFJyBjlA5n-mOeRVPERfQDV6wLXYI1OkqfDlwD9l1EDDHm-qFWnxQqjXeNynBqaHn7eOeTWCExmZxLJW3j3oqAtJ2D1Wr3pRMfkCJnFEHfJ0xp0=w1280"
              alt="Roozid"
              className={styles.infoImage}
            />
          </div>
          <p>
            Roozid est un Chevalier de type Glace. Son évolution est de niche,
            utile en expédition Glace en PvE (il peut remplacer Lilka).
            Il s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Roozid ?</h2>
          <p>Roozid s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSSIaIDMAbh3LcYS5N2JKL2sEb48DYJ-aaVFI6Uil9HE62sH8dYK8eSTvp6H_D5NhstTzLJMBa5mQv8HnFV5jvAKCNhvRWjYN_i4mwgE4mknG9mEWgUF9PGjhXGy30KOTbv8cX_sB72IFGzGP3WtFGxjJ5r41z7mFCkUV1KqH0vMTZLtmFzIcPLq4=w1280"
              alt="Mission Roozid"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Bellmice :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 11 : 9 éliminations par run — 56 répétitions</li>
            <li>EP1 4-4 labyrinthe : 29 éliminations par run — 18 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
