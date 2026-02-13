import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Chasses() {
  const chasses = [
    { href: '/tutoriels/chasses/vouivre-13', image: '/images/tutoriels/chasses/vouivre.jpg', alt: 'Vouivre 13' },
    { href: '/tutoriels/chasses/golem-13', image: '/images/tutoriels/chasses/golem.jpg', alt: 'Golem 13' },
    { href: '/tutoriels/chasses/banshie-13', image: '/images/tutoriels/chasses/banshie.jpg', alt: 'Banshie 13' },
    { href: '/tutoriels/chasses/azimanak-13', image: '/images/tutoriels/chasses/azimanak.jpg', alt: 'Azimanak 13' },
    { href: '/tutoriels/chasses/caides-13', image: '/images/tutoriels/chasses/caides.jpg', alt: 'Caides 13' },
  ];

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CHASSES</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les <strong>chasses</strong> sont un contenu permettant de récupérer des <strong>équipements</strong> à deux 
            échelles. En sortant vainqueur d&apos;une chasse, vous allez récupérer des équipements ainsi que 
            des <strong>matériaux de fabrication</strong>. Les matériaux de fabrication vous permettront de fabriquer 
            des équipements dans l&apos;<strong>atelier d&apos;acier</strong> qui se trouve en bas à droite de 
            l&apos;onglet <strong>sanctuaire</strong> dans le menu d&apos;accueil d&apos;<strong>Epic Seven</strong>.
          </p>
          <p>
            Chacune des chasse aura 3 niveaux de difficulté mais seulement la dernière, 
            la <strong>difficulté 3</strong>, sera intéressante à répéter pour récupérer vos équipements.
          </p>
        </section>

        {/* Instruction + sous-pages */}
        <p className={styles.instruction}>
          Choisissez la chasse que vous souhaitez consulter parmi la liste des chasses ci-dessous.
        </p>

        <div className={styles.subCardsGrid}>
          {chasses.map((chasse, index) => (
            <Link key={index} href={chasse.href} className={styles.subCard}>
              <img src={chasse.image} alt={chasse.alt} className={styles.subCardImage} />
            </Link>
          ))}
        </div>

        {/* Info blocks */}
        <section className={styles.section}>
          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/chasses/screenshot-combat.jpg" alt="Onglet combat" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Les chasses se trouvent dans l&apos;onglet <strong>combat</strong></p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/chasses/screenshot-recompenses.jpg" alt="Récompenses de chasse" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                En plus des <strong>équipements</strong> et des <strong>matériaux de fabrication</strong>, les chasses 
                vous permettront de récupérer quelques invocations, skystones, poudres de savoir ou 
                énergie aléatoirement.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/chasses/screenshot-combats-rapides.jpg" alt="Combats rapides" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>
                Depuis quelques mises à jour, il est possible d&apos;effectuer <strong>10 combats 
                rapides</strong> par jour gratuitement.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/chasses/screenshot-atelier.jpg" alt="Atelier d'acier" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Atelier d&apos;acier &gt; Fabriquer équipement :</strong></p>
              <p>l&apos;interface pour fabriquer vos équipements</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
