'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Inquisitor() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>INQUISITOR</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <p>
            L&apos;évolution de l&apos;Inquisitor est peu jouée, c&apos;est un DPS qui ne peut
            recevoir plus de 35% de sa santé en dégât. Il peut être joué dans l&apos;héritage des
            temps anciens en PvE.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS6jqrRuY3Vjg4GWXnPpTFjN4Fw6vEO-hSsMWJ2qvgKx3a0ss-9jFNiqgiKXQ6c3IQ4ZYRspHMLun7_ymzfuONS0X_-RRnN4rK1w4K8kM3YPGBxmCmgbBry5e_1mWscOqr0OcBV4A6plr4XQ4HtGm9ca-wC9Zfnkqo1zgrq7HPfGGvCl7fZF2T-wJk=w1280"
              alt="Inquisitor"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer l&apos;Inquisitor ?</h2>
          <p>
            L&apos;Inquisitor s&apos;obtient en invoquant, principalement avec les Invocation de la
            prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution Inquisitor"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 250 Monsters from Sacred Kingdom (UH 19 : 5 éliminations pour 50 répétitions)</li>
                <li>Éliminer 25 enemies in the Rose Apostles Meeting Hall in labyrinth (Tirel Castle in Chaos Zone 3)</li>
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
