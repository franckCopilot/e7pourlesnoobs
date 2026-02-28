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
            { desc: 'Ml Vivian en équipement PvP', img: '/images/tutoriels/chasses/golem1.png' },
            { desc: 'Cermia en set Rage + infiltration + artefact à rajouter, 1er EE', img: '/images/tutoriels/chasses/golem2.png' },
            { desc: "Léo, même équipement que la banshie artefact d'elphelt, Nakhwol ou SOS", img: '/images/tutoriels/chasses/golem3.png' },
            { desc: 'Vivian, même équipement à chaque contenu, 2eme EE pour la chasse', img: '/images/tutoriels/chasses/golem4.png' },
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
