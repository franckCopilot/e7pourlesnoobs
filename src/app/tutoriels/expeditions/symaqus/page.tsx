'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Symaqus() {
  const [activeVideo] = useState<string | null>(null);

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
            { desc: 'Landy avec BloodStone (Pierre de sang) en artefact', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SS_ld0YO8I3EOTVMgTKqy3oa9ujDkLrd3gEUGvhA5VdPVlYn3DacsdaMCH2AqDbKJKzhzQOXOZ-ZluMHdQ9Q77HVriVDks6H6wgKbj1sZmFi0KKwsJmRqFxHFs4HfO8xQwNJgLGyIuDiwU9jzwQ_gLP_05h7zH181_uEiP4LXKBqJV6akgLeX3O2yszbGHQiD63fNW0cv-hyas2nKhGP0VNpYJ3_8pOKIo4=w1280' },
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR8jTHLlVp11bcv2IlT2H0SHCzIfDe0IcCmCYMdSNtcQarRk10pHyoV9qQCXAkV4L2cSfbDFPykMa5o0YUEiZDzd0cEM6xab3mLkdQsMHnCRsfeKcttTlwKMY6ezaYo7Kae2_HoIkp2t5n0c5jm_GRhSuB4XPcTO35xALURXBiafbtOZ1B5PoO28Kq0DW4N7y22eu1aZzTKnP-ymgjDyG66fXjUnhL6svEzAwE=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSxArYLBlQhQPPXnzrKtjlw80K0kLAdcDygVP6Ak3z79WwGHI0HCTP5qaqCPLF2VeRVYl4EaziurVcZuC5Y_o3nU_OL_evusNiOoJeYQ5lPOt88kDQAI3Z6qsGidJFLSpdw4uWot9-XF7geQXEPilq9yMsdFirAsc0M_WyacqVWmw-_SsqLgGtnwGFya67LgVF75TNqp9UUQ6n9PwKJEHI__a37CsGP2dCZ7Iw=w1280' },
            { desc: 'Vivian avec son 3ème Équipement Exclusif (EE). Le premier est aussi une bonne option, les deux sont à posséder.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSyjkfLnZvwDHUV9fx2cejVTuVs5V-d7VnxgsEJHPyuSvfY77nRll1k2lxBp551GNwoq5EPx0gcH1sa9jsCqaA37tOp3gBJD7OXH4lAsqKp3gewRy6ydQz23cXuGLOc0Nb9zudP6n_1ddk09vqDY_wKv0AqPQ8oqiTIHMQbxg31VLZRRqCBazLdgkVX6tNWQHE262stZ6J9mpf9FldVBHwK2lLzlYw8BU-2tdQ=w1280' },
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
