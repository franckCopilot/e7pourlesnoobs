'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Herais() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Constellation Herais</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Constellation Éternel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Constellation éternel Terre sans RNG</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('W5Cc_kf-mZs')}>
              <img src="https://img.youtube.com/vi/W5Cc_kf-mZs/hqdefault.jpg" alt="Constellation Herais" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>L&apos;objectif du combat est de régulièrement infliger des <strong>brulures</strong> en zone.</p>
          <p>Il existe cependant une stratégie pour contourner les mécaniques du boss en lui enlever des points de vie en fonction de ses HP.</p>
          <p><strong>Composition :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Devant : <strong>Aram</strong></li>
            <li><strong>Achates</strong></li>
            <li><strong>Hazel</strong></li>
            <li><strong>Tiera</strong></li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : la gestion des artefacts et de la speedtune est indispensable pour réussir la stratégie.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : la troisième bénédiction de <strong>Balance</strong> est recommandée.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: "Aram avec le plus de santé possible, aux alentours des 230 de vitesse et l'artefact gaieté de l'idole.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQOGvOYbzw766dFHYv2ZODB0Lpm2r9k3-Y-7JdBRPCgrUYr75GhE6Va1x3eLVaJ2ED8kV2rKwGr_L8rAVrbEH2z7tld0jo7CgFJioNZBczNnr7bdQHWj812psMemWLZa5bZ4E9XWl1ZcbW4H79tZVhsqqPi7MaKtewuna5-mDFpQoxJ09Q96ZYZTacu1gDl23cxYUP6AuXCecHtS6nzPrvhUCTWfS0C_bh_LKw=w1280' },
            { desc: "Hazel avec le plus de santé possible, aux alentours des 215/220 de vitesse avec l'artefact branche de l'arbre divin", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSzSvxtLH-ygdXoXdtkC7_A5N1BVAlAZ6vhvj6_ywmv-6g0xS27EBtcr2QhVeZbPWmEdz2ZXwJqlDZ_4GJNas5BA8f2pmJob12lEm7nq3YbnNw5nbW3PrC5x0cEJ7sCHJD0ep95HBDBpZcoJZ8UIRrt8hO8JWfMgf29DYMm6ZDzprQP542fLRA1oeMCXYyKyKMuhrzYZKo9UoMBV_nmMUGK8zHODwJQX6kUzGs=w1280' },
            { desc: "Achates avec le plus de santé possible aux alentours des 205 de vitesse en fonction de votre speedtune. Cor de guerre est requis. troisième EE.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR0aKQ1nRxBSK7_hBm0AP0yowqyLXNi98Rb9CotfBuVvA5jJMLwOx6fsaUbwYI9j6SML_c4q6WGOd4eL1HE5m7PkdMqiB6yf5BsDxtBGQWlVU46w42UnXMoVge8D2ZCcxaUNFrzSY26kDH4iupaB3RgW7A1WR9OLPgWb7YX8swkFQjlbVZAmUKM0hCO-Lk7i_sEv5nNanQM3VzIiOeNMhVho3Qk_uFUO-Bp=w1280' },
            { desc: "Tiera avec le plus de dégâts possible en set destru et infiltration. il faut qu'elle ait un peu de vitesse et au moins 14 500 HP. Joker de réverie est requis.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSYBIT3cgBd39RkbR0XwN1dUMwCyb3_ysCoeyqD_SRBSDRleCZjWstmAPhyfI5YJ5rmQro9QXil0jOZ4OnLiR7S6A1WX1NR49lJAnrT_T4Yj00xjPPAxJCJGIjwcCi7ISZruezyX_gngMVuJSzGoV9Y1GsUyezdAB1fM1WvBL2ZonC6KoMvgWdAmlm_QFciHgJ-i5f9FbsFfEL4wrkhJvoKb9k37putIB13=w1280' },
          ].map((hero, i) => (
            <div key={i} className={styles.infoBlock}>
              <img src={hero.img} alt={hero.desc} className={styles.infoImage} />
              <div className={styles.infoText}>
                <p>{hero.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
