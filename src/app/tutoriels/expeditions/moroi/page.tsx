'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Moroi() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Moroï adepte de l&apos;atrocité</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Lumière</h2>
          <p>Favorisez les <strong>héros RGB</strong> pour maximiser votre score dans l&apos;expédition light.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier qui Bdef</strong> à droite : <strong>Ras</strong>, <strong>Cécilia</strong> ou <strong>Brigg</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 2 héros tapant en monocible qui peuvent se booster : <strong>Cermia</strong>, <strong>Sc Carmainerose</strong>, <strong>Luluca</strong> ou <strong>ML Luluca</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage qui retire des bonus adverses et dual attaque : <strong>Cerise</strong> sera un choix judicieux.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous ne pouvez pas utiliser vos compétences passives, ni booster un héros en dehors de son tour de jeu.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Top Model Luluca avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ-dHCi109Vn84s_3G3sLCafRS0lYo-sozJxfe2u5BhzpW3CIgomz8RFwlCiCxueyHhYWbWbo8rBAUH8lBlrLbPsirU7YiTaK1Von_YEaXL3DQa4bv6mgLbmJoVE-0vH7Ue6paWDEGuw9leyEjUw9FLwpdNOPL1BHEoKLPMx-inx0qpI_UzYCFoHuBCLuJafuKgaCd0jyZ5P_Csy7tpPx_ozt80AXTwEsLT1OE=w1280' },
            { desc: 'Cermia avec son premier Équipement Exclusif (EE)', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST0FYkF_6ggp69Brp0jDETgbJIhrXSuy8FLN6bjzIJCCaLg7YDa992OO-cM28mF_gibAU0Ft49YO990Ymm69GyZpQEJQYRiN9RcZXBq0z-_hKN2ZznhFnBJvSEbDGNn3AI6RbQtkuAtuFk2cm0ApRmNvgbpWZ8mxhjZM3C_P0ZEEO7MmdVGFB0Rmr9T49RG0I19awen-wdb6s2ZDTNGjHdf7up8bLc3ZuY5wNI=w1280' },
            { desc: 'Cerise avec des équipements rapides non utilisés', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRY1hghlJ1bBHQgbh9r7KTDt-DVsV35mZkXZmwNN5nM9OByK6ccD6baP9KhM7ElZRdFAJjrldLgGS2vUU28zgCOh6yl_oKNVpaEyDq6DoxuNE639V5H8NCHt3-TB-2EIZ1pqAOPVFq-Yn8cr9zXD-x_4H4st29XB3KOsfMba7aXFDeBXq2kNY7PDqezCeyhIOMA_VhOxVN-NYqwgveAsRxsLTxIOqCR09J-Rdg=w1280' },
            { desc: 'Sc Ras avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRLzkSSBfqk-mKQHIuVE2MyKQ6ygpxacXOgJqo-DLMf2_EkycYM1hoovs8_vBFdMpV1wf_RAPcc1PWPBb2Nk6GIjCmu0t6Ya09143uFZisGFxybPYBtAWEQzwN8eLqOD9Im5Hhv5y_ZYVN5Nx3KAVlQ4aASW8fMOAJVo6VTP1gH1QmsdtHtB9TRQG7OE0ltywlJ7Yx-MowMIOR7OKu9bCg6pt--ODy3rXyfDW8=w1280' },
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
