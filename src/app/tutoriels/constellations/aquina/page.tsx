'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Aquina() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Constellation Aquina</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Constellation Éternel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Constellation éternel Glace</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('N8_GIj_K190')}>
              <img src="https://img.youtube.com/vi/N8_GIj_K190/hqdefault.jpg" alt="Constellation Aquina" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>L&apos;objectif du combat est de régulièrement <strong>contre-attaquer</strong>.</p>
          <p><strong>Composition :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Devant : <strong>Ervalen</strong> est le meilleur choix, <strong>violet</strong> fonctionne.</li>
            <li><strong>Charles</strong> est fortement recommandé.</li>
            <li><strong>Roenna</strong> est fortement recommandé.</li>
            <li><strong>Bernard</strong> est le meilleur choix, <strong>Ray</strong> fonctionne.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Le SoulBurn de Charles est très intéressant pour la fin du combat.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : la troisième bénédiction de <strong>Vierge</strong> est recommandée.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: "Violet avec le plus de dégâts possible en destruction et infiltration. Il faut plus de 14 500 hp, un peu de vitesse et surtout un artefact évasion.", img: '/images/tutoriels/constellations/aquina1.jpg' },
            { desc: "Charles avec le plus de dégâts possible en destruction et infiltration. Il faut plus de 14 500 hp, un peu de vitesse, son troisième EE et un artefact dégâts.", img: '/images/tutoriels/constellations/aquina2.jpg' },
            { desc: "Roenna avec le plus de santé possible en set contre-attaque requis. Il faut des bottes vitesse et l'artefact stella Harpa.", img: '/images/tutoriels/constellations/aquina3.jpg' },
            { desc: "Bernard avec le plus de santé possible en set contre-attaque requis. Il faut des bottes vitesse et pas mal de vitesse. Celestine est un artefact utile.", img: '/images/tutoriels/constellations/aquina4.jpg' },
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
