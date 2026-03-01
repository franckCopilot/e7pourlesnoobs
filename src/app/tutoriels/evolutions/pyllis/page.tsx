'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pyllis() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>PYLLIS</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STX709g8hciZC80KpAa2kTEzD7uyheC4EtDXzteTONYskK2WZvVyc05OTaR1ktlJ0SdFEpi5wLjB4S4Yf44z_5rpfV1X5q-MZvjeYZt_km8n4YfxIno-_i7RIyQWKzdoQxXHN1fGsQFkULh8tPbeK-9yzDPZKxZMLEmt7wyjmnjiYcKD-JRHXeA_Ic=w1280" alt="Pyllis" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Pyllis est très utile en PvP. Elle permet de soutenir l&apos;équipe avec des soins et des boucliers tout en décélérant les ennemis.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Pyllis ?</h2>
          <p>Pyllis s&apos;obtient via les <strong>Invocations Mystiques</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQqfD0vDBO1M2pbrY_mEN5czlAKaBX-11haZ6Q93vqjlHYLzgEREfWFFBJ6aV7rYXfC1EXgbDztz8aCpLPpyeDXf76yRlQ7ADbdKkITYdLwvG-oF_deRERqsJ1Hp5S9PYX6ywO57urOoczncWFGZ4ZYPV7kCcH0CiZo_MJS-RIlWYT8Vg0Zj9pGNy8xmXsCX9PdH-XL2n1lAUCllMs2slTeR7-UIaVRgLsZRlo=w1280" alt="Mission Pyllis" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 150 Angraf Shades :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 33 : 3 éliminations pour 50 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Quelques exemples de composition en arène avec Pyllis.</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('YwQCWdYaKYU')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/YwQCWdYaKYU/maxresdefault.jpg" alt="Pyllis arène compositions" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Pyllis, Roenna ou Byblis et ml Cermia sont très fortes ensemble</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8eZYyzQBNiE')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/8eZYyzQBNiE/maxresdefault.jpg" alt="Pyllis combo" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
