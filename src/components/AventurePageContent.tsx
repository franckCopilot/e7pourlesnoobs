'use client';

import { useState } from 'react';
import VideoModal from '@/components/VideoModal';
import styles from '@/app/aventure-de-0/aventure.module.css';

interface Journey {
  title: string;
  videoId: string;
  videoFirst: boolean;
  body: string;
}

function renderParagraphs(body: string) {
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, idx) => <p key={idx} className={styles.paragraph}>{p}</p>);
}

interface Props {
  journeys: Journey[];
}

export default function AventurePageContent({ journeys }: Props) {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <div className={styles.aventureContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>AVENTURE DE 0</h1>
          <p className={styles.subtitle}>
            Dans cet onglet vous retrouverez le suivi de mon aventure de 0 sur Epic Seven à l&apos;occasion des 6 ans d&apos;anniversaire du jeu.
          </p>
        </div>

        {journeys.map((journey) => (
          <div key={journey.title} className={styles.journeySection}>
            {journey.videoFirst ? (
              <>
                <div className={styles.videoWrapper} onClick={() => setSelectedVideoId(journey.videoId)}>
                  <img
                    src={`https://i.ytimg.com/vi/${journey.videoId}/maxresdefault.jpg`}
                    alt={journey.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>▶</div>
                </div>
                <div className={styles.textContent}>
                  <h2 className={styles.dayTitle}>{journey.title}</h2>
                  {renderParagraphs(journey.body)}
                </div>
              </>
            ) : (
              <>
                <div className={styles.textContent}>
                  <h2 className={styles.dayTitle}>{journey.title}</h2>
                  {renderParagraphs(journey.body)}
                </div>
                <div className={styles.videoWrapper} onClick={() => setSelectedVideoId(journey.videoId)}>
                  <img
                    src={`https://i.ytimg.com/vi/${journey.videoId}/maxresdefault.jpg`}
                    alt={journey.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>▶</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
}
