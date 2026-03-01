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
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STPpJKxBrw2JKMS_AHacltizaLKTcEN07v5AVAiCNRayj7lBu69ainWp1bvS_qJS-eehJCd66QqrFZ1x5UzJZyvQr30bumCIJwbN1H6gi2NJuKylNS06NKhiZkb8sMabHSEVFBt9Pvti3MP6VsHGolmGYRO6XHW3sD6skiuLmdXs2iprPcyiVcK7uBr-OnGWCUOSFUCC5DJ3-2WltfYMNtEBxIkL-jcKojw=w1280" alt="Timeline ardeur au combat" className={styles.infoImage} />
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
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQT1mrAYfbk0sQkKJ75Pp-BDsRa1XPOBJZkFcK_cNldhsBdizZLWqyuJwHHl93CjziFdu9miBMKCS28BaFvlBiQUlBbgvQO6YmrWtIAf0Z_cJ37HOjjs48q0hKkwXIMn92cr3Z9Xk8Brlgj3KunahS8J1jhaAp-PNidUW9w0Hc1ojy9f_VR_faR1wEw2S-kPYX2NBJaAwwSPLlKAeTruAXHkz7-QZJCIrndBLI=w1280" alt="CR Push et Depush" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Il est possible de modifier l&apos;ordre de tour de jeu des entités du combat avec de l&apos;augmentation d&apos;ardeur au combat (<strong>CR Push</strong>) et de la diminution d&apos;ardeur au combat (<strong>CR Depush</strong>).</p>
              <p>Le premier héros du combat <strong>ML Politis</strong> a joué son tour de jeu, et elle est remontée tout en haut à 12% d&apos;ardeur au combat. Cependant, elle a une compétence qui va diminuer l&apos;ardeur au combat de tous les adversaires (CR Depush), et donc leur empêcher de jouer rapidement leur prochain tour de jeu.</p>
              <p>Dans l&apos;exemple, on voit que <strong>Shalltear</strong> est passée de 80% à 91% d&apos;ardeur au combat, soit une augmentation de 11%. Alors que la <strong>Sc Arowell adverse</strong> a seulement augmenté son ardeur au combat de 6% (69%-63%) en un tour de jeu.</p>
            </div>
          </div>
          <p><strong>⚠ ATTENTION</strong> : la réduction d&apos;ardeur au combat des adversaires est soumise aux calculs de chances d&apos;infliger un malus. Elle n&apos;est donc pas garantie, à l&apos;exception d&apos;une mécanique d&apos;ignore de résistance d&apos;effet.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STlK8b5gtScJnQQSzuupXfvYSvR-RvbY4msSNS6bL5XtcHyA91hmVN06Dqrrv4uBaRKo9Zyqv3eo6hQiXl2APRyznj4bCCijW0il7sC-s7x6wIJcs0GjnXb-a0ybZPUfdBLg_HASbPP2ZkEnchhLECo04iwrBwsT0yVFQZ3wyg7pHwWPp7AAvZs9J9BaiyScLphb1xDYVb-KavSiD3tLOq7LeJeIP0-V_rAcqU=w1280" alt="Exemple CR Push" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p><strong>Gala Lilias</strong>, deuxième entité à jouer dans le combat, possède une compétence qui peut augmenter l&apos;ardeur au combat de ses alliés. Ce qui permettra à ses alliés de jouer plus vite leur tour de jeu par rapport aux adversaires.</p>
              <p>Dans l&apos;exemple, on voit que <strong>ML Politis</strong> est passée de 12% à 27% d&apos;ardeur au combat, soit une augmentation de 15%. Alors que la <strong>Destina adverse</strong> s&apos;est maintenue à 68% d&apos;ardeur au combat.</p>
              <p>L&apos;augmentation d&apos;ardeur au combat (<strong>CR Push</strong>) n&apos;est pas soumise aux calculs de chances d&apos;infliger un malus, elle est donc plus puissante que la diminution d&apos;ardeur au combat.</p>
            </div>
          </div>

          <p>Toutefois, il existe des héros pouvant diminuer le gain d&apos;ardeur au combat. C&apos;est par exemple le cas de <strong>Politis</strong> et de <strong>ML Yufine</strong> qui diminuent le gain d&apos;ardeur au combat de 50% des adversaires. Ainsi une compétence qui augmente l&apos;ardeur au combat de 20% des adversaires augmentera seulement leur ardeur au combat de 10%.</p>
          <p>Il est possible de cumuler Politis et ML Yufine dans la même équipe pour diminuer de 100% le gain d&apos;ardeur au combat des adversaires et ainsi nullifier l&apos;effet de gain.</p>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/de-tutoriels/red.png" alt="Malus entrave" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Le malus <strong>Entrave</strong> empêche les adversaires de gagner de l&apos;ardeur au combat au travers de leurs compétences. <strong>Peira</strong> peut infliger ce malus.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bonus &amp; Malus Vitesse</h2>
          <p>Durant le combat il est possible que certaines entités bénéficient d&apos;un <strong>bonus qui va augmenter leur vitesse</strong> ou qu&apos;elles subissent un <strong>malus qui va diminuer leur vitesse</strong>.</p>
          <p>Il existe le <strong>bonus vitesse</strong> et le bonus inhérent (ne peut être dissipé) <strong>Enragé</strong> qui augmentent la vitesse de l&apos;entité. Ces deux bonus peuvent se cumuler.</p>
          <p>Il existe le <strong>malus vitesse (Slow)</strong> qui diminue la vitesse de l&apos;entité.</p>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/de-tutoriels/vitesse.png" alt="Vitesse" className={styles.infoImage} />
            <div className={styles.infoText}><p><strong>Vitesse</strong></p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/de-tutoriels/enrage.png" alt="Enragé" className={styles.infoImage} />
            <div className={styles.infoText}><p><strong>Enragé</strong></p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/de-tutoriels/slow.png" alt="Slow" className={styles.infoImage} />
            <div className={styles.infoText}><p><strong>Slow</strong></p></div>
          </div>

          <p>Ces bonus et malus ont <strong>deux effets</strong> sur le combat.</p>
          <p><strong>Premier effet</strong> : impacte directement le gain d&apos;ardeur au combat de l&apos;entité. En modifiant la vitesse d&apos;une entité avec des bonus et/ou malus, on modifie le gain d&apos;ardeur au combat à chaque tour de jeu : un bonus vitesse augmentera la capacité de l&apos;entité à jouer plus rapidement, un malus vitesse diminuera sa capacité à prendre le tour de jeu.</p>
          <p><strong>Deuxième effet</strong> : impacte directement les dégâts de certaines entités. C&apos;est par exemple le cas de <strong>Cidd</strong>, de <strong>ML Krau</strong> ou encore <strong>Vildred</strong>. Ce sont des héros qui infligent une partie de leurs dégâts en fonction de leur vitesse.</p>

          <div className={styles.infoBlock}>
            <img src="" alt="Exemple bonus vitesse" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Dans cet exemple, on voit que <strong>Cidd</strong> bénéficie d&apos;un bonus Enragé et d&apos;un bonus vitesse. Il va ainsi taper beaucoup plus fort car une partie de ses dégâts infligés sont calculés en fonction de sa vitesse. De plus à chaque tour de jeu, il va gagner davantage d&apos;ardeur au combat que sans ses bonus, ce qui peut lui permettre de &quot;lapper un adversaire&quot;.</p>
            </div>
          </div>

          <p className={styles.note}><strong>NOTE</strong> : Il est possible que plusieurs héros soient affichés à 100% d&apos;ardeur au combat. L&apos;affichage ne peut excéder 100% mais en pratique il est possible de dépasser les 100% d&apos;ardeur au combat.</p>
          <p>En effet, avec plusieurs mécaniques d&apos;augmentation d&apos;ardeur au combat qui se déclenchent durant le même tour de jeu et qui se cumulent, plusieurs entités peuvent atteindre les 100% affichés tout en ayant en réalité des valeurs différentes.</p>
          <p>Prenons l&apos;exemple de la composition <strong>Nakwhol, Eda et Iseria Tropicale</strong> :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Iseria Tropicale avec 90% d&apos;ardeur au combat.</li>
            <li>Eda avec 85% d&apos;ardeur au combat.</li>
          </ul>
          <p>Nakwhol lance sa troisième compétence de zone. La compétence passive d&apos;Iseria Tropicale se déclenche, et tous les alliés gagnent 15% d&apos;ardeur au combat. Iseria Tropicale aura 105% (affiché 100%) et Eda aura 100%.</p>
          <p>La compétence passive d&apos;Iseria Tropicale déclenche par effet de domino la compétence passive d&apos;Eda, qui voit son ardeur au combat augmenter de nouveau de 20%. Ainsi Eda passera à 120% (affiché 100%), elle sera donc la prochaine entité à jouer, devant Iseria Tropicale et ses 105%, même si les deux héros affichent 100%.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Version Vidéo du tutoriel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ardeur au combat — Tutoriel complet</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('AaoQV1J4b8c')}>
              <img src="https://img.youtube.com/vi/AaoQV1J4b8c/hqdefault.jpg" alt="Ardeur au combat tutoriel" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
