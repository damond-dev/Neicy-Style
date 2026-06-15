/**
 * Location.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — sección de ubicación con mapa Google Maps integrado.
 * Coordenadas: https://maps.app.goo.gl/azWxVmUmBjkQi5Fo9
 */
const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5!2d-82.3089!3d23.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzAwLjAiTiA4MsKwMTgnMzIuMCJX!5e0!3m2!1ses!2scu!4v1234567890';
const MAPS_URL = 'https://maps.app.goo.gl/azWxVmUmBjkQi5Fo9';

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="py-12 md:py-16 lg:py-24"
      style={{ background: '#F8F7F4' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14 px-4">
          <p className="fade-in-up section-subtitle mb-2 md:mb-3 text-xs md:text-sm">Visítanos</p>
          <h2 className="fade-in-up section-title mb-3 md:mb-4 text-2xl md:text-3xl lg:text-5xl">
            Encuéntranos
          </h2>
          <div
            className="fade-in-up mx-auto w-12 md:w-16 lg:w-20 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Info Card */}
          <div className="fade-in-up lg:col-span-1">
            <div
              className="rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg h-full"
              style={{ background: '#FFFFFF', border: '1px solid rgba(170,151,125,0.2)' }}
            >
              <h3
                className="font-display text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-5 lg:mb-6"
                style={{ color: '#452D18' }}
              >
                Neicy'Styles
              </h3>

              {/* Address */}
              <div className="flex gap-2.5 md:gap-3 mb-3 md:mb-4 lg:mb-5">
                <div
                  className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#DECEB0' }}
                >
                  <LocationIcon />
                </div>
                <div>
                  <p className="font-body font-bold text-xs md:text-sm mb-1" style={{ color: '#452D18' }}>
                    Dirección
                  </p>
                  <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: '#6B5A47' }}>
                    Calzada de Vía Blanca entre Modelo y Calindero,
                    Regla, La Habana, Cuba.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-2.5 md:gap-3 mb-3 md:mb-4 lg:mb-5">
                <div
                  className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#DECEB0' }}
                >
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-body font-bold text-xs md:text-sm mb-1" style={{ color: '#452D18' }}>
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5355442454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs md:text-sm transition-colors hover:text-[#AA977D]"
                    style={{ color: '#6B5A47' }}
                  >
                    +53 55442454
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-2.5 md:gap-3 mb-3 md:mb-4 lg:mb-5">
                <div
                  className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#DECEB0' }}
                >
                  <SocialIcon />
                </div>
                <div>
                  <p className="font-body font-bold text-xs md:text-sm mb-1" style={{ color: '#452D18' }}>
                    Redes Sociales
                  </p>
                  <a
                    href="https://www.instagram.com/fernandezneicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs md:text-sm block transition-colors hover:text-[#AA977D]"
                    style={{ color: '#6B5A47' }}
                  >
                    @fernandezneicy
                  </a>
                  <a
                    href="https://www.facebook.com/search/top?q=Neicy%20Fernandez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs md:text-sm block transition-colors hover:text-[#AA977D]"
                    style={{ color: '#6B5A47' }}
                  >
                    Neicy Fernandez
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-2.5 md:gap-3 mb-4 md:mb-5 lg:mb-6">
                <div
                  className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#DECEB0' }}
                >
                  <ClockIcon />
                </div>
                <div>
                  <p className="font-body font-bold text-xs md:text-sm mb-1" style={{ color: '#452D18' }}>
                    Horario
                  </p>
                  <p className="font-body text-xs md:text-sm" style={{ color: '#6B5A47' }}>
                    Lunes a Sábado: 9:00 AM – 7:00 PM
                  </p>
                  <p className="font-body text-xs md:text-sm" style={{ color: '#6B5A47' }}>
                    Domingos: Con cita previa
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 md:py-2.5 lg:py-3.5 rounded-md md:rounded-lg lg:rounded-xl font-bold text-xs md:text-sm text-white transition-all duration-250 hover:scale-105 hover:shadow-lg active:scale-95"
                style={{ background: '#452D18', fontFamily: "'Lato', sans-serif" }}
              >
                <NavigationIcon />
                Cómo llegar
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in-up lg:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1297.3391849264228!2d-82.32485438935299!3d23.11797693246516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sus!4v1781485296306!5m2!1ses-419!2sus"
              width="100%"
              height="400"
              style={{border:0, borderRadius:'12px'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AA977D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AA977D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AA977D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function SocialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AA977D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}
function NavigationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  );
}
