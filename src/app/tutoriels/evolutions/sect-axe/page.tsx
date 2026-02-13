'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function SectAxe() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>SECT AXE</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <p>
            L&apos;évolution de Sect Axe est peu jouée, c&apos;est un personnage PvP orienté
            dégâts pour contrer les personnages lumière.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Sect Axe ?</h2>
          <p>Sect Axe s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQquTaL3jWoQxbO6Io1PsD4WUUCRRv4IMyBBJuBsIrDXctagrHCWPUHamo3DQEuJYXmD_sZg5zSthEuPhq5tt8O6eAvHHPor9ffsAKGDAc4yK8-bzPU8Ki3e6HDSznlKukKSx6smQPbocko6xXJdUT-uswukTCIhbdUGZyuK0b7KoSFqlGtxdCcO87BBPQkBb5WTtx4DK7Qh5GP8t6CTDr5q6ZdKt_Im6rEeCc=w1280"
              alt="Évolution de Sect Axe"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p><strong>Quêtes d&apos;évolution :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Church of Ilryos Devotees (UH 12, 13 ou 22 : 6 elim pour 84 reps ; EP1 9-7 labyrinthe : 6 elim pour 84 reps)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
