'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Moroi() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Moroï adepte de l&apos;atrocité</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Lumière</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Lumière / light AUTO 500k/1m – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('YX0rqwizzH8')}>
              <img src="https://img.youtube.com/vi/YX0rqwizzH8/hqdefault.jpg" alt="Expedition Lumière AUTO 500k/1m" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>Favorisez les <strong>héros RGB</strong> pour maximiser votre score dans l&apos;expédition light.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier qui Bdef</strong> à droite : <strong>Ras</strong>, <strong>Cécilia</strong> ou <strong>Brigg</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 2 héros tapant en monocible qui peuvent se booster : <strong>Cermia</strong>, <strong>Sc Carmainerose</strong>, <strong>Luluca</strong> ou <strong>ML Luluca</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage qui retire des bonus adverses et dual attaque : <strong>Cerise</strong> sera un choix judicieux.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous ne pouvez pas utiliser vos compétences passives, ni booster un héros en dehors de son tour de jeu.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Top Model Luluca avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSlVRepf-xUUSjgKPlCaqIh5IxUAizohegNIXfqr3XqGiI8tXqSEnuKGjFgaqVVzprkZmFiHK1N-1FmTiq4zC4FdF90pSzL1L4HTtbY9UrUIY3O7Mc9e5shqZ4BAl211XPQeOIpbnzTwpUH6zwSJyMz5MjstqthMnta6BaRvDjSd-UlbtIPzQrxW2w6LAbrxdVwNEUir8hCLw0EJrwUc1FHTlZINeFWQgCg60I=w1280' },
            { desc: 'Cermia avec son premier Équipement Exclusif (EE)', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STR-SkvC2QntHSpjxVJWziDLbuLeY9smibv25mOnYZ2JjE62HtMWnVfHgUmwJT2FuApwb2ES34X_Yv8VnGh3ciTvRMGT63jfi74XBRBobv63lczVPb0qqliJ8Wr4VeuDDDUovIyvi59OQXy3GBCPtULwFr4Jh5ILug09wF0uzghSgin-j-siBP7s6ek_XTIqQgDXjfDKBp9f8MhKzWbkkZFL9BUDmpEgc3LVm4=w1280' },
            { desc: 'Cerise avec des équipements rapides non utilisés', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSoBuNK4JnK0FbfxP_vVQmfW_lQ2ym2jkmNrP60Xhvv9SkMc2FJSpkPBnomg3ubNMol0FkO3nVyML5GmmbGk8Fa4xY_ZQmdflqEov4wTp4k5TSkz4pK39ljLlUE5p-ciuxF-_4wYFt2CHIHZFCGSuLEA6USZo1F1sgKEDYvJEs6T_kkbEn7432rvke_SfgeFY14c8A-5CDpks16cVjFcvoB8-YXZsVf7amXyyA=w1280' },
            { desc: 'Sc Ras avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STWNa2cXCOcZQSKi5wvPwsEYjH41d2sEVoaeNFd0ygsxoKMjQgzx8c7gmqVqsKDf97An0esFkxRrcw_kMw7El1nYaFvOwtICR8-oztEBzE-HNTCL8LYuRpOL5H1VV3BPDB4lh-K3UqalJG3-Xc_TpUueXH5E3g7NV6J015YtnZ5DYYrOMjcy-o-lZwT8CNbF4G71xvN_CgZY3GhZoBVFr36WPuudBjG_fFYEq8=w1280' },
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
