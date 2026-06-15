/**
 * Products.tsx — Neicy'Styles
 * Diseño: Artesanía Cálida — tarjetas premium de productos profesionales.
 * Paleta: fondo #452D18 oscuro, tarjetas crema con hover elegante.
 */

const PRODUCTS = [
  {
    image: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781472447/WhatsApp_Image_2026-06-14_at_1.28.42_PM_ddfwka.jpg',
    name: 'Tratamiento Profesional',
    description: 'Línea de productos de alta concentración para tratamientos intensivos de recuperación capilar.',
    benefits: ['Recuperación profunda', 'Brillo intenso', 'Fórmula profesional'],
  },
  {
    image: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781472447/WhatsApp_Image_2026-06-14_at_1.28.37_PM_mwqerl.jpg',
    name: 'Keratina Premium',
    description: 'Productos de keratina de última generación para un alisado duradero y sin daño capilar.',
    benefits: ['Alisado duradero', 'Sin formol opcional', 'Hidratación máxima'],
  },
  {
    image: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781472448/WhatsApp_Image_2026-06-14_at_1.28.32_PM_xpioe7.jpg',
    name: 'Línea Reconstructora',
    description: 'Ampolla Semi Di Lino y tratamientos especializados para la restauración total del cabello.',
    benefits: ['Reconstrucción total', 'Semi Di Lino', 'Resultados visibles'],
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="py-14 md:py-24"
      style={{ background: '#DECEB0' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 px-4">
          <p
            className="fade-in-up font-body text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-3"
            style={{ color: '#AA977D' }}
          >
            Calidad garantizada
          </p>
          <h2
            className="fade-in-up font-display text-3xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ color: '#452D18' }}
          >
            Productos <span style={{ color: '#6B4226' }}>Profesionales</span>
          </h2>
          <div
            className="fade-in-up mx-auto w-16 md:w-20 h-px mb-3 md:mb-5"
            style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
          />
          <p
            className="fade-in-up font-body text-xs md:text-base max-w-xl mx-auto"
            style={{ color: '#6B5A47' }}
          >
            Trabajamos exclusivamente con productos de alta gama para garantizar
            resultados excepcionales y duraderos en cada servicio.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  delay,
}: {
  product: (typeof PRODUCTS)[0];
  delay: number;
}) {
  return (
    <div
      className="fade-in-up group rounded-lg md:rounded-2xl overflow-hidden shadow-lg transition-all duration-350 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl"
      style={{
        background: '#FFFFFF',
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(170,151,125,0.2)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 md:h-56">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          style={{ objectPosition: 'center center' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(69,45,24,0.4) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3
          className="font-display text-base md:text-xl font-bold mb-2"
          style={{ color: '#452D18' }}
        >
          {product.name}
        </h3>
        <p
          className="font-body text-xs md:text-sm leading-relaxed mb-3 md:mb-4"
          style={{ color: '#6B5A47' }}
        >
          {product.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
          {product.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 font-body text-xs md:text-sm"
              style={{ color: '#452D18' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#AA977D' }}
              />
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/5355442454?text=Hola%20Neicy'Styles%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20el%20producto%20${encodeURIComponent(product.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold transition-all duration-200 hover:gap-3"
          style={{ color: '#AA977D' }}
        >
          Consultar disponibilidad
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
