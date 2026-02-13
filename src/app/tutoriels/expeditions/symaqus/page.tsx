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
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Landy avec BloodStone (Pierre de sang) en artefact', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSqZnqXGqclZLvuErFDahH67FzvkPp0TAP6-zXwcHjurpYTwz9KxoKrKA-21Q-ehGuELasklFLYxsKq9B5iBk-r4VfLzmg3aA7o1OFypXWOdVsOSFnPMfgbGTfGgubFUUbemUJgNCdxjIBfj4UhAxqiRcG28zESf6f2w8CUQ_m1hUJ0KS1GdhhV1lf0fGfieliuTn2TY-CICV2B8u1x_yPC271VmmbJeQLD=w1280' },
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQY1r8-1xX-mINUKNnsPqSDTtEN6ubkNRc-kxtnm5wpDwOh-oKAZxcWbTb1sEzbbJ6jskApeowKqKXn55ckzZSJ3w1OpxCrlgYZ5ZPt5pKpHTxrdhZ6B4rqJGEVIp_rGOd6gA160zAo54icDdc8QkNkrYBHt97CLPjiNbNIfwD9CN8iUDDb-kr-9yjWRqjyqvKdprVBhBEr1fwV_Pyqbo9YXtkdKzDFZiiI8Xw=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQg7Px1n668jN1Ggmha_Gt0DxtOUfNikK4Xm_MA3I_dbEMfRToectwFKVZAfR1dP0_pERJeb07KbMuxL0GZ-773XcoURGWfQPNYTfGtoBuB4BtM-DweFzGG-yGba8H_W9X9cmU7MyNd168IHtpxoEMjEEfFKCd0nUJXvhKmDxbdnTyfkBLgHHLepsANZ9KXUPvBxmdM9z59sbBZv9_A7jHMzpRQHfevqHE_N8U=w1280' },
            { desc: 'Vivian avec son 3ème Équipement Exclusif (EE). Le premier est aussi une bonne option, les deux sont à posséder.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQXkZf90qs_DYgS2eFf4-Kxbd1jgKNpCcCv7mdOj0cQVwRB0BnzrpV3rsgl2sytlBv1kGfSg84oxT_aBzGJGSDHIcKNvm0Adtd7_XsN9EHO0m_DYRyFgvqzlm_8N_b7Ff0f_GfX6wQQYhZmGMoqCuUt8kGxdDku1TjOauPO_FyqY5l3kdVH0JJajY92hnlpfyfLxIUXzAa_AwDQYW1lLnIMibv_hmmfH1y2pU8=w1280' },
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
