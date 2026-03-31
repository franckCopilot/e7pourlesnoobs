'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navigation.module.css'

type SubSubMenuItem = { label: string; path: string }
type SubMenuItem = { label: string; path: string; subsubmenu?: SubSubMenuItem[] }
type MenuItem = { label: string; path: string; submenu?: SubMenuItem[] }

type ContentItem = { title?: string; slug: string } & Record<string, unknown>

type NavigationProps = {
  chasses?: ContentItem[]
  constellations?: ContentItem[]
  evolutions?: ContentItem[]
  expeditions?: ContentItem[]
}

function toSubSubMenu(items: ContentItem[], basePath: string): SubSubMenuItem[] {
  return items.map((item) => ({
    label: (item.title as string) ?? item.slug,
    path: `${basePath}/${item.slug}`,
  }));
}

export default function Navigation({ chasses = [], constellations = [], evolutions = [], expeditions = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const MENU_ITEMS: MenuItem[] = [
  { 
    label: 'ACCUEIL', 
    path: '/'
  },
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
      { label: 'Chasses', path: '/tutoriels/chasses',
        subsubmenu: toSubSubMenu(chasses, '/tutoriels/chasses'),
      },
      { label: 'Constellations', path: '/tutoriels/constellations',
        subsubmenu: toSubSubMenu(constellations, '/tutoriels/constellations'),
      },
      { label: 'Équipements', path: '/tutoriels/equipements',
        subsubmenu: [
          { label: 'Les bases', path: '/tutoriels/equipements/les-bases' },
          { label: 'Approfondir', path: '/tutoriels/equipements/approfondir' },
        ]
      },
      { label: 'Évolutions', path: '/tutoriels/evolutions',
        subsubmenu: toSubSubMenu(evolutions, '/tutoriels/evolutions'),
      },
      { label: 'Expéditions', path: '/tutoriels/expeditions',
        subsubmenu: toSubSubMenu(expeditions, '/tutoriels/expeditions'),
      },
      { label: '+ de tutoriels', path: '/tutoriels/de-tutoriels' },
    ]
  },
  { label: 'OUTILS', path: '/outils' },
  { label: 'Contact', path: '/contact' },
]

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
                    <li key={subitem.path} className={subitem.subsubmenu ? styles.hasSubsubmenu : ''}>
                      <Link 
                        href={subitem.path}
                        className={styles.submenuLink}
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                        {subitem.subsubmenu && <span className={styles.arrow}>›</span>}
                      </Link>
                      {subitem.subsubmenu && (
                        <ul className={styles.subsubmenu}>
                          {subitem.subsubmenu.map((subsubitem) => (
                            <li key={subsubitem.path}>
                              <Link
                                href={subsubitem.path}
                                className={styles.subsubmenuLink}
                                onClick={() => setIsOpen(false)}
                              >
                                {subsubitem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
