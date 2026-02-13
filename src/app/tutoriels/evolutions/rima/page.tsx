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
          <p>
            L&apos;évolution de Rima est peu jouée, elle peut être jouée en PvE : en expédition feu.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Rima ?</h2>
          <p>Rima s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS3gsas6gZnzwlxTPGFfcQfbH3DtyLb49Ck2e9c4u3t9JPiF9osgiKZw9OEYGYsX60nPvTc8oDtnQNYVSaOiLUJ1wfU1kzZVbkATbV_3JPdBGtYEhI6sSNTdUnT_y69OsISQ6VAUuvRFQ04XyjXusX5RXvcHFI_8PwXJzrjTK961E6xWhzv6IMABNCSmOOgu_n3FEV5etvveSUSzwePu-j_2uC0d5zkTSuHAWQ=w1280"
              alt="Évolution de Rima"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p><strong>Quêtes d&apos;évolution :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Animal Model Machinery (EP3 2-1 : 8 elim pour 63 reps ; EP3 2-2 labyrinthe : TBD)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
