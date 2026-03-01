'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Symaqus() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Symaqus de désespoir</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Glace</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Glace / Ice AUTO 400k/600k – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('64omwJinrB4')}>
              <img src="https://img.youtube.com/vi/64omwJinrB4/hqdefault.jpg" alt="Expedition Glace AUTO 400k/600k" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>Favorisez les <strong>héros Terre</strong> pour maximiser votre score dans l&apos;expédition glace.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier terre</strong> à droite : <strong>Fluri</strong>, <strong>Brigg</strong>, <strong>Senya</strong> ou <strong>Roenna</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 2 héros terre avec une grosse attaque : <strong>Landy</strong>, <strong>Vivian</strong>, <strong>Ram</strong>, <strong>Cidd</strong>, <strong>Sc Helga</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine du PvE. <strong>Lilka</strong>, <strong>Emilia</strong> et <strong>Lots</strong> seront aussi un choix judicieux.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Il faudra augmenter l&apos;ardeur au combat de votre allié à la plus haute attaque de 100%.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Composition optimisée expédition niveau 3</h2>
          <p>Il est possible d&apos;améliorer sa composition pour faire un meilleur score, plus constant et surtout plus rapide.</p>
          <p>Depuis la sortie du héros <strong>Brigg</strong>, le personnage est excellent dans toutes les expéditions, un must have avec Tamarinne pour le PvE.</p>
          <p>Sur mon compte principal, je préfère utiliser <strong>Landy</strong> et <strong>Vivian</strong>. <strong>Cidd</strong> est aussi fort.</p>
          <p>Essayez de toujours valoriser des héros qui vous aideront dans plusieurs contenus différents, aussi bien en PvE qu&apos;en PvP, ça vous économisera beaucoup de ressources et d&apos;équipements.</p>
          <p>C&apos;est pour cette raison que je ne préfère pas utiliser ni <strong>Lilka</strong> ni <strong>Sc Helga</strong> qui sont deux héros restreints à ce mode, même s&apos;ils permettent de meilleurs scores.</p>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Nouvelles compositions d&apos;expéditions feu, dark et glace niveaux 3 – Guide Epic Seven 2024</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('amHhcpoKiA4')}>
              <img src="https://img.youtube.com/vi/amHhcpoKiA4/hqdefault.jpg" alt="Nouvelles compositions expéditions 2024" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Landy avec BloodStone (Pierre de sang) en artefact', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSJ6Q1ACA1lcXvCuqH_8KgYanQ9SGgxWoJI_8_jZWyKSxwvKG4rfgsB0RdghFFWaojRjjU-GGZaH_8HltnTPwOEVK7AUQ8nkxgkYmLAPcu5lKlNGLtqH6uf3BU1IJRUAQlqXRPZnMQ9pvSJcA1C9DRbiR0vJwFrgIC9Um-UFWhs7zwqcbdp0rrlQptkRHQ_qgsEXKDV82igCGQtHs1S4gCgv0yKc5LiaUNr=w1280' },
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQmI8wvh_dob_BZCpk4c0SuUOVjHa-fnK6Zj4Rxjj_-q7XNbqcci4alkkcB4EkuH2pxF2AHasxIBBcZLPuo_Pt6A2yP3b50XUC7a7l-qd-GT-IhoMUtaZQ8GZUMeewA2MXr6WkDKCIXSJcMVJjLpDb7IavICobGpFRwlSaUL3hFW-1jYFDxvQ50ZB2lk8yo62SLkxg6eRQPfd5taqN2ZKCkxK9T0btpR9d9VgM=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQSi17xr7mBdT0bg1r_3W3xVyxWEV9ZkIs6MPU4KROuzXqv_KplgGYLPyEbt9DBCvxwFjEMlijrqg3Vb2x74aqvD8ZQZuLAqWaTMHyXokIOzWB-bQyRaLRbRyUBrjfpLoWXVmJLfZxdJbi9fC9oU4UIykDmvy72KfT-ofrUywbJ-X5xqlYsq9NfIIEMzHZ8NzsLkXJYcx1KDlRm-O84EhLO-bX4GB2iLkeO5dA=w1280' },
            { desc: 'Vivian avec son 3ème Équipement Exclusif (EE). Le premier est aussi une bonne option, les deux sont à posséder.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSYJ1TfbqWAQmZqdWRe2rKAapwHiuoQeu8cwO-WSjVec66awxnv61r8EH5Mk7YgGffzIysANUFWAXmw-5zJ9j8_FWZjbi9cujuZYeMyvv-du2ull6j4IysJ1nTeXByKmkZF-OlXTaTATsI0pIaFaHY1UdXOkh4_eBLAd6vi4umI3-AV8AwdcthbSOHTFpcfDWN1Y9exet0GxiTRhEThRRMGA3HbLuKM93lsLW4=w1280' },
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
