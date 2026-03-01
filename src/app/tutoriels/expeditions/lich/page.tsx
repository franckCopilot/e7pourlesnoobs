'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Lich() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Lich du vieil arbre bleu</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Terre</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Terre / earth AUTO 600k/800k – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('z_B2BwwjUY0')}>
              <img src="https://img.youtube.com/vi/z_B2BwwjUY0/hqdefault.jpg" alt="Expedition Terre AUTO 600k/800k" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>Favorisez les <strong>héros feu</strong> pour maximiser votre score dans l&apos;expédition terre.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier feu</strong> à droite : <strong>Ras</strong> ou <strong>Cécilia</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 2 héros feu tapant en AOE (zone) : <strong>Kayron</strong>, <strong>Mercedes</strong>, <strong>Vildred</strong>, <strong>Kanna</strong> ou <strong>Baal</strong> seront d&apos;excellents choix.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine du PvE, <strong>Sc Hazel</strong> sera aussi un choix judicieux.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous ne pouvez pas augmenter l&apos;ardeur au combat de votre équipe.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p><strong>Mercedes</strong> est un excellent héros F2P que vous pourrez améliorer avec son artefact dans le troisième continent de l&apos;aventure et qui vous sera utile à la fois en PvE et en PvP.</p>
          <p>Sur mon compte principal, je préfère utiliser <strong>Kayron</strong> qui va régulièrement contre-attaquer en zone avec un set adapté au PvP.</p>
          <p>Essayez de toujours valoriser des héros qui vous aideront dans plusieurs contenus différents, aussi bien en PvE qu&apos;en PvP, ça vous économisera beaucoup de ressources et d&apos;équipements.</p>
          <p>C&apos;est pour cette raison que je ne préfère pas utiliser ni <strong>Baal</strong> ni <strong>Kanna</strong> qui sont deux héros restreints à ce mode, même s&apos;ils permettent de meilleurs scores.</p>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Terre / earth AUTO F2P 500k – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('rGE-g1EReiM')}>
              <img src="https://img.youtube.com/vi/rGE-g1EReiM/hqdefault.jpg" alt="Expedition Terre AUTO F2P 500k" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Sc Ras avec un équipement optimisé PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST-8ExohGotPxgZpEazjyEL-11CM4GLinqC87D34AB5ly24vHUEiLs7T0-XXHbCz5HiSgtuyhDNR2fUmaeCkq-uPXfzsCHpZuRIG2RvJfcAsx7Xe041yNiByhYMkaN02_k5_sI2sAqiGHmOidrFVOg1mpDPsH7WJl5cG6qmMVUKUIyJeerAuRVdKvFEoTedoOhOpsefNbR4QD-hWufqrBdi97m-TUuSvGpKvqc=w1280' },
            { desc: 'Kayron avec un équipement optimisé PvP anti-cleave', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRhc7IXyeKBbpDoAnhPNjefbjmHD0A1l8z6Ta6P3cbnk2K4_jE5Nn4u_kDCgpvfgZRslvtrXoZonF4nt0f7EYmdoHF2yt14BKTf4M7ylAsmBtvv8FgfqPU9_qNAvfBtLoBXSvwbcTX2WsavGKJ7IhvREf_W42j99TRwWmJ6gBuG-ntInkt65jodAJtbs1YJQftgdFj0OGIhFbeJ6Fn4ZJXTIrlSA98jnuxw=w1280' },
            { desc: 'Mercedes avec un équipement optimisé pour le PvP. Le set date un peu mais fonctionne très bien avec tout type de set.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST2h0xo_w4_7Ddodid2MM7Vn5Lwa6y7e_IBkHmA9t_IYMNv7E2HDG4Vnac578PLVo2rW4asbK56nTzZF-n0QinqgCk9TumMtaedA6dEl7ew_-IU2JZ4y41ekBWCHCn1tElGKo1wiLl3HOQDFjjrFOQy_ERzBF_NkWp0-qBAQqcAUrZm83PzextCTNxOrAqb_Gu-Dp_RlfEHjFvOVZPfPdWWy2GKdb8PV2RVj0s=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQaQkxvmj26aBKYbgmeFYUXHDwo6jh79HYegr2z5U7QVU1H7GcrFRibXJNPIggdKO1-9PLZnOCHO0vi66UlfDseqPRFUpO1Pryuwa_jgSquwgfHK-wiYrKfUz1z27ZEQ30nf72LVcDpE68ClohWOoXxJsL4PGjrl5xdF2UXPsG2k_4IkLOvot2Ht7NBRI0zEBvtNgIwdk_xtGmo9nLof1s0DkWt8jnMg2C_Oyw=w1280' },
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
