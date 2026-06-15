/**
 * Gallery.tsx — Neicy'Styles
 * Carrusel horizontal con scroll lateral.
 */

const IMAGES = [
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380334/10_hdk0va.jpg', alt: 'Coloración profesional' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380335/12_iogh1b.jpg', alt: 'Keratina' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380334/11_fugawz.jpg', alt: 'Botox capilar' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380334/WhatsApp_Image_2026-06-13_at_3.28.31_PM_pf4slo.jpg', alt: 'Transformación' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380329/3_xdqcm3.jpg', alt: 'Corte' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380329/13_urfemc.jpg', alt: 'Peinado elegante' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380326/7_qckwb3.jpg', alt: 'Cabello brillante' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380326/2_hfsoip.jpg', alt: 'Hidratación profunda' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380326/9_ybtm7c.jpg', alt: 'Resultado final' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380326/1_zjs2ds.jpg', alt: 'Antes y después' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380321/6_lpaf7n.jpg', alt: 'Tratamiento capilar' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380321/5_zsbwy3.jpg', alt: 'Coloración' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380318/8_fhkwcb.jpg', alt: 'Corte moderno' },
  { src: 'https://res.cloudinary.com/dsqjvn7xw/image/upload/v1781380318/4_uqw9sz.jpg', alt: 'Cabello saludable' },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-14 md:py-24"
      style={{ background: '#F8F7F4' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="section-subtitle mb-2 md:mb-3" style={{ color: '#AA977D' }}>Nuestro trabajo</p>
          <h2 className="section-title mb-3 md:mb-4 text-3xl md:text-5xl" style={{ color: '#452D18' }}>
            Galería de Resultados
          </h2>
          <div
            className="mx-auto w-16 md:w-20 h-px mb-3 md:mb-5"
            style={{ background: 'linear-gradient(90deg, transparent, #AA977D, transparent)' }}
          />
        </div>

        {/* Carrusel horizontal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            gap: '16px',
            paddingBottom: '12px',
            cursor: 'grab',
          }}
        >
          {IMAGES.map((img) => (
            <div
              key={img.src}
              style={{
                flexShrink: 0,
                width: '280px',
                height: '350px',
                scrollSnapAlign: 'start',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <p className="text-center mt-4 text-sm" style={{ color: '#AA977D' }}>
          ← Desliza para ver más →
        </p>
      </div>
    </section>
  );
}