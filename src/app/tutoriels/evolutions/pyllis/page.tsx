'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pyllis() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>PYLLIS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>L&apos;évolution de Pyllis est principalement utilisée en PvP. C&apos;est un excellent héros pour affronter les compositions avec des contre-attaques, des extra-attaques ou des double-attaques. C&apos;est aussi un bon héros contre l&apos;évasion car elle ne peut pas rater sa troisième compétence.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQYd0XCaVmZy-qWGDV3y_Abv_YtldUrX_dJrx8tu65jO_wtNpj4vE7ljwwQVILj1Hpovalk1VioIRkXCm6_U21dxPSGxvjrMD2WrcVUbVQTXaVQDDEPcY8V-5qpJeRDQo3ZEV2suA_JIbXAtXyr0hVOOw_-sQN9STcQ1hEwDTEvpgNONZhYxSWd024=w1280"
              alt="Pyllis"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Pyllis ?</h2>
          <p>Pyllis s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQqE0LinhT3tqjAF2o_ZSZUWt7T2NUP-E-zYcFPwp_9QQaMOOoAMVSkPcDKsXu0UToCLXIX8qME8QN7QF3jo8HgE9p16uAH-ARGDxniGi55LaINEcFDmdxwuIJiM3nHsEYKN3t9Fzr_ojv-h3kRghpS1PdskyyT555hNA1tTwn8RKPuqRmVJMtJ-u9S4dIK8EnHJvZER4_mte2vtuSZ_mnvJfc_tEAYZFgtFXw=w1280"
              alt="Évolution"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Voici les missions à compléter pour évoluer Pyllis :</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 150 Angraf Shades (UH 33: 3 elim for 50 reps)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Pyllis est un héros optionnel mais très efficace en PvP contre les compositions basées sur les attaques multiples et l&apos;évasion.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
