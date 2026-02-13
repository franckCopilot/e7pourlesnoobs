'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Lorina() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>LORINA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>L&apos;évolution de Lorina est l&apos;un des meilleurs DPS monocible du jeu en PvE. Elle est très populaire dans presque tous les contenus PvE du jeu : dans les abîmes, en expédition feu, en chasse du Caides ou encore en Labyrinthe.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRvRlj4DwK3mYp1ovTVdHLMZV1ZW31izp7L5BADVhBRtT6yr75mzguWK24pBXkTiaqn2fL99hRyByG21rCyjjUju_g8ZSMYu2tFYorRLFRfODylbYVtfzeIix-GqxLAZ8Kw-QwfOhfBsydQGAYNz2GJRszfM5YSROSAQSQ4cR0qSuxDC7LDyJKe--Q=w1280"
              alt="Lorina"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Lorina ?</h2>
          <p>Lorina s&apos;obtient dans les relations : onglet Héros &gt; Recrutement. Puis dans Relations, il y aura 3 missions faciles à effectuer.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSC5fT5524tV13GfwLtyIJjp498kVTIt1hU415-TSeisyOrMaLxQDzWAt8Zj98XUgA3cdhUAjCqNSqe8jnhk4pEOnBo1b5ZO8tXBdDknHu-qr4YO0tKLPIMegq17XmBZNxTPs6L1k1AwrnT9Kkg2rP7Oewgblbm8MJNxUVn22TqXlVWZIOjQz1eOCM77NZpXzX0njoJc3BR5kPsVCn4lXd6XGozBIcQ7oq9=w1280"
              alt="Relations"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Rendez-vous dans l&apos;onglet Héros &gt; Recrutement &gt; Relations pour débloquer Lorina via les missions de relations.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STnY16DcCJvKfB6O-k9aG24LIGXcicys_kLsWdPlzbQtAzy07jc6aZeWljy_GZy-5VR5nqpEYsaC4cJNBP8nr5Yy-gFN_8qRzIM4T6AvU6C6mLXucbjBAgd2ynm-1yAVaBl3Pf4Ppf_EdIPz9_nBhhScj09pn6IFnsmnlVQBlgNZcmP5m51ytkcnVrd9tdFeht4AVoJcNtkiMjOFusgO1B2jpu5aEHlzJ5h=w1280"
              alt="Évolution"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Lorina n&apos;a pas de missions de combat spécifiques pour son évolution. Il suffit de compléter les missions de relations pour la débloquer.</p>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Lorina est fortement recommandée pour tous les joueurs. Son évolution en fait l&apos;un des meilleurs DPS monocible gratuits du jeu, indispensable pour progresser en PvE.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
