'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Gigantes() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Gigantes de destruction</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Obscurité</h2>
          <p>Favorisez les <strong>héros RGB</strong> pour maximiser votre score dans l&apos;expédition dark.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier qui Bdef</strong> à droite : <strong>Ras</strong>, <strong>Fluri</strong> ou <strong>Brigg</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 1 héros DPS : <strong>Lorina</strong> ou <strong>Landy</strong> seront d&apos;excellents choix.</li>
            <li>Utiliser un héros pouvant effectuer des dual attaques : <strong>Camila</strong>, <strong>Cerise</strong>, <strong>ML Politis</strong> ou <strong>ML Lilias</strong> seront des choix judicieux.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous devez utiliser des héros qui peuvent effectuer des compétences non offensives.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p>La composition qui était pendant longtemps la plus classique et la plus forte était <strong>Landy, Tamarinne, Fluri et Cerise</strong>. Cette composition permet d&apos;effectuer le défi dague Sicar.</p>
          <p>On peut effectuer quelques variantes en fonction des héros que vous possédez et que vous avez de disponible sur votre compte.</p>
          <p>Depuis la sortie du héros <strong>Brigg</strong>, le personnage est excellent dans toutes les expéditions, un must have avec Tamarinne pour le PvE.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Composition optimisée expédition niveau 3</h2>
          <p>Il est possible avec la composition <strong>Tamarinne, Brigg, Sc Lorina et Camila</strong> d&apos;effectuer le défi dague Sicar lié à l&apos;expédition en mode automatique.</p>
          <p>L&apos;essentiel sera de maximiser les équipements de <strong>Sc Lorina</strong> avec par exemple plus de dégâts, un set rage et un set infiltration.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRkE8WkVlPaWmrOEltVpWFUVouUSzRbEAVh2c4vs6GTfX1xkojkSwZUY22R7aISxmTDpTF9U3DMdsjl6kjzbVygdGf7Vu-PlVF3ie5VqGdtXW6SneFI2yMWxZkGLsrXDxBb3y16076hHeab7vImG8FhEi95NBJqHQKiv6iB56eM11QqpDai_neAk6jah7djsXGGjpQbvScgP4GOD_HTw4D0hE-dvwv32BnAi30=w1280' },
            { desc: 'Camilla avec un équipement basé sur la chasse du Caides 13.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STmKE8jyjM43z6We8SCmK8WSQOHvEljK4yJbSHM6YIRFbY2O3bcknLfXl5ynf5HM9B46xQ7NGzM9ReZ5dR8frDDY3Gqvzh5gVSSoDLxPZ03CKHHX1OwOWbOVWq0mRY3tvv7uRB-YeIhfKgyiQdlP-o7zy-LxNxOL_ObdG74CRkPqOAfUVVB3PwrBt2aMSxHkwByCCoURtmU7b-V2zq5G3nVuKZSJQRYCjIaK7I=w1280' },
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ_RCSASSxuDGLA75a5Q8sqnQxpZMK_V8s1ScS0284IURfEJX2GxfEOn8QOMzpSNfwSnweGqv_T3ziniZBqTPUlE_GcRjNv_2X2dy_l6pBGUe1NcGJ0PDuL1-traUyNwo2QZllPzDYQVgDWo8TJhzmKmn-dooexjQLl8DNLDYdh49MFVJhym3So-vkWfgaRoaZab3-OF68WU8IVXP0YbHpY3rgK21ixjWSc=w1280' },
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

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
