'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pearlhorizon() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>PEARLHORIZON</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSDXHD0OXJx5kPLInNcuLmk4wElvdRRLiocHuBjVeE6gPJrlsOFMf7m-8t6YJ9I_JbzVAWRZOq3sAn6GJ-n_Xy_E5s3e7ppAXETdUzVG_C81rSX6pgqKz0eTp8YqEMD3apSWH0VFwX8wHiD9aWdH7fHVFjPaV5mLLGPCLJ1q5_UOJiuR5wXRwExU=w1280"
              alt="Pearlhorizon"
              className={styles.infoImage}
            />
          </div>
          <p>
            Pearlhorizon est une Mage de type Terre. Son évolution est de niche,
            principalement utilisée en PvP pour son contrôle et son effet de sommeil.
            Elle s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Pearlhorizon ?</h2>
          <p>Pearlhorizon s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSSIaIDMAbh3LcYS5N2JKL2sEb48DYJ-aaVFI6Uil9HE62sH8dYK8eSTvp6H_D5NhstTzLJMBa5mQv8HnFV5jvAKCNhvRWjYN_i4mwgE4mknG9mEWgUF9PGjhXGy30KOTbv8cX_sB72IFGzGP3WtFGxjJ5r41z7mFCkUV1KqH0vMTZLtmFzIcPLq4=w1280"
              alt="Missions Pearlhorizon"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Artificial Creatures :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 28 : 10 éliminations par run — 50 répétitions</li>
          </ul>
          <p><strong>Éliminer 20 Rose apostle Priests :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP2 9-S2 : 3 éliminations par run — 7 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
