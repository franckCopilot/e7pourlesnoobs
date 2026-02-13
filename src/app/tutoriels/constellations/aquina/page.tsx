'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Aquina() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Constellation Aquina</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Constellation Éternel</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Constellation éternel Glace</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('N8_GIj_K190')}>
              <img src="https://img.youtube.com/vi/N8_GIj_K190/hqdefault.jpg" alt="Constellation Aquina" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>L&apos;objectif du combat est de régulièrement <strong>contre-attaquer</strong>.</p>
          <p><strong>Composition :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Devant : <strong>Ervalen</strong> est le meilleur choix, <strong>violet</strong> fonctionne.</li>
            <li><strong>Charles</strong> est fortement recommandé.</li>
            <li><strong>Roenna</strong> est fortement recommandé.</li>
            <li><strong>Bernard</strong> est le meilleur choix, <strong>Ray</strong> fonctionne.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Le SoulBurn de Charles est très intéressant pour la fin du combat.</p>
          <p className={styles.note}><strong>NOTE 2</strong> : la troisième bénédiction de <strong>Vierge</strong> est recommandée.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: "Violet avec le plus de dégâts possible en destruction et infiltration. Il faut plus de 14 500 hp, un peu de vitesse et surtout un artefact évasion.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSSCLPsbO-jwMT9QVDEwsvX1zGIwgfgMWaad4C4Pn8T2MGGmOz5HyOuY13axW9Cv7HZvx7_qwliP50qlhjQxeUCS29GFmUD7u9okVxO_fkZASvh7scqAkx6M7sDxXNTJvOgHzxUwRHWj4Olp_8wAtYEviaM49x3mxAj-oI-YGVz9g3azUFXbzvAZDqU0eiEi9q7IB3XLbiLip5DNFAnHCUcYIh4pUAu-_DexgI=w1280' },
            { desc: "Charles avec le plus de dégâts possible en destruction et infiltration. Il faut plus de 14 500 hp, un peu de vitesse, son troisième EE et un artefact dégâts.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSVsy0S7IKCxeO0who6MHNAlioxozk6kF34v2Jz-aUYsG8h9gg67X-wFj8u_58fFEbgpWrDm-mTVNgwWohKMKXlKx1Gp7dRksEm8QlPiZ14UHcm21sh8Ibq1huSJuQjtZLTp8hVWEMswu6qXob30uaVxG5bA4EJ01wJoaWPhvcoeCNoqM0q91uq--28t9ZT4SyuQVQXjG_Sgrl7pPXG8UGwq6-gcvoezYY9=w1280' },
            { desc: "Roenna avec le plus de santé possible en set contre-attaque requis. Il faut des bottes vitesse et l'artefact stella Harpa.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SR1JNiz9agulhGH6UmXBo222Ugg-1VFfROrKgymBhaxfyvDhFhKhiXh7fURLenlloCSn4vQnyOg5ij9S44ok1f5HFkS1SQRyiMTeUNHnURkRggdVrk7rw1lpdLcKGz_rn-9vQilaitckT0HcjrEo7A5hXm8iEsTUuY8Vq2Aqyn5ysOGbwUXVWQF0ezSL9UPPrK6svNdovvfG_SKZXEBCX-Xs2tsU-GR-DR2=w1280' },
            { desc: "Bernard avec le plus de santé possible en set contre-attaque requis. Il faut des bottes vitesse et pas mal de vitesse. Celestine est un artefact utile.", img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSqEuwSSe4mHvfvNg85qVIoIWPtCN4Oogm25iLpuH0zyrcUJy_uFSif6T522s1_G4Gb9U7YgDcvcMp83jtJqXBFxkj9k4SXbF7yusD3rlyhMYWot3QXDZWLlwvHAEOhL3yRIZZQ59vbMLvC-A-nnadwuBNKHs4Ha2xQi-1_LG4DtLINTpMYsY1JWlFyzSBBWMcIboVq7t3Af0xovHDj91iVgxJpJD9uiQ=w1280' },
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
