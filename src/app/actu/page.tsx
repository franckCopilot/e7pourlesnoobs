import MainLayout from '@/components/MainLayout'
import styles from './actu.module.css'

const ACTU_ENTRIES = [
  {
    id: 1,
    title: 'Actu  11 septembre 2024',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST__1iTAKo89tmLQV5kSvrzX54dG3vlamDX7gP_6FajtPLNR5k_0jeDktKGbz0H7xSs9467jKgrEw2hSkcGePcZOstjvyylAW7Ql5J5goe_eNxhLTNvXvvLF03PqoaT4JIktE-WeXc8FeaWU7ADcMLcME9ZDv_S_MC48OUT33Gah6nWdjuH1kGIqJAYsi8xHLHDZxJrtd4kqNPwHpE1eyE2DIFPWYn-eI2S=w1280',
    description: 'La mise à jour du 12 septembre 2024 est une MAJ majeure.\n\nIl s\'agit principalement de la sortie d\'un nouveau héros 3 étoiles ainsi que du teaser de Fenris et d\'Harsetti. Cette MAJ sera l\'occasion de conclure l\'aventure et les E7WC.',
    linkText: 'Lire les nouveautés de l\'actu du 11/09/2024 >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/actu-11-septembre-2024',
  },
  {
    id: 2,
    title: 'Actu  04 juin 2024',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0STto8fLhWfvM8my6AgDtAMx5sKP0SNaK0dXbM8zDI9uTtfIVm4kAg24zwlmhfGJhsjl2Q1MgeUbQpsH6hk7L87NLueFfN4ZLvdMkNgtEVWzqA9UnK-opFTH7eRmlaryCBErd0LiX0KjdO9LrRVy0Xh5e06i1FrKapY3wM06Rl1w9wWY8ugtZ7RC1dKtP_gbAvPRA_2NLmCHdbcND63YOeNsG7O4VMteRX8wjaQ=w1280',
    description: 'La mise à jour du 05 juin 2024 est une MAJ majeure.\n\nIl s\'agit principalement de la sortie d\'un nouveau héros 3 étoiles ainsi que de deux nouveaux équipements exclusifs. La période estivale continue avec la suite de la side story et des bannières de héros associés. Beaucoup d\'évènements sont à venir. Les E7WC commencent.',
    linkText: 'Lire les nouveautés de l\'actu du 04/06/2024 >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/actu-4-juin-2024',
  },
  {
    id: 3,
    title: 'Actu  22 mai 2024',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0STziXqyFJI93SkrIK_ExU1HCQakbk-OuqleYz4QNp0JQ5QyS-FEKpHjexMninXB6x22brwcKdjmxORYznSKDHvTRjSE3BkbToGm_fwta3p0jmqVBDXAiimE89E-vvzGNMRdoBbwTZWXd_IjfOhR9UUJa8P8IzGY4fdBt5kBtuD1PLSzn3rrzWSgTUFiDeYa9ObBZig89wB9MVWD-Axe2GgByb5H_UesVWIR=w1280',
    description: 'La mise à jour du 23 mai 2024 est une MAJ majeure.\n\nIl s\'agit principalement de la sortie d\'un nouveau ml 5 étoile qui accompagnera une nouvelle histoire du théâtre lunaire. Un nouveau Epic Pass sera disponible pour la sortie d\'une nouvelle apparence pour Feira. Vous pourrez profiter d\'un Buff event et d\'un free unequip durant tout le week-end.',
    linkText: 'Lire les nouveautés de l\'actu du 22/05/2024 >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/actu-22-mai-2024',
  },
  {
    id: 4,
    title: 'Actu 08 mai 2024',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRUUBmq9RzUWaEE9jarkdkNb3GR3nthxpd1a8g61ryhG9zLIbWRgl_Q_P-7vZZaCxzQBXnva5eOLjh_8OYs--r_bHsyKuPTlo0jR3tlc3jUXs_vyh3YE1YXnXUBrs-KIk-wweDtTN2mjh19OSubVXFSvYGHiFpudnPe0FZBPEBIG3gllP0Yx6SdC6oTOBZCnkbTrrJIMLvc7sCI_LyMAk1n98ciCzrYKpIu=w1280',
    description: 'La mise à jour du 09 mai 2024 est une MAJ majeure.\n\nIl s\'agit principalement de teasers de deux nouveaux héros : Ml Senya & Birgitta. L\'héritage des temps anciens fera son grand retour. Vous pourrez profiter d\'un Buff event et d\'un free unequip durant tout le week-end.',
    linkText: 'Lire les nouveautés de l\'actu du 08/05/2024 >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/actu-08-mai-2024',
  },
  {
    id: 5,
    title: 'Coupon Google Play Games',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRvCue0FwAQEOS3LflJ60Wn9qJ2syCfbsOqHrzoYS0VxTqqzpak3YjIayrBcbO6HU-spqPh8QtqQotV3EKSr558FoO2LqmVR9kKBOQkhTzFKBTyyIN26DhGCZztLxjB0puf81gy54wolllGmqBmAGcjwOfHL0kOS2BVbpR1msV-sU8o7IG_TcdoVYkusN7x7cWqbry0ctRyls8l-fRHPmc0cG5FYN4HnJ0-HPI=w1280',
    description: 'À partir d\'aujourd\'hui et jusqu\'au 8 mai 2024, votre prochain achat sur la plateforme Google Play Games bénéficiera d\'un coupon de 10$.\n\nUne réduction idéale pour un pack mensuel ou un pack Passion à moindre coût !',
    linkText: 'Lire les informations sur le coupon >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/coupon-google-play-games',
  },
  {
    id: 6,
    title: 'Actu 01 mai 2024',
    image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQZYQGQoA9QbMutVM14kDZQUXwEJUZBz4hplnv9wUeDaEPvR_yssPkxtdCxlY_ozL9FiIZCYVOGEDN1LttbHdIUn9Zi1OzjESCaPwT4CgUYX6wzhBmY8AJSYbAVxIGrZG0uZsdpC7v6HZFAxLlpvhQDsNkBggQvyEOin_iK5NBs6-NWX3NdG8pBc_T38nn_wHentqM04qqnr2zUN2KlnKCnKTd9VVtzX9IX6DE=w1280',
    description: 'La mise à jour du 02 mai 2024 est une MAJ mineure.\n\nIl s\'agit principalement d\'ajout un nouveau héros ml 4 étoiles et de la rotation de la boutique de poudres de savoir.',
    linkText: 'Lire les nouveautés de l\'actu du 01/05/2024 >',
    linkUrl: 'https://www.e7pourlesnoobs.com/accueil/actu/actu-01-mai-2024',
  },
]

export default function ActuPage() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Actualité</h1>

        <div className={styles.actuList}>
          {ACTU_ENTRIES.map((entry) => (
            <article key={entry.id} className={styles.actuEntry}>
              <a href={entry.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.actuImageWrapper}>
                <img
                  src={entry.image}
                  alt={entry.title}
                  className={styles.actuImage}
                  loading="lazy"
                />
              </a>
              <div className={styles.actuContent}>
                <h2 className={styles.actuTitle}>{entry.title}</h2>
                {entry.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className={styles.actuDescription}>{paragraph}</p>
                ))}
                <a
                  href={entry.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actuLink}
                >
                  {entry.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
