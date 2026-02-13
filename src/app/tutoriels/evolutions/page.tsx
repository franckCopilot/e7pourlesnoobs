'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Evolutions() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const heroesAG = [
    { name: 'adin', href: '/tutoriels/evolutions/adin' },
    { name: 'ainos', href: '/tutoriels/evolutions/ainos' },
    { name: 'alexa', href: '/tutoriels/evolutions/alexa' },
    { name: 'arowell', href: '/tutoriels/evolutions/arowell' },
    { name: 'carmainerose', href: '/tutoriels/evolutions/carmainerose' },
    { name: 'carrot', href: '/tutoriels/evolutions/carrot' },
    { name: 'christy', href: '/tutoriels/evolutions/christy' },
    { name: 'doris', href: '/tutoriels/evolutions/doris' },
    { name: 'glenn', href: '/tutoriels/evolutions/glenn' },
  ];

  const heroesEP = [
    { name: 'hazel', href: '/tutoriels/evolutions/hazel' },
    { name: 'helga', href: '/tutoriels/evolutions/helga' },
    { name: 'inquisitor', href: '/tutoriels/evolutions/inquisitor' },
    { name: 'jena', href: '/tutoriels/evolutions/jena' },
    { name: 'kluri', href: '/tutoriels/evolutions/kluri' },
    { name: 'lorina', href: '/tutoriels/evolutions/lorina' },
    { name: 'montmorancy', href: '/tutoriels/evolutions/montmorancy' },
    { name: 'pearlhorizon', href: '/tutoriels/evolutions/pearlhorizon' },
    { name: 'pyllis', href: '/tutoriels/evolutions/pyllis' },
  ];

  const heroesQZ = [
    { name: 'ras', href: '/tutoriels/evolutions/ras' },
    { name: 'rikoris', href: '/tutoriels/evolutions/rikoris' },
    { name: 'rima', href: '/tutoriels/evolutions/rima' },
    { name: 'roozid', href: '/tutoriels/evolutions/roozid' },
    { name: 'sect-axe', href: '/tutoriels/evolutions/sect-axe' },
    { name: 'wanda', href: '/tutoriels/evolutions/wanda' },
  ];

  const renderHeroGrid = (heroes: typeof heroesAG) => (
    <div className={styles.heroGrid}>
      {heroes.map((hero) => (
        <Link key={hero.name} href={hero.href} className={styles.heroCard}>
          <img
            src={`/images/tutoriels/evolutions/${hero.name}.jpg`}
            alt={hero.name}
            className={styles.heroImage}
          />
        </Link>
      ))}
    </div>
  );

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ÉVOLUTIONS</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les <strong>évolutions</strong> (Specialty Change SC) sont un contenu permettant d&apos;améliorer les 
            compétences et les statistiques de certains héros 3 étoiles. Pour débloquer les évolutions de ces 
            héros, il faudra terminer le niveau 10-10 de l&apos;épisode 1 de l&apos;aventure et effectuer des 
            missions propres à chaque évolutions. Votre personnage 3 étoiles devra être niveau 30 pour effectuer 
            son évolution.
          </p>
          <p>Il existe 2 exceptions pour les évolutions :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Celle de Ras qui se débloque au niveau 10-10 de l&apos;épisode 2</li>
            <li>Celle d&apos;Adin qui se débloque en progressant dans l&apos;épisode 4.</li>
          </ul>
          <p>
            Les héros évolués verront leur illustrations, leurs compétences et l&apos;animation de leurs 
            compétences modifiées.
          </p>
        </section>

        {/* Vidéo */}
        <section className={styles.videoSection}>
          <p className={styles.videoLabel}>Quelles évolutions faire sur Epic Seven ?</p>
          <div
            className={styles.videoWrapper}
            onClick={() => setActiveVideo('Ex0yur3YkSA')}
          >
            <img
              src="https://img.youtube.com/vi/Ex0yur3YkSA/hqdefault.jpg"
              alt="Guide évolutions"
              className={styles.videoThumb}
            />
            <div className={styles.playButton}>▶</div>
          </div>
        </section>

        {/* Instruction */}
        <p className={styles.instruction}>
          Choisissez l&apos;évolution que vous souhaitez consulter parmi la liste des évolutions ci-dessous.
        </p>

        {/* A-G */}
        <h2 className={styles.sectionTitleCenter}>A-G</h2>
        {renderHeroGrid(heroesAG)}

        {/* H-P */}
        <h2 className={styles.sectionTitleCenter}>H-P</h2>
        {renderHeroGrid(heroesEP)}

        {/* Q-Z */}
        <h2 className={styles.sectionTitleCenter}>Q-Z</h2>
        {renderHeroGrid(heroesQZ)}

        {/* Info blocks */}
        <section className={styles.section} style={{ marginTop: '50px' }}>
          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/evolutions/screenshot-1.jpg" alt="Onglet recrutement" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Pour accéder aux évolutions, il faudra se rendre dans l&apos;onglet <strong>Héros &gt; Recrutement</strong>
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/evolutions/screenshot-2.jpg" alt="Onglet évolutions" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Puis onglet <strong>Évolutions</strong>.</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/evolutions/screenshot-3.jpg" alt="2 évolutions simultanées" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Vous ne pourrez effectuer que <strong>2 évolutions en simultané</strong>. Il y aura 3 quêtes 
                d&apos;évolution à effectuer pour débloquer un combat d&apos;épreuve qui validera votre évolution.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/evolutions/screenshot-4.jpg" alt="Arbre de compétence" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Une fois votre évolution effectuée, il faudra vous rendre sur votre héros et améliorer 
                son <strong>arbre de compétence</strong> qui se situe dans l&apos;onglet <strong>éveil</strong> de 
                votre héros.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/evolutions/screenshot-5.jpg" alt="Runes nécessaires" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Pour améliorer un héros évolué, il faudra améliorer son arbre de compétence avec les 3 
                différents types de runes selon son éléments : <strong>415 runes majeures</strong> et <strong>40 
                runes épiques</strong> seront nécessaires.
              </p>
              <p className={styles.note}>
                <strong>NOTE</strong> : profitez d&apos;un <strong>Buff Event</strong> pour récupérer davantage de 
                runes par combat et énergie dépensée dans l&apos;<strong>autel de l&apos;esprit</strong>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </MainLayout>
  );
}
