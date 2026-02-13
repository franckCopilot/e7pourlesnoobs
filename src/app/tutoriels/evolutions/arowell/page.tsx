'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Arowell() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>AROWELL</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>
            L&apos;évolution d&apos;Arowell est l&apos;un des meilleurs chevaliers du jeu pour protéger
            votre équipe, une mitigation. Elle a la possibilité de donner une très grosse barrière à son
            équipe, retirer des bonus à l&apos;adversaire et la possibilité de l&apos;étourdir. Elle boost
            énormément les héros lumières, il faudra essayer d&apos;en jouer le plus possible avec elle
            pour en profiter. L&apos;évolution d&apos;Arowell est principalement orientée PvP, même si
            elle est utile pour affronter la reine dans le Raid cauchemar.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRuv1pw-UN_3xNi35XFObBMvo4s6VxSUYeJ8ZPzgHWDgc8qMWVeTEjETKWkIzMw_OVaF3086yl91nk6fDY1No5KuaB0h7YzI3jNdzhYqM7LHTd7_bUhw0x5jCii14yJseHx-IuLnNmAQsEVEU83Z1eeqzeKNvkbNqw-G6Ab0t8jHmaBkdxmgEQqr10=w1280"
              alt="Arowell"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Arowell ?</h2>
          <p>
            Arowell s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STPrTVU67_wW0_8WXKvh87miV3yDPvG-C0wVURlO-f4KEmHNR9ZSMDjaRPGeiPC4jI-aouqzVe5qTM3XItnevgdcmNaY6t3yR1ELizln50_NlTzbWYin38TGMmqLgk-AQv4fUn6ybmY1eUdSlP5fBVcfbj9ljvM-StkTuhaOblBeGO9KL1qNSNzBxT9gi_5aBcK-yGbREnfvKfZt6n8v8Hyp-CleGIZ-dvMdsQ=w1280"
              alt="Évolution Arowell"
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
            Voici les missions à compléter pour débloquer l&apos;évolution d&apos;Arowell :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>
              <strong>Éliminer 100 Order of the Shield soldiers</strong> in South Wetheric Moor avec
              Arowell dans l&apos;équipe.
            </li>
            <li>
              UH 19 : 5 éliminations par run → 20 répétitions.
            </li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
