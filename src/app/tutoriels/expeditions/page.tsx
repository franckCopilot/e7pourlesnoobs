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

        {/* Vidéo + texte */}
        <section className={styles.section}>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>100% toutes les expéditions en mode optimisé</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('qLX3Xnxu4GI')}>
              <img src="https://img.youtube.com/vi/qLX3Xnxu4GI/hqdefault.jpg" alt="Expéditions optimisées" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>
            Il est vivement conseillé de regarder un guide pour chacune des expéditions afin de progresser pas à pas sur Epic Seven.
          </p>
          <p>
            Néanmoins, si vous voulez un exemple de teams très optimisées pour chacune des expéditions, vous pouvez vous référer à ma vidéo qui propose des compositions d&apos;équipe pouvant terminer à 100% chacune d&apos;entre elles.
          </p>
        </section>

        {/* Info blocks screenshots */}
        <section className={styles.section}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <p>Les expéditions se trouvent dans l&apos;onglet <strong>combat</strong> en glissant le menu vers la droite.</p>
              <img src="/images/tutoriels/expeditions/screenshot-1.jpg" alt="Onglet combat" className={styles.infoCellImage} />
            </div>
            <div className={styles.infoCell}>
              <p>Le <strong>pass mensuel de ravitaillement</strong> s&apos;achète en bas à gauche.</p>
              <img src="/images/tutoriels/expeditions/screenshot-2.jpg" alt="Pass expédition" className={styles.infoCellImage} />
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <p>Les expéditions s&apos;obtiennent aléatoirement en effectuant des chasses ou des combats du mode Rift. Vous les retrouverez en bas à droite dans mes <strong>Avis de recherche</strong>.</p>
              <img src="/images/tutoriels/expeditions/screenshot-3.jpg" alt="Apparition aléatoire" className={styles.infoCellImage} />
            </div>
            <div className={styles.infoCell}>
              <p>Vous pouvez paramétrer vos expéditions pour les lancer en simultanée en fonction des difficultés que vous souhaitez. Vous pouvez même inviter directement vos amis et votre guilde&nbsp;!</p>
              <img src="/images/tutoriels/expeditions/screenshot-4.jpg" alt="Paramétrage" className={styles.infoCellImage} />
            </div>
          </div>
        </section>

        {/* Score + screenshot-5 */}
        <section className={styles.section}>
          <div className={styles.infoBlockLast}>
            <div className={styles.infoTextLast}>
              <p>
                Rappelez-vous que plus vous faites un gros score dans vos expéditions, plus vos amis seront incités à les terminer et à profiter de vos expéditions pour terminer leur <strong>pass de ravitaillement</strong>.
              </p>
              <p>
                En participant et en terminant les expéditions de vos amis, vous gagnez aussi des points d&apos;expédition pour votre pass.
              </p>
              <p>
                Il est possible d&apos;affronter 3 fois le boss d&apos;une expédition pour maximiser votre score mais il est conseillé de ne l&apos;affronter qu&apos;une seule fois pour économiser votre énergie et laisser d&apos;autres participants profiter de l&apos;expédition en cours.
              </p>
              <p>
                Pas de panique si vous n&apos;avez pas d&apos;amis, il existe un onglet <strong>recrutement public</strong> pour recruter des joueurs de votre serveur ou participer aux expéditions de joueurs de votre serveur. Une interface très utile en fin de mois pour valider le pass mais qui toutefois vous rapportera un peu moins de points d&apos;expédition que vos propres expéditions ou que celles de vos amis.
              </p>
            </div>
            <img src="/images/tutoriels/expeditions/screenshot-5.jpg" alt="Wanted expédition" className={styles.infoImageLast} />
          </div>
        </section>

        {/* Screenshot-6 + texte */}
        <section className={styles.section}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <img src="/images/tutoriels/expeditions/screenshot-6.jpg" alt="Expédition réussie" className={styles.infoCellImage} />
            </div>
            <div className={styles.infoCell}>
              <p>
                En terminant une expédition, vous recevrez des <strong>matériaux de reforge</strong> ainsi que des <strong>pierres de permutation</strong> mineur ou majeur selon le niveau de l&apos;expédition.
              </p>
              <p>
                Une fois les <strong>2 000 points</strong> du pass de ravitaillement atteint, il est moins utile de continuer à faire des expéditions.
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

        {/* Instruction */}
        <p className={styles.instruction}>
          Choisissez l&apos;expédition que vous souhaitez consulter parmi les boss ci-dessous.
        </p>

        {/* Boss grid */}
        <div className={styles.subCardsGrid}>
          {bosses.map((boss) => (
            <Link key={boss.name} href={boss.href} className={styles.subCard}>
              <Image
                src={`/images/tutoriels/expeditions/${boss.name}.jpg`}
                alt={boss.name}
                className={styles.subCardImage}
                width={320}
                height={90}
                style={{ objectFit: 'cover', borderRadius: 8 }}
                priority
              />
            </Link>
          ))}
        </div>

        {/* Bloc vidéo + texte explicatif */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', margin: '48px 0 32px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12, boxShadow: '0 2px 8px #0001', background: '#000' }}>
              <iframe
                src="https://www.youtube.com/embed/qLX3Xnxu4GI"
                title="100% toutes les expéditions en mode optimisé"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 12 }}
              ></iframe>
            </div>
          </div>
          <div style={{ flex: '2 1 340px', minWidth: 280, color: '#3d2a0a', fontSize: 18, background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
            <p>
              Il est vivement conseillé de regarder un guide pour chacune des expéditions afin de progresser pas à pas sur Epic Seven.
            </p>
            <p>
              Néanmoins, si vous voulez un exemple de teams très optimisées pour chacune des expéditions, vous pouvez vous référer à ma vidéo qui propose des compositions d&apos;équipe pouvant terminer à 100% chacune d&apos;entre elles.
            </p>
          </div>
        </div>

        {/* Info blocks */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'flex-start', margin: '48px 0 32px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480, textAlign: 'center' }}>
            <div style={{ color: '#6b4c1b', fontSize: 17, marginBottom: 8 }}>
              Les expéditions se trouvent dans l&apos;onglet combat en glissant le menu vers la droite.
            </div>
            <Image src="/images/tutoriels/expeditions/screenshot-1.jpg" alt="Onglet combat" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480, textAlign: 'center' }}>
            <div style={{ color: '#6b4c1b', fontSize: 17, marginBottom: 8 }}>
              Le pass mensuel de ravitaillement s&apos;achète en bas à gauche.
            </div>
            <Image src="/images/tutoriels/expeditions/screenshot-2.jpg" alt="Pass expédition" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'flex-start', margin: '48px 0 32px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480, textAlign: 'center' }}>
            <div style={{ color: '#6b4c1b', fontSize: 17, marginBottom: 8 }}>
              Les expéditions s&apos;obtiennent aléatoirement en effectuant des chasses ou des combats du mode Rift. Vous les retrouverez en bas à droite dans mes Avis de recherche.
            </div>
            <Image src="/images/tutoriels/expeditions/screenshot-3.jpg" alt="Apparition aléatoire" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480, textAlign: 'center' }}>
            <div style={{ color: '#6b4c1b', fontSize: 17, marginBottom: 8 }}>
              Vous pouvez paramétrer vos expéditions pour les lancer en simultanée en fonction des difficultés que vous souhaitez. Vous pouvez même inviter directement vos amis et votre guilde&nbsp;!
            </div>
            <Image src="/images/tutoriels/expeditions/screenshot-4.jpg" alt="Paramétrage" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
        </div>

        {/* Bloc explications score + image */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', margin: '48px 0 32px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '2 1 420px', minWidth: 320, color: '#6b4c1b', fontSize: 18, background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: 28, boxShadow: '0 2px 8px #0001' }}>
            <p>
              Rappelez-vous que plus vous faites un gros score dans vos expéditions, plus vos amis seront incités à les terminer et à profiter de vos expéditions pour terminer leur <strong>pass de ravitaillement</strong>.
            </p>
            <p>
              En participant et en terminant les expéditions de vos amis, vous gagnez aussi des points d&apos;expédition pour votre pass.
            </p>
            <p>
              Il est possible d&apos;affronter 3 fois le boss d&apos;une expédition pour maximiser votre score mais il est conseillé de ne l&apos;affronter qu&apos;une seule fois pour économiser votre énergie et laisser d&apos;autres participants profiter de l&apos;expédition en cours.
            </p>
            <p>
              Pas de panique si vous n&apos;avez pas d&apos;amis, il existe un onglet <strong>recrutement public</strong> pour recruter des joueurs de votre serveur ou participer aux expéditions de joueurs de votre serveur. Une interface très utile en fin de mois pour valider le pass mais qui toutefois vous rapportera un peu moins de points d&apos;expédition que vos propres expéditions ou que celles de vos amis.
            </p>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 320, textAlign: 'center' }}>
            <Image src="/images/tutoriels/expeditions/screenshot-5.jpg" alt="Wanted expédition" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', margin: '48px 0 0 0', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 520px', minWidth: 320 }}>
            <Image src="/images/tutoriels/expeditions/screenshot-6.jpg" alt="Expédition réussie" width={480} height={270} style={{ width: '100%', borderRadius: 10, boxShadow: '0 2px 8px #0001' }} priority />
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 280, color: '#6b4c1b', fontSize: 18, background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: 28, boxShadow: '0 2px 8px #0001' }}>
            <p>
              En terminant une expédition, vous recevrez des matériaux de reforge ainsi que des pierres de permutation mineur ou majeur selon le niveau de l&apos;expédition.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', color: '#6b4c1b', fontSize: 20, margin: '32px 0 0 0', fontWeight: 500 }}>
          Une fois les 2 000 points du pass de ravitaillement atteint, il est moins utile de continuer à faire des expéditions.
        </div>
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