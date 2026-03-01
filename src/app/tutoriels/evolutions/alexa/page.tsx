'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Alexa() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ALEXA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRbgEA1kTySaO8VrOF3kJgCE9JBfO3A0GstdJrGCaGSIGNRiyJQn2ue5OQq6k2Jv4EBBNxH4faTDluvqXivr4dvq6h9f-y34ZTnJBJvamLRJx3w0MuLONq4T0EuGTYN8mU7sMFhN3N-3kShGqAQPcaYJO2_OeBf5HBj7rJvXB9n6tL3zc_T7NxXKFy=w1280"
              alt="Alexa"
              className={styles.infoImage}
            />
          </div>
          <p>
            Alexa est une Guerrière de type Terre. Son évolution est <strong>fortement recommandée</strong> car
            elle remplace avantageusement Sigret pour le Wyvern 13, ce qui vous permet d&apos;économiser vos
            molagoras. C&apos;est une évolution limitée disponible via les Relations.
          </p>
          <p>
            En plus de remplacer Sigret en W13, elle permettra d&apos;économiser 900 Skystones ainsi qu&apos;un
            Livre extra-temporel (Ordre de l&apos;Épée, Seigneur de l&apos;été).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Alexa ?</h2>
          <p>Alexa s&apos;obtient via les <strong>Relations</strong> (évolution limitée).</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STxToI-q-iLqMMXTD9vdqzZ7l6C5SBCWlKenDv6kLVvZMnqK9RwJnOnUH4Vy5rmZ7bsAHscF2hpiI_ZW2HX4HnX7JkHb1KVnXBfHLVY2RzLpX8lzjJj9HKWJlZwSGS7sCvqxEJNBbq_eWLWHoF5r5fEIq29uM1gicnAHbFB-7EbWHcVbDxEJn2y0Q=w1280"
              alt="Alexa Relations"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR21WMe2lzdUaKSh7O8i9jDdToWCEp3O5b5lJULOYKMxP0d0gJgJCxAVDvJBlJjHSvzVXxQ-IvJlxXuLGK-V0blXB3CG4-YGFS_0uMXk0gScilBEHuvHiRfq6SyRZgbHhFUSV7z8c0SBRkJuehD-ZGJHNH0cGGiHxEhNbhV2ZFMW0yNFflOiAi5Q=w1280"
              alt="Missions Alexa"
              className={styles.infoImage}
            />
          </div>
          <p>
            <strong>Éliminer 50 monstres dans le Labyrinthe Capitale royale Azmakalis :</strong>
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ-1Dw1wDg7OE2fGe1XbGMJqdgTwc62vHWq71RFtVXnlBRPgjLnFz7rZNIyAUZqWbKJZ49yq0zf2DhGzJ6Y49gVcrwBRgYjETnGSGRjXJh4K3xrWEolG52GVT3WLNS-f_g3Yh8z3avZhDQcMV4I25yQsWw1cDNZCRiX3Zna2dIPPANz5KAFq5jJoU=w1280"
              alt="Labyrinthe Azmakalis"
              className={styles.infoImage}
            />
          </div>
          <p>
            <strong>Missions de Relations (3 missions simples) :</strong>
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQOybnNiHHWL9xDG7eRUKNiyv10RTuoZ7oM-9JqxPlKkH7_JZHRMwlCR2zVXjoCH9F-XlkzxL_a4-YrFaS7VBbPAGCLLbCfqR9jAiR8cPFbXGKfbrLXHF8aHJDSvXy-OHwZWnj5pG9AKJFG0B3AeBh3JLUlVDl7i20WG_dMMzbnuGRi2DEH9jz9PgD=w1280"
              alt="Missions Relations Alexa"
              className={styles.infoImage}
            />
          </div>
          <p>
            <strong>Livre extra-temporel requis :</strong> Ordre de l&apos;Épée, Seigneur de l&apos;été —
            900 Skystones.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiYBqAkhQ2wBhlPkaSEYRBwuJwc0t31OdyYjqJjwKAOB4mHmpJQfN2l0pGkXbTEsxVcVJ1-MMVB5YHVXAQfXZGvbXE9VdyipbnUd_bm6x9S0AEyRkMBzqMeBbxcg8O5BpYLUhQHTKrlwj_4mxz5qdPc8NMn8pPR5cBW7pYlC0lCR22ZmkLABiGnbA=w1280"
              alt="Livre extra-temporel Alexa"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Alexa en Wyvern 13</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('hfEAxmDsGAc')}>
              <img
                className={styles.videoThumb}
                src="https://img.youtube.com/vi/hfEAxmDsGAc/maxresdefault.jpg"
                alt="Alexa en Wyvern 13"
              />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Alexa — présentation et missions</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cagdP9gN53I')}>
              <img
                className={styles.videoThumb}
                src="https://img.youtube.com/vi/cagdP9gN53I/maxresdefault.jpg"
                alt="Alexa présentation"
              />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
