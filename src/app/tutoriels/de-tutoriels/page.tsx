import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function DeTutoriels() {
  const guides = [
    { name: 'ardeur', label: 'Ardeur', href: '/tutoriels/de-tutoriels/ardeur' },
    { name: 'malus', label: 'Malus', href: '/tutoriels/de-tutoriels/malus' },
  ];

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>+ DE TUTORIELS</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Retrouvez ici des tutoriels supplémentaires sur différents mécanismes du jeu. 
            Ces guides vous aideront à mieux comprendre certains systèmes importants d&apos;Epic Seven.
          </p>
        </section>

        {/* Instruction */}
        <p className={styles.instruction}>
          Choisissez le tutoriel que vous souhaitez consulter ci-dessous.
        </p>

        {/* Guide links */}
        <div className={styles.subCardsGrid}>
          {guides.map((guide) => (
            <Link key={guide.name} href={guide.href} className={styles.subCard}>
              <img
                src={`/images/tutoriels/de-tutoriels/${guide.name}.jpg`}
                alt={guide.label}
                className={styles.subCardImage}
              />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
