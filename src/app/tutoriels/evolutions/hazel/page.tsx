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
          <p>
            L&apos;évolution de Hazel est principalement utilisée en PvE. C&apos;est un excellent
            héros pour faire le contenu avancé comme l&apos;expédition feu, Secrétaire Vera dans le
            mode cauchemar du Raid et le Mode Rift saison 1. Elle se joue dans une composition de 4
            héros feu pour énormément les booster et soigner.
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SQL6HClLXCs2ly1v2WUZ-dwrsGuWyCioZ4Nt3FBSXrIqTnv0WVtBFcdP10thxZBr66qOEfxiSVJZ-vWo47CirjiMFpg7iihHe93mgnPmigK6RjmtAyHBnV0bmHHfjheSdZ3uhPZZQbTPLCf8LHFfNbrfplp_HtLHIW_baYh__pJK2CdAKHbWOcOHfc=w1280"
              alt="Hazel"
              className={styles.infoImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Hazel ?</h2>
          <p>
            Hazel s&apos;obtient dans les relations : onglet Héros &gt; Recrutement. Puis dans
            Relations, il y aura 3 missions faciles à effectuer.
          </p>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SSC5fT5524tV13GfwLtyIJjp498kVTIt1hU415-TSeisyOrMaLxQDzWAt8Zj98XUgA3cdhUAjCqNSqe8jnhk4pEOnBo1b5ZO8tXBdDknHu-qr4YO0tKLPIMegq17XmBZNxTPs6L1k1AwrnT9Kkg2rP7Oewgblbm8MJNxUVn22TqXlVWZIOjQz1eOCM77NZpXzX0njoJc3BR5kPsVCn4lXd6XGozBIcQ7oq9=w1280"
              alt="Relations Hazel"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <p>Accédez à l&apos;onglet Héros &gt; Recrutement &gt; Relations pour débloquer Hazel.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Missions d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STnY16DcCJvKfB6O-k9aG24LIGXcicys_kLsWdPlzbQtAzy07jc6aZeWljy_GZy-5VR5nqpEYsaC4cJNBP8nr5Yy-gFN_8qRzIM4T6AvU6C6mLXucbjBAgd2ynm-1yAVaBl3Pf4Ppf_EdIPz9_nBhhScj09pn6IFnsmnlVQBlgNZcmP5m51ytkcnVrd9tdFeht4AVoJcNtkiMjOFusgO1B2jpu5aEHlzJ5h=w1280"
              alt="Évolution Hazel"
              className={styles.infoImage}
            />
            <div className={styles.infoText}>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>Éliminer 500 Mysterious Magic Experiment Subjects (UH 4 : 7 éliminations pour 72 répétitions ; 6-5 laby : 11 éliminations pour 23 répétitions)</li>
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.note}>
          Conseil : Vérifiez les missions dans le journal d&apos;évolution pour suivre votre progression.
        </p>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
