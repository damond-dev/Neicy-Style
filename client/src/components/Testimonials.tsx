/**
 * Testimonials.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — slider automático de testimonios con estrellas y diseño premium.
 * Paleta: fondo #F8F7F4, tarjetas blancas, acento #AA977D
 */
import { useState, useEffect, useCallback } from 'react';

const TESTIMONIALS = [
  {
    name: 'María González',
    service: 'Keratina Premium',
    rating: 5,
    text: 'Increíble resultado con la keratina. Mi cabello quedó completamente liso, brillante y sin frizz. Neicy es una verdadera profesional. ¡Volveré sin dudarlo!',
    initials: 'MG',
  },
  {
    name: 'Lisandra Pérez',
    service: 'Botox Capilar',
    rating: 5,
    text: 'El botox capilar transformó completamente mi cabello. Estaba muy dañado y ahora luce sano, suave y lleno de vida. El mejor salón de Regla sin duda.',
    initials: 'LP',
  },
  {
    name: 'Yolanda Martínez',
    service: 'Coloración',
    rating: 5,
    text: 'Me hice un tinte y el resultado superó todas mis expectativas. El color quedó exactamente como lo quería y duró muchísimo. Muy recomendado.',
    initials: 'YM',
  },
  {
    name: 'Claudia Hernández',
    service: 'Hidratación Profunda',
    rating: 5,
    text: 'Vine con el cabello muy reseco y salí con una melena completamente renovada. El tratamiento de hidratación profunda es espectacular. Gracias Neicy!',
    initials: 'CH',
  },
  {
    name: 'Rebeca Fuentes',
    service: 'Reconstrucción Capilar',
    rating: 5,
    text: 'Después de años de daño químico, finalmente encontré quien recuperara mi cabello. La reconstrucción capilar de Neicy\'Styles es simplemente mágica.',
    initials: 'RF',
  },
  {
    name: 'Daniela Suárez',
    service: 'Corte y Peinado',
    rating: 5,
    text: 'El corte que me hicieron es exactamente lo que buscaba. Neicy entendió perfectamente lo que quería y el resultado fue perfecto. Atención de primera.',
    initials: 'DS',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: '#F8F7F4' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="fade-in-up section-subtitle mb-3">Lo que dicen nuestras clientas</p>
          <h2 className="fade-in-up section-title mb-4">
            Testimonios <span style={{ color: '#AA977D' }}>Reales</span>
          </h2>
          <div
            className="fade-in-up mx-auto w-20 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
          />
        </div>

        {/* Slider */}
        <div
          className="fade-in-up relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main card */}
          <div
            className="rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            style={{ background: '#FFFFFF', border: '1px solid rgba(170,151,125,0.2)' }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 right-8 font-display text-8xl leading-none select-none"
              style={{ color: 'rgba(170,151,125,0.15)', fontStyle: 'italic' }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Text */}
            <p
              className="font-body text-lg md:text-xl leading-relaxed mb-8 relative z-10"
              style={{ color: '#3D2E1E', fontStyle: 'italic' }}
              key={current}
            >
              "{TESTIMONIALS[current].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #452D18, #AA977D)' }}
              >
                {TESTIMONIALS[current].initials}
              </div>
              <div>
                <p className="font-body font-bold" style={{ color: '#452D18' }}>
                  {TESTIMONIALS[current].name}
                </p>
                <p className="font-body text-sm" style={{ color: '#AA977D' }}>
                  {TESTIMONIALS[current].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ background: '#DECEB0', color: '#452D18' }}
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? '#AA977D' : '#DECEB0',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ background: '#DECEB0', color: '#452D18' }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className="text-left rounded-xl p-4 transition-all duration-250 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: i === current ? '#DECEB0' : '#FFFFFF',
                border: `1px solid ${i === current ? '#AA977D' : 'rgba(170,151,125,0.2)'}`,
              }}
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} size={12} />
                ))}
              </div>
              <p className="font-body text-xs font-bold" style={{ color: '#452D18' }}>
                {t.name}
              </p>
              <p className="font-body text-xs" style={{ color: '#AA977D' }}>
                {t.service}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#AA977D" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
