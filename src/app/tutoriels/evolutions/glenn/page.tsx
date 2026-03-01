'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Glenn() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>GLENN</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRvGNe3ZgoC5Gn0pEHVgfpe_xVvI5YYtYjrsz2Bi1NEmbP1k5YPXmZHieMurddfkcrPA2vjvGdBWLYiDsZkAD4ewSpttcz7p4TerjQJ-PO3Cz_auMUOnwZ0ihtGCDg22OoEWQ4FL5vDnJg_RQnX7X-jpAXrGJ2YsKyQSClDCV-UEBsrGoR_bIpavM4=w1280" alt="Glenn" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Glenn est peu jouée, c&apos;est un DPS qui effectuera de bons dégâts en PvP.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Glenn ?</h2>
          <p>Glenn s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0ST9t_fhYuU9b4S3aG3v4QdoHPgpHnXi8cRkc8hpogu98aGXNKVDQz22lswAPMNwP1XfhPQtHg6VOzjMolGem6P44m_9FMPwHNE4kSpXD-CmkNOD6rK4dKXE4Srkg_2FosS5j9V98a66mToku0Z2RK_rpaKtjVv0I7ze0EMP04kDLX0c80vFPJRAAkrLikAL20VuYfQ6WqIYVpouAIIQOnWMXe79jVbNGaY7abY=w1280" alt="Mission Glenn" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Old Model Cyborgs in Politia :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 2-S1 : 7 éliminations pour 72 répétitions</li>
            <li>Éliminer 500 Fighters in Politis avec Glenn dans l&apos;équipe : EP3 2-S4 : 5 éliminations pour 100 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
