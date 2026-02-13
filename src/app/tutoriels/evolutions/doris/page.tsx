'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Doris() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>DORIS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <p>
            L&apos;évolution de Doris est principalement utilisée en PvP pour affronter les
            personnages Obscurité en GvG et arène, elle sera très difficile à tuer.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSCG8aSgFoz1Mfu2NQDUO4Fx4m3QP_xcrnP66pswH8tLB856FtUvvgjdPvLvZ3fz-JycY-qFHnVkuOObmsn29JHg2fIkpuHjMI-hXXN54GGbr42uHvc4E4VpSgcg1cmSEP69h6Y9hfFZvvYoAa3-aw0QyAKrTzOe3SJqlFwxGxU7Xj8M19MeiwD8gY=w1280"
              alt="Doris"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Doris ?</h2>
          <p>
            Doris s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STnow2wJ7ZKN1GM6zMS9wL5C6zNyH9JSDtoG2eqyf7zdXu11jyJ_VG3tHL6i1ImyAFABEGsmwAZGicKSHP3MwiTQI-3WrA88X8DqjBfoSpYaBjl79OYUnqKsWCgqpCcaSS6ceqMAiiq-BMWzwRt2TuvxMLNa63rtKkKQZCR0W3-Q3FC48tIqQesU9OKOQiaWpNcBHhs-8g6SRYwcIGhELbhly7_hPC2mXNDPqo=w1280"
              alt="Évolution Doris"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Dark Brooms (UH 4 : 7 éliminations pour 72 répétitions)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Conseil : Vérifiez les missions dans le journal d&apos;évolution pour suivre votre progression.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
