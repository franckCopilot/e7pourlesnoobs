'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Glenn() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>GLENN</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <p>
            L&apos;évolution de Glenn est peu jouée, c&apos;est un DPS qui effectuera de bons
            dégâts en PvP.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQOlFySmYRRjQlCO0Okt0f1n9oa7DYzFFJSNgsaovm3n01qTfUr1OmeurE0XwibJEBib6kqGwvRuTzPWGvZlzoZXiO2HQgS6JYk_lODdC_4RnHlH7E-YiDnJ5UMzeiYeSG0eeEdE6iigXZT0LIwegXh3VvkDL7Bj8mfsGDyeu3S-ZcGJHk3vEWh7qw=w1280"
              alt="Glenn"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Glenn ?</h2>
          <p>
            Glenn s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution Glenn"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Old Model Cyborgs in Politia (EP3 2-S1 : 7 éliminations pour 72 répétitions)</li>
                <li>Éliminer 500 Fighters in Politis avec Glenn dans l&apos;équipe (EP3 2-S4 : 5 éliminations pour 100 répétitions)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Conseil : Vérifiez les missions dans le journal d&apos;évolution pour suivre votre progression.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
