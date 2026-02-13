'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ardeur() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ARDEUR AU COMBAT</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>L&apos;ardeur au combat est une mécanique à ne pas négliger sur Epic Seven. Elle est utile aussi bien en PvP qu&apos;en PvE et permet de connaître l&apos;ordre de jeu des entités dans le combat.</p>
          <p>Il est possible de modifier l&apos;ordre de jeu des personnages avec certaines compétences ou certains bonus et malus.</p>
          <p>La <strong>vitesse</strong> a un impact non négligeable sur l&apos;ardeur au combat, elle déterminera l&apos;ordre de jeu du premier tour de jeu des entités. De plus, plus une entité sera rapide, plus elle aura de chances de rejouer rapidement son prochain tour de jeu par rapport aux autres entités du combat.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comprendre l&apos;ardeur au combat</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSeSsmwsHQ7PJDIcv1YNbZ9CWu9Coqeys-V0VTh2opf8Qz74Ssm2cf3eP7rBNzGteSc8oyuZxOmPwc3rNgX5sQcGl4RfJ1N4ui20FnqQUQY4zn7s4-qtMDKodi-AvBIB4JSObs4dgxF_RzaAU0_AjP16KGR-d71PS-dMmfiyfvFBfBwJftYst0GOJzPMnP5M7B4JuVc-SPdO0zcxZJQ-IEHaNXCrK19ssM0=w1280" alt="Timeline ardeur au combat" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>La timeline à gauche définit l&apos;ordre de jeu des personnages. Pour plus de détails, cliquez sur le petit sablier en haut à gauche pour voir l&apos;ardeur au combat des alliés et adversaires en %.</p>
              <p>La dernière ligne est celle de l&apos;entité qui a le tour de jeu.</p>
            </div>
          </div>
          <p>Au début du combat, l&apos;entité la plus rapide aura <strong>100% d&apos;ardeur au combat</strong> et commencera premier. L&apos;ordre est ensuite établi en fonction de la vitesse des autres personnages proportionnellement à l&apos;entité la plus rapide du combat.</p>
          <p className={styles.note}><strong>NOTE</strong> : il existe 5% de speed RNG sur Epic Seven entre toutes les entités du combat. Ce qui signifie qu&apos;une vitesse trop proche (5% d&apos;écart) entre deux entités pourrait inverser leur ordre de tour de jeu.</p>
          <p>À chaque tour de jeu d&apos;une entité, toutes les entités encore en vie dans le combat vont gagner de l&apos;ardeur au combat proportionnellement à leur vitesse. Cette augmentation ne peut être annulée durant le combat et n&apos;est pas soumise ni au CR push ni au CR Depush.</p>
          <p>Ainsi, une entité rapide gagnera beaucoup plus d&apos;ardeur au combat à chaque tour qu&apos;une entité lente. Il est courant qu&apos;une entité très rapide puisse jouer un voire plusieurs tours avant un personnage avec très peu de vitesse. Cet exploit est communément appelé <strong>&quot;Lapper un adversaire&quot;</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CR Push &amp; CR Depush</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRxyRLD7-ALTg5s70DiYWiuvuRepeRAbUTOYrvqzAUEzkovh_oGGIJULI0LT7hrTgk2RCqRazYIVLd4ltXPFfCyKGlLUjDxo0Z0nQNZQUFhfE7CKpOa4OYpN2VrKAeZSMG08insvB2eXP4BwIJTldGJsoulN_Naa7rvEL2WinWqtkXsmJqQH0lWSP9wfXpXjqnqDjEabwCPU6SELTSIxyTMavfgUuAXwUerjuI=w1280" alt="CR Push et Depush" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Il est possible de modifier l&apos;ordre de tour de jeu des entités du combat avec de l&apos;augmentation d&apos;ardeur au combat (<strong>CR Push</strong>) et de la diminution d&apos;ardeur au combat (<strong>CR Depush</strong>).</p>
            </div>
          </div>
          <p><strong>⚠ ATTENTION</strong> : la réduction d&apos;ardeur au combat des adversaires est soumise aux calculs de chances d&apos;infliger un malus. Elle n&apos;est donc pas garantie, à l&apos;exception d&apos;une mécanique d&apos;ignore de résistance d&apos;effet.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSj0-LRiK5BtNFchDlVo87zrzQICDhFXnDbc8-f-7odu4fLVjjOJ8-UkMB3rmwGL28ASNYYxCIiX1ybgPghkElvSD3OpoOUzjrxIoVkia3KrBUrgoGbqeTU3J1HLDRH6Xivkq6DHqd7f9o9ph220170hkp0p_EAavKlBBioaNHVXgm-veW1VXYL9OukdvZB86-bIAS0mSrQduq8Yl8FPB8XugdCR5pMdjNHW1o=w1280" alt="Exemple CR Push" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>L&apos;augmentation d&apos;ardeur au combat (<strong>CR Push</strong>) n&apos;est pas soumise aux calculs de chances d&apos;infliger un malus, elle est donc plus puissante que la diminution d&apos;ardeur au combat.</p>
            </div>
          </div>

          <p>Toutefois, il existe des héros pouvant diminuer le gain d&apos;ardeur au combat. C&apos;est par exemple le cas de <strong>Politis</strong> et de <strong>ML Yufine</strong> qui diminuent le gain d&apos;ardeur au combat de 50% des adversaires.</p>
          <p>Il est possible de cumuler Politis et ML Yufine dans la même équipe pour diminuer de 100% le gain d&apos;ardeur au combat des adversaires.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SR5HjAaQ5W2f06lfsCXUOY3JQ9Zv3e6RDQ7-92hlrH70OiEzTXitAkDvy5hVIfRFwIghZbl82WeJc3IaLivdQ87o3MLx6lw45XfXNLfO1KsKiQEgpa6e8C1NBA6pAKXJr44vyoYqD271GqPjkkw8lxzW8KCSXiF7f8YBSF5VPA7hRguYvoZPYAtRII=w1280" alt="Malus entrave" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Le malus <strong>Entrave</strong> empêche les adversaires de gagner de l&apos;ardeur au combat au travers de leurs compétences. <strong>Peira</strong> peut infliger ce malus.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bonus &amp; Malus Vitesse</h2>
          <p>Durant le combat il est possible que certaines entités bénéficient d&apos;un <strong>bonus qui va augmenter leur vitesse</strong> ou qu&apos;elles subissent un <strong>malus qui va diminuer leur vitesse</strong>.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Bonus Vitesse</strong> : augmente la vitesse</li>
            <li><strong>Bonus Enragé</strong> (ne peut être dissipé) : augmente la vitesse. Les deux bonus peuvent se cumuler.</li>
            <li><strong>Malus Vitesse (Slow)</strong> : diminue la vitesse</li>
          </ul>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQV0IHjXSSdsPkbDNNSAt3jZ028rvr7M8R2YBfQsVaA1qHej4h9OEVahCIw2NhU_sPMeQP5EBrWKOGs2UoTrQwk1KNYKjwllZSyeyPxFkMiFXX8GNB_nPDOhE_S-bK6kFApthIqh89kvEAGHBaHPv-ISP_4svgmnhCnjBSAHQrzqYhA_aNnJCJ4RNzTsW2gqEZAi6RKMk2alJdX84nl9bnnpxl3B97LYhVKYvY=w1280" alt="Exemple bonus vitesse" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Ces bonus et malus ont <strong>deux effets</strong> sur le combat :</p>
              <p><strong>Premier effet</strong> : impacte directement le gain d&apos;ardeur au combat de l&apos;entité.</p>
              <p><strong>Deuxième effet</strong> : impacte directement les dégâts de certaines entités (ex : <strong>Cidd</strong>, <strong>ML Krau</strong>, <strong>Vildred</strong>).</p>
            </div>
          </div>

          <p className={styles.note}><strong>NOTE</strong> : Il est possible que plusieurs héros soient affichés à 100% d&apos;ardeur au combat. L&apos;affichage ne peut excéder 100% mais en pratique il est possible de dépasser les 100%. Exemple : avec la composition <strong>Nakwhol, Eda et Iseria Tropicale</strong>, les effets de domino permettent de dépasser les 100% affichés.</p>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
