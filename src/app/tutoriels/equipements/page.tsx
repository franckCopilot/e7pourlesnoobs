import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Equipements() {
  const guides = [
    { href: '/tutoriels/equipements/les-bases', image: '/images/tutoriels/equipements/les-bases.jpg', alt: 'Les Bases' },
    { href: '/tutoriels/equipements/approfondir', image: '/images/tutoriels/equipements/approfondir.jpg', alt: 'Approfondir' },
  ];

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ÉQUIPEMENTS</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les <strong>équipements</strong> sont un élément indispensable sur <strong>Epic Seven</strong> pour 
            améliorer la puissante de vos héros.
          </p>
        </section>

        {/* Instruction + sous-pages */}
        <p className={styles.instruction}>
          Choisissez le guide que vous souhaitez consulter parmi la liste des guides ci-dessous.
        </p>

        <div className={styles.subCardsGrid}>
          {guides.map((guide, index) => (
            <Link key={index} href={guide.href} className={styles.subCard}>
              <img src={guide.image} alt={guide.alt} className={styles.subCardImage} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
