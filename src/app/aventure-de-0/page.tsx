'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from './aventure.module.css';

const journeys = [
  {
    day: 1,
    videoId: 'IcqrJ7cvdRA',
    title: 'JOUR 1',
    content: [
      "L'objectif ici est de se familiariser avec le jeu, de progresser dans l'aventure et d'avancer le chemin de l'aventurier.",
      "Vildred est un excellent héros pour progresser rapidement dans l'aventure.",
      "Iseria est un excellent héros pour du contenu PvE plus difficile, elle n'est pas utile au début mais elle finira par devenir un confort de jeu.",
      "Vildred Arbitre est très puissant pour progresser rapidement dans l'aventure et il est fort en PvP.",
      "Tenebria spectrale est bien pour progresser dans l'aventure mais elle sera plus forte dans le contenu PvE très avancé, comme les étages de l'abîme. Elle est forte en PvP également.",
      "J'ai joué environ 2h la première journée."
    ],
    videoFirst: true
  },
  {
    day: 2,
    videoId: 'O7fPz25JU20',
    title: 'JOUR 2',
    content: [
      "L'objectif ici est de terminer le premier voire de progresser dans le deuxième continent de l'aventure pour débloquer les invocations ML, les évolutions de héros 3 étoiles ainsi que la majorité des contenus PvE.",
      "C'est aussi le moment de se familiariser avec les différents onglets du jeu comme le sanctuaire, la boutique secrète ou l'arène.",
      "On commence aussi à comprendre le fonctionnement des héros : leurs sorts, les éveils, leurs niveaux et leurs équipements.",
      "J'ai joué environ 3h30 la deuxième journée.",
      "Il faut environ 4h pour finir le premier continent."
    ],
    videoFirst: false
  },
  {
    day: 3,
    videoId: '0n3vKZC970I',
    title: 'JOUR 3',
    content: [
      "Pour le troisième jour, on va progresser dans les différents contenus débloqués : tour automate, étages de l'abîme et salle du calvaire.",
      "On améliore nos premiers héros et on aura pour objectif d'effectuer l'évolution de montmorancy pour les chanceux qui ont pu l'invoquer. Si vous ne l'avez pas, ce n'est pas grave, vous pourrez progresser sans elle.",
      "J'ai joué environ 2h30 la troisième journée.",
      "Soit un total d'environ 8h de jeu."
    ],
    videoFirst: true
  },
  {
    day: 4,
    videoId: 'RKqVVvlXX1w',
    title: 'JOUR 4',
    content: [
      "Pour le quatrième jour, on va avancer le chemin de l'aventurier, ainsi que l'aventure dans le 2eme continent pour espérer récupérer Tamarinne.",
      "L'objectif est aussi d'avancer les défis de chasse de la Wyvern pour obtenir les sets d'équipements gratuits en deuxième partie des défis.",
      "On peut aussi préparer les runes pour l'évolution de Montmorancy.",
      "L'optimisation des héros devient nécessaire : sorts, éveil, promotions et équipements.",
      "J'ai joué environ 3h la quatrième journée.",
      "Soit un total d'environ 11h de jeu."
    ],
    videoFirst: false
  },
  {
    day: 5,
    videoId: 'x_81Umtua-M',
    title: 'JOUR 5',
    content: [
      "Pour le cinquième jour, on a terminé le deuxième continent de l'aventure. Ce qui nous a permis d'obtenir Tamarinne ainsi que l'évolution de Ras.",
      "J'ai joué environ 3h la cinquième journée.",
      "Soit un total d'environ 14h de jeu."
    ],
    videoFirst: true
  },
  {
    day: 6,
    videoId: 'pRW-eIkGre4',
    title: 'JOUR 6',
    content: [
      "Pour le sixième jour, on a terminé l'évolution de Ras et on a étudié l'utilité et le fonctionnement des expéditions.",
      "J'ai joué environ 3h la sixième journée.",
      "Soit un total d'environ 17h de jeu."
    ],
    videoFirst: false
  },
  {
    day: 7,
    videoId: 'fsLpqhl5I1A',
    title: 'JOUR 7',
    content: [
      "Pour le septième jour, on a choisi les héros et artefacts des tickets sélectifs. On a aussi avancé les étages de l'abîme.",
      "On commence à se familiariser avec les familiers et avec les équipements exclusifs.",
      "J'ai joué environ 3h la septième journée.",
      "Soit un total d'environ 20h de jeu."
    ],
    videoFirst: true
  },
  {
    day: 8,
    videoId: '1VwkSa50UMU',
    title: 'JOUR 8',
    content: [
      "Pour le huitième jour, on a commencé les évolutions de Lorina, le temps qu'on invoque Muwi pour avancer le chemin de l'aventurier et les défis de chasse. On peut aussi progresser dans l'aventure et dans les étages de l'abîme.",
      "On n'oublie pas de faire le tour des boutiques hebdomadaires chaque lundi.",
      "On n'oublie pas non plus les GvG, les labyrinthes et l'arène chaque jour.",
      "J'ai joué environ 2h la huitième journée.",
      "Soit un total d'environ 22h de jeu."
    ],
    videoFirst: false
  },
  {
    day: 9,
    videoId: 'EeRdNJLT-YU',
    title: 'JOUR 9',
    content: [
      "Pour le neuvième jour, on est passé rang 50 sur notre compte, on a donc les titans de disponible en guilde.",
      "La progression a été très rapide ce jour-ci, on a invoqué Muwi, on a donc fait la Wyvern 13 et dans la foulée, on a débloqué le défi de chasse du golem et terminé le golem 13. On a pu monter et jouer Cermia.",
      "Il y avait énormément de récompenses à récupérer.",
      "J'ai joué environ 3h la neuvième journée.",
      "Soit un total d'environ 25h de jeu."
    ],
    videoFirst: true
  },
  {
    day: 10,
    videoId: 'vae4ikCoRw8',
    title: 'JOUR 10',
    content: [
      "Pour le dixième jour, on a réussi l'étage 83 de l'abîme. Puis on a farm les runes et les catalyseurs pour terminer l'évolution de Lorina.",
      "On s'est aussi familiarisé avec l'amélioration des équipements et les sets tumulte et infiltration.",
      "On attend le rang 55 sur notre compte pour débloquer les reforges et terminer le chemin de l'aventurier.",
      "J'ai joué environ 3h la dixième journée.",
      "Soit un total d'environ 28h de jeu."
    ],
    videoFirst: false
  }
];

