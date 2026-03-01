'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Rima() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RIMA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STJGX004x6dllRwuFLi3Qi7S3S25_qAmfkNIMg5QMvE0KyiXPJDnbCFIPv4Y-dD0jHmqkVuHFDrGCgocmv6c8-HhAqRV9bY_vRWkAi_DRjIDcNfPJKqKyAB5YNrKIwSVV8C7I3e1TKRh7_44cFJl7cxQYalz1kWPMNaxUiFZtqkJ73DFpyBtjv3y0S=w1280"
              alt="Rima"
              className={styles.infoImage}
            />
          </div>
          <p>
            Rima est une Mage de type Feu. Son évolution est de niche,
            utilisée principalement en expédition Feu en PvE.
            Elle s&apos;obtient via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Rima ?</h2>
          <p>Rima s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSSIaIDMAbh3LcYS5N2JKL2sEb48DYJ-aaVFI6Uil9HE62sH8dYK8eSTvp6H_D5NhstTzLJMBa5mQv8HnFV5jvAKCNhvRWjYN_i4mwgE4mknG9mEWgUF9PGjhXGy30KOTbv8cX_sB72IFGzGP3WtFGxjJ5r41z7mFCkUV1KqH0vMTZLtmFzIcPLq4=w1280"
              alt="Mission Rima"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Animal Model Machinery :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 2-1 : 8 éliminations par run — 63 répétitions</li>
            <li>EP3 2-2 labyrinthe</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
