'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Azimanak13() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Azimanak 13</h1>

        <section className={styles.section}>
          <p>Chacune des chasse vous permettra d&apos;obtenir des sets qui leur sont propres.</p>
          <p>L&apos;Azimanak vous permettra d&apos;obtenir les sets <strong>Immunité</strong>, <strong>Unité</strong> et <strong>Rage</strong>.</p>
        </section>

        {/* Vidéo 1 - Débutant */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Azimanak 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Azimanak 13 F2P facile</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cWxOFbXhFpU')}>
              <img src="https://img.youtube.com/vi/cWxOFbXhFpU/hqdefault.jpg" alt="Azimanak 13 F2P" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Utilisez un personnage résistant à droite : <strong>Sc Ras</strong> sera parfait</li>
              <li>Utiliser 2 DPS de zone (AOE) : <strong>vildred</strong>, <strong>Landy</strong>, <strong>Arby</strong>, <strong>Teneberia spectrale</strong>, <strong>vivian</strong>, <strong>Mercedes</strong> sont d&apos;excellents choix.</li>
              <li>Utilisez un personnage soutien : <strong>Tamarinne</strong> est la reine du PvE.</li>
            </ul>
            <p className={styles.note}><strong>NOTE</strong> : Vous devez toujours tuer les 2 alliés du boss.</p>
            <p>65% d&apos;efficacité sont suffisantes pour maximiser vos chances d&apos;infliger un malus.</p>
          </div>
        </section>

        {/* Vidéo 2 - Optimisation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation ultime d&apos;Azimanak 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>AZIMANAK 13 OS à 100%</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('qispTS4LcXw')}>
              <img src="https://img.youtube.com/vi/qispTS4LcXw/hqdefault.jpg" alt="Azimanak 13 Optimisation" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Cette composition sera la plus efficace : <strong>100% de victoire</strong> et très rapide.</p>
            <p>Néanmoins elle reste difficile à effectuer car elle demandera des héros spécifiques et d&apos;excellents équipements du set <strong>Tumulte</strong> (torrent).</p>
            <p>Un investissement qui demandera du temps et de l&apos;énergie au travers de la chasse du Caides.</p>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
