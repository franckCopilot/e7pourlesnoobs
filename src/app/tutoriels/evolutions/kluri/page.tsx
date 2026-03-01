'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Kluri() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>KLURI</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQd53RDW4TueunRsIRqvlMFNpyQHRhcYQDRTe6KWDj57XGfnKC7D-3if7i8s9Qe-IgFuSO-sxCWVl8hvoHmOgNJ-YfRRplrdOh-H8vMhxXVkyltyv3J9qO1Ng73d_3rfeSJbpObaPPYjWY7X6WwBMCy2vfWgeF33XoBz-dLMNcoUoNF3u-C7bK8=w1280" alt="Kluri" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Kluri est utilisée en PvP pour affronter les héros avec de l&apos;évasion ou avec des esprits combattifs/concentrations. Elle est utile en PvE dans beaucoup de contenus comme les expéditions.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Kluri ?</h2>
          <p>Kluri s&apos;obtient en terminant l&apos;épisode 1 de l&apos;aventure.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STrBdP7c3PDMQ5vgIqstXq5ZW9OBNkWHh9y5M1B20dGlugDpn6RO3c_cCEXkA2JYKySpubKwyBWBrn-7N3ZUp0Omc8J8UDWRyE_id0aWiCxlKnE38dtUMWtzw8olJi_XVLElcdLeFykaZWwEJd2lsAhijTE5ANDcrX9CgJ-ikCAPiohtIVAZjVPu841h-srD49JzdNAHO24qYjMB4jtnGj5XXlKvREJppX1=w1280" alt="Mission Kluri" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Wild Plants :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 21 : 8 éliminations pour 63 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Combat d&apos;épreuve pour l&apos;évolution de Kluri</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8dOfmokhJOE')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/8dOfmokhJOE/maxresdefault.jpg" alt="Kluri combat épreuve" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Kluri depuis son Buff</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('vv0sGbQb5h4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/vv0sGbQb5h4/maxresdefault.jpg" alt="Kluri buff" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Kluri en Expédition</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('64omwJinrB4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/64omwJinrB4/maxresdefault.jpg" alt="Kluri expédition" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
