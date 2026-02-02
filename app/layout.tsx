// ═══════════════════════════════════════════════════════════
// 🏗️ ROOT LAYOUT - Structure principale de l'application
// ═══════════════════════════════════════════════════════════
// 🎓 CONCEPT : Ce fichier enveloppe toutes les pages de l'app
// C'est ici qu'on configure les fonts, metadata, et le thème global

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// ────────────────────────────────────────────────────────
// 🔤 CONFIGURATION DES FONTS
// ────────────────────────────────────────────────────────
// Inter : Font principale (texte courant)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // 🎓 Affiche le texte pendant le chargement de la font
});

// Space Grotesk : Font pour les titres
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

// ────────────────────────────────────────────────────────
// 📄 METADATA (SEO)
// ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nicolas Micuda Becker | Portfolio",
  description: "Computer Science student portfolio showcasing projects in web development, algorithms, and system design.",
  keywords: ["portfolio", "computer science", "web development", "Nicolas Micuda Becker"],
  authors: [{ name: "Nicolas Micuda Becker" }],
  openGraph: {
    title: "Nicolas Micuda Becker | Portfolio",
    description: "Computer Science student portfolio",
    type: "website",
  },
};

// ────────────────────────────────────────────────────────
// 🎓 COMPOSANT PRINCIPAL
// ────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 🎓 lang="en" : Indique la langue pour l'accessibilité
    // 🎓 Pas de classe "dark" par défaut → Mode light au démarrage
    <html lang="en" className="scroll-smooth">
      <body
        // 🎓 Variables CSS pour les fonts (utilisables dans Tailwind)
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
