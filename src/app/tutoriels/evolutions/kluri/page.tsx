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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRVbDoWSJqNj8PN5rDVEJI-lQ1xOL-nnJlhwUUjasV16cllIr7V1wkPKOTSmm1qSXn4kMeK0PEp3eo_sBh4_oq95bDJU4RkApkn3piAaFo5j7UMbMEomN0-E1IkLqSZ6d1y36IZRiCEOy5XVQyEW03vPCQ-ky7SFSlEzHy7r3e67qO7UBGHAenELo=w1280"
              alt="Kluri"
              className={styles.infoImage}
            />
          </div>
          <p>
            Kluri est une Chevalière de type Terre. Son évolution est optionnelle mais recommandée.
            Elle est utile en PvP pour ses évasions et ses esprits combattifs, ainsi qu&apos;en expéditions.
            Elle s&apos;obtient en terminant l&apos;Épisode 1 de l&apos;aventure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Kluri ?</h2>
          <p>Kluri s&apos;obtient en terminant l&apos;<strong>Épisode 1</strong> de l&apos;aventure.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS1q2Lwc5EbuONjP2wYmrv8D3-9iX1hM3VuJA4E1A5vMGJbr-q0I_o2VGQJ4FuDpIfUu7CsEllpQ3JGX9lpLNq8qFkzqD45m-qxlZoV0bOEJrW6C6ZDHe3DH_Oa2c-zv1FQIu8QBjZe5Ah4cWLTsLGiJvKhJPSXGbzMc8SxNNHr7KHYtXXCz_s8=w1280"
              alt="Mission Kluri"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Wild Plants :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 21 : 8 éliminations par run — 63 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Combat d&apos;épreuve pour l&apos;évolution de Kluri</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('8dOfmokhJOE')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/8dOfmokhJOE/maxresdefault.jpg" alt="Combat épreuve Kluri" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Kluri depuis son Buff</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('vv0sGbQb5h4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/vv0sGbQb5h4/maxresdefault.jpg" alt="Kluri Buff" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Kluri en Expédition</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('64omwJinrB4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/64omwJinrB4/maxresdefault.jpg" alt="Kluri Expédition" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
