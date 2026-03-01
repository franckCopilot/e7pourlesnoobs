'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Jena() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>JENA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRn1VDLHlBPqpzfxeOXC-nZnlP3Jg9cAQhENFXC8HLBnS0AzfZRPnJkh46ANuYNY9u87Ixe-LJjfk13SuE0PmpqzovyRr3Wr0Gw2A-4oRXcEk6xFiWLKFenMT7CaZoJ7xlMwHpSf0kp3qlqfAoK9hDKFWzPKjA2YgPqt7WMK01vJ6xFnshLFxmH0=w1280"
              alt="Jena"
              className={styles.infoImage}
            />
          </div>
          <p>
            Jena est une Mage de type Feu. Son évolution est de niche, principalement
            utilisée en PvP pour son contrôle et ses dégâts. Elle s&apos;obtient via les
            Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Jena ?</h2>
          <p>Jena s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS_5hj8dVxBUjhScM93C1j0pVFh0_k1biUEbegNfagfyq_k7n8dvWbYAfV7x2OX_bXCeX1SjIX0Sb_1iQGpYZQ-P5Ao2Gm8EuFJvqf9OHMpFAb7wPr-g4bK-24k7wJrHevKJ7FaFWkyaIl0pJPR1NtWNW3Y90TbXuCb7iFVSYCx8Nv3WsunT7FIg=w1280"
              alt="Missions Jena"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Capturer 45 Church of Ilryos Devotees :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 13 : plusieurs éliminations par run</li>
          </ul>
          <p><strong>Éliminer 25 Ilryos Devotees dans le labyrinthe Fabricated Altar avec Jena :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Great Farche Labyrinth zone 2</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
