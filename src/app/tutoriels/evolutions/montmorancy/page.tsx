'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Montmorancy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>MONTMORANCY</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSCH6fSmP5NHsiCq1av5z1PeJfWXUkAFx1SIdGEG_P3WAVQzt0HXp73qt7kmfsNEenjB8xh5UmptJqcnmPCOuOYndN3qE9kbfZItOLRzBTAHGd-zRi6P75USU7V-8hrWl176-vPw0EI-xGf_uHNEAP_wvwEoIVqwwp8Kypx_KBk-kgSFLwkYXMu4Zg=w1280" alt="Montmorancy" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Montmorancy est très utile dans la chasse du Wyvern en tant que cleanse/heal et en Raid Cauchemar. Elle permet de maintenir en vie toute l&apos;équipe et d&apos;effacer les altérations négatives.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Montmorancy ?</h2>
          <p>Montmorancy s&apos;obtient dans les relations : onglet Héros → Recrutement.</p>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRDAlKb6q3yX-7HEtWV-NcAhBPzWJWft4Og3dQUmZiclap3a6jZj9iFw6iwu7IY7T7otP5JTCN5MtINlxFWdFFQATF8AitgvE50MW6vgWG4Zk_5Zqr_f1IkH1VkNOZh6g0FAvIDxF5Ua7PUw58uNZVWkFMaaefBNzHWNFNAIVPo1a5VMJIse3ycyYvMlHogiBOJW9ccIkRXueo39iUNA9m692cpcYKqQHec=w1280" alt="Relations Montmorancy" className={styles.infoImage} />
          </div>
          <p>Puis dans Relations, il y aura 3 missions faciles à effectuer.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STLKKXe5szKPjWforytnM_qe7e-mnhw8zUk9ESEVuAL2gm3bjzeDbJ7Mqi08zwD9ioyQepJCoKgugcmbSrrEdAVgtaQMzXQDqh5Q82RrRNwkO4wF9K1758tb7Nfb76pRXVsH3dfjIgTP7wrBJi0CCI-ccnIVyyPoWBl-E2XV7_qpQshwKFSwN4If7K-Ivu5yT4ELoVqJTg_WIcxXVWsn48Nt5KRc8wzSOlT=w1280" alt="Mission Montmorancy" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Spirits :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 15 : 8 éliminations pour 63 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Montmorancy en Wyvern 13</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cagdP9gN53I')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/cagdP9gN53I/maxresdefault.jpg" alt="Montmorancy Wyvern" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Montmorancy contre le Karkanis en Raid Cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('wh8SG5J5B8Y')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/wh8SG5J5B8Y/maxresdefault.jpg" alt="Montmorancy Raid Cauchemar" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
