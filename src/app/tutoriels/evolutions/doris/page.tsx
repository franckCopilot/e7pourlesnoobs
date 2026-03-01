'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Doris() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>DORIS</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQc_FL_lLK8OqY41O75qlzhJAC7Vp9SbnSK8hmfTnCRlUdvUOZDdz7m7nWrNH5CnQkwgoaBeRdO3k7g-fsuQ_zzTEnJyw73sntP-bYyNxdp-bLDyBKeOrtMmDH9MgdiVaavdDp7S2Jfei3LqrVmw0OD9dURaR99mRNrZEaMxiszi0SA_g8T93xw6aI=w1280" alt="Doris" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Doris est principalement utilisée en PvP pour affronter les personnages Obscurité en GvG et arène, elle sera très difficile à tuer.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Doris ?</h2>
          <p>Doris s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SS8wn2gFUFCkGYJvuLvz6ZnQYItP4cdOp2pJ7KpvWryC2kU3zz01i6CxgHj-A6OuT-HNfq4wyIBN7RB9Ed_leFXQ3gk7lBn_ZfEdefu9HnCnJ458QmjYvvQajZDEJHyb5-qYsMJpRwaVETzVq9NfCcIl8CopuXNq7aFY7BT_D6F8-hiYjn4yi7ZvoKRk0vt308uqA_CdH6PR3lrHgVC49sUDr9fxZL9d0iSQv8=w1280" alt="Mission Doris" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Dark Brooms :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 4 : 7 éliminations pour 72 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
