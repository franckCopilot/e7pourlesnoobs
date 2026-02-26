import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Constellations() {
  const bosses = [
    { href: '/tutoriels/constellations/magnar', image: '/images/tutoriels/constellations/magnar.jpg', alt: 'Magnar' },
    { href: '/tutoriels/constellations/aquina', image: '/images/tutoriels/constellations/aquina.jpg', alt: 'Aquina' },
    { href: '/tutoriels/constellations/herais', image: '/images/tutoriels/constellations/herais.jpg', alt: 'Herais' },
  ];

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CONSTELLATIONS</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les <strong>constellations</strong> sont un contenu <strong>mensuel</strong>, accessible à partir du rang 60 
            sur votre compte, permettant de récupérer aléatoirement un équipement niveau 88, des talismans 
            d&apos;artéfact épique, des molagoras ainsi qu&apos;une monnaie d&apos;échange pour acheter davantage 
            d&apos;équipements niveau 88.
          </p>
          <p>
            Il existe quatre difficultés : <strong>Extrême, infernale, cauchemar et éternelle</strong>. Plus le 
            niveau de difficulté choisi est élevé et plus les récompenses seront de qualités. Néanmoins, les 
            récompenses de la difficulté la plus simple reste très intéressantes.
          </p>
          <p>
            Le mode <strong>constellation</strong> fonctionne sous forme de saisons durant 6 mois. Chaque saison, 
            il est possible d&apos;affronter 5 boss d&apos;éléments différents, pour les 5 éléments du jeu : 
            glace, terre, feu, obscurité et lumière. Chaque boss permet d&apos;obtenir une récompense unique 
            ainsi qu&apos;une monnaie pièce souvenir des étoiles permettant d&apos;acheter des équipements ou 
            des molagoras. Le mode constellation est un contenu PvE à effectuer chaque mois pour récupérer le 
            plus de récompenses possible. La boutique quant à elle, est actualisée tous les 6 mois.
          </p>
          <p>
            Il est possible de débloquer des <strong>bénédictions de constellations</strong> permettant de rendre 
            les combats plus accessibles. Le mode constellation est un contenu dont la difficulté est 
            exponentielle d&apos;une difficulté à l&apos;autre. Les <strong>boosts</strong> sont indispensables 
            pour la plupart des boss en difficulté <strong>éternelle</strong>. Les bénédictions sont maintenues 
            d&apos;un mois à l&apos;autre mais seront réinitialisées d&apos;une saison à l&apos;autre. Ainsi, 
            plus la saison progresse, plus il sera facile d&apos;effectuer des difficultés avancées grâce aux 
            bénédictions obtenues.
          </p>
          <p className={styles.note}>
            <strong>ATTENTION</strong> : vous pouvez récupérer qu&apos;une seule fois les récompenses par mois et 
            par boss. Si par exemple vous avez fait une fois le boss terre en difficulté extrême, vous ne pourrez 
            pas récupérer de récompenses supplémentaires en difficulté cauchemar. Il faudra attendre le mois 
            prochain pour en récupérer de nouvelles.
          </p>
        </section>

        {/* Instruction + sous-pages */}
        <p className={styles.instruction}>
          Choisissez la constellation que vous souhaitez consulter parmi la liste des constellations ci-dessous.
        </p>

        <div className={styles.subCardsGrid}>
          {bosses.map((boss, index) => (
            <Link key={index} href={boss.href} className={styles.subCard}>
              <img src={boss.image} alt={boss.alt} className={styles.subCardImage} />
            </Link>
          ))}
        </div>

        {/* Bosses sans page dédiée */}
        <div className={styles.extraBossGrid}>
          <div className={styles.subCard}>
            <img src="/images/tutoriels/constellations/ethel.jpg" alt="Ethel" className={styles.subCardImage} />
          </div>
          <div className={styles.subCard}>
            <img src="/images/tutoriels/constellations/rahel.jpg" alt="Rahel" className={styles.subCardImage} />
          </div>
        </div>

        {/* Info blocks */}
        <section className={styles.section}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <p>Les constellations se trouvent dans l&apos;onglet <strong>saison</strong></p>
              <img src="/images/tutoriels/constellations/screenshot-1.jpg" alt="Onglet saison" className={styles.infoCellImage} />
            </div>
            <div className={styles.infoCell}>
              <p>La difficulté de chacun des boss est indépendante</p>
              <img src="/images/tutoriels/constellations/screenshot-2.jpg" alt="Difficulté indépendante" className={styles.infoCellImage} />
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <p>L&apos;onglet <strong>bénédiction des constellations</strong> vous permettra de booster vos personnages durant une <strong>saison complète</strong>.</p>
              <img src="/images/tutoriels/constellations/screenshot-3.jpg" alt="Bénédictions" className={styles.infoCellImage} />
            </div>
            <div className={styles.infoCell}>
              <p>Chaque <strong>constellation</strong> apporte un bonus différent avec des paliers de bonus supplémentaires à débloquer</p>
              <img src="/images/tutoriels/constellations/screenshot-4.jpg" alt="Bonus constellation" className={styles.infoCellImage} />
            </div>
          </div>

          <div className={styles.infoBlockLast}>
            <div className={styles.infoTextLast}>
              <p>
                Pour débloquer les différents paliers, il faudra verrouiller des <strong>héros</strong> avec un 
                gros <strong>PC</strong> pour marquer un score total. Plus votre score est élevé, plus vous pourrez 
                débloquer de paliers de bonus.
              </p>
              <p>
                Le premier slot de héros est gratuit mais il faudra débloquer des points pour acheter les slots 
                supplémentaires et ainsi débloquer plus de bénédiction de constellations. Il y a 5 slots par 
                constellation pour les 5 éléments du jeu. Il faudra impérativement un héros de la constellation 
                désignée pour le placer. Par exemple pour le slot terre balance, il est possible de placer Limule 
                qui est un héros balance et terre.
              </p>
              <p>Les points de bénédiction s&apos;obtiennent en affrontant les boss de constellation.</p>
              <p className={styles.note}>
                <strong>NOTE</strong> : un héros verrouillé ne peut plus être utilisé dans le mode constellation.
              </p>
              <p className={styles.note}>
                <strong>NOTE 2</strong> : il est possible de réinitialiser ses bénédiction de constellation contre 
                100 pierraciels, ce qui n&apos;est pas recommandé, mais il faudra attendre 1 semaine pour le faire 
                à nouveau.
              </p>
            </div>
            <img src="/images/tutoriels/constellations/screenshot-5.jpg" alt="Bénédictions détail" className={styles.infoImageLast} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
