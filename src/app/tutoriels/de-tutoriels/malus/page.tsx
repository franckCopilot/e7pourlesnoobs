'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Malus() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>MALUS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>Les malus sont un élément à ne pas négliger sur Epic Seven. Ils sont utiles aussi bien en PvP qu&apos;en PvE et permettent de réduire ou de contrôler la puissance de la cible, héros ou monstres.</p>
          <p>Cependant, même si un héros peut infliger des malus avec ses compétences, il n&apos;est pas garanti de les infliger sur les adversaires, plusieurs mécaniques et calculs sont à prendre en compte.</p>
          <p className={styles.note}><strong>NOTE</strong> : Certains monstres sont insensibles à certains malus. Notamment les étourdissements, les venins ou encore les sommeils sont des malus dont les boss sur Epic Seven sont régulièrement insensibles.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3 Étapes</h2>
          <p>Il existe <strong>3 étapes</strong> à valider pour savoir si un malus va être infligé sur une cible :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Étape 1</strong> : Coup réussi ou coup raté. <em>Attention : concerne uniquement les compétences offensives.</em></li>
            <li><strong>Étape 2</strong> : Les chances du sort. C&apos;est les chances d&apos;infliger un malus décrites dans la compétence du lanceur.</li>
            <li><strong>Étape 3</strong> : L&apos;application du malus. Calcul entre l&apos;efficacité du lanceur et la résistance d&apos;effet de la cible.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Étape 1 — Esquive et coup réussi</h2>
          <p>La première étape concerne uniquement les compétences offensives. Si vous utilisez une compétence non offensive, elle ignore cette étape.</p>
          <p>Si le lanceur rate sa compétence, il n&apos;aura <strong>aucune chance</strong> d&apos;infliger un malus à la cible.</p>

          <p><strong>3 situations qui peuvent vous faire rater :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Blind (Réduction des chances de coup réussi)</strong> : 50% de chance de rater l&apos;attaque</li>
            <li><strong>L&apos;évasion de la cible</strong> : réduit vos chances de coup réussi
              <ul style={{ paddingLeft: '24px', marginTop: '4px' }}>
                <li>Évasion passive (ex : Adin possède 50%)</li>
                <li>Bonus évasion (ex : ML Violet +50% par tour)</li>
                <li>Effet des artefacts (ex : Rêvelame Lunaire)</li>
                <li>Évasion partagée (ex : Cartuja Assassin +20% alliés)</li>
              </ul>
            </li>
            <li><strong>Désavantage élémentaire</strong> (héros RGB) : 50% de chance de rater</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : l&apos;évasion d&apos;un personnage ne peut excéder 90%.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : Rater sa compétence réduit les dégâts infligés de 25%, empêche les coups critiques et ne permet pas d&apos;infliger de malus.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQsY-3x15a-3TeekmRjzt1eTwI-_YJi0EttP165AMkLFTvPKiOWcjXqg5T-Zf2Tn9UG7eSnyInmccHAujCdXcptBtciEjhscO6kX-u3FkYkii_rCn6K-tTQvh5ruz93J2iPg8m0PQ4_hPOYA7FgviZeGfKWTop8Ax0_GYB1YImbfIuFUIOvwPnl=w1280" alt="Blind" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Blind</strong> — Malus réduction des chances de coup réussi.</p>
            </div>
          </div>

          <p><strong>Augmentation des chances de coup réussi :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Le malus <strong>Cible</strong> réduit l&apos;esquive de l&apos;adversaire de 15% (+15% dégâts)</li>
            <li>Chances de coup réussi passives (ex : <strong>Zahhak</strong> +50%)</li>
            <li>Bonus Hit (ex : <strong>ML Ludwig</strong> +50% avec son S2)</li>
            <li>Artefacts (ex : <strong>Symbole d&apos;unité</strong>)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Étape 2 — Taux de chance de la compétence</h2>
          <p>Une fois que le lanceur a validé l&apos;étape 1 et réussi son coup sur la cible, il faudra s&apos;intéresser aux chances de la compétence d&apos;infliger un malus.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSIiPHzPL3Pa1AiRsyXo1MM6t8t20h5EIsks0x5akpp8acY1SqKF4ybywKOyaMIeGXHSa9tr1ZXxI57lu26LUs6UP8k3xA-dSreJ5s4iNRD5H1O3sdtgppCOT4JjBnNou6MYfuXpQxSae0OqH4xj7quasIKt7pglynRKl3mCflSGQmBv30r0FMq5YTSTPM7OtUv51HqNnLriq63bVe5xxEj_yRZ5Q2w8tR74E0=w1280" alt="Chances d'effet" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Exemple : la première compétence de <strong>Bellona Plage</strong> a 75% de chances de cibler l&apos;ennemi. Elle aura donc seulement 75% de chance de lancer sa compétence avec son malus.</p>
            </div>
          </div>

          <p className={styles.note}><strong>NOTE</strong> : La plupart des compétences voient leurs chances d&apos;effet augmentées en améliorant la compétence.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : Si les chances d&apos;effet ne sont pas précisées dans le sort, c&apos;est que la compétence a 100% de chance de se lancer avec son malus.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Étape 3 — Application des malus</h2>
          <p>La troisième étape va valider ou invalider les chances d&apos;infliger un malus. Cette étape prend en compte l&apos;<strong>efficacité</strong> du lanceur et la <strong>résistance d&apos;effet (ER)</strong> de la cible.</p>
          <p style={{ background: 'rgba(212,175,55,0.1)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.3)', textAlign: 'center', fontSize: '1.1rem' }}>
            <strong>FORMULE</strong> : 100% + Efficacité% - ER% = Chances d&apos;infliger un malus
          </p>
          <p style={{ marginTop: '16px' }}>On note qu&apos;il y a un bonus de 100% de chances qui bénéficie au lanceur. Même si le lanceur a 0% d&apos;efficacité, il faudra toujours 100% d&apos;ER supplémentaire à la cible pour être certain de ne pas subir un malus.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSpdyHTJO7XXXRSSfPYONZxqxZzrpqqgkhxkjhxG8r94pfWxPprrPthait00X2MNkYsjBvaBMF099tLOWbjgRZZP4Ou_6Z75P2fB5ej6Ihioygb9mZilljORiUEy1swB2TntFGZ0GcdunJGdup0snoRwr0uQDAmzVzUp09oJhec3gDBNz823r4orEAyZ4RC9o9nX_r9JQXsSOsLZw5zrotrS_SVzyFIg_QQ=w1280" alt="Exemple Wyvern 13" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Exemple : Wyvern 13</strong></p>
              <p>Furious possède 110% d&apos;efficacité, la Wyvern 13 possède 80% d&apos;ER.</p>
              <p>100% + 110% - 80% = <strong>130%</strong> de chances d&apos;infliger un malus.</p>
            </div>
          </div>

          <p><strong>⚠ ATTENTION</strong> : Si le résultat est au-dessus de 85%, les chances d&apos;infliger un malus seront automatiquement bridées à <strong>85%</strong>. C&apos;est ce qu&apos;on appelle les <strong>15% de RNG</strong> sur Epic Seven.</p>
          <p>L&apos;efficacité la plus optimale pour infliger des malus à la Wyvern 13 est donc de <strong>65%</strong> (100% + 65% - 80% = 85%).</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>BONUS : Ignore la résistance d&apos;effet</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRfdywbjolPPisY-_RGH6j4abtJ8aSsYZzp2TiHvOiYiBXjhtPAhga8ZNnjo6Nit8TZwF5vClZZhzr139XBoZCJZa7nZlyy9PgV4yKPii2utuz3QmIfreoX8S17XeCARzgBc4QyQafs97euXUl1asJfvpT_F6kBlWVyVZkRiWh7Cqbg3orC-hC9O65K3sHyhz9y5CIGBc5MTbyVH3glhnWHyhI6Vm7XpJ-2SxY=w1280" alt="Soulburn ignore ER" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Il existe une mécanique spéciale, qui se déclenche généralement avec l&apos;effet <strong>braise d&apos;âme (SoulBurn)</strong>, qui permet d&apos;<strong>ignorer la résistance d&apos;effet</strong> de la cible.</p>
              <p>Cette mécanique passe outre le bridage automatique de 85% pour atteindre les <strong>100%</strong>.</p>
            </div>
          </div>
          <p>Attention toutefois : l&apos;étape 1 (coups réussis) et l&apos;étape 2 (chances d&apos;effet) devront toujours être validées. Par exemple, la troisième compétence de <strong>Rann</strong> n&apos;aura que 85% de chance de se lancer avec une réduction de défense, malgré son SoulBurn.</p>
          <p>Les effets d&apos;ignorance de la résistance d&apos;effet sont <strong>très puissants et très utilisés</strong> sur Epic Seven.</p>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
