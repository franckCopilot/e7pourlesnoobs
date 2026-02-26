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
        {/* All sections */}
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
            <div className={styles.stonePresentationGrid}>
              <div className={styles.stonePresentationItem}>
                <img 
                  src="/images/permutation/pierre-mineure.png" 
                  alt="Pierre Mineure" 
                  className={styles.stoneIcon}
                />
                <p className={styles.stoneLabel}>pierre Mineure</p>
                <span className={styles.stoneCount}>2</span>
              </div>
              <div className={styles.stonePresentationItem}>
                <img 
                  src="/images/permutation/pierre-majeure.png" 
                  alt="Pierre Majeure" 
                  className={styles.stoneIcon}
                />
                <p className={styles.stoneLabel}>pierre Majeure</p>
                <span className={styles.stoneCount}>1</span>
              </div>
            </div>
            <div className={styles.stonePresentationText}>
              <p>
                Les <strong>pierres <span style={{textDecoration: 'underline'}}>de permutation</span></strong> permettent de modifier une des caractéristique d&apos;un <strong>équipement en +15</strong>, peu importe son niveau. Il est possible de modifier qu&apos;une <strong>seule caractéristique</strong> d&apos;un équipement mais elle peut être <strong>modifiée à l&apos;infini</strong> tant que vous aurez des <strong>pierres de permutation</strong>. Chaque modification de caractéristique vous coûtera <strong>80 000 gold par pierre mineure</strong> et <strong>100 000 gold par pierre majeure</strong>.
              </p>
              <p>
                Les <strong>pierres majeure</strong> permettront de gagner davantage de caractéristique que les pierres mineures. Il est donc préférable de <strong>n&apos;utiliser seulement des pierres majeures</strong> pour permuter une caractéristique d&apos;un équipement.
              </p>
              <p>
                Il existe des <strong>pierres de permutation pour chacun des sets et pour chacune des caractéristiques</strong>. On notera sur l&apos;exemple une pierre mineur en set résistance qui modifiera la statistique désirée en défense % et une pierre majeure en set attaque qui modifiera la caractéristique désirée en attaque flat (absence de % sur la rune).
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir des pierres de permutation ?</h2>
          <div className={styles.content}>
            <p><strong>Il existe 4 manières de récupérer des pierres de permutation :</strong></p>
            <ul className={styles.listObtention}>
              <li>
                <strong><a href="/tutoriels/expeditions/" className={styles.link}>Chaque expédition</a></strong> vous permettront de récupérer des <strong>pierres de permutation</strong> ainsi que des <strong>coffres de set sélectif</strong> via le pass de ravitaillement.
              </li>
              <li>
                <strong>3 advent side story</strong> sont disponible une fois par an et vous permettent d&apos;en récupérer à chaque combat. Environ une advent side story tous les 4 mois.
              </li>
              <li>
                Dans le <strong>sanctuaire ➜ clocher de l&apos;alchimiste ➜ pierre de permutation</strong> il est possible de <strong>fabriquer 2 pierres de permutation par set et par mois</strong>.
              </li>
              <li>
                Lors de <strong>différents évènements</strong> il est possible d&apos;obtenir des <strong>coffres sélectifs de pierre de permutation majeure</strong> comme durant l’héritage des temps anciens.
              </li>
            </ul>
            <div className={styles.coffrePresentation}>
              <div className={styles.coffreImagesBlock}>
                <img 
                  src="/images/permutation/coffre-set-selectif.png" 
                  alt="Coffre de set sélectif" 
                  className={styles.coffreIcon}
                />
              </div>
              <div className={styles.coffreTextBlock}>
                <p>
                  <strong>Le coffre sélectif</strong> vous permettra de choisir une <strong>pierre de permutation majeure</strong> de votre choix et du set de votre choix (Via divers évènements). Les coffres sont très rares.
                </p>
              </div>
              <div className={styles.coffreImagesBlock}>
                <img 
                  src="/images/permutation/coffre-selection.png" 
                  alt="Sélection d'objet coffre set sélectif" 
                  className={styles.coffreSelectionImg}
                />
              </div>
            </div>
            <div className={styles.fabSection}>
              <div className={styles.fabImagesBlock}>
                <img 
                  src="/images/permutation/inventaire-extraction.png" 
                  alt="Inventaire extraction pierres de permutation" 
                  className={styles.fabInventaireImg}
                />
              </div>
              <div className={styles.fabTextBlock}>
                <p>
                  <strong>Pour fabriquer des pierres de permutation</strong> dans le <strong>clocher de l'alchimiste</strong>, il faudra d'abord vous rendre dans votre <strong>inventaire</strong> afin d'extraire des pierres de permutation inutiles pour fabriquer celles dont vous aurez besoin.
                </p>
                <p>
                  Pour cela il faudra se rendre dans le <strong>5ème onglet de l'inventaire (1)</strong> et dans <strong>ingrédient de permutation</strong>. Il faudra alors <strong>réorganiser (2)</strong> puis <strong>sélectionner les pierres que l'on souhaite extraire (3)</strong> et <strong>enfin valider</strong> pour obtenir les <strong>noyaux de permutation</strong> qui vous serviront dans le clocher de l’alchimiste.
                </p>
                <p>
                  De manière générale, il est conseillé d'extraire <strong>toutes les pierres mineures</strong> et la <strong>majorité des pierres flat</strong> comme la santé flat sur une pierre de set attaque. Vous pouvez aussi vous séparer des <strong>sets trop spécifiques</strong> comme le set vengeance ainsi que les <strong>caractéristiques qui ne vont pas vraiment ensemble</strong> comme la santé sur un set tumulte.
                </p>
              </div>
            </div>
            <div className={styles.fabSection}>
              <div className={styles.fabImagesBlock}>
                <img 
                  src="/images/permutation/clocher.png" 
                  alt="Clocher de l'alchimiste" 
                  className={styles.fabInventaireImg}
                />
              </div>
              <div className={styles.fabTextBlock}>
                <p>
                  Il est toujours préférable de maximiser la barre du taux de succès en bas à gauche (épique) pour être garanti d'obtenir une rune majeur du set de votre choix. Il faudra un total de 84 noyaux de permutation pour choisir la caractéristique de votre choix.                 
                </p>
              </div>
            </div>
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
        <VideoModal 
          videoId={selectedVideoId} 
          onClose={() => setSelectedVideoId(null)} 
        />
      </div>
    </MainLayout>
  );
}
