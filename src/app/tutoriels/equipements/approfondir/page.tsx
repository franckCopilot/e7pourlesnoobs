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
            <img src="/images/tutoriels/equipements/approfondir1.jpg" alt="Atelier d'acier" className={styles.infoImage} />
            <div className={styles.infoText}><p>Atelier d&apos;acier — Fabrication standard</p></div>
          </div>

          <div className={styles.infoBlock}>
            <img src="/images/tutoriels/equipements/approfondir2.jpg" alt="Clocher de l&apos;alchimiste" className={styles.infoImage} />
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
            <img src="/images/tutoriels/equipements/approfondir3.jpg" alt="Points d&apos;équipement" className={styles.infoImage} />
            <div className={styles.infoText}>
              <p>Les <strong>points d&apos;équipement (PE)</strong> sont une valeur numérique basée sur la somme des caractéristiques d&apos;une pièce d&apos;équipement.</p>
              <p>La règle générale est de continuer d&apos;améliorer un équipement en +9 si vous avez <strong>55/60+ de PE</strong>.</p>
            </div>
          </div>

          <p>En général, il est recommandé d&apos;éviter les caractéristiques flat (sans pourcentage). Dans de rares cas, la défense flat est meilleure que la défense % (souvent sur les assassins), et il est aussi possible d&apos;avoir envie d&apos;accumuler santé flat et santé %, ou attaque flat et attaque % pour maximiser une caractéristique de vos héros. Cependant, ces cas sont rares et de manière globale, les caractéristiques flat sont à éviter.</p>
          <p>Idéalement, vous devriez roll seulement les équipements qui ont un Set + une caractéristique principale + 3 caractéristiques secondaires qui synergisent. Dans l&apos;idéal, 4 caractéristiques secondaires qui synergisent serait parfait, mais 3 est déjà acceptables. Vous pouvez vous laisser une marge de manœuvre d&apos;un mauvais roll une fois dans une mauvaise caractéristique : plus d&apos;une et votre équipement sera généralement mauvais. Cependant, un mauvais roll peut être modifié sans perdre trop de points d&apos;équipement grâce aux <a href="/ressources/pierres-de-permutation/" style={{ color: '#b89c4c', textDecoration: 'underline' }}>pierres de permutation</a></p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemples d&apos;évolution d&apos;équipement</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px',
              justifyContent: 'center',
              marginBottom: '32px',
              maxWidth: '1280px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div style={{ background: '#f5e6c8', borderRadius: '8px', padding: '16px', boxSizing: 'border-box', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, color: '#b89c4c', marginBottom: '12px', fontSize: '17px' }}>3 caractéristiques secondaires qui synergisent avec le set</div>
              <img src="/images/tutoriels/equipements/approfondir4.jpg" alt="3 caractéristiques synergisantes" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px #0002' }} />
            </div>
            <div style={{ background: '#f5e6c8', borderRadius: '8px', padding: '16px', boxSizing: 'border-box', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, color: '#b89c4c', marginBottom: '12px', fontSize: '17px' }}>Une bonne moyenne avec un roll dans une mauvaise caractéristique</div>
              <img src="/images/tutoriels/equipements/approfondir5.jpg" alt="Bonne moyenne avec un mauvais roll" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px #0002' }} />
            </div>
            <div style={{ background: '#f5e6c8', borderRadius: '8px', padding: '16px', boxSizing: 'border-box', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, color: '#b89c4c', marginBottom: '12px', fontSize: '17px' }}>C&apos;était rentable de le reforge pour équiper un personnage</div>
              <img src="/images/tutoriels/equipements/approfondir6.jpg" alt="Rentable de reforge" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px #0002' }} />
            </div>
            <div style={{ background: '#f5e6c8', borderRadius: '8px', padding: '16px', boxSizing: 'border-box', textAlign: 'center' }}>
              <div style={{ fontWeight: 600, color: '#b89c4c', marginBottom: '12px', fontSize: '17px' }}>La mauvaise caractéristique est modifiée avec une permutation</div>
              <img src="/images/tutoriels/equipements/approfondir7.jpg" alt="Pierre de permutation" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px #0002' }} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p>Il est recommandé d&apos;estimer le potentiel d&apos;un équipement une fois en +9 pour vérifier s&apos;il a bien roll dans les caractéristiques que vous souhaitez. Vous pourrez ensuite choisir de continuer à améliorer votre équipement ou économiser vos ressources. </p>

          <p style={{ marginTop: '24px' }}>En général, vous devez chercher des rolls supérieurs à la moyenne :</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>6%+</strong> pour l&apos;attaque, la santé, la défense, l&apos;efficacité, l&apos;ER</li>
            <li><strong>5%+</strong> pour les dégâts en coup critique</li>
            <li><strong>3+</strong> pour la vitesse</li>
            <li><strong>4%+</strong> pour les chances de coup critique</li>
          </ul>
          <p style={{ textAlign: 'center' }}>Dans l&apos;exemple précédent&nbsp;: </p>
          <p>4% chance de coup critique, 4% CC, 4% CC + 5% de base = 4.25% &rarr; <span style={{ color: 'green', fontWeight: 600 }}>supérieur à la moyenne</span></p>
          <p>6% attaque, +8% de base = 7% &rarr; <span style={{ color: 'green', fontWeight: 600 }}>supérieur à la moyenne</span></p>
          <p>28 défense flat ➜ <span style={{ color: 'red', fontWeight: 600 }}>mauvais roll, mais perfectible avec une pierre de permutation.</span> </p>
        </section>
        <section className={styles.section}>
          <p>Passons maintenant aux archétypes génériques et aux les sets / caractéristiques qui synergisent que vous allez devoir rechercher pour les équipements que vous allez fabriquer ou trouver.</p>
        </section>


        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>DPS</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <img src="/images/tutoriels/equipements/base10b.png" alt="base10b" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base11.png" alt="base11" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base12.png" alt="base12" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base13.png" alt="base13" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base14.png" alt="base14" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base15.png" alt="base15" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base16.png" alt="base16" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/base17.png" alt="base17" style={{ height: '64px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>les héros DPS sont destinés à infliger des dégâts.</p>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '0', marginBottom: '0' }}>Ils sont généralement vulnérable mais ont besoin d&apos;attaque, de vitesse, de chances de coup critique et de dégât en coup critique.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/h1.png" alt="h1" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/h2.png" alt="h2" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/h3.png" alt="h3" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/h4.png" alt="h4" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>*la caractéristique principale est en gras</p>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '0', marginBottom: '0' }}>*En italic, il suffit de prendre seulement une des deux caractéristiques : l&apos;armure peut avoir de la santé.</p>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '0', marginBottom: '0' }}>ou de la défense mais pas les deux</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/h5.png" alt="h1" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/h6.png" alt="h2" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t1.png" alt="Arme" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Attaque %</div>
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Santé %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t2.png" alt="Casque" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Attaque %</div>
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div style={{ fontStyle: 'italic' }}>Santé %</div>
                <div style={{ fontStyle: 'italic' }}>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t3.png" alt="Armure" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div style={{ fontStyle: 'italic' }}>Santé %</div>
                <div style={{ fontStyle: 'italic' }}>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t4.png" alt="Collier" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Chances Crit</div>
                <div style={{ fontWeight: 'bold' }}>Dégât Crit</div>
                <div>Attaque %</div>
                <div>Vitesse</div>
                <div style={{ fontStyle: 'italic' }}>Santé %</div>
                <div style={{ fontStyle: 'italic' }}>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t5.png" alt="Anneau" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Attaque %</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Vitesse</div>
                <div style={{ fontStyle: 'italic' }}>Santé %</div>
                <div style={{ fontStyle: 'italic' }}>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t6.png" alt="Bottes" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div style={{ fontWeight: 'bold' }}>Attaque %</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>              </div>
            </div>
          </div>
        </section> 

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bruiser</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <img src="/images/tutoriels/equipements/b1.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b2.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b3.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b4.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b5.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b6.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b7.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b8.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b9.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b10.png" alt="" style={{ height: '64px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>les héros bruiser sont destinés à infliger des dégâts mais ont des caractéristiques défensives leur</p>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '0', marginBottom: '0' }}>permettant de survivre plus longtemps.</p>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '0', marginBottom: '0' }}>La plupart des caractéristiques sont bien sur eux et ils peuvent utiliser la plupart des équipements.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/br1.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/br2.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/br3.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/br4.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div> 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>*la caractéristique principale est en gras</p>
            </div> 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/br5.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/br6.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t1.png" alt="Arme" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Attaque %</div>
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Santé %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t2.png" alt="Casque" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Attaque %</div>
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Santé %</div>
                <div>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t3.png" alt="Armure" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Santé %</div>
                <div>Défense %</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t4.png" alt="Collier" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Chances Crit</div>
                <div style={{ fontWeight: 'bold' }}>Dégât Crit</div>
                <div style={{ fontStyle: 'bold' }}>Santé %</div>
                <div style={{ fontStyle: 'bold' }}>Défense %</div>
                <div>Attaque %</div>
                <div>Vitesse</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t5.png" alt="Anneau" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Attaque %</div>
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
                <div>Vitesse</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t6.png" alt="Bottes" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Vitesse</div>
                <div style={{ fontWeight: 'bold' }}>Attaque %</div>
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>
                <div>Chances Crit</div>
                <div>Dégât Crit</div>
              </div>
            </div>
          </div> 
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tank / Healer</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <img src="/images/tutoriels/equipements/b8.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b1.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b11.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b7.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b12.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b13.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b14.png" alt="" style={{ height: '64px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>les héros tank et healer ont des équipements similaires. Ces héros veulent basiquement survivre le plus</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/tank1.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/tank2.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/tank3.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/tank4.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div> 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>longtemps possible et proposer de la survie au reste de votre équipe.</p>
            </div> 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/tank5.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/tank6.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t1.png" alt="Arme" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t2.png" alt="Casque" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t3.png" alt="Armure" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t4.png" alt="Collier" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense</div>
                <div>Vitesse</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t5.png" alt="Anneau" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>
                <div style={{ fontWeight: 'bold' }}>Résistance d&apos;effet</div>
                <div>Vitesse</div>
                <div>Efficacité</div>
              </div> 
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t6.png" alt="Bottes" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Vitesse</div>
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
            </div>
          </div> 
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buffer / Debuffer</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <img src="/images/tutoriels/equipements/b8.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b1.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b11.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b7.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b12.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b13.png" alt="" style={{ height: '64px' }} />
            <img src="/images/tutoriels/equipements/b14.png" alt="" style={{ height: '64px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>les héros buffer et debuffer ont besoin de vitesse en priorité. Leurs équipements sont similaires aux</p>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>tanks et healers, mais avec une vitesse élevée. Ils sont aussi plus souvent intéressés par l&apos;efficacité</p>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>quand c&apos;est possible.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/buf1.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/buf2.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/buf3.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/buf4.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div> 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0', gap: '32px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '8px', marginTop: '0' }}>*la caractéristique principale est en gras</p>
            </div> 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src="/images/tutoriels/equipements/buf5.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
              <img src="/images/tutoriels/equipements/buf6.png" alt="" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start', margin: '32px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t1.png" alt="Arme" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t2.png" alt="Casque" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t3.png" alt="Armure" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div>Vitesse</div>
                <div>Santé %</div>
                <div>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t4.png" alt="Collier" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense</div>
                <div>Vitesse</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t5.png" alt="Anneau" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Efficacité</div>
                <div style={{ fontWeight: 'bold' }}>Santé %</div>
                <div style={{ fontWeight: 'bold' }}>Défense %</div>
                <div style={{ fontWeight: 'bold' }}>Résistance d&apos;effet</div>
                <div>Vitesse</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/images/tutoriels/equipements/t6.png" alt="Bottes" style={{ width: '120px', height: '120px', marginBottom: '8px', borderRadius: '12px' }} />
                <div style={{ fontWeight: 'bold' }}>Vitesse</div>
                <div>Santé %</div>
                <div>Défense %</div>
                <div>Résistance d&apos;effet</div>
                <div>Efficacité</div>
              </div>
            </div>
          </div> 
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Speed Checking</h2>
          <p>La vitesse est une des caractéristiques les plus difficiles à obtenir, il y a donc une règle exceptionnelle et souvent plus importante que les règles précédentes.</p>
          <p>Si un équipement possède <strong>3+ vitesse</strong> en caractéristique secondaire, vous devriez roll au moins en +3. Si le roll est en vitesse, continuez de roll.</p>
          <p>Les équipements à <strong>20+ de vitesse</strong> sont très rentables mais difficiles à obtenir, il est donc important de &quot;speed check&quot; chaque équipement avec de la vitesse dessus.</p>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '32px 0',
        }}>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi/q32E5I1Xrek/sddefault.jpg" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi_webp/SbjcZc-TTlw/sddefault.webp" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi_webp/rBfWWD8kNyg/sddefault.webp" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi/fQVF_Ym5vhI/sddefault.jpg" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi/iqVMWsRj-kg/sddefault.jpg" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.videoWrapper} onClick={() => setActiveVideo('_IYBUiu-8X8')}>
            <img src="https://i.ytimg.com/vi/6vJcvv5ggmI/sddefault.jpg" alt="" className={styles.videoThumb} />
            <div className={styles.playButton}>▶</div>
          </div>
        </div>

      </div>

      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
    </MainLayout>
  );
}
