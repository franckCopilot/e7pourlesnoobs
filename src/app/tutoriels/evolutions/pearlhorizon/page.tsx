'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pearlhorizon() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>PEARLHORIZON</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <p>L&apos;évolution de Pearlhorizon est peu jouée, c&apos;est un personnage PvP contrôle qui peut endormir les adversaires et effectuer des dégâts.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRalzjnLOkUVcgYTX3dr_nbMDkTxSwTVbo2qyCoafVtxqrgAU_s7QFtNzbSmNcw1KgXZ5PwUVClXGmyBOeJ0z-vvii2XdCXe58L1cBfK9ZywDAKijujXJlnOqHTkr6VwjDq_FS99ZGwMPj1aOxBcvWCVPXAK4_UnUpZXaXI5HoNczNK7ESaPoWahtc=w1280"
              alt="Pearlhorizon"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Pearlhorizon ?</h2>
          <p>Pearlhorizon s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.</p>
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
              <p>Voici les missions à compléter pour évoluer Pearlhorizon :</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Artificial Creatures (UH 28: 10 elim for 50 reps)</li>
                <li>Éliminer 20 Rose apostle Priests (EP2 9-S2: 3 elim for 7 reps)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Pearlhorizon étant un héros niche, son évolution n&apos;est recommandée que pour les joueurs avancés qui souhaitent l&apos;utiliser en PvP.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
