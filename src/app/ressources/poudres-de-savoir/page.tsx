'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from './poudres.module.css';

export default function PoudresSavoir() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>POUDRES DE SAVOIR</h1>
        </div>

        {/* Présentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <div className={styles.content}>
            <p>
              Les poudres de savoir sont une ressource rare sur Epic Seven. Il y a quatres méthodes pour en obtenir.
            </p>
            <p>
              Il existe une boutique dédiée à cette ressource avec une rotation de 40 jours qui permet d&apos;acheter 
              notamment une bouteille de savoir ainsi que des artefacts de 4 étoiles à 5 étoiles.
            </p>
          </div>
        </section>

        {/* Comment en obtenir ? */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitleCenter}>Comment en obtenir ?</h2>
          <div className={styles.content}>
            <div className={styles.textWithImage}>
              <img 
                src="/images/poudres/obtention-chasses.png" 
                alt="Comment obtenir des poudres" 
                className={styles.floatLeft}
              />
              <p>Il existe 4 méthodes pour obtenir des poudres de savoir :</p>
              <ul className={styles.list}>
                <li>
                  En effectuant des <strong>chasses niveau 13</strong>. A chaque répétition de chasses, vous aurez 
                  une chance d&apos;obtenir une faible quantité de poudre.
                </li>
                <li>
                  En effectuant les <strong>étages de l&apos;abîme</strong> ainsi que les <strong>challenges de 
                  l&apos;abîme</strong>. Vous obtiendrez une grande quantité de poudres une fois par étage ou 
                  par challenge sur votre compte.
                </li>
                <li>
                  En effectuant les <strong>défis de réputation Dague Sicar</strong>. Vous obtiendrez une grande 
                  quantité de poudres une fois par défi par compte.
                </li>
              </ul>
            </div>
            <div className={styles.clearBoth}></div>

            <div className={styles.textWithImageReverse}>
              <img 
                src="/images/poudres/vente-artefacts.png" 
                alt="Vente d'artefacts" 
                className={styles.floatRight}
              />
              <div className={styles.textBlock}>
                <p>
                  La quatrième méthode est la plus importante sur le long terme. En vendant vos artefacts, vous 
                  allez pouvoir récupérer des poudres de savoir. Il vous suffira donc d&apos;invoquer pour en 
                  récupérer en bonne quantité.
                </p>
                <p>3 ⭐ : <strong>1 poudre</strong></p>
                <p>4 ⭐ : <strong>8 poudres</strong></p>
                <p>5 ⭐ : <strong>30 poudres</strong></p>
                <p>
                  Plus votre artefact est rare plus il vous rapportera de poudres de savoir.
                </p>
                <p className={styles.noteText}>
                  <strong>NOTES :</strong> les artefacts gratuits d&apos;event, side story ou salle du calvaire ne vous 
                  rapporteront pas de poudres de savoir.
                </p>
              </div>
            </div>
            <div className={styles.clearBoth}></div>
          </div>
        </section>

        {/* Conseils sur les artefacts */}
        <section className={styles.section}>
          <div className={styles.content}>
            <p>Il est toutefois conseillé de garder une grande partie de vos artefacts :</p>
            
            <p>
              <strong>Pour les artefacts 3 ⭐ :</strong> ils sont faciles à obtenir. Garder seulement environ 
              3 exemplaires de joker de rêverie. Avec le temps vous choisirez de garder d&apos;autres artefacts 
              mais ils ne sont pas essentiels au début.
            </p>
            <p>
              <strong>Pour les artefacts 4 ⭐ :</strong> Ils sont un peu plus rares et commencent à être tous 
              utiles. Il est conseillé de garder au moins un exemplaire max limite break (MLB), les 5 ruptures 
              de limite en français, de chaque artefact. Certains seront très populaires comme le livre ancien 
              de Tagehel, à garder peu importe la quantité que vous avez.
            </p>
            <p>
              <strong>Pour les artefacts 5 ⭐ :</strong> Ils sont rares. Il est conseillé de toujours garder 
              ses exemplaires. Même si vous n&apos;utilisez pas tous vos artefacts, il est possible qu&apos;un 
              nouveau héros sorte et qu&apos;il soit très bon avec un de vos artefacts. Epic Seven effectue aussi 
              régulièrement des balance patchs pour améliorer des artefacts et les rendre utiles. C&apos;était 
              par exemple de cas de Citadelle de Perlutia qui est devenu un excellent artefact de chevalier.
            </p>
          </div>
        </section>

        {/* Comment dépenser */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitleCenter}>Comment dépenser ses poudres de savoir ?</h2>
          <div className={styles.content}>
            <div className={styles.textWithImage}>
              <img 
                src="/images/poudres/boutique-poudres.png" 
                alt="Boutique poudres de savoir" 
                className={styles.floatLeft}
              />
              <p>
                Rendez-vous dans la boutique D&apos;epic Seven, en bas à gauche de l&apos;écran d&apos;accueil. 
                Choisissez l&apos;onglet &quot;poudres de savoir&quot; à droite et vous voilà avec 4 types de 
                ressource à acheter.
              </p>
              <p>
                Les premières lignes concernent les artefacts présents durant les bannières d&apos;invocation en 
                cours. Actuellement il y a une bannière Basar et son artefact Couronne de l&apos;abîme. Il est 
                donc possible d&apos;acheter une fois l&apos;artefact dans la boutique pour <strong>240 poudres</strong>, 
                pratique pour les artefacts limités. Ils sont facilement repérable avec une feuille marron, sur le 
                haut droit de l&apos;artefact.
              </p>
              <p>
                La deuxième ligne est à acheter <strong>impérativement</strong>. C&apos;est la bouteille de savoir 
                qui est disponible une fois par rotation, on voit qu&apos;il reste 37j avant la prochaine rotation. 
                C&apos;est la ressource la plus rare du jeu, elle permet d&apos;améliorer la rupture de limite d&apos;un 
                artefact. C&apos;est très utile sur les artefacts limités pour augmenter leurs effets.
              </p>
            </div>
            <div className={styles.clearBoth}></div>

            <p>
              Les lignes suivantes sont les talismans d&apos;artéfact. Cette ressources n&apos;est pas difficile à 
              obtenir : ce n&apos;est jamais rentable de les acheter.
            </p>
            <p>
              Enfin, les dernières lignes sont les artefacts de la rotation durant les 40 prochains jours. Il y 
              aura plusieurs artefacts 5 ⭐ et plusieurs artefacts 4 ⭐, ils ne seront jamais limités et peuvent 
              être achetés en plusieurs exemplaires.
            </p>
            <p className={styles.noteText}>
              <strong>NOTES :</strong> les artefacts 5 ⭐ de la rotation ne coûtent que <strong>180 poudres de 
              savoir</strong>, contre 240 pour ceux des bannières en cours. Il faudra débourser <strong>60 poudres 
              de savoir</strong> pour les artefacts 4⭐.
            </p>
            <p className={styles.noteText}>
              <strong>NOTES 2 :</strong> certains artefacts ne sont pas liés aux bannières d&apos;invocation. 
              Il est donc impossible de les retrouver dans la première ligne. Ils peuvent cependant apparaitre 
              dans la rotation de la boutique. Selon la période de l&apos;année et votre besoin, il peut être 
              judicieux d&apos;en acheter. Comme Pierre de Sang pour Landy en PvE, Célestine sur un tisseur 
              d&apos;âme en PvP ou encore Dent d&apos;Uberus pour Limule ou Hwa Young en PvP.
            </p>
          </div>
        </section>

        {/* Vidéos */}
        <section className={styles.section}>
          <div className={styles.videoGrid}>
            <div className={styles.videoItem}>
              <h3 className={styles.videoTitle}>Guide sur les artefacts et poudres de savoir</h3>
              <div 
                className={styles.videoWrapper} 
                onClick={() => setSelectedVideoId('M7FXxJkDKq0')}
              >
                <img 
                  src="https://i.ytimg.com/vi/M7FXxJkDKq0/maxresdefault.jpg"
                  alt="Guide artefacts poudres"
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>▶</div>
              </div>
            </div>
            <div className={styles.videoItem}>
              <h3 className={styles.videoTitle}>Les meilleurs artefacts pour débutant</h3>
              <div 
                className={styles.videoWrapper} 
                onClick={() => setSelectedVideoId('f10Y5X25G8E')}
              >
                <img 
                  src="https://i.ytimg.com/vi/f10Y5X25G8E/maxresdefault.jpg"
                  alt="Meilleurs artefacts débutant"
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>▶</div>
              </div>
            </div>
          </div>

          <div className={styles.videoGrid}>
            <div className={styles.videoItem}>
              <h3 className={styles.videoTitle}>Tier list Artefact 4 étoiles</h3>
              <div 
                className={styles.videoWrapper} 
                onClick={() => setSelectedVideoId('hC0DNq5Ab8s')}
              >
                <img 
                  src="https://i.ytimg.com/vi/hC0DNq5Ab8s/maxresdefault.jpg"
                  alt="Tier list artefacts 4 étoiles"
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>▶</div>
              </div>
            </div>
            <div className={styles.videoItem}>
              <h3 className={styles.videoTitle}>Tier list Artefact 5 étoiles</h3>
              <div 
                className={styles.videoWrapper} 
                onClick={() => setSelectedVideoId('wkB5aACLqcE')}
              >
                <img 
                  src="https://i.ytimg.com/vi/wkB5aACLqcE/maxresdefault.jpg"
                  alt="Tier list artefacts 5 étoiles"
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>▶</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <VideoModal 
        videoId={selectedVideoId} 
        onClose={() => setSelectedVideoId(null)} 
      />
    </MainLayout>
  );
}
