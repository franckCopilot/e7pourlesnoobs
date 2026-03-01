'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Christy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>CHRISTY</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SS1LLiSes0coXEX9KS9G-kLHbQrBrxKNVixYVRxVagbFB8yPz4IWxiI8-qT6FNsiqpHqSF2BJ_oe2i2VBbdQAoSdZyUWEuE5w7grpBGrZyEg4yA2-AHSGNi0xmEJAbL0UvNMMWGN_sRXMGa73BLFqY6C6A2F1VhH-IqrHwSIRGYxcxLK3Ew8sP5Y3P=w1280"
              alt="Christy"
              className={styles.infoImage}
            />
          </div>
          <p>
            Christy est une Chevalière de type Terre. Son évolution est optionnelle,
            principalement utile en PvP pour sa résistance aux effets. Elle s&apos;obtient
            via les Invocations de la prophétie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment obtenir Christy ?</h2>
          <p>Christy s&apos;obtient via les <strong>Invocations de la prophétie</strong>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRiSemab2KEOzTg2mXHHH4-V8Q3c5c3wLhxJMqTnMDUoE-vWmCdJkwEBFE8pPjVEFgHzA_VXWjiqshx6_APxmT2IXmZ-K4bKaJRFy8cpbbP0QT9WbMR7AXsezZBynmQo34IgcEGv_-4F0n_9QLKZFZ0Fd2t0hSiB5N9n8FJP6FHvI2RvMa4ykmjQuk=w1280"
              alt="Mission Christy"
              className={styles.infoImage}
            />
          </div>
          <p><strong>Éliminer 200 Master Fighters :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>EP3 1-4 : 9 éliminations par run — 23 répétitions</li>
          </ul>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
