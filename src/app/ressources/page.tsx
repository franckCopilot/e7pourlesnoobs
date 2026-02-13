import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from './ressources.module.css';

export default function Ressources() {
  const resources = [
    {
      title: '',
      href: '/ressources/pierres-de-permutation',
      image: '/images/ressources/permutation.jpg'
    },
    {
      title: '',
      href: '/ressources/poudres-de-savoir',
      image: '/images/ressources/poudres.jpg'
    },
    {
      title: '',
      href: '/ressources/runes-de-reinitialisation',
      image: '/images/ressources/reinitialisation.jpg'
    }
  ];

  return (
    <MainLayout>
      <div className={styles.ressourcesContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>RESSOURCES</h1>
          <p className={styles.subtitle}>
            Choisissez la ressource que vous souhaitez consulter parmi la liste des ressources ci-dessous.
          </p>
        </div>

        <div className={styles.resourcesGrid}>
          {resources.map((resource, index) => (
            <Link 
              key={index} 
              href={resource.href}
              className={styles.resourceCard}
            >
              <img 
                src={resource.image} 
                alt={resource.href.split('/').pop() || ''}
                className={styles.resourceImage}
              />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
