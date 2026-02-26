'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from './permutation.module.css';

export default function PierresPermutation() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>PIERRES DE PERMUTATION</h1>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <div className={styles.content}>
            <img 
              src="/images/permutation/pierre-main.png" 
              alt="Pierre de permutation" 
              className={styles.floatLeft}
            />
            <p>
              Les pierres de permutation sont une ressource rare sur Epic Seven. Il y a deux pierres différentes 
              qui permettent de modifier une caractéristique d&apos;un équipement.
            </p>
            <p>
              Les pierres de permutation peuvent s&apos;obtenir de différentes manières et ne s&apos;utilisent 
              que sur des équipements en +15.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Guide vidéo sur les pierres de permutation</h2>
          <div 
            className={styles.videoWrapper} 
            onClick={() => setSelectedVideoId('yzmNImGqtdo')}
          >
            <img 
              src="https://i.ytimg.com/vi/yzmNImGqtdo/maxresdefault.jpg"
              alt="Guide pierres de permutation"
              className={styles.thumbnail}
            />
            <div className={styles.playButton}>▶</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation des pierres de permutation</h2>
          <div className={styles.content}>
            <div className={styles.stoneGrid}>
              <div className={styles.stoneItem}>
                <img 
                  src="/images/permutation/pierre-mineure.png" 
                  alt="Pierre Mineure" 
                  className={styles.stoneIcon}
                />
                <p className={styles.stoneLabel}>Pierre Mineure</p>
              </div>
              <div className={styles.stoneItem}>
                <img 
                  src="/images/permutation/pierre-majeure.png" 
                  alt="Pierre Majeure" 
                  className={styles.stoneIcon}
                />
                <p className={styles.stoneLabel}>Pierre Majeure</p>
              </div>
            </div>
            
            <p>
              Les pierres de permutation permettent de modifier une des caractéristique d&apos;un équipement en +15, 
              peu importe son niveau. Il est possible de modifier qu&apos;une seule caractéristique d&apos;un équipement 
              mais elle peut être modifiée à l&apos;infini tant que vous aurez des pierres de permutation.
            </p>
            <p>
              Chaque modification de caractéristique vous coûtera <strong>80 000 gold par pierre mineure</strong> et{' '}
              <strong>100 000 gold par pierre majeure</strong>.
            </p>
            <p>
              Les pierres majeure permettront de gagner davantage de caractéristique que les pierres mineures. 
              Il est donc préférable de n&apos;utiliser seulement des pierres majeures pour permuter une 
              caractéristique d&apos;un équipement.
            </p>
            <p>
              Il existe des pierres de permutation pour chacun des sets et pour chacune des caractéristiques.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir des pierres de permutation ?</h2>
          <div className={styles.content}>
            <p>Il existe 4 manières de récupérer des pierres de permutation :</p>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/noyau-permutation-icone.png" 
                alt="Noyau de permutation" 
                className={styles.floatLeftSmall}
              />
              <ul className={styles.list}>
                <li>
                  Chaque <strong>expédition</strong> vous permettront de récupérer des pierres de permutation ainsi 
                  que des coffres de set sélectif via le pass de ravitaillement.
                </li>
                <li>
                  <strong>3 advent side story</strong> sont disponible une fois par an et vous permettent d&apos;en 
                  récupérer à chaque combat. Environ une advent side story tous les 4 mois.
                </li>
                <li>
                  Dans le <strong>sanctuaire → clocher de l&apos;alchimiste → pierre de permutation</strong> il est 
                  possible de fabriquer 2 pierres de permutation par set et par mois.
                </li>
                <li>
                  Lors de différents <strong>événements</strong> il est possible d&apos;obtenir des coffres sélectifs 
                  de pierre de permutation majeure comme durant l&apos;héritage des temps anciens.
                </li>
              </ul>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/inventaire-pierres.png" 
                alt="Inventaire pierres" 
                className={styles.floatLeft}
              />
              <p>
                Vous pouvez extraire des pierres de permutation inutiles dans votre inventaire pour obtenir 
                des noyaux de permutation. Ces noyaux serviront à fabriquer de nouvelles pierres au clocher 
                de l&apos;alchimiste.
              </p>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/expedition.png" 
                alt="Expéditions" 
                className={styles.floatLeft}
              />
              <p>
                Les expéditions sont une source régulière de pierres de permutation. Chaque expédition vous 
                rapporte des récompenses incluant des pierres et des coffres sélectifs.
              </p>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/advent.png" 
                alt="Advent Side Story" 
                className={styles.floatLeft}
              />
              <p>
                Les Advent Side Story apparaissent environ 3 fois par an (tous les 4 mois). Chaque combat 
                dans ces événements peut vous rapporter des pierres de permutation.
              </p>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/clocher.png" 
                alt="Clocher de l'alchimiste" 
                className={styles.floatLeft}
              />
              <p>
                Au clocher de l&apos;alchimiste dans le sanctuaire, vous pouvez fabriquer 2 pierres de 
                permutation par set et par mois en utilisant vos noyaux de permutation.
              </p>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <div className={styles.textWithImage}>
              <img 
                src="/images/permutation/evenement.png" 
                alt="Événements" 
                className={styles.floatLeft}
              />
              <p>
                Certains événements spéciaux comme l&apos;héritage des temps anciens offrent des coffres 
                sélectifs de pierres de permutation majeure.
              </p>
            </div>
            
            <div className={styles.clearBoth}></div>
            
            <h3 className={styles.subTitle}>Fabrication au clocher de l&apos;alchimiste</h3>
            <div className={styles.fabricationImages}>
              <img 
                src="/images/permutation/fabrication-1.png" 
                alt="Fabrication étape 1" 
                className={styles.fabImage}
              />
              <img 
                src="/images/permutation/fabrication-2.png" 
                alt="Fabrication étape 2" 
                className={styles.fabImage}
              />
              <img 
                src="/images/permutation/fabrication-3.png" 
                alt="Fabrication étape 3" 
                className={styles.fabImage}
              />
            </div>
            
            <p>
              <strong>Important :</strong> Il est toujours préférable de maximiser la barre du taux de succès 
              (épique) pour être garanti d&apos;obtenir une rune majeur du set de votre choix. Il faudra un total 
              de <strong>84 noyaux de permutation</strong> pour choisir la caractéristique de votre choix.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment utiliser une pierre de permutation ?</h2>
          <div className={styles.content}>
            <p>
              Rendez-vous sur l&apos;équipement que vous souhaitez modifier. Puis cliquez sur <strong>permuter</strong> 
              pour améliorer votre équipement.
            </p>
            <p>
              Il est seulement possible de permuter un équipement quand il sera <strong>+15</strong>, peu importe 
              le niveau de votre équipement. Il est cependant conseillé d&apos;utiliser ses pierres de permutation 
              sur des équipements de niveau au minimum <strong>85</strong>.
            </p>
            
            <div className={styles.noteBox}>
              <p>
                <strong>NOTE :</strong> Il n&apos;y a pas d&apos;avantage à permuter un équipement avant ou après un reforge.
              </p>
            </div>

            <h3 className={styles.subTitle}>Choix de la caractéristique</h3>
            <p>
              Vous allez devoir choisir la caractéristique à permuter parmi les 4 disponible.
            </p>
            
            <div className={styles.warningBox}>
              <p><strong>⚠️ Restrictions importantes :</strong></p>
              <ul>
                <li>Les permutations obéissent aux lois classiques des équipements</li>
                <li>Il est impossible d&apos;obtenir un doublon de caractéristique</li>
                <li>Il n&apos;est pas possible de permuter en défense/défense % sur une arme</li>
                <li>Il n&apos;est pas possible de permuter en attaque/attaque % sur une armure</li>
              </ul>
            </div>

            <h3 className={styles.subTitle}>Stratégie de permutation optimale</h3>
            
            <div className={styles.procGuide}>
              <div className={styles.procCardGreen}>
                <h4>✅ 0 proc - Rentable</h4>
                <p>Permutation idéale. Aucune perte de valeur.</p>
              </div>
              <div className={styles.procCardGold}>
                <h4>⚠️ 1 proc - Acceptable</h4>
                <p>Presque pas de perte de valeur. Permutation rentable.</p>
              </div>
              <div className={styles.procCardRed}>
                <h4>❌ 2+ proc - Non rentable</h4>
                <p>Grosse perte de valeur. Ne pas permuter.</p>
              </div>
            </div>

            <div className={styles.tipBox}>
              <p>
                <strong>💡 Astuce :</strong> Une permutation sera toujours aléatoire entre une fourchette de valeurs. 
                Vous ne pourrez plus obtenir une valeur inférieure à la valeur déjà permutée. Si vous avez obtenu 11% 
                d&apos;attaque sur 14%, votre prochaine permutation sera au minimum de 11%.
              </p>
              <p>
                <strong>⚠️ Attention :</strong> Changer de caractéristique supprimera cette garantie.
              </p>
            </div>

            <div className={styles.finalNote}>
              <p>
                Gardez enfin en tête qu&apos;une fois une caractéristique permutée, il ne sera plus possible de 
                revenir en arrière pour permuter une autre ligne de votre équipement. Réfléchissez toujours sur 
                le long terme, les équipements se recyclent d&apos;un héros à un autre en fonction de l&apos;évolution 
                d&apos;Epic Seven.
              </p>
            </div>
          </div>
        </section>
      </div>

      <VideoModal 
        videoId={selectedVideoId} 
        onClose={() => setSelectedVideoId(null)} 
      />
    </MainLayout>
  );
}
