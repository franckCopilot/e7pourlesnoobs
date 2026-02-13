'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Alexa() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ALEXA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>
            L&apos;évolution d&apos;Alexa est particulière, c&apos;est l&apos;unique héros avec une
            évolution limitée. L&apos;évolution d&apos;Alexa permet de remplacer Sigret dans la team
            W13 aussi bien pour débuter le jeu qu&apos;effectuer des teams OS avec. Le principal avantage
            d&apos;Alexa par rapport à Sigret est l&apos;amélioration de ses compétences qui ne nécessite
            pas de molagora. Une ressource rare et limitée sur Epic Seven. L&apos;évolution d&apos;Alexa
            est aussi puissante voire plus forte que Sigret.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRRbuGtlklCIJSyrUdZ57UG5IV3TFYwvOAoXQfOS4xehOVy9Q849JggbUoF-eYJubFtwc1TuCpSfDpQRAmi4702dGqyKXlf-qxwAnEc8P62rj8EZi4N6M0jbMDwId9rYCcGhThnh52J8EPkM23s7TKbmWr4tba1SKXOnJm5xAzDwXScSO6-3bsFgG8=w1280"
              alt="Alexa"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Alexa ?</h2>
          <p>
            Alexa s&apos;obtient dans les relations : onglet Héros &gt; Recrutement. Puis dans Relations,
            il y aura 3 missions faciles à effectuer.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQkCqF3tOHAwWbFin6544s6EWDH8DcQO3XpvvmhSgvtCS33_xDg6-MyrwbDzHb_PGtZmcYwW__zJao5mWj-dc3vEV7Z0YwmSn1Qun5Qp8GoR3WdMvPOmvKZfHJn5YDxrUedOoxIvk2lf40dM9N-p9OynjDp7EBHOwU94wxNnjvW_lmvPHNCN7xzeJ1L3eDt3Yu9ZUdw6GNk9q_FeIFz9H3F3XwPNJ35AE3G=w1280"
              alt="Relations Alexa"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>
                Recrutez Alexa via l&apos;onglet Relations dans le menu Héros.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Débloquer l&apos;évolution</h2>
          <p>
            L&apos;évolution se débloque dans l&apos;histoire secondaire &gt; Livre extra-temporel.
            Il faudra acheter l&apos;Ordre de l&apos;Épée et le Seigneur de l&apos;été contre un
            Indicateur temporel qui s&apos;achète dans la boutique contre 900 Skystones.
            900 Skystones sont moins rares que les 33 molagoras économisées pour améliorer les
            compétences de Sigret.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0ST_7zrwIWRLbdHevs6NdkCqaraYt2GT3Vw5Ff8DMui7off1__wS98_X-NBS5k7J0VmhOv_gifHi3-gdvVUMRZVhCy9FfSBCtyy-8QZRRAsudtLjKNMT-3VBADOQCWhzsAn5SERvyYqjFm2EDSJ874LUbr3WKvoFsS-0jlTwH-2hpWl9Nni6FIRC770ejbFDtfAJ_c1SjCoBvpLR3Pcco8VNE4ukjkXyJE2q=w1280"
              alt="Livre extra-temporel"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <p>
            Voici les missions à compléter pour débloquer l&apos;évolution d&apos;Alexa :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>
              <strong>Éliminer 50 monstres</strong> dans le Labyrinthe Capitale royale Azmakalis.
            </li>
            <li>
              Le chemin le plus simple se fait en une seule entrée.
            </li>
          </ul>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STebqspSfvVJeggHinQV6xEWxm07Hr2YnBz31DSyfhUxSY7Ij3Nl32CQrud6cCLB9dyv9Ki2jJ7a8XD5GOfddRflEQCBLqoEpx4psibaifjf8CgAILtGJFn-E-7jpqWh7o2YvMzIht803qffAXKDqYwlCMDyH8LXdzQKdjDPskNr1mgufXdMaZITAJrkav77XxbGuqJRB7Tk_I6cUqL0S9Bo-Tx8zezhxMg5ME=w1280"
              alt="Carte du labyrinthe Azmakalis"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Suivez le chemin indiqué sur la carte pour éliminer 50 monstres en une seule entrée.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Utilisation en Wyvern 13</h2>
          <p>
            Pour remplacer Sigret dans votre composition de la Wyvern 13, suivez simplement le guide
            classique avec les mêmes équipements que Sigret. Vous pourrez améliorer ses compétences au
            maximum ainsi que son arbre de compétence.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ5oITfVzQ4Dk23li-pBpS_sFlqj5tFjviK1DqJcI-o-DiVyuc0W6rTv2Uupgl5hSFnaF1x2hGj2ZL9X9_BA2fpAXwDLPO0ihr7vYFoAkFdkBcgaKTQIpfiItRZd5UB8we7yd0MJgDTYagbOWwNh4tVYUDAyptVyLFx5IGEnEZCV5xr_gj_lP-IBYI=w1280"
              alt="Build Alexa pour W13"
              className={styles.infoImage}
            />
          </div>
        </section>

        <p className={styles.note}>
          Astuce : Alexa est le meilleur investissement pour les débutants souhaitant farm la Wyvern 13
          sans dépenser de molagoras.
        </p>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
