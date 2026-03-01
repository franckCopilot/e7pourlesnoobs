'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ras() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RAS</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STYq9VwrFo1rv-KKFYZVNaupYQnqPi-T6OCr1vIOnE1-uKqR68U53RPwuTml5_OzxuS0yDwzFXZiHbkd_Z1cxROhQWulT9yWHGXXH9HHVwl2DqF5l6fKWJRK1qyTn9U-KJS3GApvG4NsJhxEK-Oy6Z_270yyR6h8d961jGEzAKRRQ3DT0-iRzMAZ0k=w1280" alt="Ras" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Ras est l&apos;un des meilleurs tanks du jeu pour les joueurs F2P. Il excelle dans presque tous les contenus PvE : Golem, expéditions, raid cauchemar. Il est aussi utile en PvP grâce à sa résistance et son provocation.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Ras ?</h2>
          <p>Ras s&apos;obtient au début de l&apos;aventure. Il nécessite de terminer le deuxième continent (Cidonia) et de vaincre Fastus Imparfait.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRtYkZJLA-4zcdcBfjuHthFc4M9LrYcptzIWXNJqrNKCNS_rJYmUfFMu5NIwf6SfD5SWpgufYAxR4r4bJHZSHC7GV-nzcJCwE30G68SAK3JvwFQJUIK9_9bn8MXwoc3NCnna15TlmU-Bi7IJvO-772JjTzspM6vFtHiGqSA3eC__AJ8RyzXSPS23XAMetaECP_BeQYNv0sOgbiZvkFiHZbYalTVQ9QaBQEG=w1280" alt="Mission Ras" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 ennemis :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 7 : 8 éliminations pour 63 répétitions</li>
            <li>Épisode 2 10-7 (labyrinthe) : 21 éliminations pour 24 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en Golem 13 pour débutant</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('9rq5X8G5G5o')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/9rq5X8G5G5o/maxresdefault.jpg" alt="Ras Golem 13" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras dans le raid cauchemar contre Arahakan</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('jFrIqJwIin8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/jFrIqJwIin8/maxresdefault.jpg" alt="Ras raid Arahakan" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en expédition feu</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('U6UguwGr2Pw')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/U6UguwGr2Pw/maxresdefault.jpg" alt="Ras expédition feu" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en expédition lumière</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('rGE-g1EReiM')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/rGE-g1EReiM/maxresdefault.jpg" alt="Ras expédition lumière" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Ras en PvP</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('YX0rqwizzH8')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/YX0rqwizzH8/maxresdefault.jpg" alt="Ras PvP" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
