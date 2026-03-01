'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Alexa() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ALEXA</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ079bV3KkTsNprN1LzXjiD_kVm7D4kAFDy5rIiYKrkJuMAU81QnqR9zg2-At0VeAxgzzio2EDETdgz4CGKkE3CXAlwDewIK1Wcd_pT73P2P4kadJ2nWaWGu19GfLZHCa5ThPudn7JKWh91zTzzOflZu9A_BPvIkWm368mpJSxaE6ZbV2ZQa0JF0Ew=w1280" alt="Alexa" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution d&apos;Alexa est unique : elle ne nécessite pas de catalyseurs ni de moraleaux. Elle s&apos;obtient entièrement via les Relations et le scénario extra-temporel. C&apos;est un DPS poison très utile contre Sigret dans les premières phases du jeu, ainsi qu&apos;en labyrinthes.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Alexa ?</h2>
          <p>Alexa s&apos;obtient dans les relations : onglet Héros → Recrutement.</p>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQZP7nhcnA7X9wpmBr7L9i5kS3W_xkOMbEZW-sIfJcYPm_TrR2CU0TsStPR490Yab8o1tcgJimPzQRa3EnCfHXsuVRx2YSnEpASCtGhKBxRkE4m48gnNdo_Di_rIdU-5hPqPjSwnpqpBf_ggRmmOJuskkA7OK06Lpw36v0Hqe57cSPmazrR1xsT0YfTzZEszbJ6IK4Tt2g5kMaSngnApm704bHYiISy4TaM=w1280" alt="Recrutement Alexa" className={styles.infoImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution — Relations</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRvXCQRRh2Qq75xZGIaubaMZ2NeBW8PFkgWHg4cLgoJrbfbrCDcbgqdGJRUeRBZOa7eHvaTBnAS05X2IIAYM6J6EaarHJCm1nuP-sOZ-AhpBhB73KbaEpOaWhbo9vyOd-CGWOvQ5bFDeECcvpObgFoM2pWnN7pOKyxO1gaFxVG-clnCQkZHunutCabJKFvx8824JQ9-yw9DI6rF-KwTUZt4wxDuH9MWtG4c=w1280" alt="Missions Relations Alexa" className={styles.infoImage} />
          </div>
          <p>Alexa a 3 missions dans les Relations à compléter pour son évolution.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Scénario Extra-Temporel</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRTAw_UVrGjRLIgFtifETn7yABMhZ_cdxr1RalhtD0TY5QDQaV-Im3-9F2bPymrp5xpdzCeZuMSE9G87c5Ba-hh4nJxHvlXhlFcXygRHlgkhPPne6burvgrZ53z5bq7cOMPvEzhk_KH2Q9D3JvZ2dRaebi2mYrz-f9_yZq5S9xV-1cirixkmMGGVtQ-XR1iBhvblaSwF5I_q-jB99PRdBRIsxtFuwiqsWJE6z0=w1280" alt="Scénario Extra-Temporel Alexa" className={styles.infoImage} />
          </div>
          <p>Terminer le scénario Extra-Temporel d&apos;Alexa est nécessaire pour finaliser son évolution.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission Labyrinthe</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSd_ZxwcXCPFtJ8u8-fL7WWI6PbX4BjOqm4_1vr4vhmd-vjq3hjKlGNfDJa6kwi3If0Y86KAvtKjXfhltMQcY2XjblhJiLMYKnWd-sF2T79KRQKQ006gaMKHpFuIk_pb08pF6bteCJg3qnICg1fLuIPGX-sV_BvewT9JswZFaes3E68WOMi77_6yWJvESq-lvBSY-emFakl_QtjhmbPIDiwdr2iscOTFHSw1ns=w1280" alt="Labyrinthe Alexa" className={styles.infoImage} />
          </div>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0ST0aw8aZ95VDD5QVm7jqOqky19I6JQyxJ8M0cKOFVRh7lVnaq6_0UoCFKa90yUaadMtQSO0oaVT9GZpSEe9oXipQIMtvQb8ELTavY0JTS4BQEnFSIM3KD2AaRvBkf3C56WBNd5LDLfpjM5ItZJLBMdDH3msFFZZf3YZwm0Tauxzr39jYx7KR8FLynQ=w1280" alt="Guide compétences Alexa" className={styles.infoImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo de présentation d&apos;Alexa</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('hfEAxmDsGAc')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/hfEAxmDsGAc/maxresdefault.jpg" alt="Présentation Alexa" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Alexa pour remplacer Sigret</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cagdP9gN53I')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/cagdP9gN53I/maxresdefault.jpg" alt="Alexa vs Sigret" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
