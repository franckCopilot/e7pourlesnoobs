'use client';

import { useState } from 'react';
import VideoModal from '@/components/VideoModal';
import styles from '@/app/tutoriels/tutoriels.module.css';

interface Section {
  sectionTitle?: string;
  content?: string;
}

interface Video {
  videoId: string;
  label: string;
}

interface EvolutionData {
  title: string;
  sections?: Section[];
  videos?: Video[];
}

function renderInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  ).filter((p) => p !== '');
}

function renderMarkdown(text: string) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      const combined = paragraphLines.join(' ');
      elements.push(<p key={elements.length}>{renderInline(combined)}</p>);
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          {listItems.map((item, i) => <li key={i}>{renderInline(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\((.+)\)$/);
    if (trimmed === '') {
      flushParagraph();
      flushList();
    } else if (imgMatch) {
      flushParagraph();
      flushList();
      elements.push(
        <div key={elements.length} className={styles.infoBlock}>
          <img src={imgMatch[2]} alt={imgMatch[1]} className={styles.infoImage} />
        </div>
      );
    } else if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(trimmed.substring(2));
    } else if (trimmed.startsWith('> ')) {
      flushParagraph();
      flushList();
      elements.push(
        <p key={elements.length} className={styles.note}>{renderInline(trimmed.substring(2))}</p>
      );
    } else {
      flushList();
      paragraphLines.push(trimmed);
    }
  }

  flushParagraph();
  flushList();

  return <>{elements}</>;
}

export default function EvolutionPageContent({ data }: { data: EvolutionData }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>{data.title}</h1>

        {data.sections?.map((section, i) => (
          <section key={i} className={styles.section}>
            {section.sectionTitle && (
              <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>
            )}
            {section.content && renderMarkdown(section.content)}
          </section>
        ))}

        {data.videos && data.videos.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Vidéos</h2>
            {data.videos.map((video, i) => (
              <div key={i} className={styles.videoSection}>
                <p className={styles.videoLabel}>{video.label}</p>
                <div
                  className={styles.videoWrapper}
                  onClick={() => setActiveVideo(video.videoId)}
                >
                  <img
                    className={styles.videoThumb}
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.label}
                  />
                  <div className={styles.playButton}>▶</div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}
