'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ainos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>AINOS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution d&apos;Ainos est plaisante à jouer en PvP pour booster sa team et en PvE
            pour les challenges de l&apos;abîme ou pour les teams OS de la chasse A13.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQm-azDfFnC-bwB_YPHsTBMIclDIhQ8JFXxGetVVNOW43XSatNsglmQer6o3He8KXKISUKmGY1MYHDctL9SUr94V9eFN4lg3LopV2D_B3CMRBWJTc6Xffc9C-UeryjG1hkF4Ug6o34iSQaqEq7sV6zBujwuA5zsDee3g06Lc0TGu2JATtFGtYoT4dI=w1280"
              alt="Ainos"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Ainos ?</h2>
          <p>
            Ainos s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STPrTVU67_wW0_8WXKvh87miV3yDPvG-C0wVURlO-f4KEmHNR9ZSMDjaRPGeiPC4jI-aouqzVe5qTM3XItnevgdcmNaY6t3yR1ELizln50_NlTzbWYin38TGMmqLgk-AQv4fUn6ybmY1eUdSlP5fBVcfbj9ljvM-StkTuhaOblBeGO9KL1qNSNzBxT9gi_5aBcK-yGbREnfvKfZt6n8v8Hyp-CleGIZ-dvMdsQ=w1280"
              alt="Évolution Ainos"
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
            Voici les missions à compléter pour débloquer l&apos;évolution d&apos;Ainos :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>
              <strong>Éliminer 30 Analysis Drone monsters</strong> avec Ainos dans l&apos;équipe.
            </li>
            <li>
              EP3 7S-5 ou 10-S1 : 1 élimination par run → 30 répétitions.
            </li>
            <li>
              EP3 6-5 ou 6-9 laby : 2 éliminations par run → 15 répétitions.
            </li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
