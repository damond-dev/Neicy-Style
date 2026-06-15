/**
 * Header.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — header fijo con transparencia que se vuelve opaco al hacer scroll.
 * Optimizado para móvil con padding y tamaños responsivos.
 * Paleta: #452D18 principal · #AA977D secundario · #F8F7F4 fondo claro
 */
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Productos', href: '#productos' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto-social' },
];

const WA_URL = 'https://wa.me/5355442454?text=Hola%20Neicy\'Styles%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(248,247,244,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(69,45,24,0.10)' : 'none',
      }}
    >
      <div className="container flex items-center justify-between py-2 md:py-3 lg:py-4">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src="https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781472424/Logo_Sal_n_Neicy_Style_asfyi5.png"
            alt="Neicy'Styles Logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            style={{ 
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
  mixBlendMode: 'normal'
}}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body text-xs font-bold tracking-wide transition-colors duration-200 hover:text-[#AA977D] relative group"
              style={{ color: scrolled ? '#452D18' : '#F8F7F4' }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#AA977D] transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-250 hover:scale-105 hover:shadow-lg active:scale-95"
          style={{
            background: '#25D366',
            color: '#ffffff',
            boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
          }}
        >
          <WhatsAppIcon />
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? '#452D18' : '#F8F7F4',
              transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? '#452D18' : '#F8F7F4',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? '#452D18' : '#F8F7F4',
              transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(248,247,244,0.98)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <nav className="container flex flex-col py-3 gap-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-2.5 px-2 font-body font-bold text-xs md:text-sm text-[#452D18] border-b border-[#DECEB0] hover:text-[#AA977D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs md:text-sm text-white"
            style={{ background: '#25D366' }}
          >
            <WhatsAppIcon />
            Reservar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
