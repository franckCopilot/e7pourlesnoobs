'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Carmainerose() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CARMAINEROSE</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution de Carmainerose est principalement utilisée en PvE pour effectuer
            l&apos;expédition lumière.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSyg2tIw6XNJwWghfn21r7XJlRpybna1PsjdcvHIBRTkRJZRkD-pkMSVQwLD1MakFbLn6v5IgIRs5hrX5X7IU4kvCXPPr0urdm8G2dQmUT6StK9lqvpIO3H_LsWVBv0tacwTnpq4wMBXeQDpkvBfyHc_d_2bV3JPkGG6uLioPC1nzleReopS8XJNXQ=w1280"
              alt="Carmainerose"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Carmainerose ?</h2>
          <p>
            Carmainerose s&apos;obtient en invoquant, principalement avec les Invocation de la prophétie.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRy_jc8nBOUl1yIanuihUehxFfhNTLhhJ9U7AlTaewl-iqfhuZ8DIeYa3ENZshqA4xzdpmgXGqE87TaHXq3JHh9jGtf1Y90LK9YCN4Sy75c6ihTrbIviO0q76V12Dl5U3l5kS2LmlOOgJ18NSfACmlfJfIruE80hh4xW5P4RL7bjwSBA02T5jUNvXp7SccQexm_cV37NSxeX1uQET0LzdVam8aZesmDtMwTd4Y=w1280"
              alt="Évolution Carmainerose"
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
            Voici les missions à compléter pour débloquer l&apos;évolution de Carmainerose :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>
              <strong>Éliminer 250 monsters from the Sacred Kingdom</strong> avec Carmainerose
              dans l&apos;équipe.
            </li>
            <li>
              UH 19 : 5 éliminations par run → 50 répétitions.
            </li>
            <li>
              EP1 6-5 laby : 11 éliminations par run → 23 répétitions.
            </li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
