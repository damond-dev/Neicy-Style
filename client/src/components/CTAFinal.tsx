/**
 * CTAFinal.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — sección CTA de alto impacto con video de fondo.
 * Mismo video que el hero para coherencia visual.
 */

const WA_URL = "https://wa.me/5355442454?text=Hola%20Neicy'Styles%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

export default function CTAFinal() {
  return (
    <section
      className="relative py-16 md:py-28 lg:py-36 overflow-hidden flex items-center justify-center"
      style={{ minHeight: 'clamp(300px, 50vh, 500px)' }}
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

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(69,45,24,0.88) 0%, rgba(26,26,26,0.80) 100%)',
          zIndex: 1,
        }}
      />

      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)', zIndex: 2 }}
      />

      {/* Content */}
      <div className="relative container text-center" style={{ zIndex: 2 }}>
        {/* Eyebrow */}
        <p
          className="fade-in-up font-body text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-5 px-4"
          style={{ color: '#DECEB0', opacity: 0.85 }}
        >
          Tu transformación te espera
        </p>

        {/* Main title */}
        <h2
          className="fade-in-up font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 max-w-3xl mx-auto px-4"
          style={{ color: '#FFFFFF', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          Tu mejor versión comienza con un{' '}
          <em className="not-italic" style={{ color: '#DECEB0' }}>
            gran cabello
          </em>
        </h2>

        {/* Decorative line */}
        <div
          className="fade-in-up mx-auto w-12 md:w-20 h-px mb-4 md:mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
        />

        {/* Subtitle */}
        <p
          className="fade-in-up font-body text-xs md:text-base lg:text-lg max-w-xl mx-auto mb-6 md:mb-8 px-4"
          style={{ color: 'rgba(222,206,176,0.90)' }}
        >
          Reserva tu cita ahora y déjanos crear la transformación que siempre soñaste.
          Atención personalizada, productos profesionales, resultados reales.
        </p>

        {/* CTA Button */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in-up inline-flex items-center gap-2 md:gap-3 px-5 md:px-10 py-3 md:py-5 rounded-full font-bold text-xs md:text-base lg:text-lg text-white transition-all duration-250 hover:scale-105 hover:shadow-2xl active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #AA977D, #8B7A62)',
            boxShadow: '0 8px 32px rgba(170,151,125,0.45)',
            fontFamily: "'Lato', sans-serif",
          }}
        >
          <WhatsAppIcon />
          Agenda tu cita
        </a>

        {/* Trust signals */}
        <div className="fade-in-up flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 md:mt-8 px-4">
          {['Respuesta inmediata', 'Sin costo de consulta', 'Atención personalizada'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#AA977D' }}
              />
              <span
                className="font-body text-xs md:text-sm"
                style={{ color: 'rgba(222,206,176,0.80)' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)', zIndex: 2 }}
      />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
