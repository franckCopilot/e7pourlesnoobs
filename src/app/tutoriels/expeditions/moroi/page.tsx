'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Moroi() {
  const [activeVideo] = useState<string | null>(null);

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
            { desc: 'Top Model Luluca avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STvs5Qerc0fnJiXgI5RwYPzHCEiCO_ILk_L_S4UCcpDsA-qbznEbmoYEGtkXB-VA-zPOyO41_lM4ODZ4WZ6FGThoDpQhF5dilIy0yhMgOqell_Hs-oNZwux3VsD1C8dnNUkQhiM3ai2wGtHKS5gGAe8Oags1OZe3loL8r19S3eau0JUwmutt20uZLMHkCTQbZjrP-PLbAQs2vCb1uLvXJDzJb6D9xYxa6osTCY=w1280' },
            { desc: 'Cermia avec son premier Équipement Exclusif (EE)', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRZvEkOMijvHXAhiiuzuk95W4sc1N6JToDnfAYLA0rfEu8et09FXOFsGrYTuzbdWv3AmqSzjfUsEihvdxz5tetHv70ePMlBcppyxqIlb2qZS4TihDDIb6e3wf1KHWF5nVnOi_if-jho_SsKay7nbNP9WNN1S2FqERF1jOnQ0zqS5Qk447G3-Sx25xeAZY6G3OXyqljIaHfzekUMxm1Ew6dlSDO9RAJDBhqatf0=w1280' },
            { desc: 'Cerise avec des équipements rapides non utilisés', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRcmbcmEmKa01hW8Xe6xuONjlVtxdlRzUaTJ0fOia7TRrpow1zRdD59iZTNOpdiQUTIqIzL8V-ldNJOGRUFov4QjHFCY4Zz3GhNtim3I7OJE5O7e4eAM42ceR-uCoYkqE1werAPtW_KJ26-ffFdkHIQQqReGGDIhl-fpGEPj71jhJ3y3PrCJbA9jhhZvtQyyiDv-zHqowpFpuGMAHwIbrmTBjpVUpwpptbtS8Y=w1280' },
            { desc: 'Sc Ras avec un équipement PvP', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSlQGuq-a65kldtyv_9vnmrWzmZGZGGBvX6rfPCgbigwcnQjT6SKeWL5vmP5jhQK2CGD5MaWoDlH9-dtEBjx4GaIZQHpzHYnERdTo8CDfLayb4P5cVHVhZZjkqsaaTI9rfzyjySQZxQ7DD7RoA33qgPekBdLd-a9nTJ40PDNLin6WN0kKFq2KYOX9Dx3LANDcv0n-DH8uObz6J_xAzGfG4y6t7zEoTkrxGxydI=w1280' },
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

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => {}} />}
    </MainLayout>
  );
}
