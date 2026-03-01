'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Pherus() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Phérus de férocité</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Feu</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Feu / fire AUTO 500k/1m – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('Iziaeq62fB4')}>
              <img src="https://img.youtube.com/vi/Iziaeq62fB4/hqdefault.jpg" alt="Expedition Feu AUTO 500k/1m" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>Favorisez les <strong>héros glace</strong> pour maximiser votre score dans l&apos;expédition feu.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier glace</strong> à droite : <strong>Krau</strong>, <strong>Karina</strong>, <strong>Brigg</strong> ou <strong>Ras</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 1 héros glace tapant en monocible avec du CR push sur sa première compétence : <strong>Garde de Taranor</strong>, <strong>Luna</strong>, <strong>Sc Lorina</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine du PvE, <strong>Diène</strong> sera aussi un choix judicieux.</li>
            <li>Terminez par un héros avec des dual attaques : <strong>Camila</strong>, <strong>Lilias</strong>, <strong>ML Lilias</strong> fonctionnent parfaitement.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Le boss ne doit pas subir plus de 2 malus.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p><strong>Bellona plage</strong> peut être une bonne alternative pour commencer à améliorer sa composition.</p>
          <p><strong>Attention</strong> : il faudra sans doute désactiver sa troisième compétence pour ne jamais infliger plus de deux malus sur le boss.</p>
          <p>Depuis la sortie du héros <strong>Brigg</strong>, le personnage est excellent dans toutes les expéditions, un must have avec Tamarinne pour le PvE.</p>
          <p>On peut ainsi utiliser une excellente composition :</p>
          <p><strong>Tamarinne, Brigg, Sc Lorina et Camila</strong></p>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition FEU / fire AUTO 650k/1m+ – Guide Epic Seven 2023</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('Zz4BqN9Sbco')}>
              <img src="https://img.youtube.com/vi/Zz4BqN9Sbco/hqdefault.jpg" alt="Expedition Feu AUTO 650k/1m+" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Nouvelles compositions d&apos;expéditions feu, dark et glace niveaux 3 – Guide Epic Seven 2024</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('amHhcpoKiA4')}>
              <img src="https://img.youtube.com/vi/amHhcpoKiA4/hqdefault.jpg" alt="Nouvelles compositions expéditions 2024" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <h2 className={styles.sectionTitle}>Composition optimisée expédition niveau 3</h2>
          <p>Il est possible avec la composition <strong>Tamarinne, Brigg, Sc Lorina et Camila</strong> d&apos;effectuer le défi dague Sicar lié à l&apos;expédition en mode automatique.</p>
          <p>L&apos;essentiel sera de maximiser les équipements de <strong>Sc Lorina</strong> avec par exemple plus de dégâts, un set rage et un set infiltration.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQmx7y-PAcMyLlEjev9JVRVhlcpIqyzooyqJMY7QNIPnu_9u_m97OLp3G3lF0vh0-MD6u-hOyz3EcpaPgkWuBZUY9feKCwxXhiIIXL2jACmAV0mcM-Nl07p8YHRtEnnNs1XaK4yQqa1S_PTM2Id-UdGOR0-XxYy9Myc828g3P9QdbNNp5L3Hsjd0mqTXS51E_8un0o3Ju51arzPjfD9FAU76FA2G9465HCBOVo=w1280' },
            { desc: 'Camilla avec un équipement basé sur la chasse du Caides 13.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQIWHR5Dxq0ayVjAs4caMOaDOMReYvLlShfxKRH_t6ZjLpGSnYdeMf_8FV51FxmWmT95vwjSgWLCui2E6ZJzfoCUUrvTFImUoJNBpD5bG4cyZvT2VwRRcWMD_JdMJAtFpv-liUXpc-EER7j78KWSisfGMstg89hmEEwVqLXyxABQl48-Ct4OL2zHmJnLg-j0KdDyLc2IBRvSVARCCB52O8LC_vIdvSzDM4WT_0=w1280' },
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSNWzw4e8Cm9DCVDhswIlEt4tVhbYKynIs_QbB1_2WbM2Q6CjDvaZBPBufMEhTdoZ5TmKLSq2iq6_E2CZoYp8LUDIQxaRaV8xUJxbAnuOjRwADsSBwQe5bWiWyjlihntDU0fV8eY2AqZ23VHpeMMk6YFXhDr9S2WrK5jTkgxwFXl38ZUwchy_N-Cl3ZwbnRdBcBF_JIIut_bDhaw2lFSiL4n93CJff1ax1M=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQfHzTkxWPRleFqJFMN2texClef6I5SuWVg8E4JuiKhPGZhvPP1UKhGGaXBa6XwjTFMN6YJhlMIBsIsSHVQ_Qf7htoItbWJuioHMLKGa27skOWPakBW2D_pDIVllKEjPalx_HzrW2scxPwueGGNIckwHeja6bSVb85vOtm03WlCfS2-k_tqZA1zrOnD7E8RS3Il6rdxSjEED32rZwTYBpHTsAfGJqPfW1tK1mU=w1280' },
            { desc: 'Variante avec Luna à la place de Sc Lorina', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRZbSnkikR_zIkx3SG798DFVt_ls9iCxjNNpDb-PicQoGuTo6ive5W1NvyO_aBBi8r5IMOzZTqdRmYV6Our0tpqWUYW27hCJpvsenwoXFK4w7T1zzvtsl-mI7ImGLuWcZkGAQCX_i-EGErANP5pe8UZJ44AZqNY8tVWmSIau7-3rTDBHCXod43xDaMm1e_CPKcApNFwUj0OSG_qaDx6DlfhF1P1xTm-ow=w1280' },
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
