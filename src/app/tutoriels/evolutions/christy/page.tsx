'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Christy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CHRISTY</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STSB_CIoH2-G2rogDzfobbVOlczPkuoZJPzVKuQQL1GGcFs1ImcUZ4GiJCThhp2KvSWNF_feNrMs9vDyIs0IHKlMFjyiXXZEeFF3tUM9vwA5bd2pZOaXAUcTdM6tY_qAUHmSl68N18MG-Kmz7LdMK6s71cJqLdjGxaCi2vGMwYpPgChGAGgeqNl=w1280" alt="Christy" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Christy est principalement utilisée en PvP pour partager la moitié de sa résistance d&apos;effet à un de ses alliés, pratique contre les adversaires infligeant des malus.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Christy ?</h2>
          <p>Christy s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0ST9t_fhYuU9b4S3aG3v4QdoHPgpHnXi8cRkc8hpogu98aGXNKVDQz22lswAPMNwP1XfhPQtHg6VOzjMolGem6P44m_9FMPwHNE4kSpXD-CmkNOD6rK4dKXE4Srkg_2FosS5j9V98a66mToku0Z2RK_rpaKtjVv0I7ze0EMP04kDLX0c80vFPJRAAkrLikAL20VuYfQ6WqIYVpouAIIQOnWMXe79jVbNGaY7abY=w1280" alt="Mission Christy" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 200 Master Fighters :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 1-4 : 9 éliminations pour 23 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
