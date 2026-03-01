'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function SectAxe() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>SECT AXE</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSF9K4W5AVau0PFDYsBDE26Ri6TeNmDFRF5rnHQqzZtogakJWmMK0Q-cR-8bXpv4qa55i7ikNZ1cIR1G2k8C3gMjpHuFzNC4A0VRDX_ncoXKeg0RLXkrdQBcWuMfRpz41jyVKH9flPGIkMs0rjILCvGiPui0Zh-jxSUkgJ0LyHrTJ7xzr0r9KDWUQI=w1280" alt="Sect Axe" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Sect Axe est peu jouée, c&apos;est un personnage PvP orienté dégâts pour contrer les personnages lumière.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Sect Axe ?</h2>
          <p>Sect Axe s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQNgaCp0HvReaoAORbYCjdD96JgWVHtIF9Eiasorq78zgWcv1tS9EwV1uJ7YtiqcDsZzuTEmFBX85uT89cV1Y-e3glwLIMYOo_D4ZZUSvUekdVnecehfIFvXpzcNDlpEpmQqDd74inRcK6h6EIaE4qcIxlq3eeVuVimX45g5CGnc7r2ORCgK7_zzpJuqjIWDyfCmwbqR5ur1ZW0kXeno2Ci5rb21UdFImnNS40=w1280" alt="Mission Sect Axe" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Church of Ilryos Devotees :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 12, 13 ou 22 : 6 éliminations pour 84 répétitions</li>
            <li>EP1 9-7 (labyrinthe) : 6 éliminations pour 84 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
