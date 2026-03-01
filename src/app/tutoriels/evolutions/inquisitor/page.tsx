'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Inquisitor() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>INQUISITOR</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Niche</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STDBlBArdu74pi6Ogsyi2R9HidQapgQ4wB7xSTmHODKOwstaKoCGkd0Mox30gEJUqBkAXbrULB13z6PqwfO_H7b-WaK9rRkNRpB9OknEG0BNnBW9xdKj4_0DzWyQX6xhFtzLVvQeIrFiFnjcacVjVhSJA3q6PKuo78tjuE1pK_4Ywlavp2DUd3fPdo=w1280" alt="Inquisitor" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de l&apos;inquisitor est peu jouée, c&apos;est un DPS qui ne peut recevoir plus de 35% de sa santé en dégât. Il peut être joué dans l&apos;héritage des temps anciens en PvE.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer l&apos;Inquisitor ?</h2>
          <p>L&apos;inquisitor s&apos;obtient en invoquant, principalement avec les <strong>Invocations de la prophétie</strong>.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRIaaj_f_114mW0QlpkGJXf8O6a2GAXj88a8KzitrWQyg3vn-zSSGLBo2Y13lRQt_p2wR4oKn_ouxVKYLuGziJ8CnUpnjdvtkKAzU7MZFDc99zpKtvtbuxWElvB9b3fNurLnldzjBu7oAhuYWnVvsfwBuWdACX_v9ywF6lcVa94HT_OlrVd0W52wiqyw3oXPFsruQ7VMxmfG9aoqkknw4dNSTmR3kEEm1EmXJA=w1280" alt="Mission Inquisitor" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 250 Monsters from Sacred Kingdom :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 19 : 5 éliminations pour 50 répétitions</li>
            <li>Éliminer 25 enemies in the Rose Apostles Meeting Hall (labyrinthe) : Tirel Castle — Chaos Zone 3</li>
          </ul>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
