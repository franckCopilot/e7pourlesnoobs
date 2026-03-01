'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Lorina() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>LORINA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0ST7lx6Zw15KarOv3TJircqu08kOSy8MycWMhwY5rjjgSQ_3rucOg9YEMwysyJnEemNdgNpglL_0YQlRZRcUV_wFnIo5ACLFCFkikQHO0DbKlW3WB1PmqVERp_2uKwHnPFZXeQOQq4EXIi7y7M7jqYlLaIjnNUf2kbieoDp_r_us5mzpxsRtIltmTkE=w1280" alt="Lorina" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Lorina est l&apos;un des meilleurs DPS monocible du jeu en PvE. Elle est très populaire dans presque tous les contenus PvE du jeu : dans les abîmes, en expédition feu, en chasse du Caides ou encore en Labyrinthe.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Lorina ?</h2>
          <p>Lorina s&apos;obtient dans les relations : onglet Héros → Recrutement.</p>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRDAlKb6q3yX-7HEtWV-NcAhBPzWJWft4Og3dQUmZiclap3a6jZj9iFw6iwu7IY7T7otP5JTCN5MtINlxFWdFFQATF8AitgvE50MW6vgWG4Zk_5Zqr_f1IkH1VkNOZh6g0FAvIDxF5Ua7PUw58uNZVWkFMaaefBNzHWNFNAIVPo1a5VMJIse3ycyYvMlHogiBOJW9ccIkRXueo39iUNA9m692cpcYKqQHec=w1280" alt="Relations Lorina" className={styles.infoImage} />
          </div>
          <p>Puis dans Relations, il y aura 3 missions faciles à effectuer.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STLKKXe5szKPjWforytnM_qe7e-mnhw8zUk9ESEVuAL2gm3bjzeDbJ7Mqi08zwD9ioyQepJCoKgugcmbSrrEdAVgtaQMzXQDqh5Q82RrRNwkO4wF9K1758tb7Nfb76pRXVsH3dfjIgTP7wrBJi0CCI-ccnIVyyPoWBl-E2XV7_qpQshwKFSwN4If7K-Ivu5yT4ELoVqJTg_WIcxXVWsn48Nt5KRc8wzSOlT=w1280" alt="Mission Lorina" className={styles.infoImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Lorina en expédition feu</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('Zz4BqN9Sbco')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/Zz4BqN9Sbco/maxresdefault.jpg" alt="Lorina expédition feu" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Lorina dans la chasse du Caides</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/_IYBUiu-8X8/maxresdefault.jpg" alt="Lorina Caides" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Lorina dans le raid</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('aEaM0sJEAvk')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/aEaM0sJEAvk/maxresdefault.jpg" alt="Lorina raid" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
