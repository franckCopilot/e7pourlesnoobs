import MainLayout from '@/components/MainLayout';
import styles from './outils.module.css';

export default function Outils() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>OUTILS</h1>
          <p className={styles.subtitle}>
            Choisissez l&apos;un des outils, d&apos;autres vont voir le jour au fur et à mesure.
          </p>
        </div>

        {/* FRIBBLES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fribbles</h2>
          <div className={styles.toolsGrid}>
            <a
              href="https://github.com/fribbels/Fribbels-Epic-7-Optimizer#rating-filters"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/fribbels.jpg" alt="Fribbels Optimizer" className={styles.toolCardImage} />
            </a>
            <a
              href="https://fribbels.github.io/e7/gw-meta.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/fribbels-gvg.jpg" alt="Fribbels GVG Meta" className={styles.toolCardImage} />
            </a>
            <a
              href="https://fribbels.github.io/e7/hero-library.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/hero-library.jpg" alt="Hero Library" className={styles.toolCardImage} />
            </a>
          </div>
        </section>

        {/* CECILIA BOT */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cecilia Bot</h2>
          <div className={styles.toolsGridOne}>
            <a
              href="https://ceciliabot.github.io/#/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/cecilia-bot.jpg" alt="Cecilia Bot" className={styles.toolCardImage} />
            </a>
          </div>
        </section>

        {/* RTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>RTA</h2>
          <div className={styles.toolsGridTwo}>
            <a
              href="https://www.epic7rtastats.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/e7-rta-stats.jpg" alt="E7 RTA Stats" className={styles.toolCardImage} />
            </a>
            <a
              href="https://epic7.gg.onstove.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/rta-history.jpg" alt="RTA History" className={styles.toolCardImage} />
            </a>
          </div>
        </section>

        {/* OPTIMISATION */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Optimisation</h2>
          <div className={styles.toolsGridTwo}>
            <a
              href="https://vigilant-poincare-de2828.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/rapport-gvg.jpg" alt="Rapport GVG" className={styles.toolCardImage} />
            </a>
            <a
              href="https://e7calc.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/damage-calc.jpg" alt="Damage Calculator" className={styles.toolCardImage} />
            </a>
          </div>
        </section>

        {/* DÉTENTE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Détente</h2>
          <div className={styles.toolsGridTwo}>
            <a
              href="https://new.uwufufu.com/quiz/worldcup/6577dc6725884e2537950330/rank"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/rank-waifu.jpg" alt="Rank Waifu" className={styles.toolCardImage} />
            </a>
            <a
              href="https://www.e7vau.lt/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <img src="/images/outils/e7-vault.jpg" alt="E7 Vault" className={styles.toolCardImage} />
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
