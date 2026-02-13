'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Helga() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>HELGA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution de Helga est principalement utilisée en PvE pour effectuer
            l&apos;expédition glace.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQfGXw6StM7BxDTNBGN9WLUKsFhaFOYRGjJzvjOKLo_XR3a55gbPfXPZGp8K8q6lB1SE04tGu_OlCMG4FZTXidGph-d0b13PYnJ7N6ZgkPcIFmh4SifKZMaoKluq2rZ49cSXpmmlB71WQL9CggJK_ithbaqtkDjNcqy-uucjbFqE9LXHJVFNl4oHVg=w1280"
              alt="Helga"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Helga ?</h2>
          <p>
            Helga s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution Helga"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Cultists (UH 12, 13 ou 22 : 6 éliminations pour 84 répétitions ; EP1 4-9 laby : 39 éliminations pour 13 répétitions)</li>
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
