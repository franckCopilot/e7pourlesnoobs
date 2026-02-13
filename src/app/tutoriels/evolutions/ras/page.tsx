'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Ras() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>RAS</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <p>
            Ras est le protagoniste de l&apos;aventure. Son évolution est la meilleure d&apos;Epic Seven.
            Il est utile dans tous les contenus du jeu. En PvE, il sert dans tous les étages de l&apos;abîme,
            il est fort dans la chasse du Golem 13, fort dans les expéditions, dans la tour automate ainsi
            que pour affronter Arahakan dans le raid Cauchemar. En PvP, il est bien, particulièrement avec
            Landy et Montmorancy. C&apos;est une excellente composition pour commencer le PvP.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Ras ?</h2>
          <p>Ras s&apos;obtient au début de l&apos;aventure.</p>
          <p className={styles.note}>
            L&apos;évolution de Ras est spéciale. Il faudra terminer le deuxième continent de l&apos;aventure
            pour la débloquer (Cidonia). Vous devrez donc affronter et vaincre le Fastus Imparfait.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQTdPpEON9EcXz67vodZwIQHXR1cVwq4xj8FOujBhJXfNBGMv4hMzVlFMAZqGOGmklIpBU64UwUnbDHJVqsdQs6gHlp5hZPPx6nX2iv20AOIeGExZUB8f-BXZ01xGvtws8q3HVs_u4gBLF49JD4JPGjjo8VDZGhfXlSsTr01IZdKSdz7yI5PRz-XCHRjYMPPbVQ7PqWDmDjGAcYYFP5EaOBENqnATl4AFKl=w1280"
              alt="Évolution de Ras"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p><strong>Quêtes d&apos;évolution :</strong></p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Unknown (UH 7 : 8 elim pour 63 reps ; EP2 10-7 labyrinthe : 21 elim pour 24 reps)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
