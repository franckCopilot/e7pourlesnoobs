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
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSLyMLvBAQhrTRL60srdc3D6zgPVDJ8-sU2LWQK8hcstuymnfW-ce17qLsDSCNAh2d2noSbmDByfjP5UEPG0VU3YE-uIYrBj3nKOux5fbXcrMD3J0qAJbvTCL6u3OSdRNk16ZbWgAtidSd27vuz_AK8_hQcQhfLC2OeZIbxfDaD0pGxifuctqqPxym29ETDj4_YxezethnFYgOOnP3bY7eKQgfTNqqMGX8J_Xw=w1280' },
            { desc: 'Camilla avec un équipement basé sur la chasse du Caides 13.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR3kbhHGot72NDrx2O7EG5RbVroogWwjh86vn2bSEwWqurVXJSejWSibZMsKKmuE7eSdCYThI148f36j2OhBLdDMtf7pt_Kl1-5UwZDtFpnQXD_FbpV78r2QqkOyObzKxksHxLRXb2gMylq0MbVkw6_shB3pKBKF7lHhcSs_gdA-Y73jdYRfLHpfrjs5G8L4eh8CicnXf7anmgxYYXQ5qAxFAuOF1xfAAChsyE=w1280' },
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STclqr7WJWsam4lE8goEoCnRQzrYQuKNI5klfHta7_vAkleu3H8IXHk28oiXA4fdnqzt8M1mxJfiGtUMGCxJm9J3GHX6y-MN15VpaWnoZhQSCnHpsOUBYPUFoBgruqUuIS8dZ8OJseltaKqzqx0SoGxarGMhU8fdJyEQyzSx4gQutHHwHhHgdrVIyqlet-cDycuor03w9LSbnLamtOg3HtUKHG-VA_zpVal=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STxBdNMqndj5Hof0Bv5Ki1c7N2iiwr8h_zYo1HFtgc7f669Qb_RJamKt1Eerw3iIGBKo1WDgzuFDh7xFmCNflnFnrfhrBEIQdku5yBUTRi-3nXqbe3OE_ht2ttj-FPdaH-n_HenoijzFubdldvZ_nulymK2wdWotooTOdQFpuEaRd-C1hSBXmJLNtPxwDCsuxAsIGjLyGDKBvY8Sm4F4iVBWcYiFeIeoSxd4l0=w1280' },
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
