import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nicolas Micuda Becker | Portfolio",
  description: "Computer Science student portfolio showcasing projects in web development, algorithms, and system design.",
  keywords: ["portfolio", "computer science", "web development", "Nicolas Micuda Becker"],
  authors: [{ name: "Nicolas Micuda Becker" }],
  openGraph: {
    title: "Nicolas Micuda Becker | Portfolio",
    description: "Computer Science student portfolio",
    type: "website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
