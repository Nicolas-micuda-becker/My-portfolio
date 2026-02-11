import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';
import ScrollToTop from '@/components/UI/ScrollToTop';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Work />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
