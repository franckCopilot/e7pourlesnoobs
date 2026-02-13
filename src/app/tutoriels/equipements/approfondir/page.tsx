'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import VideoModal from '@/components/VideoModal';
import styles from '../../tutoriels.module.css';

export default function Approfondir() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className={styles.subContainer}>
        <h1 className={styles.pageTitle}>ÉQUIPEMENT - APPROFONDIR</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Présentation</h2>
          <p>Les équipements sont un élément indispensable sur Epic Seven pour améliorer la puissance de vos héros. Dans ce tutoriel, nous allons découvrir les bases de la fabrication d&apos;équipements, les rolls, les différents archétypes de héros ainsi que les combinaisons de caractéristiques à rechercher pour un équipement.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fabrication d&apos;Équipement</h2>
          <p>La fabrication d&apos;équipement est quelque chose que vous allez effectuer très régulièrement. Il y a deux principales sources de fabrication :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>La fabrication standard</strong> — Se trouve dans Sanctuaire → Atelier d&apos;acier. Il faudra utiliser des gold + des matériaux de fabrication.</li>
            <li><strong>La fabrication améliorée</strong> — Se trouve dans Sanctuaire → Clocher de l&apos;alchimiste. Requiert des gemmes de fabrication + de la matière d&apos;origine.</li>
          </ul>
          <p>La règle basique : favorisez la <strong>fabrication standard</strong> pour les équipements de <strong>gauche</strong> (Arme, Casque, Armure) et la <strong>fabrication améliorée</strong> pour le <strong>côté droit</strong> (Collier, Anneau, Bottes).</p>
          <p>Les équipements de gauche ont une caractéristique principale fixe. Les équipements du côté droit peuvent avoir une caractéristique principale <strong>aléatoire</strong>.</p>
          <p>La fabrication améliorée vous permet de choisir la caractéristique principale et le set de votre équipement.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SSZkXVni-tvM_ICdgcUCrLqAQgVYusxp-oG25kSNyKQvfytYHCHAIuB050yJZbBqtxTiCPv7Mv46RCHrRNzCNYlnu5ENKazW3qsihJlZxXaqC7qaMir5UrB-AZ-ywxPYiHyz1_JQvkqj4XBi9PDBj21iY_1Qv5WtBdk-EJ5CdW1gZTaOoKjgXEs5jKb-1UdR-r9mXpVtszgYjTWYCwXZxwK4RoWTYaiPXK2GrU=w1280" alt="Atelier d'acier" className={styles.infoImage} />
            <div className={styles.infoText}><p>Atelier d&apos;acier — Fabrication standard</p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SS2Gtt28RvgGmnGCDe86LraGxnuXN1Ws0Tj4VOOiocsU0LOERvHeHyUz15_8jsJuQSZ85yYxh0WGjoRglTHWk2DpQp4LS3A1sfFXEsDMPZvO_iv7_dgdFd43bw6MYOrF9DNuPU0MRqE0JyX5rFPkeaW9CwWM_0zFrLfPhFTl-cUOiJfQ02Xriwoy-1H9Rm5HcvoKtq3dfYjJ0LrhMyvuR8sij_3WQS3aWoZ=w1280" alt="Clocher de l'alchimiste" className={styles.infoImage} />
            <div className={styles.infoText}><p>Clocher de l&apos;alchimiste — Fabrication améliorée</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Amélioration / Roll d&apos;Équipement</h2>
          <p><strong>Rolls possibles pour un équipement niveau 85 Épique (rouge) :</strong></p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Santé : 157-202 / 4%-8%</li>
            <li>Attaque : 33-46 / 4%-8%</li>
            <li>Défense : 28-35 / 4%-8%</li>
            <li>Vitesse : 2-5* (*5 a seulement 0.3% de chance)</li>
            <li>Chance de coup critique : 3%-5%</li>
            <li>Dégâts en coup critique : 4%-7%</li>
            <li>Résistance d&apos;effet : 4%-8%</li>
            <li>Efficacité : 4%-8%</li>
          </ul>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STzhVLLIe5tDxy5Dvmq5SVaPukQiuAq9_BZQGb2H3nxM7shjEGvrGmTc3dgxIoPOWB9UCE5xg1bJDZR8-fFpKGhtz33tUmY3cS50NCELx1LAVU8oi9cGcnel8yx67XOxvVg7l81NPoYX8XBtRusaJwvb_lfTy7umgwPP39878XNdi5Va00O4Va59NhB0UqDB736MS7QcMiIgj6zoTNxRYD-_ZwN5-B1n_v6-BA=w1280" alt="Points d'équipement" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Les <strong>points d&apos;équipement (PE)</strong> sont une valeur numérique basée sur la somme des caractéristiques d&apos;une pièce d&apos;équipement.</p>
              <p>La règle générale est de continuer d&apos;améliorer un équipement en +9 si vous avez <strong>55/60+ de PE</strong>.</p>
            </div>
          </div>

          <p>En général, il est recommandé d&apos;éviter les caractéristiques <strong>flat</strong> (sans pourcentage). Dans de rares cas, la défense flat est meilleure que la défense % (souvent sur les assassins).</p>
          <p>Idéalement, vous devriez roll seulement les équipements qui ont un Set + une caractéristique principale + <strong>3 caractéristiques secondaires</strong> qui synergisent. 4 serait parfait, mais 3 est déjà acceptable.</p>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SToW81U8MPDGWlgEKktxq8JkWZjvTPJDOlEBziSpgNzE5e3u77cTLG35L5CT4AKZRSxkDXNR5Eexa3yhWp4wwyioo5ks7RptvjnWMWHFCTQATAgZz3zusJOVRaQ77MeVR7tQpyZMXYrPHOK-g2ElUkXhTmp6yFtTZBOibscsTz-XmEJOcLy2bsSRCr8oCT_dXtICPmldfOlLG-kdru8D1TqZ0v3wtdLA7K3dHA=w1280" alt="3 caractéristiques synergisantes" className={styles.infoImage} />
            <div className={styles.infoText}><p>3 caractéristiques secondaires qui synergisent avec le set</p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0ST8r2fDZMqB9OT42acfOX-MtBKD5hbkkC-X8gLNX0TlIbWKllNWnP3vD_AvhVZtiZ9wn_OzqhQR8fgpVPeuFzfL6wQen8_t7kI3zppUXkaN6t9iQtONN2vKVHGMHTIrJMwatA0wKPVU8ANa-jYYJWsjOeEmK6FHIPjK_5GjM6KjaQDE0mJow25tGypHjgcnwUMbFlCkAvsNG30UQO-_xuUQaO0asFcNY5pR=w1280" alt="Bonne moyenne avec un mauvais roll" className={styles.infoImage} />
            <div className={styles.infoText}><p>Une bonne moyenne avec un roll dans une mauvaise caractéristique</p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0STEJNbHC1-awkC5rKQyNbRiOS-F1xSGTmGXdlM-wqKYeARnSnmjpwi1rVm_R6QJvdUIjmqIB7Km1ih28Mo0RNfO8HQ6paz8w14je4FpQ8Ks7c64qH77NK5a46UjhFgbePxGPNOoStvGxddnNmZkRcyICM34YGP9T62EFt6D-jottx1K6EgazXxjflk43rQ1A6wZmTVUNog8VJJHZhLWa4IHdGqtcKc6pw=w1280" alt="Rentable de reforge" className={styles.infoImage} />
            <div className={styles.infoText}><p>C&apos;était rentable de le reforge pour équiper un personnage</p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQY6fHIf41n4erqKnO_-AgxIeFvtuFBwUxGm6UWsdvMLwU8ZglV6T_yaXkIVnJLJoJXqTIcJAKNAkhesr54EjUXJvLc4gUcRBOLx2zejHUjPyK-lBsboazkW3eR3kOyFNmYPMh6SDOoMES6C4ou2j2k2B5hmuW5_FAX6b-_oEqMPg8BVVsprjT6Xx4tKT3yBuNC2i_dtg4j4zlL8zSK6aFVAcNMow4gpM6hvuQ=w1280" alt="Pierre de permutation" className={styles.infoImage} />
            <div className={styles.infoText}><p>La mauvaise caractéristique est modifiée avec une <strong>pierre de permutation</strong></p></div>
          </div>

          <p style={{ marginTop: '24px' }}>En général, vous devez chercher des rolls supérieurs à la moyenne :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>6%+</strong> pour l&apos;attaque, la santé, la défense, l&apos;efficacité, l&apos;ER</li>
            <li><strong>5%+</strong> pour les dégâts en coup critique</li>
            <li><strong>3+</strong> pour la vitesse</li>
            <li><strong>4%+</strong> pour les chances de coup critique</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>DPS</h2>
          <p>Les héros DPS sont destinés à infliger des dégâts. Ils sont généralement vulnérables mais ont besoin d&apos;<strong>attaque</strong>, de <strong>vitesse</strong>, de <strong>chances de coup critique</strong> et de <strong>dégâts en coup critique</strong>.</p>
          <p>Caractéristiques recherchées : Attaque %, Vitesse, CC, DCC, Santé %, Défense %</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bruiser</h2>
          <p>Les héros bruiser sont destinés à infliger des dégâts mais ont des caractéristiques défensives leur permettant de survivre plus longtemps.</p>
          <p>La plupart des caractéristiques sont bien sur eux et ils peuvent utiliser la plupart des équipements.</p>
          <p>Caractéristiques recherchées : Attaque %, Vitesse, CC, DCC, Santé %, Défense %</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tank / Healer</h2>
          <p>Les héros tank et healer ont des équipements similaires. Ces héros veulent basiquement survivre le plus longtemps possible et proposer de la survie au reste de votre équipe.</p>
          <p>Caractéristiques recherchées : Vitesse, Santé %, Défense %, Résistance d&apos;effet, Efficacité</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buffer / Debuffer</h2>
          <p>Les héros buffer et debuffer ont besoin de <strong>vitesse en priorité</strong>. Leurs équipements sont similaires aux tanks et healers, mais avec une vitesse élevée. Ils sont aussi plus souvent intéressés par l&apos;efficacité quand c&apos;est possible.</p>
          <p>Caractéristiques recherchées : Vitesse, Santé %, Défense %, Résistance d&apos;effet, Efficacité</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Speed Checking</h2>
          <p>La vitesse est une des caractéristiques les plus difficiles à obtenir, il y a donc une règle exceptionnelle et souvent plus importante que les règles précédentes.</p>
          <p>Si un équipement possède <strong>3+ vitesse</strong> en caractéristique secondaire, vous devriez roll au moins en +3. Si le roll est en vitesse, continuez de roll.</p>
          <p>Les équipements à <strong>20+ de vitesse</strong> sont très rentables mais difficiles à obtenir, il est donc important de &quot;speed check&quot; chaque équipement avec de la vitesse dessus.</p>
        </section>
      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
