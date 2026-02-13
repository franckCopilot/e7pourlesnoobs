'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navigation.module.css'

const MENU_ITEMS = [
  { label: 'ACCUEIL', path: '/' },
  { label: 'Aventure de 0', path: '/aventure-de-0' },
  { 
    label: 'RESSOURCES', 
    path: '/ressources',
    submenu: [
      { label: 'Pierres de permutation', path: '/ressources/pierres-de-permutation' },
      { label: 'Poudres de savoir', path: '/ressources/poudres-de-savoir' },
      { label: 'Runes de réinitialisation', path: '/ressources/runes-de-reinitialisation' }
    ]
  },
  { label: 'TUTORIELS', path: '/tutoriels',
    submenu: [
      { label: 'Chasses', path: '/tutoriels/chasses' },
      { label: 'Constellations', path: '/tutoriels/constellations' },
      { label: 'Équipements', path: '/tutoriels/equipements' },
      { label: 'Évolutions', path: '/tutoriels/evolutions' },
      { label: 'Expéditions', path: '/tutoriels/expeditions' },
      { label: '+ de tutoriels', path: '/tutoriels/de-tutoriels' }
    ]
  },
  { label: 'OUTILS', path: '/outils' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="E7 Logo" 
            width={32} 
            height={32} 
            className={styles.logoImage}
          />
          <span>E7 POUR LES NOOBS</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
            <path d="M-9 -5 L9 -5" strokeWidth="2"/>
            <path d="M-9 0 L9 0" strokeWidth="2"/>
            <path d="M-9 5 L9 5" strokeWidth="2"/>
          </svg>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          {MENU_ITEMS.map((item) => (
            <li key={item.path} className={item.submenu ? styles.hasSubmenu : ''}>
              <Link 
                href={item.path} 
                className={styles.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <ul className={styles.submenu}>
                  {item.submenu.map((subitem) => (
                    <li key={subitem.path}>
                      <Link 
                        href={subitem.path}
                        className={styles.submenuLink}
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
