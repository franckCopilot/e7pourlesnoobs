'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Carmainerose() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CARMAINEROSE</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRlskAfvGIiClP8aJ-dE-v9Bfhg6gGjGaMOuJEkb0yABhKgYDgEhqvVE6EHoR3Wm0mYqPnVpFVhS7r4wuHuiAFWjTnUgCbr6wMRVfQX-LXKf4b7VVMoUfgcmm8WedBYLSnZrw3S4Uo73hwZm8paTHQVLMumJcxd-bm0vC6D0pCJlSfupkSRJVT52Q=w1280"
              alt="Carmainerose"
              className={styles.infoImage}
            />
          </div>
          <p>
            Carmainerose est une Guerrière de type Lumière. Son évolution est optionnelle,
            utilisée principalement en expédition Lumière. Elle s&apos;obtient via les
            Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Carmainerose ?</h2>
          <p>Carmainerose s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STZ1q6cfyJEmfMwLPjkTz3fQmHB_bWpR0ZsTf7s6VyCz5kqoQY9QVpM0lEUVEQV5nbH4FT6qB_S7pknr6T0ZCd9XnM0L3MqCKFj1VL8sgjB3CmvYOPMsJh4g7nNx53SKCdlHiLCXg1TjE2h8L6JQIhRz9WxNf7LkIYN1KVA4PXTOvB_8RcHBo2pP9A=w1280"
              alt="Mission Carmainerose"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 250 Monsters from the Sacred Kingdom :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 19 : 5 éliminations par run — 50 répétitions</li>
            <li>EP1 6-5 labyrinthe : 11 éliminations par run — 23 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
