'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Carrot() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CARROT</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution de Carrot est utile en PvE pour effectuer Arahakan dans le Raid Cauchemar
            et elle est aussi bien en PvP. Elle tape principalement avec des brûlures, sans infliger
            de coup critique.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQlXI53_Ya8UDrMb6GVgHS88BrmJKn5Dlg-Q0IeoEpMaNq6a4pzh10P_XfpUjClaExCxbh2iVaeTuh8kRrfcFpgV3XqaSMvfhpwPl87GsXtq5INr5RF9paetZWU3hb2mrFGhfbid0SUdIAv1TcBkkkef6-P0JXoadazkUFDWaraYJLw1lc6aDLyJfQ=w1280"
              alt="Carrot"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Carrot ?</h2>
          <p>
            Carrot s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution Carrot"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>
                L&apos;évolution nécessite de compléter des missions spécifiques pour débloquer
                les améliorations de compétences et l&apos;arbre de compétence.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <p>
            Voici les missions à compléter pour débloquer l&apos;évolution de Carrot :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>
              <strong>Éliminer 500 Machinery</strong> avec Carrot dans l&apos;équipe.
            </li>
            <li>
              UH S1 : 9 éliminations par run → 56 répétitions.
            </li>
            <li>
              EP1 2-9 laby : 18 éliminations par run → 28 répétitions.
            </li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
