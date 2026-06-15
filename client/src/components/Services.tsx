/**
 * Services.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — tarjetas de servicios con iconos SVG, hover elegante y CTA WhatsApp.
 * Optimizado completamente para móvil.
 * Paleta: fondo #452D18, tarjetas crema, acento #AA977D
 */

const WA_BASE = "https://wa.me/5355442454?text=Hola%20Neicy'Styles%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20el%20servicio%20de%20";

const SERVICES = [
  {
    icon: <ScissorsIcon />,
    title: 'Cortes',
    description: 'Cortes modernos y personalizados adaptados a tu tipo de cabello, rostro y estilo personal.',
    wa: WA_BASE + 'Cortes.',
  },
  {
    icon: <WashIcon />,
    title: 'Lavado y Secado',
    description: 'Lavado profundo con protector térmico profesional para un secado perfecto y brillante.',
    wa: WA_BASE + 'Lavado%20y%20Secado.',
  },
  {
    icon: <ColorIcon />,
    title: 'Tintes',
    description: 'Aplicación de tintes de todos los colores con técnicas modernas y productos de alta calidad.',
    wa: WA_BASE + 'Tintes.',
  },
  {
    icon: <BotoxIcon />,
    title: 'Botox Capilar',
    description: 'Recuperación profunda del cabello. Rellena, hidrata y devuelve la vida a cada hebra.',
    wa: WA_BASE + 'Botox%20Capilar.',
  },
  {
    icon: <KeratinIcon />,
    title: 'Keratinas',
    description: 'Con formol o sin formol. Alisado duradero, brillo intenso y eliminación del frizz.',
    wa: WA_BASE + 'Keratinas.',
  },
  {
    icon: <ReconIcon />,
    title: 'Reconstrucción Capilar',
    description: 'Tratamientos especializados para restaurar la estructura del cabello dañado.',
    wa: WA_BASE + 'Reconstrucci%C3%B3n%20Capilar.',
  },
  {
    icon: <HydraIcon />,
    title: 'Hidratación Profunda',
    description: 'Nutrición y revitalización intensiva para un cabello suave, sedoso y lleno de vida.',
    wa: WA_BASE + 'Hidrataci%C3%B3n%20Profunda.',
  },
  {
    icon: <TreatIcon />,
    title: 'Tratamientos Especializados',
    description: 'Sales 21, Cárcel Capilar, Ampolla Semi Di Lino. Soluciones avanzadas para cada necesidad.',
    wa: WA_BASE + 'Tratamientos%20Especializados.',
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-14 md:py-24"
      style={{ background: '#452D18' }}
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="fade-in-up font-body text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-3" style={{ color: '#AA977D' }}>
            Lo que ofrecemos
          </p>
          <h2
            className="fade-in-up font-display text-3xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ color: '#F8F7F4' }}
          >
            Nuestros Servicios
          </h2>
          <div
            className="fade-in-up mx-auto w-16 md:w-20 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
          />
          <p
            className="fade-in-up font-body text-xs md:text-base mt-3 md:mt-5 max-w-xl mx-auto px-4"
            style={{ color: '#DECEB0', opacity: 0.85 }}
          >
            Cada servicio es una experiencia de cuidado personalizado con productos
            profesionales y técnicas de vanguardia.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof SERVICES)[0];
  delay: number;
}) {
  return (
    <div
      className="fade-in-up group relative flex flex-col rounded-lg md:rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      style={{
        background: 'rgba(248,247,244,0.06)',
        border: '1px solid rgba(170,151,125,0.2)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(248,247,244,0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(170,151,125,0.5)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(248,247,244,0.06)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(170,151,125,0.2)';
      }}
    >
      {/* Icon */}
      <div
        className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(170,151,125,0.2)' }}
      >
        <span style={{ color: '#AA977D', fontSize: '18px' }}>{service.icon}</span>
      </div>

      {/* Title */}
      <h3
        className="font-display text-base md:text-lg font-bold mb-2"
        style={{ color: '#F8F7F4' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-xs md:text-sm leading-relaxed flex-1 mb-4 md:mb-5"
        style={{ color: 'rgba(222,206,176,0.8)' }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={service.wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold transition-all duration-200 hover:gap-3"
        style={{ color: '#AA977D' }}
        onClick={(e) => e.stopPropagation()}
      >
        Consultar precio
        <ArrowSmIcon />
      </a>
    </div>
  );
}

/* ── Icons ── */
function ScissorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  );
}
function WashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M8 12s1.5-2 4-2 4 2 4 2"/>
      <line x1="12" y1="8" x2="12" y2="8.01"/>
    </svg>
  );
}
function ColorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}
function BotoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function KeratinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function ReconIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
}
function HydraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  );
}
function TreatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function ArrowSmIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
