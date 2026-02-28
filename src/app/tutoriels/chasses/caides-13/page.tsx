'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Caides13() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Caides 13</h1>

        <section className={styles.section}>
          <p>Chacune des chasse vous permettra d&apos;obtenir des sets qui leur sont propres.</p>
          <p>Le Caides vous permettra d&apos;obtenir les sets <strong>Vengeance</strong>, <strong>Tumulte</strong>, <strong>Infiltration</strong> et <strong>Blessure</strong>.</p>
        </section>

        {/* Vidéo 1 - Composition */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Caides 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Guide Chasse caides 13 rapide + facile</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
              <img src="https://img.youtube.com/vi/_IYBUiu-8X8/hqdefault.jpg" alt="Caides 13" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>La chasse du Caides est la <strong>plus difficile</strong> des chasses.</p>
            <p>Cette composition est la plus efficace et simple à mettre en place.</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Utilisez <strong>Iseria</strong> pour ses Bdef et son s2.</li>
              <li>Utilisez <strong>Angelica pécheresse</strong> pour booster votre team, la cleans et apporter une dual attaque</li>
              <li><strong>Camila</strong> sera parfaite pour les dual attaques et ses Bdef</li>
              <li><strong>Sc Lorina</strong> est le DPS par excellence de la composition.</li>
            </ul>
            <p className={styles.note}><strong>NOTE</strong> : Il y a 2 boss à affronter.</p>
            <p>65% d&apos;efficacité sont suffisantes pour maximiser vos chances d&apos;infliger un malus.</p>
          </div>
        </section>

        {/* Vidéo 2 - Optimisation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation ultime du Caides 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>CAIDES 13 à 100% (95%)</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('j1K9i7FS77Q')}>
              <img src="https://img.youtube.com/vi/j1K9i7FS77Q/hqdefault.jpg" alt="Caides 13 Optimisation" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Cette composition sera la plus efficace : <strong>100% de victoire</strong> et très rapide.</p>
            <p>Néanmoins elle reste difficile à effectuer car elle demandera des héros spécifiques et d&apos;excellents équipements du set <strong>Tumulte</strong> (torrent).</p>
            <p>Un investissement qui demandera du temps et de l&apos;énergie au travers de la chasse du Caides.</p>
          </div>
        </section>

        {/* Hero Builds */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Camilla, artefact qui boost lorina, plus lente qu\'Angelica Pecheresse', img: '/images/tutoriels/chasses/caides1.png' },
            { desc: 'Sc Lorina : le plus de dégats possible artefact DDJ', img: '/images/tutoriels/chasses/caides2.png' },
            { desc: 'Angélica Pécheresse : max 180 speed, 200 ER, artefact qui boost la team', img: '/images/tutoriels/chasses/caides3.png' },
            { desc: "Iseria 220/240 speed, 65% efficacité, artefact d'elphelt, Nakhwol ou SOS", img: '/images/tutoriels/chasses/caides4.png' },
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
