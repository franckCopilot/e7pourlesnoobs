'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from './runes.module.css';

export default function RunesReinitialisation() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>RUNE DE RÉINITIALISATION</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>
            Les runes de réinitialisation sont une ressource très rare sur Epic Seven.
            Il y a quatre runes différentes qui permettent de réinitialiser un équipement.
          </p>
          <p>
            Il n&apos;existe pas de manière récurrente pour obtenir des runes de réinitialisation.
            Elles peuvent être fournies durant certains webevent, présentes dans certaines boutiques
            de Huche, de side story ou de l&apos;héritage des temps anciens.
          </p>
        </section>

        {/* Vidéo guide */}
        <section className={styles.section}>
          <p className={styles.videoLabel}>Guide vidéo sur les runes de réinitialisation</p>
          <div className={styles.videoEmbed}>
            <div
              className={styles.videoWrapper}
              onClick={() => setActiveVideo('OxBsv4ynUTU')}
            >
              <img
                src={`https://img.youtube.com/vi/OxBsv4ynUTU/hqdefault.jpg`}
                alt="Guide runes de réinitialisation"
                className={styles.videoThumb}
              />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        {/* Présentation des runes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitleLarge}>Présentation des runes de réinitialisation</h2>

          <div className={styles.runesGrid}>
            <div className={styles.runeColumn}>
              <div className={styles.runeItem}>
                <p className={styles.runeLabel}>rune<br />85</p>
                <img src="/images/runes/rune-bleu-85.png" alt="Rune bleue 85" className={styles.runeIcon} />
              </div>
              <div className={styles.runeItem}>
                <p className={styles.runeLabel}>rune<br />88</p>
                <img src="/images/runes/rune-bleu-88.png" alt="Rune bleue 88" className={styles.runeIcon} />
              </div>
            </div>
            <div className={styles.runeColumn}>
              <div className={styles.runeItem}>
                <p className={styles.runeLabel}>rune<br />85</p>
                <img src="/images/runes/rune-violet-85.png" alt="Rune violette 85" className={styles.runeIcon} />
              </div>
              <div className={styles.runeItem}>
                <p className={styles.runeLabel}>rune<br />88</p>
                <img src="/images/runes/rune-violet-88.png" alt="Rune violette 88" className={styles.runeIcon} />
              </div>
            </div>
            <div className={styles.runeDescription}>
              <p>
                Les runes de réinitialisation permettent de récupérer un de ses équipements de +1
                à +15 avec ses statistiques initiales en +0. Il est possible de réinitialiser un
                équipement aussi bien reforge que non reforge.
              </p>
              <p>
                Tout comme les talismans, il existe des runes de réinitialisation <strong>pour les
                équipements</strong> (armes, casques, armures et bottes) <strong>et pour les accessoires</strong> (colliers et
                anneaux).
              </p>
              <p className={styles.subHeading}>Pierres de réversibilité et pierres de reprise :</p>
              <ul>
                <li>Les runes de réinitialisation bleues s&apos;utilisent sur les équipements niveau 85 ou
                90 (chasses)</li>
              </ul>
              <p className={styles.subHeading}>Pierres de restauration et pierres de remembrance :</p>
              <ul>
                <li>Les runes de réinitialisation violettes s&apos;utilisent sur les équipements de niveau
                88 (raid, arène, abîmes, héritage des temps anciens, ect)</li>
              </ul>
              <p className={styles.note}>
                <strong>NOTE 1 :</strong> Il est possible de réinitialiser un équipement jusqu&apos;à un maximum de 5
                fois.
              </p>
              <p className={styles.note}>
                <strong>NOTE 2 :</strong> Une réinitialisation d&apos;un équipement coûtera 500 000 gold et toutes les
                ressources investies (gold, talismans et matériaux de reforge) seront perdues.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation sanctuaire */}
        <section className={styles.section}>
          <p className={styles.navigationText}>
            Pour réinitialiser un équipement, il faudra se rendre dans le <strong>sanctuaire</strong> ➜ <strong>atelier d&apos;acier</strong> ➜ <strong>réinitialisation d&apos;un équipement</strong>.
          </p>
          <div className={styles.navigationImage}>
            <img
              src="/images/runes/sanctuaire-navigation.png"
              alt="Sanctuaire → Atelier d'acier → Réinitialisation"
            />
          </div>
        </section>

        {/* Quel équipement réinitialiser */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitleLarge}>Quel équipement réinitialiser ?</h2>

          <div className={styles.equipSection}>
            <div className={styles.equipLeft}>
              <img
                src="/images/runes/tri-equipement.png"
                alt="Tri par pts d'équipement"
                className={styles.equipImage}
              />
            </div>
            <div className={styles.equipRight}>
              <p>
                Pour choisir un bon équipement à réinitialiser, il est conseillé de choisir un
                équipement avec un <strong>faible point d&apos;équipement</strong>. Le plus pratique reste de trier ses
                équipements en haut à droite par <strong>pts d&apos;équipement</strong>, puis par <strong>ordre croissant</strong>.
              </p>
              <p>
                Choisissez ensuite un équipement épique rouge qui possède 4 lignes qui vous
                intéressent. L&apos;objectif des runes de réinitialisation est d&apos;espérer obtenir un
                équipement avec un meilleur point d&apos;équipement, il serait dommage de réinitialiser
                un équipement qui proc dans une statistique non voulue. Les runes de réinitialisation
                sont très rares. Elles requièrent une utilisation judicieuse.
              </p>
              <img
                src="/images/runes/stats-comparison.png"
                alt="Comparaison stats avant/après réinitialisation"
                className={styles.statsImage}
              />
            </div>
          </div>
        </section>
      </div>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </MainLayout>
  );
}
