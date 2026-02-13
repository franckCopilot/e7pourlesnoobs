'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Expeditions() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const bosses = [
    { name: 'pherus', href: '/tutoriels/expeditions/pherus' },
    { name: 'lich', href: '/tutoriels/expeditions/lich' },
    { name: 'moroi', href: '/tutoriels/expeditions/moroi' },
    { name: 'symaqus', href: '/tutoriels/expeditions/symaqus' },
    { name: 'gigantes', href: '/tutoriels/expeditions/gigantes' },
  ];

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>EXPÉDITIONS</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les <strong>expéditions</strong> sont un contenu mensuel vous permettant de récupérer de 
            l&apos;équipement, des points d&apos;expédition et d&apos;améliorer votre équipement de niveau 
            85 et 88 en niveau 90 grâce au <strong>reforge</strong>. Le contenu se débloque au chapitre 
            2 de l&apos;aventure.
          </p>
          <p>
            Un <strong>pass de ravitaillement</strong> est disponible moyennant 1500 skystones par mois 
            pour obtenir encore plus de récompenses.
          </p>
          <p>
            Chaque mois, 3 expéditions élémentaires sont disponibles avec différents boss. 
            Il existe <strong>3 niveaux de difficulté</strong> qui augmentent les récompenses. 
            Vous pouvez inviter des amis ou des membres de votre guilde pour vous aider.
          </p>
        </section>

        {/* Vidéo */}
        <section className={styles.videoSection}>
          <p className={styles.videoLabel}>Comment 100% toutes les expéditions</p>
          <div
            className={styles.videoWrapper}
            onClick={() => setActiveVideo('qLX3Xnxu4GI')}
          >
            <img
              src="https://img.youtube.com/vi/qLX3Xnxu4GI/hqdefault.jpg"
              alt="Guide expéditions"
              className={styles.videoThumb}
            />
            <div className={styles.playButton}>▶</div>
          </div>
        </section>

        {/* Instruction */}
        <p className={styles.instruction}>
          Choisissez l&apos;expédition que vous souhaitez consulter parmi les boss ci-dessous.
        </p>

        {/* Boss grid */}
        <div className={styles.subCardsGrid}>
          {bosses.map((boss) => (
            <Link key={boss.name} href={boss.href} className={styles.subCard}>
              <img
                src={`/images/tutoriels/expeditions/${boss.name}.jpg`}
                alt={boss.name}
                className={styles.subCardImage}
              />
            </Link>
          ))}
        </div>

        {/* Info blocks */}
        <section className={styles.section} style={{ marginTop: '50px' }}>
          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-1.jpg" alt="Onglet combat" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Pour accéder aux expéditions, allez dans l&apos;onglet <strong>Combat &gt; Expéditions</strong>. 
                Vous y trouverez les 3 expéditions mensuelles disponibles.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-2.jpg" alt="Pass expédition" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Le <strong>pass de ravitaillement</strong> (1500 skystones/mois) vous permet de récupérer des 
                récompenses supplémentaires au fur et à mesure de votre progression jusqu&apos;à 2000 points.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-3.jpg" alt="Apparition aléatoire" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Les expéditions apparaissent de manière aléatoire en effectuant des <strong>chasses</strong> ou 
                le <strong>rift dimensionnel</strong>. Vous pouvez également rejoindre les expéditions 
                partagées par vos amis ou votre guilde.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-4.jpg" alt="Paramétrage" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                N&apos;oubliez pas de <strong>paramétrer</strong> vos expéditions pour choisir les éléments 
                que vous souhaitez voir apparaître et activer le partage automatique.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-5.jpg" alt="Partage" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Pensez à <strong>partager vos expéditions</strong> pour que d&apos;autres joueurs puissent 
                vous aider. Cela permet de maximiser les récompenses pour tous les participants.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/expeditions/screenshot-6.jpg" alt="Récompenses reforge" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Les matériaux de <strong>reforge</strong> obtenus vous permettent d&apos;améliorer votre 
                équipement niveau 85 et 88 en niveau 90, augmentant ainsi significativement les statistiques 
                de vos pièces d&apos;équipement.
              </p>
              <p className={styles.note}>
                <strong>NOTE</strong> : arrêtez-vous à <strong>2000 points</strong> d&apos;expéditions. 
                Au-delà, vous ne gagnerez plus de récompenses supplémentaires du pass.
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
