'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Arowell() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>AROWELL</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQd6y6El2apkBH6sFvFdXfb4Sy2T-r6NiO3aEiw8h0gfPxnkn3VLXO7V-FbpfxkVGMVHnhHf3a-TG5hRKLCiJQNpKYDW44yGdvhMHmFO_HzfKlIjpE8_v3SqPQMuqdqN1VRsyc_uHLgz9bm9-1QFW9KcXV5FTDJ4axzIRWzYVb1-cxJPfCFNT0LHU=w1280"
              alt="Arowell"
              className={styles.infoImage}
            />
          </div>
          <p>
            SC Arowell est l&apos;une des meilleures évolutions du jeu. Elle est <strong>fortement recommandée</strong>,
            notamment orientée PvP. Avec son kit de compétences axé sur la survie et l&apos;immunité,
            elle est le héros le plus populaire en arène et dans de nombreuses compositions PvP.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Arowell ?</h2>
          <p>Arowell s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSKVwLIDzkY6hH8mWj5xRjfz1XSfVkTF5wEJZxBgpR0Y0LVkAHIknA6f4MGAB4E2IjUibbE-q7MSmElZlipf_Fk6xwXbSlI5oGQzRzSqNBxbrRGIe0i6cxgpDJXhJAHGpGSCXnMvWQhI9nqBfQd6dvJdA9RPaJfLTuyD7u4cJvVMZC0VCHWPmCA=w1280"
              alt="Mission Arowell"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 100 Order of the Shield soldiers in South Wetheric Moor avec Arowell dans l&apos;équipe :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 19 : 5 éliminations par run — 20 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Le héros le plus populaire en PvP</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('GKbcDrrqGZs')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/GKbcDrrqGZs/maxresdefault.jpg" alt="Arowell PvP populaire" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Idée de composition PvP F2P avec SC Arowell</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('uXjyTJmrlsA')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/uXjyTJmrlsA/maxresdefault.jpg" alt="Composition PvP F2P Arowell" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>SC Arowell pour faire la Reine dans le mode cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('eqP6MddVE4c')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/eqP6MddVE4c/maxresdefault.jpg" alt="Arowell Reine Cauchemar" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Un héros à posséder</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('KUZMmmIMH_M')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/KUZMmmIMH_M/maxresdefault.jpg" alt="Arowell un héros à posséder" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Parmi les 10 héros pour commencer à faire du PvP</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('eQueX96VKzo')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/eQueX96VKzo/maxresdefault.jpg" alt="Top 10 héros PvP" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
