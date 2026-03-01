'use client';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Adin() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ADIN</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation — Héros fortement recommandé</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SRO2u7CIyYbgDPmOr7149y7oQD1CZPN97JoYfYOE-6PKaJSeNQkbkyrMVLLHxDjX2VTuZ4ZmREbvswye-gY8eVKsAZsEdctbLTmSeRX788Yg1sPPf94WjuESU8Z-ZgKVELJ_BlznS5E8DntUsMOAWilWD1-tOVPwAtSnryRM1WaSVAPXEv72Z1jzhs=w1280" alt="Adin" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution d&apos;Adin est unique dans le jeu. Elle n&apos;a pas besoin de catalyseurs ou de mora supplémentaires pour évoluer. Adin est un excellent DPS en PvE, notamment dans les abîmes, les expéditions et le contenu histoire.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission d&apos;évolution</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQsFfCf4KwXZ0SGNvZ5driw-PtVCou3zuKWGNuG0eaViQYyP35dOObOL3lj1vmR012Wz6_XEH461UcWsMXNGbE0nt7hviyt4sbhbSeHkQKqbaUNNF4kqK4v9u798MM9_fy9n95agPg56LXnMhz3eJjpM-dCtA2HqqfhflkrvWyoKRxab2vzTZ8Q1RwzACCiA9yeK0_6l7ONzIc1i4LmyABnix9MsRO1SD0a7_Y=w1280" alt="Missions Adin" className={styles.infoImage} />
          </div>
          <p>L&apos;évolution d&apos;Adin se fait entièrement via le scénario de l&apos;aventure principale. Il n&apos;y a pas de mission de farm à effectuer.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comment débloquer Adin ?</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQhGxacbH5x93gpQ4NuNEfVaoJ2qzDWeMBnPUw6f9zcAHX8QdlPpGtNvs0Mg5Wm3DpTplI-IMPZzSScnGZBwGaRfEaZMMbiT9sCYUVMINpDuhSEUnXw9bj8uIW34jJlW7cCecyx3bEkhmbCeucPqYPuEGoRi9aWcva3setJqQUDQk28MqRquSvJTzOe5Sd3c_GG0TQLiq04ZLYjUw9d5QO2MYsrMBc92Xiq=w1280" alt="Débloquer Adin" className={styles.infoImage} />
          </div>
          <p>Adin s&apos;obtient en progressant dans le scénario principal de l&apos;aventure.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Versions élémentaires</h2>
          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSM1uV18asixt5idNaqUji6fAQxQ9u1QWRVWPNLw9kg7eZ05HYDC2hwezhGzOtUKO2o1GSKCOdjMy-UrgBv53VcFapKrQZH5D8CEIytpS76oQpOr0GtnkmqJUk1J1QGRQMMUAyErlXvFs040S6_jn1ohuKD-wwkLM4FSBSpSoeK8n54dsp60IzretvL8eVSi04zlU1JthO-mF2_B1ChVJDp8uv7y8O_RmsyERY=w1280" alt="Versions élémentaires Adin" className={styles.infoImage} />
          </div>
          <p>Adin existe en 4 versions élémentaires différentes, chacune obtenue selon votre progression dans le scénario.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vidéos</h2>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Vidéo de présentation d&apos;Adin</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('rpe3jB2vTo4')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/rpe3jB2vTo4/maxresdefault.jpg" alt="Présentation Adin" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Guide complet d&apos;Adin</p>
            <div className={styles.videoWrapper} onClick={() => setActiveVideo('-_J50kSZED0')}>
              <img className={styles.videoThumb} src="https://img.youtube.com/vi/-_J50kSZED0/maxresdefault.jpg" alt="Guide Adin" />
              <div className={styles.playButton}>▶</div>
            </div>
          </div>
        </section>
      </div>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
