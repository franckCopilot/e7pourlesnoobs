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
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSu4ukBCxHGNPJJSJ3RKiXZ7X2bWb8HU2mDpkyPU-U48uxiOPRUvGHJexg7Uoibjnlb0vHFUj85u7SV1OA2i9z9DknSUH8PQV2XJAUBrDTj9gFG2hTPKQ-pIZNvSGSETf5TQ8Ak4H8Puk0j1qvJRXUSYJ5JBwQ2lUHvn9pFWc4SJKuJrD2OMTF5RA=w1280"
              alt="Montmorancy"
              className={styles.infoImage}
            />
          </div>
          <p>
            Montmorancy est une Clerc de type Glace. Son évolution est <strong>fortement recommandée</strong>
            — c&apos;est même souvent la <strong>première évolution conseillée</strong> pour les nouveaux
            joueurs. Elle est indispensable en Wyvern 13 et dans de nombreux contenus PvE.
            Elle s&apos;obtient via les <strong>Relations</strong>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Montmorancy ?</h2>
          <p>Montmorancy s&apos;obtient via les <strong>Relations</strong>.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQPTc6Y8vn1vHzLbDC3JhtYWgLdBz1HRD-O0a-7hfKT9pF7Ygr5GvKN9vqL_1Z-W3mGV8PPbW5pSE4YjHhPSKfJKLLO-FS_QBnr4VJ-3qF7lpf8WGp8Ie_Ynh65sn1y2ydm3bZPaFQpfxB_Xe7hqU_D-LpjFHZe0gzg3NZXZ_3lcN_BHq-jGrCzWw=w1280"
              alt="Montmorancy Relations"
              className={styles.infoImage}
            />
          </div>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQr3IY6Ivg-1VH5l-2LqM3FsJ08s9p-38dBRExHHw5c0w1nczeMkWTa9AVEVfIjJrj6bFXFlVyaBnkEY0Dv7tP5gvwP5rfnrp2_VFjJ5lEVr9JEEq0L26J7Z_jkB3p5g7q1D-glP8XBNy2-dGJ2Ij10dqjEv_bFqZQyH4jRdVc89Lfq6UJv3xKZ4d4=w1280"
              alt="Montmorancy missions"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <p><strong>Éliminer 500 Spirits :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 15 : 8 éliminations par run — 63 répétitions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Montmorancy en Wyvern 13</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cagdP9gN53I')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/cagdP9gN53I/maxresdefault.jpg" alt="Montmorancy Wyvern 13" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Montmorancy contre le Karkanis en Raid Cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('wh8SG5J5B8Y')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/wh8SG5J5B8Y/maxresdefault.jpg" alt="Montmorancy Karkanis" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
