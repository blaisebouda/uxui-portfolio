# Portfolio UX/UI Design

Landing page moderne et élégante présentant mes principales réalisations en design d'interfaces et expérience utilisateur.

🔗 **[Voir le portfolio en ligne](https://blaisebouda.github.io/uxui-portfolio)**

## 📋 Description

Ce portfolio met en valeur mes compétences en UX/UI Design à travers une interface interactive et visuellement engageante. Chaque projet est présenté avec soin pour démontrer mon approche du design centré utilisateur.

## ✨ Fonctionnalités

- 🎨 **Design moderne** - Interface élégante avec Tailwind CSS
- 🌊 **Animations fluides** - Transitions et effets avec GSAP
- 📱 **Responsive** - Adapté à tous les écrans (mobile, tablette, desktop)
- ⚡ **Performance optimale** - Chargement rapide et expérience fluide
- 🎯 **Navigation intuitive** - Parcours utilisateur optimisé

## 🚀 Technologies utilisées

### Frontend

- **React 19** - Bibliothèque UI avec les dernières fonctionnalités
- **TypeScript** - Typage statique pour un code robuste et maintenable
- **Tailwind CSS 4** - Framework CSS utility-first pour un design rapide
- **GSAP** - Bibliothèque d'animation pour des transitions fluides
- **Lucide React** - Icônes modernes et personnalisables

### Outils de développement

- **Vite** - Build tool ultra-rapide avec HMR
- **ESLint** - Linter pour maintenir la qualité du code
- **PostCSS** - Traitement avancé du CSS avec Tailwind
- **TypeScript ESLint** - Règles de linting adaptées à TypeScript

### Déploiement

- **GitHub Pages** - Hébergement statique gratuit et fiable

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/blaisebouda/uxui-portfolio.git

# Accéder au dossier
cd uxui-portfolio

# Installer les dépendances
npm install
```

## 🛠️ Commandes disponibles

```bash
# Lancer le serveur de développement avec HMR
npm run dev

# Compiler TypeScript et builder pour la production
npm run build

# Prévisualiser le build de production localement
npm run preview

# Analyser le code avec ESLint
npm run lint

# Déployer sur GitHub Pages
npm run deploy
```

## 🌐 Déploiement

Le portfolio est automatiquement déployé sur GitHub Pages. Pour publier une nouvelle version :

```bash
npm run deploy
```

Cette commande :

1. Exécute la compilation TypeScript
2. Build l'application optimisée pour la production
3. Déploie automatiquement le dossier `dist` sur la branche `gh-pages`

## 📁 Structure du projet

```
uxui-portfolio/
├── src/                  # Code source de l'application
│   ├── components/       # Composants React réutilisables
│   ├── assets/          # Images, fonts et autres ressources
│   ├── styles/          # Fichiers CSS/Tailwind personnalisés
│   └── App.tsx          # Composant principal
├── public/              # Fichiers statiques
├── dist/                # Build de production (généré)
├── node_modules/        # Dépendances (généré)
├── package.json         # Configuration npm et scripts
├── vite.config.ts       # Configuration Vite
├── tsconfig.json        # Configuration TypeScript
├── tailwind.config.js   # Configuration Tailwind CSS
└── eslint.config.js     # Configuration ESLint
```

## 🔧 Configuration

### Tailwind CSS

Le projet utilise Tailwind CSS 4 avec le plugin Vite pour une intégration optimale :

- Configuration PostCSS pour le traitement du CSS
- Utilitaire `clsx` pour la gestion conditionnelle des classes
- Styles personnalisés possibles dans `src/styles/`

### GSAP

Les animations sont gérées avec GSAP pour des effets fluides et performants :

- Animations d'entrée/sortie
- Scroll animations
- Transitions de page

### TypeScript

Configuration stricte pour un code type-safe :

- Type checking complet
- IntelliSense amélioré
- Meilleure maintenabilité

### ESLint

Règles de linting configurées pour React et TypeScript :

- `eslint-plugin-react-hooks` - Validation des Hooks React
- `eslint-plugin-react-refresh` - Support du Fast Refresh
- `typescript-eslint` - Règles spécifiques TypeScript

## 🎨 Personnalisation

### Couleurs et thème

Modifiez les couleurs dans `tailwind.config.js` pour personnaliser le thème :

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### Animations GSAP

Ajoutez vos propres animations dans les composants en utilisant GSAP :

```typescript
import { gsap } from "gsap";

gsap.to(".element", { duration: 1, x: 100 });
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📚 Ressources

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vite.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [Documentation GSAP](https://gsap.com/docs/)
- [Lucide Icons](https://lucide.dev/)

## 📝 License

Ce projet est sous licence privée. Tous droits réservés.

## 📧 Contact

Pour toute question, suggestion ou collaboration, n'hésitez pas à me contacter via [GitHub](https://github.com/blaisebouda).

---

Conçu avec 💜 par Blaise Bouda | UX/UI Designer
