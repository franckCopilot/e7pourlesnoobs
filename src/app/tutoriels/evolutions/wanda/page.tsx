'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Wanda() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>WANDA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSDlexkFB0J0FtfNZ_oc7I5CKG5qJJm7L5SYGlnZbMNiyPmDLNBchJaVMsNnN2lPFuOyA-5pKWkYpH5WDC3gV2nXi77SHqAkQ_8J2r72BULfLkT4z3l3-Q4pqlSTFW_SY3XmBCj9A3O6fMhV5nz3OolnSuVS7Dq14pNBvivHk-_QJkmNuPhX1yx7Gc=w1280"
              alt="Wanda"
              className={styles.infoImage}
            />
          </div>
          <p>
            L&apos;évolution de Wanda est peu jouée, elle est jouée en PvP pour
            contrer les héros avec de l&apos;évasion.
            Elle s&apos;obtient via les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Wanda ?</h2>
          <p>Wanda s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STbD8ESTXPjExKa0UH5lf0jS0cFi4yFaKCUAUJ0vTJo7hqvb3n_4B64yIFsPenrJtMdEm7Vl3G-cvP3XP_u1lSIWsGDJqxjikfxfE0JIDPmSiJHu89Z7EFZmxPW4j2Vd0MhzV0LD2YO-K0DVXlWuI7jj19LDFLvGn0E7JzVzAPz_OG0u77_WkyAtK0=w1280"
              alt="Mission Wanda"
              className={styles.infoImage}
            />
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
