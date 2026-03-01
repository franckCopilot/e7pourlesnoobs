'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Wanda() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>WANDA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STQGDCcUZwaW3THATjuIudeVDCP8KWRF6ZLTYQsJUzn20_ct2b9iKdrHFMP-6pzA1H53w0fizMoZO1cbiGSshepfDpkylA66x-KsKf1swT-lHGqRqSvQTFXWmtaxVisbYkS8n20C7bUb1RAcafnGyuhj6Cog_8iw_I_GofabKUFJTEry90fRCCw=w1280" alt="Wanda" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Wanda est peu jouée, elle est jouée en PvP pour contrer les héros avec de l&apos;évasion.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Wanda ?</h2>
          <p>Wanda s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQNgaCp0HvReaoAORbYCjdD96JgWVHtIF9Eiasorq78zgWcv1tS9EwV1uJ7YtiqcDsZzuTEmFBX85uT89cV1Y-e3glwLIMYOo_D4ZZUSvUekdVnecehfIFvXpzcNDlpEpmQqDd74inRcK6h6EIaE4qcIxlq3eeVuVimX45g5CGnc7r2ORCgK7_zzpJuqjIWDyfCmwbqR5ur1ZW0kXeno2Ci5rb21UdFImnNS40=w1280" alt="Mission Wanda" className={styles.infoImage} />
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
