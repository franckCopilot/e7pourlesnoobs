'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Helga() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>HELGA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0ST0Jbov4TDyKolJe5zVOiHBXqPFdLn3YEE0bsutyBEi4g1E1iCU1SHHo8jdaF_F7l8i5X7iinzPQScBqeZ1JuCymb_JJ-JRX8ZQqe2zBvRobrwNXPkDSFr7aJPGmXiU6OJLomGh7X--4VGQyU6OaxYKy_OKiO0MhlMoH4QLnQoHfTVbJIclTQpB7g=w1280"
              alt="Helga"
              className={styles.infoImage}
            />
          </div>
          <p>
            Helga est une Guerrière de type Glace. Son évolution est optionnelle,
            principalement utile en expédition Glace. Elle s&apos;obtient via les
            Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Helga ?</h2>
          <p>Helga s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiSemab2KEOzTg2mXHHH4-V8Q3c5c3wLhxJMqTnMDUoE-vWmCdJkwEBFE8pPjVEFgHzA_VXWjiqshx6_APxmT2IXmZ-K4bKaJRFy8cpbbP0QT9WbMR7AXsezZBynmQo34IgcEGv_-4F0n_9QLKZFZ0Fd2t0hSiB5N9n8FJP6FHvI2RvMa4ykmjQuk=w1280"
              alt="Mission Helga"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Cultists :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 12, 13 ou 22 : 6 éliminations par run — 84 répétitions</li>
            <li>EP1 4-9 labyrinthe : 39 éliminations par run — 13 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
