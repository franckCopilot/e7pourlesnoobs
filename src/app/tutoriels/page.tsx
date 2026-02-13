import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from './tutoriels.module.css';

export default function Tutoriels() {
  const tutorials = [
    { href: '/tutoriels/chasses', image: '/images/tutoriels/chasses.jpg', alt: 'Chasses' },
    { href: '/tutoriels/constellations', image: '/images/tutoriels/constellations.jpg', alt: 'Constellations' },
    { href: '/tutoriels/equipements', image: '/images/tutoriels/equipements.jpg', alt: 'Équipements' },
    { href: '/tutoriels/evolutions', image: '/images/tutoriels/evolutions.jpg', alt: 'Évolutions' },
    { href: '/tutoriels/expeditions', image: '/images/tutoriels/expeditions.jpg', alt: 'Expéditions' },
    { href: '/tutoriels/de-tutoriels', image: '/images/tutoriels/de-tutoriels.jpg', alt: '+ de tutoriels' },
  ];

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>TUTORIELS</h1>
          <p className={styles.subtitle}>
            Choisissez le tutoriel que vous souhaitez consulter parmi la liste des tutoriels ci-dessous.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {tutorials.map((tut, index) => (
            <Link key={index} href={tut.href} className={styles.card}>
              <img src={tut.image} alt={tut.alt} className={styles.cardImage} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
