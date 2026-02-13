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
          <p>
            L&apos;évolution de Rikoris est peu jouée, il peut être joué en PvE : en chasse
            pour l&apos;Azimanak 13 ou pour le Caides 13.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Rikoris ?</h2>
          <p>Rikoris s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQqE0LinhT3tqjAF2o_ZSZUWt7T2NUP-E-zYcFPwp_9QQaMOOoAMVSkPcDKsXu0UToCLXIX8qME8QN7QF3jo8HgE9p16uAH-ARGDxniGi55LaINEcFDmdxwuIJiM3nHsEYKN3t9Fzr_ojv-h3kRghpS1PdskyyT555hNA1tTwn8RKPuqRmVJMtJ-u9S4dIK8EnHJvZER4_mte2vtuSZ_mnvJfc_tEAYZFgtFXw=w1280"
              alt="Évolution de Rikoris"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p><strong>Quêtes d&apos;évolution :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Artificial Creatures (UH 28 : 10 elim pour 50 reps ; EP1 9-7 labyrinthe : TBD)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