export default function AventureDeZero() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.aventureContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>AVENTURE DE 0</h1>
          <p className={styles.subtitle}>
            Dans cet onglet vous retrouverez le suivi de mon aventure de 0 sur Epic Seven à l&apos;occasion des 6 ans d&apos;anniversaire du jeu.
          </p>
        </div>

        {journeys.map((journey) => (
          <div key={journey.day} className={styles.journeySection}>
            {journey.videoFirst ? (
              <>
                <div className={styles.videoWrapper} onClick={() => setSelectedVideoId(journey.videoId)}>
                  <img 
                    src={`https://i.ytimg.com/vi/${journey.videoId}/maxresdefault.jpg`}
                    alt={`Jour ${journey.day}`}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>▶</div>
                </div>
                <div className={styles.textContent}>
                  <h2 className={styles.dayTitle}>{journey.title}</h2>
                  {journey.content.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>{paragraph}</p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className={styles.textContent}>
                  <h2 className={styles.dayTitle}>{journey.title}</h2>
                  {journey.content.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className={styles.videoWrapper} onClick={() => setSelectedVideoId(journey.videoId)}>
                  <img 
                    src={`https://i.ytimg.com/vi/${journey.videoId}/maxresdefault.jpg`}
                    alt={`Jour ${journey.day}`}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>▶</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <VideoModal 
        videoId={selectedVideoId} 
        onClose={() => setSelectedVideoId(null)} 
      />
    </MainLayout>
  );
}
