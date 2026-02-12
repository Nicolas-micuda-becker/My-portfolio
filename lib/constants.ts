export const COLORS = {
  light: {
    background: '#F5F5F0',
    surface: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#6B6B6B',
      muted: '#9E9E9E',
    },
    accent: {
      primary: '#FF6B35',
      secondary: '#FF8C61',
      tertiary: '#E55A2B',
    },
    border: '#E0E0E0',
  },
  
  dark: {
    background: '#0F0F0F',
    surface: '#1A1A1A',
    text: {
      primary: '#F5F5F0',
      secondary: '#B0B0B0',
      muted: '#6B6B6B',
    },
    accent: {
      primary: '#FF6B35',
      secondary: '#FF8C61',
      tertiary: '#E55A2B',
    },
    border: '#2A2A2A',
  },
} as const;

export const ANIMATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 1.0,
} as const;

export const LAYOUT = {
  headerHeight: '80px',
  sectionPadding: {
    mobile: '4rem 1.5rem',
    tablet: '6rem 3rem',
    desktop: '8rem 6rem',
  },
  maxWidth: '1400px',
  navDotsRight: '2rem',
} as const;

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const;
