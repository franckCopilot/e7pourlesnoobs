'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import VideoModal from '@/components/VideoModal';
import styles from '@/app/home.module.css';

interface ContentItem {
  slug: string;
  order?: number;
  type?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  featured?: boolean;
  videoId?: string;
}

export default function HomeContent({ items }: { items: ContentItem[] }) {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <MainLayout>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {items.map((item) => (
              <div
                key={item.slug}
                className={styles.card}
                onClick={() => item.videoId && setSelectedVideoId(item.videoId)}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.image || ''}
                    alt={item.title || ''}
                    className={styles.cardImage}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={`${styles.cardBadge} ${
                    item.type === 'Guides' ? styles.badgeGuides :
                    item.type === 'Tier Lists' ? styles.badgeTierLists :
                    item.type === 'Vidéos' ? styles.badgeVideos :
                    styles.badgePatchNotes
                  }`}>
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className={styles.cardFavorite}>★</span>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <div className={styles.cardMeta}>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <div className={styles.cardTags}>
                    {item.tags?.map((tag) => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </MainLayout>
  );
}
