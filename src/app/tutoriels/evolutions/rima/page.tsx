'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Rima() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RIMA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSDfzCO7XlXBwrJTqfegxDpKdW78k1uvdumkNO860vKASfaNa6oylzatfNcd3JgFWg7Lup-gvGQsc-D8jRcSdsha2oMIqIsN8E0M0PWdiv05DYBPR_hRt_UOzlF_iGKRpdOkr7ghro_ObW6BiIqLyKmdNSRiKw3fBKawc2c45ytLjTZxydZl7rDQxc=w1280" alt="Rima" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Rima est peu jouée, il peut être joué en PvE : en expédition feu.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Rima ?</h2>
          <p>Rima s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQDvfBt95l4XBbLFYfojTecH5OiX2GCJSYNNzubC7IlZc89YI1sJxWON9xgKQjIg7kTycva-zSZToPfZy1tIY3X1NNWPnpwBdGTUSpPAO-cqUG1hSnWMBYGQkq3vGDGyMPtjY_YfrdoZEcV7R5NmPADreF659WJv_S2-a3aRhK7aSLQBSnQlarxfLdQx9raGrZ9Vwb2mnA-NFJH4JoMeJwJrVVZVnLqTtSOYmE=w1280" alt="Mission Rima" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Animal Model Machinery :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 2-1 : 8 éliminations pour 63 répétitions</li>
            <li>EP3 2-2 (labyrinthe) : TBD</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
