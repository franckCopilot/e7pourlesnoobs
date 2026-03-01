'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Lich() {
  const [activeVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Lich du vieil arbre bleu</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Terre</h2>
          <p>Favorisez les <strong>héros feu</strong> pour maximiser votre score dans l&apos;expédition terre.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier feu</strong> à droite : <strong>Ras</strong> ou <strong>Cécilia</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 2 héros feu tapant en AOE (zone) : <strong>Kayron</strong>, <strong>Mercedes</strong>, <strong>Vildred</strong>, <strong>Kanna</strong> ou <strong>Baal</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine du PvE, <strong>Sc Hazel</strong> sera aussi un choix judicieux.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous ne pouvez pas augmenter l&apos;ardeur au combat de votre équipe.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p><strong>Mercedes</strong> est un excellent héros F2P que vous pourrez améliorer avec son artefact dans le troisième continent de l&apos;aventure et qui vous sera utile à la fois en PvE et en PvP.</p>
          <p>Sur mon compte principal, je préfère utiliser <strong>Kayron</strong> qui va régulièrement contre-attaquer en zone avec un set adapté au PvP.</p>
          <p>Essayez de toujours valoriser des héros qui vous aideront dans plusieurs contenus différents, aussi bien en PvE qu&apos;en PvP, ça vous économisera beaucoup de ressources et d&apos;équipements.</p>
          <p>C&apos;est pour cette raison que je ne préfère pas utiliser ni <strong>Baal</strong> ni <strong>Kanna</strong> qui sont deux héros restreints à ce mode, même s&apos;ils permettent de meilleurs scores.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Sc Ras avec un équipement optimisé PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRSDBcTPC0CVQP5fBm-3GW63fnmS1jWiYlMTOU5pJDLSWrLuYISVxmYJmJjrAS_e1J6Yn1j3jTToAFlyDhW-uUubGJnvXZhzvAW1YC5FHdL3qou3q3Db9b_5U3aGQ48Qc5dib56fqCCEx8Y1XmhcPmtincSDMoKyHt-6Si20Grxekeb-2YqJ9o9e1Qqk6C7-QOxHBKwqUPsx_Yswlrz_1CBQ6b0A-VjY-gtsP4=w1280' },
            { desc: 'Kayron avec un équipement optimisé PvP anti-cleave', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQWyScPDLty8dO_mkWyzYIXyG5H8ris-fCnc2cbNnHpFKXz9glm2JViWU6bpmd4wHH5LOvaxrDSoW1EgE2_F3sz5C-3DTx7UtOqumTeQlg0J6Og7BjSmjk8eBsU74-utChzyrq4FHUt986rqWM245qF6dhtIOhRMMwtbUfVlZGai46VGK4SbQcK9YKZQrM269-OyxBoweSRaoGrBPYYEmiIYiCBcX32dCYe=w1280' },
            { desc: 'Mercedes avec un équipement optimisé pour le PvP. Le set date un peu mais fonctionne très bien avec tout type de set.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSwA3081-2tGZ0gHnrdVUXg7cH4ciKc-ZIeE2vz_7Mzz0Txk8g4vR1hvnMzw0-DHPRKQz2yTd1PeNFgDFWvMX8Znlpw1Uu6KbOGmM5QPnR4AXAuy3_2ms2XTVzh6e-ULgPpbE2MZEkrZ7eI68zAUhZAD7KuYW7WyR-Hc-oscu1jNCMld1kne9_5SLtmkt4AcYAmSdfWZ4kxd5lBraJmc5H_Q_d-jT1c1jpNAWs=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR8Uu3L2mnVuymOecRrlWgHM16RZf5SwcT7lGpLj0yT-gEik0tnpZwwtexmddEgxax5cF2sZrFlXKWJJCpRwRQ4W27mG0gnxJemEU1E5UZaYhBeVX7m_JjS6HaXZYZQjxBw6CCkfHeKLQyECy_CDlrRQLTVe6CMVY8g_gUmTbsz2aHPX3awFQHTDPSYfnkRFebU6cM5pv-8mlIjVnVqjR2fkRcn2pXmUBF6Fik=w1280' },
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

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => {}} />}
    </MainLayout>
  );
}
