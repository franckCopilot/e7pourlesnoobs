
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import styles from '../tutoriels.module.css';

export default function Constellations() {
  const bosses = [
    { href: '/tutoriels/constellations/magnar', image: '/images/tutoriels/constellations/magnar.jpg', alt: 'Magnar' },
    { href: '/tutoriels/constellations/aquina', image: '/images/tutoriels/constellations/aquina.jpg', alt: 'Aquina' },
    { href: '/tutoriels/constellations/herais', image: '/images/tutoriels/constellations/herais.jpg', alt: 'Herais' },
    { href: '', image: '/images/tutoriels/constellations/ethel.jpg', alt: 'Ethel' },
    { href: '', image: '/images/tutoriels/constellations/rahel.jpg', alt: 'Rahel' },
  ];

  return (
    <MainLayout>
      <div style={{ background: '#f5e6c8', minHeight: '100vh', padding: '24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 className={styles.pageTitle} style={{ color: '#6b4c1b', textAlign: 'center', marginBottom: 32 }}>CONSTELLATIONS</h1>

          {/* Présentation courte */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <div style={{ maxWidth: 900, color: '#3d2a0a', fontSize: 18, background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
              <p>
                Les <strong>constellations</strong> sont un contenu <strong>mensuel</strong>, accessible à partir du rang 60 sur votre compte, permettant de récupérer aléatoirement un équipement niveau 88, des talismans d&apos;artéfact épique, des molagoras ainsi qu&apos;une monnaie d&apos;échange pour acheter davantage d&apos;équipements niveau 88.
              </p>
              <p>
                Il existe quatre difficultés : <strong>Extrême, infernale, cauchemar et éternelle</strong>. Plus le niveau de difficulté choisi est élevé et plus les récompenses seront de qualités. Néanmoins, les récompenses de la difficulté la plus simple restent très intéressantes.
              </p>
              <p>
                Le mode <strong>constellation</strong> fonctionne sous forme de saisons durant 6 mois. Chaque saison, il est possible d&apos;affronter 5 boss d&apos;éléments différents, pour les 5 éléments du jeu : glace, terre, feu, obscurité et lumière. Chaque boss permet d&apos;obtenir une récompense unique ainsi qu&apos;une monnaie pièce souvenir des étoiles permettant d&apos;acheter des équipements ou des molagoras. Le mode constellation est un contenu PvE à effectuer chaque mois pour récupérer le plus de récompenses possible. La boutique quant à elle, est actualisée tous les 6 mois.
              </p>
              <p>
                Il est possible de débloquer des <strong>bénédictions de constellations</strong> permettant de rendre les combats plus accessibles. Le mode constellation est un contenu dont la difficulté est exponentielle d&apos;une difficulté à l&apos;autre. Les <strong>boosts</strong> sont indispensables pour la plupart des boss en difficulté <strong>éternelle</strong>. Les bénédictions sont maintenues d&apos;un mois à l&apos;autre mais seront réinitialisées d&apos;une saison à l&apos;autre. Ainsi, plus la saison progresse, plus il sera facile d&apos;effectuer des difficultés avancées grâce aux bénédictions obtenues.
              </p>
              <p style={{ color: '#a85c00', fontWeight: 600 }}>
                ATTENTION : vous pouvez récupérer qu&apos;une seule fois les récompenses par mois et par boss. Si par exemple vous avez fait une fois le boss terre en difficulté extrême, vous ne pourrez pas récupérer de récompenses supplémentaires en difficulté cauchemar. Il faudra attendre le mois prochain pour en récupérer de nouvelles.
              </p>
            </div>
          </div>

          {/* Grille des boss en haut */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href='/tutoriels/constellations/magnar'>
              <img src="/images/tutoriels/constellations/magnar.jpg" alt="Magnar" style={{ width: 320, height: 90, objectFit: 'cover', borderRadius: 8 }} />
            </a>
            <a href='/tutoriels/constellations/aquina'>
              <img src="/images/tutoriels/constellations/aquina.jpg" alt="Aquina" style={{ width: 320, height: 90, objectFit: 'cover', borderRadius: 8 }} />
            </a>
            <a href='/tutoriels/constellations/herais'>
              <img src="/images/tutoriels/constellations/herais.jpg" alt="Herais" style={{ width: 320, height: 90, objectFit: 'cover', borderRadius: 8 }} />
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
            <img src="/images/tutoriels/constellations/ethel.jpg" alt="Ethel" style={{ width: 220, height: 90, objectFit: 'cover', borderRadius: 8 }} />
            <img src="/images/tutoriels/constellations/rahel.jpg" alt="Rahel" style={{ width: 220, height: 90, objectFit: 'cover', borderRadius: 8 }} />
          </div>

          {/* Grille d'infos et screenshots */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
            <div style={{ textAlign: 'center', color: '#3d2a0a', fontSize: 16 }}>
              <div style={{ marginBottom: 8 }}>Les constellations se trouvent dans l&apos;onglet <strong>saison</strong></div>
              <img src="/images/tutoriels/constellations/screenshot-1.jpg" alt="Onglet saison" style={{ width: '100%', maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#3d2a0a', fontSize: 16 }}>
              <div style={{ marginBottom: 8 }}>La difficulté de chacun des boss est indépendante</div>
              <img src="/images/tutoriels/constellations/screenshot-2.jpg" alt="Difficulté indépendante" style={{ width: '100%', maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#3d2a0a', fontSize: 16 }}>
              <div style={{ marginBottom: 8 }}>L&apos;onglet <strong>bénédiction des constellations</strong> vous permettra de booster vos personnages durant une saison complète.</div>
              <img src="/images/tutoriels/constellations/screenshot-3.jpg" alt="Bénédictions" style={{ width: '100%', maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#3d2a0a', fontSize: 16 }}>
              <div style={{ marginBottom: 8 }}>Chaque <strong>constellation</strong> apporte un bonus différent avec des paliers de bonus supplémentaires à débloquer</div>
              <img src="/images/tutoriels/constellations/screenshot-4.jpg" alt="Bonus constellation" style={{ width: '100%', maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
            </div>
          </div>

          {/* Dernier bloc d'infos détaillées */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, alignItems: 'start', marginBottom: 32 }}>
            <div style={{ color: '#3d2a0a', fontSize: 16, background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px #0001' }}>
              <p>
                Pour débloquer les différents paliers, il faudra verrouiller des <strong>héros</strong> avec un gros <strong>PC</strong> pour marquer un score total. Plus votre score est élevé, plus vous pourrez débloquer de paliers de bonus.
              </p>
              <p>
                Le premier slot de héros est gratuit mais il faudra débloquer des points pour acheter les slots supplémentaires et ainsi débloquer plus de bénédiction de constellations. Il y a 5 slots par constellation pour les 5 éléments du jeu. Il faudra impérativement un héros de la constellation désignée pour le placer. Par exemple pour le slot terre balance, il est possible de placer Limule qui est un héros balance et terre.
              </p>
              <p>Les points de bénédiction s&apos;obtiennent en affrontant les boss de constellation.</p>
              <p style={{ color: '#a85c00', fontWeight: 600 }}>NOTE : un héros verrouillé ne peut plus être utilisé dans le mode constellation.</p>
              <p style={{ color: '#a85c00', fontWeight: 600 }}>NOTE 2 : il est possible de réinitialiser ses bénédiction de constellation contre 100 pierraciels, ce qui n&apos;est pas recommandé, mais il faudra attendre 1 semaine pour le faire à nouveau.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <img src="/images/tutoriels/constellations/screenshot-5.jpg" alt="Bénédictions détail" style={{ width: '100%', maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
