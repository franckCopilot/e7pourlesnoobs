'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pherus() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Phérus de férocité</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Feu</h2>
          <p>Favorisez les <strong>héros glace</strong> pour maximiser votre score dans l&apos;expédition feu.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier glace</strong> à droite : <strong>Krau</strong>, <strong>Karina</strong>, <strong>Brigg</strong> ou <strong>Ras</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 1 héros glace tapant en monocible avec du CR push sur sa première compétence : <strong>Garde de Taranor</strong>, <strong>Luna</strong>, <strong>Sc Lorina</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine du PvE, <strong>Diène</strong> sera aussi un choix judicieux.</li>
            <li>Terminez par un héros avec des dual attaques : <strong>Camila</strong>, <strong>Lilias</strong>, <strong>ML Lilias</strong> fonctionnent parfaitement.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Le boss ne doit pas subir plus de 2 malus.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p><strong>Bellona plage</strong> peut être une bonne alternative pour commencer à améliorer sa composition.</p>
          <p><strong>Attention</strong> : il faudra sans doute désactiver sa troisième compétence pour ne jamais infliger plus de deux malus sur le boss.</p>
          <p>Depuis la sortie du héros <strong>Brigg</strong>, le personnage est excellent dans toutes les expéditions, un must have avec Tamarinne pour le PvE.</p>
          <p>On peut ainsi utiliser une excellente composition :</p>
          <p><strong>Tamarinne, Brigg, Sc Lorina et Camila</strong></p>
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
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST3orDhP5LK_xxSXA0gXXubhLmGMH9SWtD4_enqwx66HWPVBjcAu1jvsi8B6OMcaJuIFgG9gyHLhhBVpjqczBU7FX-8di0z72QK1cs9Agr8IvI0NZj4j-Vw8boSU3zUDZ8fxktm0YjRxuxvMP8_g3iU4N4M0sJEFx64OwbbBIJmNMRIXkSpohnXG3xCIfqnHhO5UfbXB_wed6CMiZ3T2Vl9hRA6jw6A1Pec=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STxBdNMqndj5Hof0Bv5Ki1c7N2iiwr8h_zYo1HFtgc7f669Qb_RJamKt1Eerw3iIGBKo1WDgzuFDh7xFmCNflnFnrfhrBEIQdku5yBUTRi-3nXqbe3OE_ht2ttj-FPdaH-n_HenoijzFubdldvZ_nulymK2wdWotooTOdQFpuEaRd-C1hSBXmJLNtPxwDCsuxAsIGjLyGDKBvY8Sm4F4iVBWcYiFeIeoSxd4l0=w1280' },
            { desc: 'Variante avec Luna à la place de Sc Lorina', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SS24qZNapfagkon6qDBDr6V6t9FCDWhxmyPt9z_aicQthmU7f_D7iPNeYNcDMLPZa8FCBoihGV_OrYevYhG1medDc9_NPvTYYcO-39_AkvrJvCEBbzgaGqwKd21QhSWZ2L0tjrO-I27aOSOTPHEzlcMVJ5Obr3HdnfHJqelVHc4lKtlJeDB0IjP0Rv4oneFKe2wVwwP6T7YjVTgavLQxxmSrl8FXnQ_0Q=w1280' },
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
