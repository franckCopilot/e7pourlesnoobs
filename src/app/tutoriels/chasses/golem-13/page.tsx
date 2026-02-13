'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Golem13() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Golem 13</h1>

        <section className={styles.section}>
          <p>Chacune des chasse vous permettra d&apos;obtenir des sets qui leur sont propres.</p>
          <p>Le Golem vous permettra d&apos;obtenir les sets <strong>Santé</strong>, <strong>Défense</strong>, <strong>Attaque</strong> et <strong>Protection</strong>.</p>
        </section>

        {/* Vidéo 1 - Débutant */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Golem 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>GOLEM 13 F2P facile en quelques semaines</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('jFrIqJwIin8')}>
              <img src="https://img.youtube.com/vi/jFrIqJwIin8/hqdefault.jpg" alt="Golem 13 F2P" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Favorisez les <strong>héros feu</strong> pour maximiser votre réussite sur le Golem 13.</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Utilisez un personnage résistant à droite : <strong>Sc Ras</strong> sera la meilleure solution</li>
              <li>Utilisez un gros DPS monocible : profitez de <strong>Cermia</strong>, elle est gratuite.</li>
              <li>Utilisez un deuxième DPS : <strong>mercedes</strong> est parfaite. <strong>Lorina</strong> ou <strong>Tenebria spectrale</strong> sont aussi bien.</li>
              <li>Utilisez un personnage soutien : <strong>Tamarinne</strong> est la reine du PvE, <strong>Sc Hazel</strong> sera une bonne alternative.</li>
            </ul>
            <p className={styles.note}><strong>NOTE</strong> : Vous devez limiter vos attaques sur le boss.</p>
            <p>65% d&apos;efficacité sont suffisantes pour maximiser vos chances d&apos;infliger un malus.</p>
          </div>
        </section>

        {/* Vidéo 2 - Optimisation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation ultime du Golem 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>GOLEM 13 OS à 100%</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('J7-vNk57ruQ')}>
              <img src="https://img.youtube.com/vi/J7-vNk57ruQ/hqdefault.jpg" alt="Golem 13 Optimisation" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Cette composition sera la plus efficace : <strong>100% de victoire</strong> et très rapide.</p>
            <p>Néanmoins elle reste difficile à effectuer car elle demandera des héros spécifiques et d&apos;excellents équipements du set <strong>Tumulte</strong> (torrent).</p>
            <p>Un investissement qui demandera du temps et de l&apos;énergie au travers de la chasse du Caides.</p>
          </div>
        </section>

        {/* Composition notes */}
        <section className={styles.section}>
          <p>Composition OS rapide que j&apos;utilise, improvisé sur le tas avec les héros que je possède.</p>
          <p><strong>Vivian</strong> et <strong>ml Vivian</strong> boostent cermia et terminent la vague 1</p>
          <p><strong>Léo</strong> Bdef le golem et <strong>cermia</strong> le tue.</p>
        </section>

        {/* Hero Builds */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Ml Vivian en équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ3XHUmjH1vURAp1GPvaF57UvoA13eOXVbFbaBfCjo4KdlH-xoBQv0VgVfJKyZR1cdcri3K3p3ivo8VuFBdZapprLukiVHZ0FCpCjPg2wy4n0JgFP9Kbzmv7Q7pB57bZCsujk-eykW0VSqTlz83ZDWf1Olyjw9n13jW8TWpF8FgHt567c2DTq46ErQaEBUGgpzYJ8ZfwLQlMn1cC4qe-xqMoM6YNle6G2c_=w1280' },
            { desc: 'Cermia en set Rage + infiltration + artefact à rajouter, 1er EE', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR2DQG2ifgAhT7C-B2AvYHOehzmSwnXUQ75kCIaz4WPBUsayOhaUxiy0B10dUOpijRaB3J2RAQH-IGsAvo9kUF_WNa3Q-LCC7i9ZpYZY6zYnSbCkmYkwP7BylLU70EoCbEdKfBH9Hl9tm6Iq2pI7kmAZtnG28bl7_IE-HN4uEl79ljn7DdcjyuGwlmQu6Njn6g4ZX2u9ONmDCqzxdF9sWjUGpV6bG_GRRaJ=w1280' },
            { desc: "Léo, même équipement que la banshie artefact d'elphelt, Nakhwol ou SOS", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSCfD9Qr36-62HnLUPf1fRWdzi0OBZJgeBVLUfeBn039sBCbnbMGYVk1CvhjHlAvyerci2AznDj9XHM-nM3ZmQfKw58W2HrjCt32IgPKFnsqjgA6SyY6Wng9Strkuh2JPPqkBWVFXtGkzJ7Dw8nZf4Q4jKkSkZaOyaZ_nqGWCvbPFC8_OP5AkWlTJ7j7nRJ_VLY1DxfHl8MQ0LNgM3CiwK3cjNZ92oS-IedflY=w1280' },
            { desc: 'Vivian, même équipement à chaque contenu, 2eme EE pour la chasse', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR60kYG9y3xQwdJbjDpV3D-VL_D2sbn0g7YP26Wc8E9jDfjUL2qV_3Ej8vZMhhXcWH7mxnGMOPlQpsrG5RfGRkfEREYXm9j13K2zmEq-LKNWH2w6OBlgybwmM59jKamKbvIpc22RFM6J4GTxy2j-GNd3YghnbIv_1P6JuBLieIXhqZf-N2M2sgd5IsaY5Ta2h3PznoJSPdbDf-Kgf0FqvtZ-Au1yqUzFgDH_zk=w1280' },
          ].map((hero, i) => (
            <div key={i} className={styles.infoBlock}>
              <img src={hero.img} alt={hero.desc} className={styles.infoImage} />
              <div className={styles.infoText}>
                <p>{hero.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
