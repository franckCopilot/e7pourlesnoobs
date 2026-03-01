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
            </div>
          </div>
          <p><strong>⚠ ATTENTION</strong> : la réduction d&apos;ardeur au combat des adversaires est soumise aux calculs de chances d&apos;infliger un malus. Elle n&apos;est donc pas garantie, à l&apos;exception d&apos;une mécanique d&apos;ignore de résistance d&apos;effet.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STlK8b5gtScJnQQSzuupXfvYSvR-RvbY4msSNS6bL5XtcHyA91hmVN06Dqrrv4uBaRKo9Zyqv3eo6hQiXl2APRyznj4bCCijW0il7sC-s7x6wIJcs0GjnXb-a0ybZPUfdBLg_HASbPP2ZkEnchhLECo04iwrBwsT0yVFQZ3wyg7pHwWPp7AAvZs9J9BaiyScLphb1xDYVb-KavSiD3tLOq7LeJeIP0-V_rAcqU=w1280" alt="Exemple CR Push" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>L&apos;augmentation d&apos;ardeur au combat (<strong>CR Push</strong>) n&apos;est pas soumise aux calculs de chances d&apos;infliger un malus, elle est donc plus puissante que la diminution d&apos;ardeur au combat.</p>
            </div>
          </div>

          <p>Toutefois, il existe des héros pouvant diminuer le gain d&apos;ardeur au combat. C&apos;est par exemple le cas de <strong>Politis</strong> et de <strong>ML Yufine</strong> qui diminuent le gain d&apos;ardeur au combat de 50% des adversaires.</p>
          <p>Il est possible de cumuler Politis et ML Yufine dans la même équipe pour diminuer de 100% le gain d&apos;ardeur au combat des adversaires.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRqI-5bUI_Fpzd3XxL-gQHOfrw8TAmYHsG6wKW8xOOzErr0-SnO5hCZQ7ZGSZrPVo77zdPg3-d9sSF7NJ_cH0EHs_x4GlQ6YuhXjSegEXODJFoYgiiZJhIqMBBbvryXOH85eE9ASpQeC30cLzXBCEjRVVXSI2xucDlNgSslBNUGJh7aMGQUHCIyYH0=w1280" alt="Malus entrave" className={styles.infoImage} />
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
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRyRbEqfpmIU4n79Q1vqdZ1vMSV6OIISVm2FxwxE0tT1OJXEKiIMCstd7rAwPRu4H8eGZOrg7D_nC0Mox2oKF6726mX2zW5pLV1p6ng6XhAIxqlAQNLCaptACmeCd_1vpjJUlpKow7JRSTZSINOaI5-J8NHth4ciiiue2iL7cYuOU-gzXQRoCqUeiVd5k22K1s6K6tUlrUnrO5vSFc1zWPY1PKIj7u-N4nGso0=w1280" alt="Exemple bonus vitesse" className={styles.infoImage} />
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
