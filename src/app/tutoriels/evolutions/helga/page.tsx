'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Helga() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>HELGA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSeWcpy7yoJ7ABTjfRnzgrw1ybAq-_EP7yQ1m_HuMsK8W0hmRdGRV15NjaMoBkocqY6RuIc7aWJoChB14WLthrm4wfzv7xGScAU7oJ_5bu_5mxz9a2VUnn9Fk1yogVsXOODoaLbJLPOIXYj-YDLy8QOzJlDa9w2wWZHcsKQCmMOBeYdWhuDXz3mmo4=w1280" alt="Helga" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Helga est principalement utilisée en PvE pour effectuer l&apos;expédition glace.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Helga ?</h2>
          <p>Helga s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRIaaj_f_114mW0QlpkGJXf8O6a2GAXj88a8KzitrWQyg3vn-zSSGLBo2Y13lRQt_p2wR4oKn_ouxVKYLuGziJ8CnUpnjdvtkKAzU7MZFDc99zpKtvtbuxWElvB9b3fNurLnldzjBu7oAhuYWnVvsfwBuWdACX_v9ywF6lcVa94HT_OlrVd0W52wiqyw3oXPFsruQ7VMxmfG9aoqkknw4dNSTmR3kEEm1EmXJA=w1280" alt="Mission Helga" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Cultists :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 12, 13 ou 22 : 6 éliminations pour 84 répétitions</li>
            <li>EP1 4-9 (labyrinthe) : 39 éliminations pour 13 répétitions</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
