# E7 Pour Les Noobs - Next.js Application

Site web professionnel pour Epic Seven, construit avec **Next.js 14**, **TypeScript** et **React 18**. Optimisé pour le déploiement sur **Vercel**.

## 🚀 Stack Technologique

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **React 18** - Bibliothèque UI
- **CSS Modules** - Styles scopés
- **Vercel** - Plateforme de déploiement

## 📁 Structure du Projet

```
e7pourlesnoobs/
├── src/
│   ├── app/                    # Routes Next.js (App Router)
│   │   ├── layout.tsx          # Layout racine
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   ├── aventure-de-0/      # Page aventure
│   │   ├── ressources/         # Page ressources
│   │   ├── tutoriels/          # Page tutoriels
│   │   ├── outils/             # Page outils
│   │   └── contact/            # Page contact
│   │
│   └── components/             # Composants React réutilisables
│       ├── Navigation.tsx      # Menu de navigation
│       ├── Hero.tsx            # Bannière hero
│       ├── MainLayout.tsx      # Layout principal
│       └── *.module.css        # Styles des composants
│
├── public/                     # Assets statiques
│   └── assets/
│       ├── css/               # Fichiers CSS
│       ├── images/            # Images du site
│       └── fonts/             # Polices
│
├── next.config.js             # Configuration Next.js
├── tsconfig.json              # Configuration TypeScript
├── package.json               # Dépendances
└── vercel.json                # Configuration Vercel
```

## 🛠️ Installation et Développement

### Prérequis

- **Node.js** 18.x ou supérieur
- **npm** ou **yarn** ou **pnpm**

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Le site sera accessible à l'adresse : **http://localhost:3000**

### Build de production

```bash
npm run build
```

### Démarrage du serveur de production

```bash
npm start
```

### Export statique

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `out/`.

## 🌐 Déploiement sur Vercel

### Méthode 1 : Via l'Interface Vercel (Recommandé)

1. **Créer un compte Vercel** : [vercel.com](https://vercel.com)

2. **Importer le projet** :
   - Cliquer sur "New Project"
   - Connecter votre repository GitHub/GitLab/Bitbucket
   - Sélectionner le repository `e7pourlesnoobs`

3. **Configuration automatique** :
   - Vercel détectera automatiquement Next.js
   - Les paramètres sont pré-configurés dans `vercel.json`

4. **Deploy** :
   - Cliquer sur "Deploy"
   - Votre site sera en ligne en moins de 2 minutes !

### Méthode 2 : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Production deployment
vercel --prod
```

## 📝 Configuration

### Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_SITE_NAME="E7 Pour Les Noobs"
NEXT_PUBLIC_SITE_URL="https://votre-domaine.vercel.app"
```

### Domaine personnalisé

1. Dans le dashboard Vercel, aller dans **Settings > Domains**
2. Ajouter votre domaine personnalisé
3. Configurer les DNS selon les instructions

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `src/app/globals.css` :

```css
:root {
  --color-bg-primary: rgba(255, 255, 255, 1);
  --color-bg-accent: rgba(246, 223, 181, 1);
  --color-text-primary: rgba(33, 33, 33, 1);
  /* ... */
}
```

### Polices

Les polices Google Fonts sont chargées dans `src/app/layout.tsx` :
- **PT Sans** - Titres et navigation
- **Merriweather** - Corps de texte

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints :

- **Mobile** : < 480px
- **Tablet** : 480px - 767px
- **Desktop** : ≥ 768px

## ⚡ Optimisations

### Performance

- ✅ Static Site Generation (SSG)
- ✅ Image optimization automatique
- ✅ Code splitting automatique
- ✅ CSS Modules pour des styles optimisés
- ✅ Lazy loading des composants

### SEO

- ✅ Metadata configurés pour chaque page
- ✅ Open Graph tags
- ✅ Structure HTML sémantique
- ✅ URLs propres et descriptives

## 🔧 Scripts disponibles

```bash
npm run dev      # Mode développement
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Linter ESLint
```

## 📦 Dépendances principales

```json
{
  "next": "^14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.3.3"
}
```

## 🐛 Débogage

### Problèmes courants

**Port 3000 déjà utilisé** :
```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

**Erreurs de build** :
```bash
# Nettoyer le cache Next.js
rm -rf .next
npm run build
```

## 📄 Licence

Ce projet est un site communautaire pour Epic Seven. Epic Seven est une marque déposée de Smilegate Megaport.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème :
- **Site** : https://e7pourlesnoobs.vercel.app
- **Issues** : Ouvrir une issue sur GitHub

---

**Développé avec ❤️ pour la communauté Epic Seven**
