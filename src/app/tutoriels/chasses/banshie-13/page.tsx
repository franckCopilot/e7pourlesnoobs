'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Banshie13() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Banshie 13</h1>

        <section className={styles.section}>
          <p>Chacune des chasse vous permettra d&apos;obtenir des sets qui leur sont propres.</p>
          <p>La Banshee vous permettra d&apos;obtenir les sets <strong>Contre</strong>, <strong>Vol de Vie</strong>, <strong>Destruction</strong> et <strong>Résistance d&apos;effet</strong>.</p>
        </section>

        {/* Vidéo 1 - Débutant */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Banshee 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>BANSHEE 13 F2P facile en quelques semaines</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('9g_ez0tZQtA')}>
              <img src="https://img.youtube.com/vi/9g_ez0tZQtA/hqdefault.jpg" alt="Banshee 13 F2P" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Favorisez les <strong>héros terre</strong> pour maximiser votre réussite sur la Banshee 13.</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Utilisez un personnage résistant à droite : <strong>Fluri</strong> est une bonne option</li>
              <li>Utilisez un personnage soutien : <strong>Sc montmorancy</strong> ou <strong>Destina</strong> seront parfaites</li>
              <li>Utilisez <strong>Vivian</strong> : elle est gratuite, tape fort, boost votre team et donne l&apos;immunité</li>
              <li>Utiliser un deuxième DPS : <strong>vildred</strong>, <strong>Sc lorina</strong>, <strong>Landy</strong> sont de bonnes options.</li>
            </ul>
            <p className={styles.note}><strong>NOTE</strong> : la chasse est longue, ne la répétez pas sans une équipe qui peut OS le boss.</p>
            <p>65% d&apos;efficacité sont suffisantes pour maximiser vos chances d&apos;infliger un malus.</p>
          </div>
        </section>

        {/* Vidéo 2 - Mid/Late */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>La Banshee 13 en Mid-game / Late game</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>OS banshee 13 avec AE-Giselle ou Baiken</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('k3B9Pq2QpUk')}>
              <img src="https://img.youtube.com/vi/k3B9Pq2QpUk/hqdefault.jpg" alt="Banshee 13 Mid-game" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>L&apos;objectif par la suite sera d&apos;améliorer votre composition pour qu&apos;elle soit la plus efficace possible. C&apos;est à dire, avec un des meilleurs taux de réussite, tout en étant rapide. Il faut impérativement <strong>One Shot</strong> (OS) la banshee pour que la chasse soit rentable.</p>
            <p className={styles.note}><strong>NOTE</strong> : Les compositions avancées ne vous permettront pas de gagner à 100% la chasse, car vous aurez toujours 15% de chance de ne pas infliger de malus à la banshee 13 et de fait, d&apos;échouer votre chasse.</p>
            <p>Néanmoins, cette composition reste largement plus efficace que la composition débutant pour dépenser rapidement votre énergie.</p>
            <p>L&apos;objectif sera de booster votre équipe et de OS la vague 1 avec <strong>Vivian</strong>.</p>
            <p><strong>Léo</strong> devra impérativement Bdef le Boss, puis votre DPS devra OS le Boss. Vivian ne devra pas faire passer le boss en dessous de 70% de ses Points de vie avant votre DPS.</p>
            <p>Pour simplifier la chasse, <strong>furious</strong> permet maintenant avec son Équipement Exclusif d&apos;infliger une entrave sur le Boss et donc d&apos;OS le boss en deux temps avant son tour de jeu avec votre DPS. Une alternative efficace pour débuter.</p>
            <p><strong>Baiken</strong>, <strong>Ram</strong>, <strong>AE-Giselle</strong> et <strong>Yufine</strong> peuvent OS la Banshee.</p>
          </div>
        </section>

        {/* Vidéo 3 - Optimisation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation ultime de la Banshee 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>BANSHEE 13 OS à 100%</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('CpPXspOU1yw')}>
              <img src="https://img.youtube.com/vi/CpPXspOU1yw/hqdefault.jpg" alt="Banshee 13 Optimisation" className={styles.videoThumb} />
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
            { desc: "Léo niveau 50, le plus rapide de la team. artefact d'elphelt, Nakhwol ou SOS", img: '/images/tutoriels/chasses/banshee1.png' },
            { desc: 'Vivian, même équipement à chaque contenu, 2eme EE pour la chasse', img: '/images/tutoriels/chasses/banshee2.png' },
            { desc: 'Baiken en set Rage + infiltration + artefact à rajouter (DDJ)', img: '/images/tutoriels/chasses/banshee3.png' },
            { desc: "AE-giselle : variante avec artefact Kal'adra", img: '/images/tutoriels/chasses/banshee4.png' },
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
