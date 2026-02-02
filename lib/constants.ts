// ═══════════════════════════════════════════════════════════
// 🎨 CONSTANTS - Configuration globale du portfolio
// ═══════════════════════════════════════════════════════════
// Ce fichier centralise toutes les valeurs constantes (couleurs, animations, etc.)
// Pratique pour modifier rapidement le design sans toucher au code des composants

// ────────────────────────────────────────────────────────
// 📖 PALETTE DE COULEURS (Blanc cassé / Gris / Orange)
// ────────────────────────────────────────────────────────
export const COLORS = {
  // Mode Light (par défaut)
  light: {
    background: '#F5F5F0',      // Blanc cassé (fond principal)
    surface: '#FFFFFF',          // Blanc pur (cards, surfaces)
    text: {
      primary: '#1A1A1A',        // Noir doux (texte principal)
      secondary: '#6B6B6B',      // Gris moyen (texte secondaire)
      muted: '#9E9E9E',          // Gris clair (labels, hints)
    },
    accent: {
      primary: '#FF6B35',        // Orange vif (boutons, links)
      secondary: '#FF8C61',      // Orange clair (hover states)
      tertiary: '#E55A2B',       // Orange foncé (active states)
    },
    border: '#E0E0E0',           // Bordures subtiles
  },
  
  // Mode Dark
  dark: {
    background: '#0F0F0F',       // Noir profond
    surface: '#1A1A1A',          // Gris très foncé (cards)
    text: {
      primary: '#F5F5F0',        // Blanc cassé (texte principal)
      secondary: '#B0B0B0',      // Gris clair (texte secondaire)
      muted: '#6B6B6B',          // Gris moyen (labels)
    },
    accent: {
      primary: '#FF6B35',        // Orange (identique au light)
      secondary: '#FF8C61',      // Orange clair
      tertiary: '#E55A2B',       // Orange foncé
    },
    border: '#2A2A2A',           // Bordures discrètes
  },
} as const;

// ────────────────────────────────────────────────────────
// ⏱️ DURÉES D'ANIMATIONS (en secondes)
// ────────────────────────────────────────────────────────
export const ANIMATIONS = {
  fast: 0.2,         // Hover effects, micro-interactions
  normal: 0.4,       // Transitions standards
  slow: 0.6,         // Animations de sections
  verySlow: 1.0,     // Animations d'entrée de page
} as const;

// ────────────────────────────────────────────────────────
// 📐 SPACING & LAYOUT
// ────────────────────────────────────────────────────────
export const LAYOUT = {
  headerHeight: '80px',
  sectionPadding: {
    mobile: '4rem 1.5rem',
    tablet: '6rem 3rem',
    desktop: '8rem 6rem',
  },
  maxWidth: '1400px',
  navDotsRight: '2rem',      // Distance des dots de navigation du bord droit
} as const;

// ────────────────────────────────────────────────────────
// 🎯 SECTIONS DU PORTFOLIO
// ────────────────────────────────────────────────────────
export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const;

// ────────────────────────────────────────────────────────
// 🎓 POURQUOI "as const" ?
// ────────────────────────────────────────────────────────
// TypeScript traite ces objets comme immuables (lecture seule)
// Ça nous donne l'autocomplétion et évite les erreurs de typo
// Exemple : COLORS.light.background ✅ | COLORS.light.fond ❌ (erreur TS)
