/**
 * About.tsx — Neicy'Styles
 */

const STATS = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientes satisfechas' },
  { value: '8', label: 'Servicios especializados' },
  { value: '100%', label: 'Productos profesionales' },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: '#F8F7F4' }}
    >
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

          {/* TEXT COLUMN — siempre primero en móvil */}
          <div className="w-full lg:w-[55%] fade-in-up">
            <p className="section-subtitle mb-3">Quiénes somos</p>
            <h2 className="section-title text-2xl md:text-4xl mb-6">
              Bienvenida a{' '}
              <span style={{ color: '#AA977D' }}>Neicy'Styles</span>
            </h2>

            <div
              className="w-16 h-0.5 mb-6"
              style={{ background: '#AA977D' }}
            />

            <p
              className="font-body text-sm md:text-base leading-relaxed mb-5"
              style={{ color: '#3D2E1E' }}
            >
              <strong>Neicy'Styles</strong> es una peluquería especializada en el cuidado,
              restauración y transformación del cabello. Trabajamos con productos
              profesionales y técnicas modernas para garantizar resultados espectaculares,
              saludables y duraderos.
            </p>
            <p
              className="font-body text-sm md:text-base leading-relaxed mb-8"
              style={{ color: '#6B5A47' }}
            >
              Cada cliente es única, y nuestro compromiso es entender tu cabello,
              tu estilo y tus sueños para ofrecerte una experiencia de transformación
              personalizada que va más allá del salón.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: '#DECEB0' }}
                >
                  <p className="font-display text-2xl font-bold" style={{ color: '#452D18' }}>
                    {stat.value}
                  </p>
                  <p className="font-body text-xs mt-1" style={{ color: '#6B5A47' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5355442454?text=Hola%20Neicy'Styles%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white"
              style={{ background: '#452D18', fontFamily: "'Lato', sans-serif" }}
            >
              Conoce nuestros servicios
              <ArrowIcon />
            </a>
          </div>

          {/* IMAGE COLLAGE COLUMN — debajo en móvil, derecha en desktop */}
          <div
            className="relative w-full lg:w-[45%] fade-in-up"
            style={{ minHeight: '380px' }}
          >
            {/* Fondo decorativo */}
            <div
              className="absolute -top-4 -left-4 w-3/4 h-3/4 rounded-2xl"
              style={{ background: '#DECEB0', zIndex: 0 }}
            />

            {/* Imagen principal */}
            <div
              className="absolute top-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-2xl"
              style={{ zIndex: 1, height: '300px' }}
            >
              <img
                src="https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380334/10_hdk0va.jpg"
                alt="Resultado de coloración"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagen secundaria derecha */}
            <div
              className="absolute top-8 right-0 w-2/5 rounded-2xl overflow-hidden shadow-xl"
              style={{ zIndex: 2, height: '200px' }}
            >
              <img
                src="https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380329/3_xdqcm3.jpg"
                alt="Keratina resultado"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagen tercera abajo derecha */}
            <div
              className="absolute bottom-0 right-4 w-2/5 rounded-2xl overflow-hidden shadow-xl"
              style={{ zIndex: 2, height: '160px' }}
            >
              <img
                src="https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380326/2_hfsoip.jpg"
                alt="Botox capilar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo badge */}
            <div
              className="absolute -bottom-4 left-8 rounded-2xl p-4 shadow-xl"
              style={{ background: '#452D18', zIndex: 3 }}
            >
              <img
                src="https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781472424/Logo_Sal_n_Neicy_Style_asfyi5.png"
                alt="Neicy'Styles"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute bottom-12 -right-2 rounded-xl p-4 shadow-xl text-center"
              style={{ background: '#AA977D', zIndex: 4, minWidth: '120px' }}
            >
              <p className="font-display text-2xl font-bold text-white">5+</p>
              <p className="font-body text-xs text-white/90 mt-0.5">Años en La Habana</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}