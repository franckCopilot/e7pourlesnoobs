'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Montmorancy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>MONTMORANCY</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>L&apos;évolution de Montmorancy est la première évolution à effectuer sur Epic Seven. C&apos;est un des meilleurs héros du jeu pour retirer des malus à ses alliés. Elle joue très régulièrement et apporte beaucoup de soin à ses alliés. Elle est utile dans la plupart des contenus PvE du jeu : contre Karkanis en raid cauchemar, en Wyvern 13 et dans beaucoup d&apos;expéditions et étages des abîmes.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQq1JidW-YWFyDZzI7ox-l7ytFFs5e3OG5YjMb53vNWewJ_NFNJaYS--79NKfAHWZCqeaCx-dYsfl7JvqYf_hpyfNNTSUFMcAZp1sVKb0Jomy49BbRDydap_xVkHxQ-U9kWlnqLDY-7I8pVdJAxdGMAoxFUFP_vGtm-smSFWl-kgf7i8CqW4dO-IOs=w1280"
              alt="Montmorancy"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Montmorancy ?</h2>
          <p>Montmorancy s&apos;obtient dans les relations : onglet Héros &gt; Recrutement. Puis dans Relations, il y aura 3 missions faciles à effectuer.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSC5fT5524tV13GfwLtyIJjp498kVTIt1hU415-TSeisyOrMaLxQDzWAt8Zj98XUgA3cdhUAjCqNSqe8jnhk4pEOnBo1b5ZO8tXBdDknHu-qr4YO0tKLPIMegq17XmBZNxTPs6L1k1AwrnT9Kkg2rP7Oewgblbm8MJNxUVn22TqXlVWZIOjQz1eOCM77NZpXzX0njoJc3BR5kPsVCn4lXd6XGozBIcQ7oq9=w1280"
              alt="Relations"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Rendez-vous dans l&apos;onglet Héros &gt; Recrutement &gt; Relations pour débloquer Montmorancy via les missions de relations.</p>
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
              <p>Voici les missions à compléter pour évoluer Montmorancy :</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Spirits (UH 15: 8 elim for 63 reps)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Montmorancy est fortement recommandée et devrait être la première évolution de tout joueur débutant. Son rôle de soigneuse et purificatrice est indispensable dans la majorité des contenus PvE.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
