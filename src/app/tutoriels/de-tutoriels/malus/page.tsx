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
          <p className={styles.note}><strong>NOTE</strong> : Attaquer avec l&apos;avantage élémentaire augmentera vos dégâts de 10% et augmentera vos chances de coup critique de 15%.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SS46HEA8JJ7QTgYDLVHeLWvmNyIxoKwp9EdyPU2rxypINm34zPEhHBWLVlMiM8yoFhdgN5l_KyUetygRcZuLMBhgayyH_tUlG5o2-G75gXcHMXlrMcHAZ40UrTl7qJfcT-t73WdqExGfK_Rm48qU17SasZ-edjXaEaHGQLtQo8-cfGj1gxVgqZw=w1280" alt="Blind" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Blind</strong> — Malus réduction des chances de coup réussi.</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SROEqurnCLK5qn5hrVxLC4kdxT2SrjER8A8dSrIiH43-Pv2piP_v-Aa1Dz7It2SNbK3vlH1stMjebHv8push2pUVfrNkZB4AahlwMmGsTo8Xg5Z7wS11emsSnTcmlptbYqeF6QrJpdKnBVNh6Ie-f-HQvWWGktGRTWBJh7fIddv6bDyyEor_kHBPYP8CSMoaXV3Fw06xmCMPThAqLkKXBv9rcs-Tpkomz_WMrQ=w1280" alt="Evasion" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Évasion</strong> — Réduit vos chances de coup réussi sur la cible.</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRLoBM10Xt1xw6iVV8fYwoM9oa48cqMc58S-60hOE7DKRIIi4HTRsh00PBIi7XZvNRJkvY-YHmleIGdCfUUsNY1r9jBhpPUHHN_sQXxLLWPJ6HwxGk2OFE2-qx_ANwch9eFttLWIrsoxmfBZxArbpTf-dl2qiLA8pgepwYfpg09GK4kvcAoko4LigHOdYji2JcGY8Oe5N9pNLuFAVkC8TDcQ10nJiy0yh-79AY=w1280" alt="Avantage élémentaire" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Avantage élémentaire</strong> — Le désavantage élémentaire réduit les chances de coup réussi de 50%.</p>
            </div>
          </div>

          <p><strong>Augmentation des chances de coup réussi :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Le malus <strong>Cible</strong> réduit l&apos;esquive de l&apos;adversaire de 15% (+15% dégâts)</li>
            <li>Chances de coup réussi passives (ex : <strong>Zahhak</strong> +50%)</li>
            <li>Bonus Hit (ex : <strong>ML Ludwig</strong> +50% avec son S2)</li>
            <li>Artefacts (ex : <strong>Symbole d&apos;unité</strong>)</li>
          </ul>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQNkdKgATYEvwpp-uAy4-GpZgE8RPXkMFyZBqOLLAR7nXEefZo0WR6juwGlnd1wT_IMnum6sTd1jV5rf-lOdQuWwyJlgpFumuowZ3E5SspH0TBcL87ZPqu_VhKlK5u-y3E2fz12COjuAntTYDJrQNPk-fAHoe0lCqtjm5NTmkL85PS1rsISS5Jq62o=w1280" alt="Cible" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Cible</strong> — Réduit l&apos;esquive de l&apos;adversaire de 15%, il subira de plus 15% de dégâts supplémentaires.</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STiRKPLOKNKaBoki2Vz7RAP5iVewM6TEQD2oY0DlRlWEkDZaEgK3VvA1EXQ5EGGLFSPGY2fB8kKb3A7HmZZP_W3B1rfLDA89KwFMOZmrpBD1QQYVmXFpDM-aTbfX2QmdjRp_NB6mlJaGiRZvKInDn6nKxEHFs3wXTLmPm9VzI9OBDmK4CrJX6N6OfQ=w1280" alt="Hit" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Hit</strong> — Augmente les chances de coup réussi du lanceur.</p>
            </div>
          </div>

          <p>Une simple soustraction entre les chances de coup réussi et les chances de coup raté permet de déterminer les chances finales de réussir votre attaque.</p>
          <p><strong>Exemple</strong> : L&apos;adversaire possède <strong>Adin</strong> avec l&apos;artefact <strong>Rêvelame Lunaire</strong> et <strong>ML Cartuja</strong>. Adin aura donc 50% d&apos;évasion passive + 20% de l&apos;artefact + 20% de ML Cartuja : un total de <strong>90% d&apos;évasion</strong>.</p>
          <p>En face, <strong>Zahhak</strong> est équipé de l&apos;artefact <strong>Symbole d&apos;unité</strong>. Zahhak aura donc 50% de coup réussi passif + 20% de l&apos;artefact : un total de <strong>70% de chances de coup réussi</strong> supplémentaires. La différence est de 20% : j&apos;aurai donc <strong>20% de chance de rater</strong> mon attaque sur Adin.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Étape 2 — Taux de chance de la compétence</h2>
          <p>Une fois que le lanceur a validé l&apos;étape 1 et réussi son coup sur la cible, il faudra s&apos;intéresser aux chances de la compétence d&apos;infliger un malus.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STstsnEFBHFIPFl8TQGLGsw-3hZsSSZUsn_uy6TRv7RTJLnM2p2fJxD_vAtpmpB85NppQJT-IjHbgjsuQn0IcRkCGLb_hu0ZwhSUqrDQe_qGaZ6SnO6ZaiPQ26rIIKmXRgyqi0OmyH1GUpcm3PrsVotG2T7yWlS1CcLBL0l39K7xGcKyrQ01rUtLmdS8iI74ZtXx3XTNk0cM8CyhdyBwvVRO3zLLzOZXNRRXNM=w1280" alt="Chances d'effet" className={styles.infoImage} />
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
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STq5CP5vixP04mb0b0Q5p0Zz3hPINkrW0VwX-Hys0ADXUhCZLxF9lnhO8_qeseZa0Wnl1AUo9GRF7qSiR--4q5SFTCGutSU9vZ9cr3eSyxh4VQRmbNGdRDFUjflvN--O7KFgTAOIXJZMcWeJZSiGNBYyfRO6F5F2GcDVvDYqlmL8yxlsb6yHDnlvNtBhDEgoz-9GCjNnENYl4RyN6Vn8A1GtJguPpVIVyiA=w1280" alt="Exemple Wyvern 13" className={styles.infoImage} />
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
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STAC84vFHfRwxtEYtsArvs4pqlNgyJ9vawdOPug7trbL-wKKtMJAPhy1fwPrUdmW7gsGHy5hpF0Tf22f_ewurEz5fVGX8RNnQfdKOrK7B9s0DNW8SlKIvG6aX7hmV6IFtN3xFmVXvXbn1jarlRK9chmPkraddxDnC7X8R6nHBXnrSKyFyjZDQjI3tYL8Qg3IdJ7wA5TtSfreW3pUrk3snCv_jB7xCZ2X0lafbU=w1280" alt="Soulburn ignore ER" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Il existe une mécanique spéciale, qui se déclenche généralement avec l&apos;effet <strong>braise d&apos;âme (SoulBurn)</strong>, qui permet d&apos;<strong>ignorer la résistance d&apos;effet</strong> de la cible.</p>
              <p>Cette mécanique passe outre le bridage automatique de 85% pour atteindre les <strong>100%</strong>.</p>
            </div>
          </div>
          <p>Attention toutefois : l&apos;étape 1 (coups réussis) et l&apos;étape 2 (chances d&apos;effet) devront toujours être validées. Par exemple, la troisième compétence de <strong>Rann</strong> n&apos;aura que 85% de chance de se lancer avec une réduction de défense, malgré son SoulBurn.</p>
          <p>Les effets d&apos;ignorance de la résistance d&apos;effet sont <strong>très puissants et très utilisés</strong> sur Epic Seven.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Version Vidéo du tutoriel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Malus — Tutoriel complet</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('Vj_butgmWaI')}>
              <img src="https://img.youtube.com/vi/Vj_butgmWaI/hqdefault.jpg" alt="Malus tutoriel" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
