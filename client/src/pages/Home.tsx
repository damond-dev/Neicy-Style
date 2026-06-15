/**
 * Home.tsx — Neicy'Styles
 * Página principal que ensambla todos los componentes del sitio.
 * Diseño: Artesanía Cálida — Art Nouveau femenino contemporáneo.
 */
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Products from '@/components/Products';

import Location from '@/components/Location';
import CTAFinal from '@/components/CTAFinal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -30px 0px' }
    );

    // Observe all fade-in-up elements
    const observe = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observe();

    // Re-observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Products />
        <Location />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
