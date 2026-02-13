'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import VideoModal from '@/components/VideoModal'
import styles from './home.module.css'

const contentItems = [
  {
    id: 1,
    type: 'Guides',
    title: 'NINE est COMPLÈTEMENT FUMÉE ! Showcase & Build Ultime (CZN)',
    description: 'Découvrez le showcase complet et le build ultime de NINE dans Chaos Zero Nightmare. Analyse détaillée de ses capacités et performances.',
    image: 'https://i.ytimg.com/vi/WbN_jQghxs8/maxresdefault.jpg',
    date: '12 févr. 2026',
    readTime: '12 min de vidéo',
    tags: ['CZN', 'showcase', 'build'],
    featured: true,
    videoId: 'WbN_jQghxs8'
  },
  {
    id: 2,
    type: 'Vidéos',
    title: 'Skin Ml Politis💎 Courrier de Merurin, Huche, nouveau héros ... actu de la semaine',
    description: 'Toutes les actualités de la semaine sur Epic Seven : nouveau skin ML Politis, courrier de Merurin, Huche et bien plus encore !',
    image: 'https://i.ytimg.com/vi/HR0vWoLM-Vw/maxresdefault.jpg',
    date: '11 févr. 2026',
    readTime: '9 min de vidéo',
    tags: ['actualités', 'epic-seven', 'hebdo'],
    videoId: 'HR0vWoLM-Vw'
  },
  {
    id: 3,
    type: 'Vidéos',
    title: '✅De bonnes nouvelles pour Etheria Restart 💎',
    description: 'Les dernières nouvelles concernant Etheria Restart. Découvrez les mises à jour et les améliorations à venir.',
    image: 'https://i.ytimg.com/vi/NGES_wZ5wHU/maxresdefault.jpg',
    date: '10 févr. 2026',
    readTime: '9 min de vidéo',
    tags: ['etheria', 'actualités', 'news'],
    videoId: 'NGES_wZ5wHU'
  },
  {
    id: 4,
    type: 'Guides',
    title: 'CZN : Comment bien choisir ses UPGRADES DU CHAOS ? (Guide Complet)',
    description: 'Guide complet pour optimiser vos upgrades du Chaos Zero Nightmare. Apprenez à faire les meilleurs choix stratégiques.',
    image: 'https://i.ytimg.com/vi/n9bC73uOsj8/maxresdefault.jpg',
    date: '9 févr. 2026',
    readTime: '12 min de vidéo',
    tags: ['guide', 'CZN', 'stratégie'],
    videoId: 'n9bC73uOsj8'
  },
  {
    id: 5,
    type: 'Guides',
    title: 'NE DORMEZ PAS SUR LUI ! 💤 Le nouveau build qui détruit la méta',
    description: 'Découvrez le build secret qui change la méta sur Epic Seven. Un héros sous-estimé qui pourrait transformer vos combats.',
    image: 'https://i.ytimg.com/vi/qrqN49AWnHg/maxresdefault.jpg',
    date: '8 févr. 2026',
    readTime: '21 min de vidéo',
    tags: ['build', 'méta', 'epic-seven'],
    videoId: 'qrqN49AWnHg'
  },
  {
    id: 6,
    type: 'Guides',
    title: 'ISERIA ML : Guide complet, Stuff et Test RTA (Saison 2026)',
    description: 'Guide complet sur ML Iseria : stuffs recommandés, builds optimaux et tests en RTA. Tout pour maîtriser ce héros puissant.',
    image: 'https://i.ytimg.com/vi/luokqRYXDjg/maxresdefault.jpg',
    date: '7 févr. 2026',
    readTime: '22 min de vidéo',
    tags: ['ML-iseria', 'RTA', 'guide'],
    videoId: 'luokqRYXDjg'
  },
]

export default function Home() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <MainLayout>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {contentItems.map((item) => (
              <div 
                key={item.id} 
                className={styles.card}
                onClick={() => setSelectedVideoId(item.videoId)}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.image} 
                    alt={item.title}
                    className={styles.cardImage}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={`${styles.cardBadge} ${
                    item.type === 'Guides' ? styles.badgeGuides :
                    item.type === 'Tier Lists' ? styles.badgeTierLists :
                    item.type === 'Vidéos' ? styles.badgeVideos :
                    styles.badgePatchNotes
                  }`}>
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className={styles.cardFavorite}>★</span>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <div className={styles.cardMeta}>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <div className={styles.cardTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal 
        videoId={selectedVideoId} 
        onClose={() => setSelectedVideoId(null)} 
      />
    </MainLayout>
  )
}
