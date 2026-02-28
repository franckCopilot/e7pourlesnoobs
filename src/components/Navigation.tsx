'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navigation.module.css'

type SubSubMenuItem = { label: string; path: string }
type SubMenuItem = { label: string; path: string; subsubmenu?: SubSubMenuItem[] }
type MenuItem = { label: string; path: string; submenu?: SubMenuItem[] }

const MENU_ITEMS: MenuItem[] = [
  { 
    label: 'ACCUEIL', 
    path: '/',
    submenu: [
      { label: 'Actu', path: '/actu' }
    ]
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
        subsubmenu: [
          { label: 'Vouivre 13', path: '/tutoriels/chasses/vouivre-13' },
          { label: 'Golem 13', path: '/tutoriels/chasses/golem-13' },
          { label: 'Banshie 13', path: '/tutoriels/chasses/banshie-13' },
          { label: 'Azimanak 13', path: '/tutoriels/chasses/azimanak-13' },
          { label: 'Caides 13', path: '/tutoriels/chasses/caides-13' },
        ]
      },
      { label: 'Constellations', path: '/tutoriels/constellations',
        subsubmenu: [
          { label: 'Magnar', path: '/tutoriels/constellations/magnar' },
          { label: 'Aquina', path: '/tutoriels/constellations/aquina' },
          { label: 'Herais', path: '/tutoriels/constellations/herais' },
        ]
      },
      { label: 'Équipements', path: '/tutoriels/equipements',
        subsubmenu: [
          { label: 'Les bases', path: '/tutoriels/equipements/les-bases' },
          { label: 'Approfondir', path: '/tutoriels/equipements/approfondir' },
        ]
      },
      { label: 'Évolutions', path: '/tutoriels/evolutions',
        subsubmenu: [
          { label: 'Adin', path: '/tutoriels/evolutions/adin' },
          { label: 'Ainos', path: '/tutoriels/evolutions/ainos' },
          { label: 'Alexa', path: '/tutoriels/evolutions/alexa' },
          { label: 'Arowell', path: '/tutoriels/evolutions/arowell' },
          { label: 'Carmainerose', path: '/tutoriels/evolutions/carmainerose' },
          { label: 'Carrot', path: '/tutoriels/evolutions/carrot' },
          { label: 'Christy', path: '/tutoriels/evolutions/christy' },
          { label: 'Doris', path: '/tutoriels/evolutions/doris' },
          { label: 'Glenn', path: '/tutoriels/evolutions/glenn' },
          { label: 'Hazel', path: '/tutoriels/evolutions/hazel' },
          { label: 'Helga', path: '/tutoriels/evolutions/helga' },
          { label: 'Inquisitor', path: '/tutoriels/evolutions/inquisitor' },
          { label: 'Jena', path: '/tutoriels/evolutions/jena' },
          { label: 'Kluri', path: '/tutoriels/evolutions/kluri' },
          { label: 'Lorina', path: '/tutoriels/evolutions/lorina' },
          { label: 'Montmorancy', path: '/tutoriels/evolutions/montmorancy' },
          { label: 'Pearlhorizon', path: '/tutoriels/evolutions/pearlhorizon' },
          { label: 'Pyllis', path: '/tutoriels/evolutions/pyllis' },
          { label: 'Ras', path: '/tutoriels/evolutions/ras' },
          { label: 'Rikoris', path: '/tutoriels/evolutions/rikoris' },
          { label: 'Rima', path: '/tutoriels/evolutions/rima' },
          { label: 'Roozid', path: '/tutoriels/evolutions/roozid' },
          { label: 'Sect Axe', path: '/tutoriels/evolutions/sect-axe' },
          { label: 'Wanda', path: '/tutoriels/evolutions/wanda' },
        ]
      },
      { label: 'Expéditions', path: '/tutoriels/expeditions',
        subsubmenu: [
          { label: 'Gigantes de destruction', path: '/tutoriels/expeditions/gigantes' },
          { label: 'Lich du vieil arbre bleu', path: '/tutoriels/expeditions/lich' },
          { label: 'Moroï adepte de l\'atrocité', path: '/tutoriels/expeditions/moroi' },
          { label: 'Phérus de férocité', path: '/tutoriels/expeditions/pherus' },
          { label: 'Symaqus de désespoir', path: '/tutoriels/expeditions/symaqus' },
        ]
      },
      { label: '+ de tutoriels', path: '/tutoriels/de-tutoriels' },
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
