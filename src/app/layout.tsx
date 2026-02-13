import type { Metadata } from 'next'
import { PT_Sans, Merriweather } from 'next/font/google'
import './globals.css'

const ptSans = PT_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'E7 Pour Les Noobs - Votre meilleur allié sur Epic Seven',
  description: 'VOTRE MEILLEUR ALLIÉ SUR EPIC SEVEN - Guides, ressources, tutoriels et outils pour progresser sur Epic Seven',
  keywords: ['Epic Seven', 'E7', 'guide', 'tutoriel', 'ressources', 'gaming'],
  authors: [{ name: 'E7 Pour Les Noobs' }],
  openGraph: {
    title: 'E7 POUR LES NOOBS',
    description: 'VOTRE MEILLEUR ALLIÉ SUR EPIC SEVEN',
    url: 'https://e7pourlesnoobs.vercel.app',
    siteName: 'E7 Pour Les Noobs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${ptSans.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  )
}
