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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STy-Tf0vscASGlT3TbDMm52BOABbHHT6JFxnbVpMvvNHkjWuSPMqjcwHJpQiVOcFz9ld0R9BXqQv1iEMtTqAOIJ-4JTT2LuFSAoA2Qd6sLFV1DKbkQYCGTAtMbrV7WfrZIp4uOxoX4CflV9MG9YmZlgNjaSF7v4D72VDp6klGUBxHsJF_ItdVrT4E=w1280"
              alt="Lorina"
              className={styles.infoImage}
            />
          </div>
          <p>
            Lorina est une Guerrière de type Glace. Son évolution est <strong>fortement recommandée</strong>.
            Elle est une excellente DPS monocible en PvE, très efficace en expédition Feu,
            lors de la chasse du Caides, et dans le Raid.
            Elle s&apos;obtient via les <strong>Relations</strong> (3 missions simples).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Lorina ?</h2>
          <p>Lorina s&apos;obtient via les <strong>Relations</strong> — 3 missions simples.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQPTc6Y8vn1vHzLbDC3JhtYWgLdBz1HRD-O0a-7hfKT9pF7Ygr5GvKN9vqL_1Z-W3mGV8PPbW5pSE4YjHhPSKfJKLLO-FS_QBnr4VJ-3qF7lpf8WGp8Ie_Ynh65sn1y2ydm3bZPaFQpfxB_Xe7hqU_D-LpjFHZe0gzg3NZXZ_3lcN_BHq-jGrCzWw=w1280"
              alt="Lorina Relations"
              className={styles.infoImage}
            />
          </div>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQr3IY6Ivg-1VH5l-2LqM3FsJ08s9p-38dBRExHHw5c0w1nczeMkWTa9AVEVfIjJrj6bFXFlVyaBnkEY0Dv7tP5gvwP5rfnrp2_VFjJ5lEVr9JEEq0L26J7Z_jkB3p5g7q1D-glP8XBNy2-dGJ2Ij10dqjEv_bFqZQyH4jRdVc89Lfq6UJv3xKZ4d4=w1280"
              alt="Lorina missions"
              className={styles.infoImage}
            />
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
