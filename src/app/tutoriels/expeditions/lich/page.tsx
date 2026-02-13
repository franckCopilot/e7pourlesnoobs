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
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Sc Ras avec un équipement optimisé PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SReagVGNg8Yq32O0FMWdWjvriCYvwx1PzP1sVTlC6aFo3SBZgIeAEIDv4rPw9MNFtIKD8A8YZEmnkFy6YjM18c2XZRbYFE3d2zvyf01ztg3OiRr-UEH3LvLMcBpO0B0WiF37enNpUJQjPaPL2m_WXxs3fiCkgyR2wx9k6490NQqEB4jCZ0ZlGlvIrUmN62DI4dGGa-rQVnTwSpKW3B6ZXKCx5mtutg-cPBGG8s=w1280' },
            { desc: 'Kayron avec un équipement optimisé PvP anti-cleave', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQMgk3iqhwC_vawvjnmxAs_Y5F_2h0Zi9a6fgb0mKWxmf4bosKzHCrfFXoQZ-Ai2tj36CQcruoPF3GiMGLIgoJN1HniLFrYuMV98QN0M831EChrcEZTHvlzwQnMRkQDfCsmJRxao-evc5aS8xi8f5VQX_Z41k9UERjED-9B6IaVTIyiqx5hZQq6LkjKo3hhIIfxRh_aJFA8sYRBzexATKCmE9f7QVtiRQl8=w1280' },
            { desc: 'Mercedes avec un équipement optimisé pour le PvP. Le set date un peu mais fonctionne très bien avec tout type de set.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SS08kk4nn8a2SowxJ4V7dd4lyejXvrdNnd2u4T6jtRGqnYK5Gcn2VF4F_xLn_ACR3AKq7YoIy4KeEUsMa5QQsimC2QJUPEgbl9h5HSYQ6rXtevBnOIKUUwT9FjQ59Nzra_e00-lk1esFLTgTULQWP0PlGwYCFXDKE7XloGAQPYcX8bwN1qF2o_p4_zq3yfo0-ziiF-hS__6c0QKKXiUymW77zxShFUzecHwrfI=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STxBdNMqndj5Hof0Bv5Ki1c7N2iiwr8h_zYo1HFtgc7f669Qb_RJamKt1Eerw3iIGBKo1WDgzuFDh7xFmCNflnFnrfhrBEIQdku5yBUTRi-3nXqbe3OE_ht2ttj-FPdaH-n_HenoijzFubdldvZ_nulymK2wdWotooTOdQFpuEaRd-C1hSBXmJLNtPxwDCsuxAsIGjLyGDKBvY8Sm4F4iVBWcYiFeIeoSxd4l0=w1280' },
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
