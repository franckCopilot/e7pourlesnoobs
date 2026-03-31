'use client';

import { useState } from 'react';
import Image from 'next/image';
import VideoModal from '@/components/VideoModal';
import styles from '@/app/home.module.css';
import type { YouTubeVideo } from '@/lib/youtube';

function formatDateFR(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  const intervals: [number, string][] = [
    [31536000, 'an'],
    [2592000, 'mois'],
    [604800, 'semaine'],
    [86400, 'jour'],
    [3600, 'heure'],
    [60, 'minute'],
  ];
  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) {
      if (label === 'mois') return `il y a ${count} mois`;
      return `il y a ${count} ${label}${count > 1 && label !== 'mois' ? 's' : ''}`;
    }
  }
  return 'à l\'instant';
}

export default function HomeContent({ videos }: { videos: YouTubeVideo[] }) {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {videos.length === 0 ? (
            <p className={styles.emptyMessage}>
              Aucune vidéo disponible pour le moment.
            </p>
          ) : (
            <div className={styles.cardsGrid}>
              {videos.map((video, index) => (
                <div
                  key={video.videoId}
                  className={styles.card}
                  onClick={() => setSelectedVideoId(video.videoId)}
                >
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      className={styles.cardImage}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className={`${styles.cardBadge} ${styles.badgeVideos}`}>
                      Vidéo
                    </span>
                    {index === 0 && (
                      <span className={styles.cardFavorite}>★ Nouveau</span>
                    )}
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{video.title}</h3>
                    <p className={styles.cardDescription}>
                      {video.description.length > 150
                        ? video.description.slice(0, 150) + '…'
                        : video.description}
                    </p>
                    <div className={styles.cardMeta}>
                      <span>{formatDateFR(video.publishedAt)}</span>
                      <span>•</span>
                      <span>{timeAgo(video.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
}
