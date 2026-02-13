'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Adin() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ADIN</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>
            Adin est la protagoniste de l&apos;épisode 4. Son évolution est assez spéciale puisqu&apos;elle
            n&apos;a pas besoin ni de catalyseurs pour améliorer ses compétences ni de runes pour son arbre
            de compétence. Il y aura cependant des missions à effectuer pour débloquer ses améliorations et
            débloquer 4 éléments différents sur le héros avec 4 kits de compétence différents. Sa version
            terre est bien en PvE, cependant sa version lumière est la meilleure et celle favorisée par les joueurs.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STg628Cs4FDwafA5guVc0bY7OnvY13VaXpEYT95EUwy9691STtWGvGDLnfHs26i66Ks90JvkgC7T_sEhho1AqV7y9bPAUfsPbp2TWDwT-zqHCtduKcKSXcGEbGIO85J5Bc-C73FdnqGT9iItavuocTwqL6_-vDZV9mLHGgpPtVc4MnwGhpPAqht2fQ=w1280"
              alt="Adin"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Adin ?</h2>
          <p>
            Général — Débloquer Adin 6★ et son éveil : Vous pouvez utiliser une Potion d&apos;éveil pour
            passer directement le héros niveau 60.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STcNdPakjDc_Ue4oLkc2DkoQ6Hk4Z7nc-2kSbZXMH-pjxDKJGo0knO5bvywFazXhALOwA4-g2mAMPO8aAvRdt2CEx_s51WNTwMDCgQv7KZzAxlloy2UQr4pD_YHTLVRsTpAY0rQFuVSfxI0mQ3Nk8iwFq9Pwtv0HH1gI9LhvOtHPLTK_F2sKlbCgFxvqU0y-KNpd818XVwTU2TwouEV1DdhTkEBp9bHlrDOLag=w1280"
              alt="Évolution Adin"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions de l&apos;Épisode 4</h2>
          <p>
            Les missions d&apos;Adin se débloquent au fur et à mesure de la progression dans l&apos;épisode 4.
            Voici les étapes clés par chapitre :
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Chapitre 1 :</strong> Pas de particularité.</li>
            <li><strong>Chapitre 2 :</strong> Éliminer 100 Wicked In Shadow Mountain (2-10 avec Adin : 4 élim par run, ~24 répétitions).</li>
            <li><strong>Chapitre 3 :</strong> Éliminer 100 Silver Maned Volf in West Prairie (3-9 : 3 élim, ~34 reps) ; Éliminer 25 Gentle Grasseland Troll (3-10 : 3 élim, ~9 reps dont 1 avec Adin).</li>
            <li><strong>Chapitre 4 :</strong> Éliminer 70 Evil Plants in East Khan (4-8 : 7 élim, ~10 reps) ; Éliminer 50 Resistance Members avec Adin (4-S1 : 9 élim, ~6 reps).</li>
            <li><strong>Chapitre 5 :</strong> Éliminer 70 Slime in Recluse&apos;s Forest (5-S1 : 9 élim, ~8 reps) ; Éliminer 20 Shadow Elf avec Adin (5-8 : 7 élim, ~3 reps) ; Affronter Aria avec Adin (5 coups critiques).</li>
            <li><strong>Chapitre 5S :</strong> Éliminer 70 Awakened in Safe Haven Origin (5S-2 : 9 élim, ~8 reps) ; Éliminer 50 Spirit Shard avec Adin (5S-4b : 5 élim, ~10 reps).</li>
            <li><strong>Chapitre 6 :</strong> Éliminer 50 Goblin Bandits in West Khan (6-S2 : 5 élim, ~10 reps) ; Éliminer 15 Khan Engineers avec Adin (6-2 ou 6-8 : 3 élim, ~5 reps) ; Affronter Taeyou avec Cold Heart (éliminer avant son 15ème tour).</li>
            <li><strong>Chapitre 7 :</strong> Éliminer 50 Tool Wicked in Forsaken Lands (7-1 : 7 élim, ~8 reps) ; Éliminer 30 Awakened avec Adin (7-3 ou 7-10 : 11 élim, ~3 reps).</li>
            <li><strong>Chapitre 8 :</strong> Éliminer 50 Glata in East Prairie (8-1 : 6 élim, ~9 reps) ; Éliminer 30 Prairie Sorcerer avec Adin (8-5 : 6 élim, ~5 reps) ; Affronter Sharun avec Adin (3 coups critiques sans malus).</li>
            <li><strong>Chapitre 8S :</strong> Éliminer 100 Awakened in Broad Wind Plateau (8S-7a : 11 élim, ~10 reps) ; Éliminer 10 Theranhad Soldier avec Adin (8S-4a : 9 élim, ~5 reps).</li>
            <li><strong>Chapitre 9 :</strong> Éliminer 50 Scare Crow in Wicked Land (9-S5 : 4 élim, ~13 reps) ; Éliminer 20 Cannon avec Adin (9-10 : 4 élim, ~10 reps) ; Affronter Disaster Haerang avec Adin (3 attaques avec Adin ou Assassin).</li>
            <li><strong>Chapitre 10 :</strong> Effectuer le Temple Stages 3 fois avec Adin (10-7a) ; Éliminer 50 Spirit Shard in North Theranhad (10-7a : 8 élim, ~7 reps) ; Éliminer 20 Karura avec Adin (10-6 : 6 élim, ~4 reps) ; Effectuer le 10-5 Jealous Square avec Adin.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changement d&apos;élément</h2>
          <p>
            Pour changer l&apos;élément d&apos;Adin, il suffira de cliquer sur l&apos;élément souhaité puis
            sur altération d&apos;élément. 2 ressources élémentaires vous seront demandées en échange.
            Ces ressources peuvent être achetées dans le bureau d&apos;échange de l&apos;épisode 4 contre
            400 Points d&apos;aventure chacune. Le premier changement d&apos;élément est gratuit.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRhuYskHkdGD12Jgie65GC_50w-_Pd9dXTFLpu83sivYQWQI-DfqBDf5za7veqdQZBDM80Kc33yFty8K_PUkG9AInhEP97xyyql_Kh-L7bzB4uo6sqFBffc1XzNIPOZVD5d77hXZScvUe7dz_Wrp50bBbfoHpu1FbLJacKiyRCasnH78yjZSvIACL0DNjSNBVswUcxLjiZiuPM5MtHqtXfiQAF4Fx8NywrF=w1280"
              alt="Changement d'élément Adin"
              className={styles.infoImage}
            />
          </div>
          <p>
            Rendez-vous dans l&apos;épisode 4 Natalon de l&apos;aventure pour accéder aux différentes
            versions d&apos;Adin : Terre, feu, glace &amp; Lumière.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSb1MPm86dDMo28rK4zqtpxVcTbXdwg0414hzG2gwlHZxmkQa1s5UT10iuIm9bkccb5EXfj3EMVRnB1zVWWro8geiR4b8GaiAQtbVU0z5O3k-o1azmkudLcYGSVhhNhZyHpl-07RjESqZkLC9UTMSHmctNtYovyY8ARSQjMcE9vGlRnyr3PsHLO_XAHE6C6EK4XDOnZWgbvK4cV3ZZDVKbjr6BUq8tHm6BMje4=w1280"
              alt="Achat ressources élémentaires"
              className={styles.infoImage}
            />
          </div>
        </section>

        <p className={styles.note}>
          Astuce : La version Lumière d&apos;Adin est la plus populaire et la plus performante.
          Concentrez vos ressources sur cette version en priorité.
        </p>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
