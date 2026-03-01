'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Jena() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>JENA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSc1wkDF7baR4_Wcjs_Vshy_fgCdA-PNPBDjkI9fBLOf5MSEjE1LL3yA8vNCqpNhpUaXZpidSYkKRD5a1dCR7wx0MgkLGpdYAA6VazWiwfwxpn8qwB_Oj8P8CqTYqM-09czYHoy4WKgFxG0VUHTrhae5QIl2m7_G_XiESQ1_SOgpgygXLTT1EnK=w1280" alt="Jena" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Jena est peu jouée, c&apos;est un mage PvP orienté DPS/Contrôle.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Jena ?</h2>
          <p>Jena s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRIaaj_f_114mW0QlpkGJXf8O6a2GAXj88a8KzitrWQyg3vn-zSSGLBo2Y13lRQt_p2wR4oKn_ouxVKYLuGziJ8CnUpnjdvtkKAzU7MZFDc99zpKtvtbuxWElvB9b3fNurLnldzjBu7oAhuYWnVvsfwBuWdACX_v9ywF6lcVa94HT_OlrVd0W52wiqyw3oXPFsruQ7VMxmfG9aoqkknw4dNSTmR3kEEm1EmXJA=w1280" alt="Mission Jena" className={styles.infoImage} />
          </div>
          <p><strong>Capturer 45 Church of Ilryos Devotees :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 13 : TBD</li>
            <li>Éliminer 25 Ilryos Devotees in the Fabricated Altar labyrinth avec Jena : Great Farche Labyrinth zone 2</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
