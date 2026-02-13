'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Vouivre13() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>Vouivre Infernale</h1>

        {/* Intro */}
        <section className={styles.section}>
          <p>Chacune des chasse vous permettra d&apos;obtenir des sets qui leur sont propres.</p>
          <p>La Vouivre, souvent appelé Wyvern, vous permettra d&apos;obtenir les sets <strong>Vitesse</strong>, <strong>Critique</strong> et <strong>Efficacité</strong>.</p>
        </section>

        {/* Vidéo 1 - Débutant */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Wyvern infernale</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Wyvern 13 F2P facile en 2 semaines</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('cagdP9gN53I')}>
              <img src="https://img.youtube.com/vi/cagdP9gN53I/hqdefault.jpg" alt="Wyvern 13 F2P" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Favorisez les <strong>héros glace</strong> pour maximiser votre réussite sur la Wyvern infernale.</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Utilisez un personnage résistant à droite : <strong>Sc montmorancy</strong> ou <strong>karina</strong> seront les meilleures</li>
              <li>Commencez par utiliser <strong>Furious</strong> dans votre équipe, il sera remplacé par <strong>Bellona Plage</strong> (SSB) quand vous aurez assez de chances de coup critique sur votre DPS.</li>
              <li>Utilisez un gros DPS monocible : <strong>Sc Alexa</strong> ou <strong>Sigret</strong> sont les meilleures.</li>
              <li>Utilisez <strong>Muwi</strong> pour compléter votre équipe</li>
            </ul>
            <p className={styles.note}><strong>NOTE</strong> : Vous devez toujours infliger 2 malus au minimum sur la Wyvern infernale.</p>
            <p>65% d&apos;efficacité sont suffisantes pour maximiser vos chances d&apos;infliger un malus.</p>
          </div>
        </section>

        {/* Team F2P Screenshot */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>La première team wyvern F2P pour débutant</h2>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STgO7vlwUI2krAPOnzar5SnKdQ1BfqIbDiIqsDWtDnyo292TPXUq5oz2AVHTCBjOASbVlnwaFIGrpm_9qh1B5xFhPp6UydpM8p2aVKlOjXh34Rceo6BYfh5zt5CHnCrhSaSuIqY21Nluwz72d6qL2W49ApqANxkE4DSlF4lN7qxkdbk3b7X4DcITO8zHa3Z2sUQC_saTNuw34zJ9npQcv9EkOoh0QS8szZtha4=w1280"
              alt="Team F2P débutant Wyvern 13"
              style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.15)' }}
            />
          </div>
        </section>

        {/* Vidéo 2 - Mid/Late */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>La Wyvern 13 en Mid-game / Late game</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>WYVERN 13 OS, comment optimiser sa team en mid-game ?</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('z0-Rn09-XW0')}>
              <img src="https://img.youtube.com/vi/z0-Rn09-XW0/hqdefault.jpg" alt="Wyvern 13 Mid-game" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>L&apos;objectif par la suite sera d&apos;améliorer votre composition pour qu&apos;elle soit la plus efficace possible. C&apos;est à dire, avec un des meilleurs taux de réussite, tout en étant rapide.</p>
            <p className={styles.note}><strong>NOTE</strong> : Les compositions avancées ne vous permettront pas de gagner à 100% la chasse, car vous aurez toujours 15% de chance de ne pas infliger de malus à la wyvern 13 et de fait, d&apos;échouer votre chasse.</p>
            <p>Néanmoins, cette composition reste largement plus efficace que la composition débutant pour dépenser rapidement votre énergie.</p>
            <p>L&apos;objectif sera de booster votre équipe avec <strong>Angélica Pécheresse</strong> qui aura au moins 200 résistances d&apos;effet et au maximum 200 de vitesse. <strong>Bellona Plage</strong> devra ensuite tuer la vague 1 avec son passif + son S3.</p>
            <p>Contre le boss, <strong>Rem</strong> sera votre DPS. Les dual attaques de <strong>Camila</strong> et d&apos;<strong>Angélica pécheresse</strong> permettront à Rem de taper très fort.</p>
          </div>
        </section>

        {/* Vidéo 3 - Optimisation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation ultime de la Wyvern 13</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Wyvern 13 OS à 100%</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('AX7We0vXmeY')}>
              <img src="https://img.youtube.com/vi/AX7We0vXmeY/hqdefault.jpg" alt="Wyvern 13 Optimisation" className={styles.videoThumb} />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p>Cette composition sera la plus efficace : <strong>100% de victoire</strong> et très rapide.</p>
            <p>Néanmoins elle reste difficile à effectuer car elle demandera des héros spécifiques et d&apos;excellents équipements du set <strong>Tumulte</strong> (torrent).</p>
            <p>Un investissement qui demandera du temps et de l&apos;énergie au travers de la chasse du Caides.</p>
          </div>
        </section>

        {/* Hero Builds */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Équipements des héros</h2>
          {[
            { desc: 'Rem en set rage et infiltration, artefact joker de rêverie pour taper fort', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSZ7llH-68m6psEAUdvEGUb1xPk0-Fs-4Ark3xXdLY5bId0RU6f2W3TOi7BUrAGE53QqhYlotjmoK2KINdOa7ndHGvsYp3kwmuos9JcTjnhgVGtvmfW_EeE_I4lpMpzyloZoEHA0THeMVtkhgtJuOplQ1vqRHg6WUGETfcjbhlRhyj_MKGgxNTuPwzA6DTPVOLb412LqDEGW2ba1MOk3oN4iYkZiv6IoejeAlo=w1280' },
            { desc: 'Angelica pécheresse moins de 200 speed, 200 ER, artefact qui boost la team', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQn9dBtpkV6M9wxDm_asIvC40vlO1rDiaT0zRfUPyJguRsd2G9qqPw9K5C-qR5zhl6tykyqEx10kXEm5DeZC_fZAXTgdwX-v69pKk0UwQ5cGlVlI84lcfI9-I6zlmyJ7ivIaFQ7jeWF7_JGVbzH07VvBFmTzFn845y0u6tHFDdYU5OVx5f7tZSW4UR7oLq6eG7LHmDix_x7tTCFEuWqwCfgJA1Jp5p_idLcIL8=w1280' },
            { desc: 'Bellona plage : joue après Sangi et tape fort, 2eme EE', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRK0W0-iFUz58wyMjYkfEWZanHw0lafpAyqxI--VqwlW5k9QdgWwETgr7d_n11UmPCBAjMPX3_2GHK49SmVUMyXGTOG6EIjGLEHUd3N0qxjrH84X-8nVHe8bOCfpMAPrIF0FFXlb-O9nbnYxDEcaFrO1K4QeMAAiBdsd82KHPJ76AcVDFREd-AeLdxoHeBPTQtyj2UMg1WmrmiSKRhEVrrzhtX21sb2C_fybXc=w1280' },
            { desc: 'Camilla : équipement optimisé pour le caides', img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQE5w5Bxg-hzmkgr8SFpWBPgKrxEKTEBkDJyoisG245Ocy0fqVnAcLJAwsfEU-hIrfvCj7h52acem8htCDt2bqZN5gAHiH_zYJI9Y-3B8LbuQ3i9-WVqEp-t4M-8g12rvm-d6K5WN_Vj-09NCCZ-LhWvadV2i1tW3sWh8anms6o_nLo8lggo_8A4R9VJMpJTk-42ewRMwyNzjhAnzDSkHzHMw601taazvXKSwo=w1280' },
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
