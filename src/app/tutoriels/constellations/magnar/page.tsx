'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Magnar() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Constellation Magnar</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Constellation Éternel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Constellation éternel FEU : Solo Fenne</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('xpqM4HhpY68')}>
              <img src="https://img.youtube.com/vi/xpqM4HhpY68/hqdefault.jpg" alt="Constellation Magnar" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p><strong>Composition :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Fenne</strong> en solo</li>
            <li><strong>Furious</strong> devant</li>
            <li>Imprint attaque ou santé</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Le solo fenne fonctionne en mode semi-automatique en ignorant les mécaniques du boss.</p>
          <p>Il faudra taper un des alliées du boss vers les 40% des points de vie du boss pour éviter de se faire OS.</p>
          <p>Ne pas hésiter à SoulBurn en fin de combat pour récupérer ses points de vie, surtout si l&apos;on subit plusieurs brulures.</p>
          <p className={styles.note}><strong>NOTE</strong> : aucune bénédiction de constellation n&apos;est nécessaire.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: "Fenne avec beaucoup d'HP, 85% de CC, 350 DCC en destruction et infiltration. Artefact de guilde : drapeau de victoire", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSg5pvc2Poo6uB2VZs5afxOi0Qv8buuIh2djs8Vcfkp247vR41v-8wXYfIltoHBnHXn_5FqmhPDAzpUIVrGkecx4TAR6fdDCNemwi6JETcXMKt8-wq0BZ4ajFDsRV_aZS4fkA4IdbWCe49ailG1ooMsr-g6fS2v2MNn6LBj7zhGXhYtS7I9cEA_AQeVk43b2tMiPxSk-WaYm90jQxSdb2hD6ccMoKa2Ylxr1O4=w1280' },
            { desc: "Furious avec un tout petit peu d'HP pour survivre tour 1. Il doit mourir avant son tour 2.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRkVBT6LIMDTWgxtSzqSWJ-A8005SL_O_2LMYnnICipKyORpDRVtLRV7ehC0R_NkkBfOJPS_vAI0B1WhDycgh7OXje5nItnnpcFxmZHLSantuDuN4sZNicl2-tjLfC9WH-JvI7FUwY6RVgsgnDeLDOZCSa2w9Nlqo5g-ksc5Cioqhh1PUQ0aark0l6lbtamJMR9NcuDR_kGfH4nnLSpTlrorLqxtcRstyELBDE=w1280' },
          ].map((hero, i) => (
            <div key={i} className={styles.infoBlock}>
              <img src={hero.img} alt={hero.desc} className={styles.infoImage} />
              <div className={styles.infoText}>
                <p>{hero.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
