'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Rikoris() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RIKORIS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRy2XFTRCh8B_hc-Y7p85mgkFN9eQiJpW8OhiO-fjrHBDkfYgSQUwU2oYrC--1OzEWNl3HOhthgFv7P2-IrUMlzHBvSQ_kpnLK5-UDR3Qz3BpnCO-R9Y3X8ueNOsPHfNsFqF78rBY-HHxkqaCRX3i3GEJbPh1O7_-FQ5u8tIr7Dw-UE5a7MLBEi0z3s=w1280"
              alt="Rikoris"
              className={styles.infoImage}
            />
          </div>
          <p>
            Rikoris est un Archer de type Glace. Son évolution est de niche,
            utile en PvE notamment contre l&apos;Azimanak 13 et le Caides 13.
            Il s&apos;obtient via les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Rikoris ?</h2>
          <p>Rikoris s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STbD8ESTXPjExKa0UH5lf0jS0cFi4yFaKCUAUJ0vTJo7hqvb3n_4B64yIFsPenrJtMdEm7Vl3G-cvP3XP_u1lSIWsGDJqxjikfxfE0JIDPmSiJHu89Z7EFZmxPW4j2Vd0MhzV0LD2YO-K0DVXlWuI7jj19LDFLvGn0E7JzVzAPz_OG0u77_WkyAtK0=w1280"
              alt="Mission Rikoris"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Artificial Creatures :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 28 : 10 éliminations par run — 50 répétitions</li>
            <li>EP1 9-7 labyrinthe</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
