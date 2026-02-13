'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Kluri() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>KLURI</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>L&apos;évolution de Kluri est utilisée en PvP pour affronter les héros avec de l&apos;évasion ou avec des esprits combattifs/concentrations. Elle est utile en PvE dans beaucoup de contenus comme les expéditions.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR1DdTCfTOjCJg7g82tPhc1WjHZ5XoyRLkmW1RSUx5Zyiq4UhoILbOP6Rsxa9BYTDbSaRat_mSpZ9z8pAa37XIGme_MNJ1113FRy8s2r7KQUqArBuXy06ugQZfpQcoQLrbbkggNPmZ3Y5LhotiWRK6yiUvdJJYlALCPvAiTrcqtvDtPoDt2yAWn=w1280"
              alt="Kluri"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Kluri ?</h2>
          <p>Kluri s&apos;obtient en terminant l&apos;épisode 1 de l&apos;aventure.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSr3t_pz8BcXNDacKWO2IAjkhzckxCAtaHo0Q0alueDrLcQzKYffooLJdyKpcUfaKBk1muWurTqtj4tZJ-nAKAQBUO5p2XeMqKf3uU4FbVy7Nsr1ZoTIvWgg2nignTg4AM8aNOlX5vUxf1FMiZ9x4r8JtEYXP-FGtnLxbLH-3vN04CjB4M8AVh-1Jhdud7yiqEgjXEHvc4d2ZLRQbJVhLyJyqTM80UMJkbi=w1280"
              alt="Évolution"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Voici les missions à compléter pour évoluer Kluri :</p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Wild Plants (UH 21: 8 elim for 63 reps)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Kluri est un héros optionnel mais très utile en PvP et en expéditions. Son évolution est recommandée pour les joueurs qui souhaitent diversifier leur roster.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
