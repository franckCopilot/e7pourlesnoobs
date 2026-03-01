'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function SectAxe() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>SECT AXE</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SR-nB0j0r45kKXJV8ym5hM4VGXZ4-RJCjSa_GS_0Q-3Xt7fF2FkBsaCDOEbkefL9UOlq12F3MVJz2V8ZD1gkVnNEME-A-wJR3Iknj6-N0E1P-5vR4XjxcivFvVEBBH00H1RlE-a2jDpWsxvW5lWFZOiMOlFRCg7fjrOiPxn7XPTyMVbR3kVQhEYJm0=w1280"
              alt="Sect Axe"
              className={styles.infoImage}
            />
          </div>
          <p>
            Sect Axe est un Guerrier de type Glace. Son évolution est de niche,
            utilisée en PvP pour contrer les héros de type Lumière.
            Il s&apos;obtient via les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Sect Axe ?</h2>
          <p>Sect Axe s&apos;obtient via les <strong>Invocations Lunaires</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STbD8ESTXPjExKa0UH5lf0jS0cFi4yFaKCUAUJ0vTJo7hqvb3n_4B64yIFsPenrJtMdEm7Vl3G-cvP3XP_u1lSIWsGDJqxjikfxfE0JIDPmSiJHu89Z7EFZmxPW4j2Vd0MhzV0LD2YO-K0DVXlWuI7jj19LDFLvGn0E7JzVzAPz_OG0u77_WkyAtK0=w1280"
              alt="Mission Sect Axe"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 500 Church of Ilryos Devotees :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>UH 12, UH 13 ou UH 22 : 6 éliminations par run — 84 répétitions</li>
            <li>EP1 9-7 labyrinthe : 6 éliminations par run — 84 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
