'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Roozid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ROOZID</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRmO7jyU8MqAnPUA8sTl7CbJC9QU9LlvV7H1IsddnFQjLSVspfAFl-WISSOd9rjSB4wCUyyOvrFwEVbGW7De2l8xLZ-I_kWVlyxxSr9PtzTTrZ-Ct4mGzIvz-ivz4Mn8XoP_YLjkAisCnwPk2XQ_OKL7uadhttwXDHzooSKRsodlhnq-zzUv26B=w1280" alt="Roozid" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Roozid est peu jouée, il peut remplacer Lilka en PvE pour l&apos;expédition glace.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Roozid ?</h2>
          <p>Roozid s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQDvfBt95l4XBbLFYfojTecH5OiX2GCJSYNNzubC7IlZc89YI1sJxWON9xgKQjIg7kTycva-zSZToPfZy1tIY3X1NNWPnpwBdGTUSpPAO-cqUG1hSnWMBYGQkq3vGDGyMPtjY_YfrdoZEcV7R5NmPADreF659WJv_S2-a3aRhK7aSLQBSnQlarxfLdQx9raGrZ9Vwb2mnA-NFJH4JoMeJwJrVVZVnLqTtSOYmE=w1280" alt="Mission Roozid" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Bellmice :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 11 : 9 éliminations pour 56 répétitions</li>
            <li>EP1 4-4 (labyrinthe) : 29 éliminations pour 18 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
