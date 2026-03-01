'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Gigantes() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Gigantes de destruction</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition Obscurité</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Dark AUTO 600k/1m – Guide Epic Seven 2022</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('16jSKFSjBKU')}>
              <img src="https://img.youtube.com/vi/16jSKFSjBKU/hqdefault.jpg" alt="Expedition Dark AUTO 600k/1m" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <p>Favorisez les <strong>héros RGB</strong> pour maximiser votre score dans l&apos;expédition dark.</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Utilisez un <strong>chevalier qui Bdef</strong> à droite : <strong>Ras</strong>, <strong>Fluri</strong> ou <strong>Brigg</strong> sont les meilleures options.</li>
            <li>Utiliser de préférence 1 héros DPS : <strong>Lorina</strong> ou <strong>Landy</strong> seront d&apos;excellents choix.</li>
            <li>Utiliser un héros pouvant effectuer des dual attaques : <strong>Camila</strong>, <strong>Cerise</strong>, <strong>ML Politis</strong> ou <strong>ML Lilias</strong> seront des choix judicieux.</li>
            <li>Complétez votre équipe par un personnage soutien : <strong>Tamarinne</strong> sera la reine.</li>
          </ul>
          <p className={styles.note}><strong>NOTE</strong> : Vous devez utiliser des héros qui peuvent effectuer des compétences non offensives.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemple de composition F2P niveau 3</h2>
          <p>La composition qui était pendant longtemps la plus classique et la plus forte était <strong>Landy, Tamarinne, Fluri et Cerise</strong>. Cette composition permet d&apos;effectuer le défi dague Sicar.</p>
          <p>On peut effectuer quelques variantes en fonction des héros que vous possédez et que vous avez de disponible sur votre compte.</p>
          <p>Depuis la sortie du héros <strong>Brigg</strong>, le personnage est excellent dans toutes les expéditions, un must have avec Tamarinne pour le PvE.</p>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Expedition Dark AUTO 450/600k – Guide Epic Seven 2023</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('IgsTCCSu8fI')}>
              <img src="https://img.youtube.com/vi/IgsTCCSu8fI/hqdefault.jpg" alt="Expedition Dark AUTO 450/600k" className={styles.videoThumb} />
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
            { desc: 'Brigg avec un équipement bruiser HP.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQqmU5e1fRuJLeF35U9VvnJIGwobr-zFVrboiuPf_yqZt7rReoNvaBOGPNFLlJsIO6BsA6b6zadNk9tm0tw4U7WgkN-uuGNRUR00jX4GYXCXfrSxr9XcBVwG7VjW7yr8pPCtvohUvEiKuRJE5EElzY_R-sxnQfDsdenssmPF5o09YBdDZAUMpMqQjPIogXf3pvqIZ6s29llKGzmzhGt1L7Z7Fm9OyBKfMd928Q=w1280' },
            { desc: 'Camilla avec un équipement basé sur la chasse du Caides 13.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRT7Ab48URDTto9lX7VYCVL3HcVnX9-y9rLG7imVn8ho2ulGJ_QCbAbFSbRNJvnarJkc97TynqE3HICKUvyhNCNNbVqBIaOKaaKm-y1hQNT8BNFx7o5VXa4053NQrHebHq7RobbryROr6ATJ4oeuP_n2xxYY46ZqIPKxdY628zSgH82Lx-yZdWpwPbDgggKswfx6vdt0DTzG33EPevust5ARNXxplZR0Fvua88=w1280' },
            { desc: 'Sc Lorina avec l\'équipement gratuit des étages de l\'abîme, il peut largement être amélioré.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSQfqhYZl3bTfq4qQ4t23rVf0FOFJZ2Kb_0cYB0OUtFKGuPVJ91a2Y_Lj5zp7i0Z6a6gb_ug9uvWGLp7LIdAHPe3zIVQXT7NZidNpEuojIvLs1W3ed-tMGCr0DRiKO1MwMji6g20kZjVGOSGCY68ZEdReN63PKTjBdkchNZMUlcm60NkiKVB0eo_LApnKpYjGdGhqXJkQOeNGpSPnF2J3Gb1OkZ5pEhCKzv=w1280' },
            { desc: 'Tamarinne avec un équipement optimisé pour le raid cauchemar en mode automatique.', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSpe6LvLdEOmOquTihSUbrQKFbozdDzbyFlUYxP0SwZrPJ8cew-ATiGkZ6d7xvMYln3RyqcrD__r_XywRDbsrb6HJT9aknu9toVBFcf6gWjTx577qkJ7w37XVCFf1NRQaZ4tkTj7Fv7qXLOVaEKHf5bKj6HcGdfPxhObUH688Dl6xVTYLFfbK8e31KXPHbzvgQ6ceUOphjXS_-sf-g0Sy4PVjDNNJaMMAjy7ZM=w1280' },
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
