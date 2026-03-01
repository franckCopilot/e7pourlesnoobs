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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQKZA-qQAWwymWgWSmxJtXilNfmgWoMuwWJ_jjEfJWknIuTYNGBF3mD7aAITWcXMwdnW2L0G-Vz1Tc96GJkXnb7HFKFB4dXJoXm8yKJerNe_xhMiqHkQLFxzKXmQJCIfQ6LJnbNw-tGOIW3A8XFtakM4sBvxTmb5aVn6Y7dxX65E8yulGlQi6wJNi0=w1280"
              alt="Pyllis"
              className={styles.infoImage}
            />
          </div>
          <p>
            Pyllis est une Chevalière de type Feu. Son évolution est optionnelle,
            principalement utilisée en PvP pour les contre-attaques et l&apos;évasion.
            Elle s&apos;obtient via les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Pyllis ?</h2>
          <p>Pyllis s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRhvkjqCuqp6lkpK2IUK9pnQaqQs1oSPJSw1M8smJd32X8CQipmhkfzEdsBiNzn_5WVqNPk1AMrTFDmZUKkN3GJFa9K0oQGjA_U8bR5Eh1Mxe9Xm0bRh7v6DJUOyiLxqHCfhezOhETlkIfnHxEMHv0y3ZGqPFNOuMJkJRLHsIvvpbxk0L0Ml5Q4M=w1280"
              alt="Mission Pyllis"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 150 Angraf Shades :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 33 : 3 éliminations par run — 50 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Quelques exemples de composition en arène avec Pyllis</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('YwQCWdYaKYU')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/YwQCWdYaKYU/maxresdefault.jpg" alt="Pyllis arène" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Pyllis, Roenna ou Byblis et ML Cermia sont très fortes ensemble</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8eZYyzQBNiE')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/8eZYyzQBNiE/maxresdefault.jpg" alt="Pyllis ML Cermia" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
