'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pherus() {
  const [activeVideo] = useState<string | null>(null);

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
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ-C9Mo8F9AntJbtF8xwbjrnxeERNGHUt_-t3SvuIwwiGl9paAgfomvPom-rra3QPJ5pOsdusbe3ssyI3fVbDpcf0zC-wLQUyxaCKpyX8Axu4eXbSQx3yHGb5pL2jBqm1xeKnwkxXVEKoaox2TT9A9dyqKy18-7LxiwbuiJEoUrPmeuIYXUyHUoZxuBnca9nmofBq9v6D79eR1KY-EA0BuqzzpNYBlrgfoHkIM=w1280' },
            { desc: 'Camilla avec un équipement basé sur la chasse du Caides 13.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STmKE8jyjM43z6We8SCmK8WSQOHvEljK4yJbSHM6YIRFbY2O3bcknLfXl5ynf5HM9B46xQ7NGzM9ReZ5dR8frDDY3Gqvzh5gVSSoDLxPZ03CKHHX1OwOWbOVWq0mRY3tvv7uRB-YeIhfKgyiQdlP-o7zy-LxNxOL_ObdG74CRkPqOAfUVVB3PwrBt2aMSxHkwByCCoURtmU7b-V2zq5G3nVuKZSJQRYCjIaK7I=w1280' },
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ_RCSASSxuDGLA75a5Q8sqnQxpZMK_V8s1ScS0284IURfEJX2GxfEOn8QOMzpSNfwSnweGqv_T3ziniZBqTPUlE_GcRjNv_2X2dy_l6pBGUe1NcGJ0PDuL1-traUyNwo2QZllPzDYQVgDWo8TJhzmKmn-dooexjQLl8DNLDYdh49MFVJhym3So-vkWfgaRoaZab3-OF68WU8IVXP0YbHpY3rgK21ixjWSc=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQd0tf0g3zejmLjTdHbIVkXJpeOxEEGpOguffcNrr1CqvQutAYsGfDXrWZUX6w4G2qFOL0HPHjReocn-SZf-lShpCgmL2i2pSho-pcFHFXMMb6ectHaNaNVy8WTlzYQ7a5sCS5vVnAbQgvc856-6BHN4WVCwBjyBABluEFY8wcqrq6JvLpWocnGbJVNKj6b7B1Q_8bue6y8mUJuPrwmMKEqE27xVDQLP_sUBvg=w1280' },
            { desc: 'Variante avec Luna à la place de Sc Lorina', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST005_sv6-FHSQmFyteCNbafIY2hy3YZgTDprei4B6m00EPrWNdCd2fvu6yifMNhfNXjQrgPu2N3id3cuWDLSaD1RMofXwFx4VG_uAFJ1b5Ka_hxqi50pLPW5W896oOq-0-3aWOjk3aE6Vn6S04adPMdnrvCz5DpeWX7bSDJSjCAWU_SH_qYl_7rld1l6goTW0tGVho9AunHCgRRTtKuftf2xGJmoN5vw=w1280' },
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
