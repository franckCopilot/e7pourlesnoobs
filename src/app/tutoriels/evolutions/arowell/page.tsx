'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Arowell() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>AROWELL</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQShLVcdfupfXn_IM5spZnOGzJBo45tbOED0VnRDocMauCEVAWrABZ4-aZ9NyKTkMQ0H9-O6Pf6qpP-hiNcEgUyNAPwYyCu77OH7QHWelj-Dyx7TYFIZQDMEDvI0rLRKv552MCUDBwxgNNK_2dAzt8GUxYf6GpLuuN3kaiSrH1JBXC5Ez3mNNSp-g4=w1280" alt="Arowell" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution d&apos;Arowell est l&apos;un des meilleurs chevaliers du jeu pour protéger votre équipe. Elle peut donner une très grosse barrière à son équipe, retirer des bonus à l&apos;adversaire et l&apos;étourdir. Elle boost énormément les héros lumières. L&apos;évolution d&apos;Arowell est principalement orientée PvP, elle est aussi utile pour affronter la reine dans le Raid cauchemar.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Arowell ?</h2>
          <p>Arowell s&apos;obtient en invoquant, principalement avec les <strong>Invocations Lunaires</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSnHyqeR6NlnZmoA8ua0DQ74nmDvzVFNIV8iWlqUb0MoXBwhC67X2HaBlo-EPtI0qyhAclcPNkZ3KSME6FKdEpaSBdxd-q-GZlwFRYXVhaikHk6ghSH9BTFKrzO2Q8aCoI3lnSbT66s5HveDanAFYdIs9C3x2Xa1i7xvBug8R1QVw5ohy7BIOCnMabWrZRoHBcie6KJVgrOxGPdIXdWEtbsFOC9W-CNvehPDyU=w1280" alt="Mission Arowell" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 100 Order of the Shield soldiers in South Wetheric Moor avec Arowell dans l&apos;équipe :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 19 : 5 éliminations pour 20 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Le héros le plus populaire en PvP</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('GKbcDrrqGZs')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/GKbcDrrqGZs/maxresdefault.jpg" alt="Arowell PvP" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Idée de composition PvP F2P avec SC Arowell</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('uXjyTJmrlsA')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/uXjyTJmrlsA/maxresdefault.jpg" alt="Arowell F2P" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>SC Arowell pour faire la Reine dans le mode cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('eqP6MddVE4c')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/eqP6MddVE4c/maxresdefault.jpg" alt="Arowell Reine" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Un héros à posséder</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('KUZMmmIMH_M')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/KUZMmmIMH_M/maxresdefault.jpg" alt="Arowell à posséder" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Parmi les 10 héros pour commencer à faire du PvP</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('eQueX96VKzo')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/eQueX96VKzo/maxresdefault.jpg" alt="Arowell top 10 PvP" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
