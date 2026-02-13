'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Wanda() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>WANDA</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <p>
            L&apos;évolution de Wanda est peu jouée, elle est jouée en PvP pour contrer
            les héros avec de l&apos;évasion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Wanda ?</h2>
          <p>Wanda s&apos;obtient en invoquant, principalement avec les Invocations Lunaires.</p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STPIQGi3Dk_P2NhDnsCv0QzopL0VM9-v8PbuOsCQy1oUvHnJXRaQlpVYDOAsMhK71HUGlRlLloUiykAX5s1slVl3JJh2pZSG9D8Dj9ByqkPIcR35MV-jLIK2HLIuOzah_byltUc3uS8aNfe1OFf42_sFy0TLqnAEp_IauGE-Q3hEglUYsMrWQk5DnjtIw36VzPmccX0l8Bn1fby0oeR29WnD2o02QmvZMuvjTk=w1280"
              alt="Évolution de Wanda"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p><strong>Quêtes d&apos;évolution :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Pas de missions d&apos;élimination spécifiques — obtenue par invocation uniquement.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
