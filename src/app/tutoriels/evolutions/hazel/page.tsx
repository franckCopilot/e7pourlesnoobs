'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Hazel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>HAZEL</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros Optionnel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQpGMMhKSk4rnngwAXcR5OXM1kk8BLBbNbvPSyYwCAwnkg-xtb3salWHKvBPUq8MKT-ig-rrnMukz7sYLb7-hBwQ6vpccdYcn-jZuFUA797MoGbyQbbolEQqLbhqtRLCcGtV_IvrpRmaDCwKvqwJJyERldp8kGjq4eGiHdmTSxRsELF9bu3yEktjgg=w1280" alt="Hazel" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution de Hazel est principalement utilisée en PvE. C&apos;est un excellent héros pour faire le contenu avancé comme l&apos;expédition feu, Secrétaire Vera dans le mode cauchemar du Raid et le Mode Rift saison 1. Elle se joue dans une composition de 4 héros feu pour les booster et soigner.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Hazel ?</h2>
          <p>Hazel s&apos;obtient dans les relations : onglet Héros → Recrutement.</p>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRZ1I2z83DZIr9zsR-HgRJvZolCWlBxLoCEUM5qPP5_kb0OzJ9_tgrgEyYfKoUwT6zJtQB_JAVBSyKEY3G2TPj-buZ_jm7bJdU3pMVtc2pLcZowM4JCFdwqVPQNGQejisjO9PMOkfhzW3vZQyknJiulJdIDdCdWnLgCLmFzxSxyhSyS86AkgNb1ul6cXAfWeq1I6_P5Nl2iYsutfg-gb0OnCaGGQRSCrNK_=w1280" alt="Relations Hazel" className={styles.infoImage} />
          </div>
          <p>Puis dans Relations, il y aura 3 missions faciles à effectuer.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2qeen0DnJDoc1ie87yaIHyzfwORe1rV6hjH8r61UkNekUjZStF8TFon8PKnFtazqvDLFVlJ8RHAzeTuRytmvUO-WpS061UgVzj77FaaY6L2ZwZvSeevkcbtInh39-M-qI-sjteyFzRJTyoRh02yvn0g00SGQBe-tJJMJNnBp0Yuk3RrXmYezmAsJ_jilHaM15qGBqU2Ny4nCptGStLHjZZCkYgs2jEB7A=w1280" alt="Mission Hazel" className={styles.infoImage} />
          </div>
          <p><strong>Éliminer 500 Mysterious Magic Experiment Subjects :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Histoire non répertoriée (UH) 4 : 7 éliminations pour 72 répétitions</li>
            <li>6-5 (labyrinthe) : 11 éliminations pour 23 répétitions</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le raid cauchemar</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('PWN-TUd4Ngo')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/PWN-TUd4Ngo/maxresdefault.jpg" alt="Hazel raid cauchemar" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le raid cauchemar en mode auto</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('m2ji6WwPUxg')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/m2ji6WwPUxg/maxresdefault.jpg" alt="Hazel raid auto" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Hazel dans le mode Rift</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('XPK7zWymbkI')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/XPK7zWymbkI/maxresdefault.jpg" alt="Hazel mode Rift" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
