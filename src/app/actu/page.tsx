import MainLayout from '@/components/MainLayout'
import { getAllContent } from '@/lib/content'
import styles from './actu.module.css'

export default function ActuPage() {
  const entries = getAllContent('actu').sort((a, b) => ((a.order as number) || 0) - ((b.order as number) || 0))
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Actualité</h1>

        <div className={styles.actuList}>
          {entries.map((entry) => (
            <article key={entry.slug as string} className={styles.actuEntry}>
              <a href={entry.linkUrl as string} target="_blank" rel="noopener noreferrer" className={styles.actuImageWrapper}>
                <img
                  src={entry.image as string}
                  alt={entry.title as string}
                  className={styles.actuImage}
                  loading="lazy"
                />
              </a>
              <div className={styles.actuContent}>
                <h2 className={styles.actuTitle}>{entry.title as string}</h2>
                {(entry.description as string)?.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className={styles.actuDescription}>{paragraph}</p>
                ))}
                <a
                  href={entry.linkUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actuLink}
                >
                  {entry.linkText as string}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
