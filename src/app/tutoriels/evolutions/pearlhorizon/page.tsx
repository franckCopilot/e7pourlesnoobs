'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pearlhorizon() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>PEARLHORIZON</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQQx9ZrWmklu0al6G6nwrWSAqwCBEgKy-4J2-lbrG2gMXYAIkcYpw6teQjGWlcT3EcHRNmU8lqwPhpujv8AhNCmlHcpdFOG9PcFWs4txhSgqV1OaQK5crcqMS3cMvv3bR7qJVPEVvwdR-72IvK8FtM4iC8Yg9pJ-zFhsx1JXHnptkqlnq7RsoBgC68=w1280" alt="Pearlhorizon" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Pearlhorizon est peu jouée, c&apos;est un personnage PvP contrôle qui peut endormir les adversaires et effectuer des dégâts.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Pearlhorizon ?</h2>
          <p>Pearlhorizon s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRIaaj_f_114mW0QlpkGJXf8O6a2GAXj88a8KzitrWQyg3vn-zSSGLBo2Y13lRQt_p2wR4oKn_ouxVKYLuGziJ8CnUpnjdvtkKAzU7MZFDc99zpKtvtbuxWElvB9b3fNurLnldzjBu7oAhuYWnVvsfwBuWdACX_v9ywF6lcVa94HT_OlrVd0W52wiqyw3oXPFsruQ7VMxmfG9aoqkknw4dNSTmR3kEEm1EmXJA=w1280" alt="Mission Pearlhorizon" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Artificial Creatures :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 28 : 10 éliminations pour 50 répétitions</li>
            <li>Éliminer 20 Rose apostle Priests : EP2 9-S2 : 3 éliminations pour 7 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
