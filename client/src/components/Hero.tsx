/**
 * Hero.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — Hero a pantalla completa con video de fondo.
 * Video: cabello fluyendo en brisa. Overlay degradado elegante.
 * Optimizado completamente para móvil.
 */

const WA_URL = 'https://wa.me/5355442454?text=Hola%20Neicy\'Styles%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita.';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/dsqjvn7xw/video/upload/v1781473583/Hair_strands_flowing_in_breeze_202606141745_fv1dlt.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(69,45,24,0.70) 50%, rgba(26,26,26,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Decorative ornament top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)', zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="relative container flex flex-col items-center text-center"
        style={{ zIndex: 2, paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        {/* Eyebrow */}
        <p
          className="hero-subtitle font-body text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-3 md:mb-4"
          style={{ color: '#DECEB0', opacity: 0.9 }}
        >
          Salón de Belleza · Regla, La Habana
        </p>

        {/* Main Title */}
        <h1
          className="hero-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 max-w-4xl"
          style={{ color: '#FFFFFF', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          Transformamos tu cabello,{' '}
          <em className="not-italic" style={{ color: '#DECEB0' }}>
            realzamos tu belleza
          </em>
        </h1>

        {/* Decorative line */}
        <div
          className="hero-subtitle w-16 md:w-24 h-px mb-4 md:mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
        />

        {/* Subtitle */}
        <p
          className="hero-subtitle font-body text-sm md:text-base lg:text-lg max-w-2xl mb-7 md:mb-10 leading-relaxed px-2"
          style={{ color: 'rgba(222,206,176,0.92)' }}
        >
          Especialistas en cortes, coloraciones, keratinas, hidrataciones profundas y
          tratamientos capilares en Regla, La Habana.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4 items-center w-full sm:w-auto px-4 sm:px-0 mb-12 md:mb-16">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-250 hover:scale-105 hover:shadow-2xl active:scale-95 w-full sm:w-auto"
            style={{
              background: '#AA977D',
              color: '#FFFFFF',
              boxShadow: '0 6px 24px rgba(170,151,125,0.45)',
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <CalendarIcon />
            Reservar cita
          </a>
          <button
            onClick={() => scrollToSection('#galeria')}
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-250 hover:scale-105 active:scale-95 w-full sm:w-auto"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: '#FFFFFF',
              border: '1.5px solid rgba(222,206,176,0.6)',
              backdropFilter: 'blur(8px)',
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <GalleryIcon />
            Ver galería
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#DECEB0' }}>
            Descubrir
          </span>
          <div
            className="w-px h-8 md:h-10"
            style={{
              background: 'linear-gradient(180deg, #AA977D, transparent)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}
