'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function LesBases() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>LES BASES</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>Bienvenue sur les bases de l&apos;équipement sur Epic Seven. L&apos;équipement sur Epic Seven est une des choses les plus importantes pour progresser efficacement. Ne pas optimiser les caractéristiques d&apos;un héros entravera votre progression à plusieurs niveaux sur le jeu.</p>
          <p>La plupart des héros sont viables dans tous les contenus PvE si vous avez les équipements sur eux. Passons maintenant aux bases que vous devez savoir sur les équipements en général.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Les Équipements</h2>
          <p>Chaque équipement se présentera de la même manière :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>A</strong> - L&apos;indicateur de niveau (ou de tier). Plus le niveau est élevé et plus le tier sera important. Les équipements vont jusqu&apos;au niveau 90.</li>
            <li><strong>B</strong> - Le niveau d&apos;amélioration de l&apos;équipement. Chaque équipement commence à 0 et peut être amélioré jusqu&apos;à +15.</li>
            <li><strong>C</strong> - Le set d&apos;équipement. En complétant un set, vous gagnez un bonus de caractéristique.</li>
          </ul>
          <p>Vous pouvez équiper <strong>6 équipements</strong> et <strong>1 artefact</strong> pour chaque héros.</p>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/equipements/base1.png" alt="Structure d&apos;un équipement" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Chaque équipement possède une <strong>caractéristique principale</strong> unique :</p>
              <p><strong>Côté gauche :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '8px' }}>
                <li>Armes : attaque flat</li>
                <li>Casque : Santé flat</li>
                <li>Armure : Défense flat</li>
              </ul>
              <p><strong>Côté droit :</strong> Ce sont les équipements les plus importants. Ils donnent des caractéristiques principales en %.</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '8px' }}>
                <li>Collier : Attaque flat/%, Défense flat/%, Santé flat/%, CC, DCC</li>
                <li>Anneau : Attaque flat/%, Défense flat/%, Santé flat/%, Efficacité, ER</li>
                <li>Bottes : Attaque flat/%, Défense flat/%, Santé flat/%, Vitesse</li>
              </ul>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/equipements/base2.png" alt="Caractéristiques principales" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Pour le côté gauche, la caractéristique principale sera toujours la même. Seuls les <strong>colliers, anneaux et bottes</strong> peuvent avoir une caractéristique principale qui varie.</p>
              <p className={styles.note}><strong>NOTE</strong> : il est impossible d&apos;avoir de la défense % et flat sur les armes.</p>
              <p className={styles.note}><strong>NOTE 2</strong> : il est impossible d&apos;avoir de l&apos;attaque % et flat sur les armures.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <p>Voici un résumé de ce qu&apos;il est possible d&apos;avoir sur chaque équipement :</p>
            <img src="/images/tutoriels/equipements/base3.png" alt="Résumé équipements" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.15)' }} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Grade des Équipements</h2>
          <p>Il y a actuellement <strong>5 types d&apos;équipement</strong> :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Normal</strong> : pas de caractéristique secondaire</li>
            <li><strong>Bon</strong> : 1 caractéristique secondaire</li>
            <li><strong>Rare</strong> : 2 caractéristiques secondaires</li>
            <li><strong>Héroïque</strong> : 3 caractéristiques secondaires</li>
            <li><strong>Épique</strong> : 4 caractéristiques secondaires</li>
          </ul>
          <p>Chaque équipement du même tier aura la même caractéristique principale peu importe leur rareté :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>T1 : niveau 1 à 28</li>
            <li>T2 : niveau 29 à 42</li>
            <li>T3 : niveau 43 à 57</li>
            <li>T4 : niveau 58 à 71</li>
            <li>T5 : niveau 72 à 84</li>
            <li>T6 : niveau 85</li>
            <li>T7 : 86+</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Caractéristiques Secondaires</h2>
          <p>Chaque équipement peut avoir jusqu&apos;à <strong>4 caractéristiques secondaires</strong> :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Arme</strong> : attaque %, santé flat/%, vitesse, CC, DCC, efficacité et ER</li>
            <li><strong>Casque</strong> : attaque flat/%, défense flat/%, santé flat/%, vitesse, CC, DCC, efficacité et ER</li>
            <li><strong>Armure</strong> : défense %, santé flat/%, vitesse, CC, DCC, efficacité et ER</li>
            <li><strong>Collier, anneau et bottes</strong> : tout sauf la caractéristique principale</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sets d&apos;Équipements</h2>
          <p>Chaque équipement aura un bonus de set qui sera soit de <strong>2 pièces</strong>, soit de <strong>4 pièces</strong> :</p>

          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', margin: '20px 0 10px' }}>Wyvern (Vouivre)</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Vitesse</strong> : +25% vitesse (4 pièces)</li>
            <li><strong>Critique</strong> : +12% de chances de coup critique (2 pièces)</li>
            <li><strong>Coup</strong> : +20% d&apos;efficacité (2 pièces)</li>
          </ul>

          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', margin: '20px 0 10px' }}>Golem</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Santé</strong> : +20% santé (2 pièces)</li>
            <li><strong>Défense</strong> : +20% défense (2 pièces)</li>
            <li><strong>Attaque</strong> : +45% d&apos;attaque (4 pièces)</li>
            <li><strong>Protection</strong> : Barrière de 12% santé max pendant 2 tours (4 pièces)</li>
          </ul>

          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', margin: '20px 0 10px' }}>Banshie</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Destruction</strong> : +60% de dégâts en coup critique (4 pièces)</li>
            <li><strong>Vol de vie</strong> : Absorbe 20% des dégâts infligés en santé (4 pièces)</li>
            <li><strong>Contre</strong> : 30% de chances de contre-attaquer (4 pièces)</li>
            <li><strong>Résistance</strong> : +20% résistance d&apos;effet (2 pièces)</li>
          </ul>

          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', margin: '20px 0 10px' }}>Azimanak</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Unité</strong> : +8% de chances de double-attaque (2 pièces)</li>
            <li><strong>Immunité</strong> : Immunité pendant 1 tour au début du combat (2 pièces)</li>
            <li><strong>Rage</strong> : +30% de dégâts sur cible avec malus (4 pièces)</li>
          </ul>

          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', margin: '20px 0 10px' }}>Caides</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Vengeance</strong> : +12% vitesse et +0.5% par % de santé perdue (4 pièces)</li>
            <li><strong>Blessure</strong> : Réduit la santé max de la cible de 6% max / 12% attaque unique (4 pièces)</li>
            <li><strong>Infiltration</strong> : Infiltre 15% de défense en attaque unique (2 pièces)</li>
            <li><strong>Tumulte</strong> : -10% santé, +10% dégâts infligés (2 pièces)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Amélioration d&apos;Équipements</h2>
          <p>Quand vous souhaitez améliorer un équipement, il y a des <strong>paliers tous les 3 niveaux</strong> jusqu&apos;à 15 à prendre en compte.</p>
          <p>Tous les 3 niveaux, votre équipement s&apos;améliorera dans une caractéristique secondaire aléatoire.</p>
          <p>L&apos;amélioration d&apos;équipement est coûteuse et peut dépenser le million de gold pour améliorer un équipement de tier 6 en +15.</p>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/equipements/base4.png" alt="Amélioration d&apos;équipement" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>De manière générale, un équipement va d&apos;abord améliorer ses caractéristiques secondaires avant d&apos;en ajouter de nouvelles.</p>
              <p>Il est recommandé d&apos;améliorer seulement les équipements <strong>épiques</strong> voire <strong>héroïques</strong>.</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/equipements/base5.png" alt="Enhancement examples" className={styles.infoImage} />
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.sectionTitle}>Talismans et poudres d&apos;amélioration</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '32px',
                justifyContent: 'center',
                marginBottom: '32px',
                maxWidth: '1280px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <div className={styles.infoBlock}>
                <img src="/images/tutoriels/equipements/base7.png" alt="Talismans et poudres d&apos;amélioration" className={styles.infoImage} />
              </div>
              <div className={styles.infoBlock}>
                <img src="/images/tutoriels/equipements/base8.png" alt="Talismans et poudres d&apos;amélioration" className={styles.infoImage} />
              </div>
              <div className={styles.infoBlock}>
                <img src="/images/tutoriels/equipements/base9.png" alt="Talismans et poudres d&apos;amélioration" className={styles.infoImage} />
              </div>
              <div className={styles.infoBlock}>
                <img src="/images/tutoriels/equipements/base10.png" alt="Talismans et poudres d&apos;amélioration" className={styles.infoImage} />
              </div>
            </div>
            <div className={styles.infoText}>
              <p>Depuis plusieurs mises à jour, il est possible d&apos;améliorer ses équipements avec des <strong>talismans</strong> ou des <strong>poudres d&apos;équipement</strong>.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variation des Caractéristiques Secondaires</h2>
          <p>Tous les 3 niveaux d&apos;amélioration d&apos;un équipement vous allez gagner des bonus supplémentaires dans une des caractéristiques secondaires. Ce bonus varie selon le tier de l&apos;équipement :</p>
          <p><strong>Pour les équipements lvl 85 (Tier 6) :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Santé / Défense / ER / Efficacité / Attaque : <strong>4 à 8%</strong></li>
            <li>DCC : <strong>4 à 7%</strong></li>
            <li>CC : <strong>3 à 5%</strong></li>
            <li>Vitesse : <strong>1 à 4</strong> (5 seulement épique et très rare)</li>
          </ul>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img src="/images/tutoriels/equipements/base6.png" alt="Variation des caractéristiques" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.15)' }} />
          </div>
        </section>

        <p>Vous connaissez maintenant les bases des équipements sur Epic Seven, pour affiner votre connaissance sur les équipements, une deuxième partie est disponible <a href="/tutoriels/equipements/approfondir" style={{ color: '#b89c4c', textDecoration: 'underline' }}>ici</a>.</p>

      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
