'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Doris() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>DORIS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSvYpc7iz-eZS-tFOK_KJMZ9Ui_3h2Qu4xIk0gu1JsOX0-r4N0c5Ll3YrfxYHlvXJGHFz1y-nt3JQ7VLiPP5OV9vMiFvQhb2lH_Wd8-kqRZiSbBMEYPNOqAYL3LoqGXbTXIINDcG3UJn7P5jMq9Lz7fDG9FEEq8gIV_y5I8wJBFDgFevMNDJpxOJqQ=w1280"
              alt="Doris"
              className={styles.infoImage}
            />
          </div>
          <p>
            Doris est une Clerc de type Obscurité. Son évolution est optionnelle,
            utilisée en PvP Obscurité notamment en GvG et arène. Elle s&apos;obtient
            via les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Doris ?</h2>
          <p>Doris s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQOmfkKkp-2aydC8F9i9MPo-lfh3KlhbzY_8vYyvjO87GxshNiVHOC2ZEHXkOuR2gqFvJUcVxJ1f0x4CDi1tQEzAJgSmfZ8JU7VEGjENFhj1vH5z7eVOJvYVsZ5cBNNcl0iVoOeJyMZjjMNS8RYvoxIluDl1gEn1-1tAYRZlywNgFcDkbTM_Pf8axT6g=w1280"
              alt="Mission Doris"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Dark Brooms :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 4 : 7 éliminations par run — 72 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
