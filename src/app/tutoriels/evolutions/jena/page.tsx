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
          <p>L&apos;évolution de Jena est peu jouée, c&apos;est une mage PvP orientée DPS/Contrôle.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQhUrkQIY3MQQwRupaP9ZbJscXboSYgMUZNuUJEYtbJFG2jPcE9FobcAZuDZxOzOO_uj5U7xVAGADKGjUvdavWG4u8uUUzeukHDX-76A9VENOjZYn5S2_KvXHTtj1Pb6E-1iqtBFEqDjtnGX0S-bWwrkzXfaLoS5UXwSE-BaJ6C-JPoKDiA3U83=w1280"
              alt="Jena"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Jena ?</h2>
          <p>Jena s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Voici les missions à compléter pour évoluer Jena :</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Capturer 45 Church of Ilryos Devotees (UH 13: TBD)</li>
                <li>Éliminer 25 Ilryos Devotees in the Fabricated Altar labyrinth avec Jena dans l&apos;équipe (Great Farche Labyrinth zone 2)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Jena étant un héros niche, son évolution n&apos;est recommandée que pour les joueurs avancés qui souhaitent l&apos;utiliser en PvP.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
