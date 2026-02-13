'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Christy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CHRISTY</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution de Christy est principalement utilisée en PvP pour partager la moitié
            de sa résistance d&apos;effet à un de ses alliés, pratique contre les adversaires
            infligeant des malus.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRVGrjmpmwS8eVXgzOrgIM6p8riCI6U8aNS9bUUxjMySm0bBMEAg34zIn-5kuXTFXEBdI4ButnXY28pzuK_Vnvqg3fCn9vjy9GsNHeYC_OimKf79bm2lQmQo5PGNN9pByM4jmQn8-pSbKETCaDyep4VEFMsCdDZOfoDRtJp7TuvZESg7s_SG0IZ=w1280"
              alt="Christy"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Christy ?</h2>
          <p>
            Christy s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qbRN0KYFrZgIsKUaLt9L2i0FzxwAYSoEmjK_cic4BMWZZ_wuGguD1h0nAwMU3_g876EE3_8w1q5LqK5lDKcs1jrTnca8gZvjQ4F46HKDyALNSOiQ1cAkmm9JfBYvzxy24pTW4gOgDh2WhyPkRs2x5zjfdSAOVY02fceQPKAjgkXBiQJVZbPr45yQcFDr8tbXp0kDBIxQaAxb6khN2XqBFAi_ht64tVmtI3Y=w1280"
              alt="Évolution Christy"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 200 Master Fighters (EP3 1-4 : 9 éliminations pour 23 répétitions)</li>
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
