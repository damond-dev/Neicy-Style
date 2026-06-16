/**
 * Gallery.tsx — Neicy'Styles
 * Carrusel horizontal con scroll lateral y subida de imágenes.
 */

import { useState, useEffect, useRef } from 'react';

const DEFAULT_IMAGES = [
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

const CLOUD_NAME = 'dsqjvn7xw';
const UPLOAD_PRESET = 'neicy_gallery';
const PASSWORD = 'neicy2024';
const STORAGE_KEY = 'neicy_gallery_images';

export default function Gallery() {
  const [uploadedImages, setUploadedImages] = useState<{ src: string; alt: string }[]>([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showActionPanel, setShowActionPanel] = useState(false);
  const [showUploadInput, setShowUploadInput] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [uploading, setUploading] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [...uploadedImages, ...DEFAULT_IMAGES];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUploadedImages(parsed);
      } catch {
        setUploadedImages([]);
      }
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [uploadedImages]);

  const handlePasswordSubmit = () => {
    if (password === PASSWORD) {
      setShowPasswordModal(false);
      setShowActionPanel(true);
      setPassword('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPassword('');
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        const newImage = { src: data.secure_url, alt: 'Nueva imagen' };
        setUploadedImages((prev) => {
          const updated = [newImage, ...prev];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          return updated;
        });
      }
    } catch (err) {
      console.error('Error subiendo imagen:', err);
      alert('Error al subir la imagen. Inténtalo de nuevo.');
    } finally {
      setUploading(false);
      setShowUploadInput(false);
      setShowActionPanel(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
  };

  const handleDeleteImage = (src: string) => {
    setUploadedImages((prev) => {
      const updated = prev.filter((img) => img.src !== src);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handleEnterEditMode = () => {
    setEditMode(true);
    setShowActionPanel(false);
  };

  const handleExitEditMode = () => {
    setEditMode(false);
  };

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
          ref={carouselRef}
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
          {images.map((img, index) => {
            const isUploaded = index < uploadedImages.length;
            return (
              <div
                key={img.src}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '350px',
                  scrollSnapAlign: 'start',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
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
                {editMode && isUploaded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage(img.src);
                    }}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#D32F2F',
                      color: '#fff',
                      border: 'none',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: 1,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      zIndex: 10,
                    }}
                    aria-label="Eliminar imagen"
                  >
                    ×
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Fila: indicador scroll + botón + / salir edición */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
          }}
        >
          <p className="text-sm" style={{ color: '#AA977D' }}>
            {editMode ? 'Modo edición: toca la X para eliminar' : '← Desliza para ver más →'}
          </p>
          {editMode ? (
            <button
              onClick={handleExitEditMode}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#D32F2F',
                color: '#F8F7F4',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                boxShadow: '0 2px 8px rgba(211, 47, 47, 0.3)',
              }}
              aria-label="Salir del modo edición"
            >
              ✕
            </button>
          ) : (
            <button
              onClick={() => setShowPasswordModal(true)}
              style={{
                width: '200px',
                height: '44px',
                borderRadius: '60%',
                background: '#452D18',
                color: '#F8F7F4',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                boxShadow: '0 2px 8px rgba(69, 45, 24, 0.2)',
              }}
              aria-label="Personalizar galería"
            >
              Personalizar
            </button>
          )}
        </div>
      </div>

      {/* Modal contraseña */}
      {showPasswordModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
          onClick={() => setShowPasswordModal(false)}
        >
          <div
            style={{
              background: '#F8F7F4',
              padding: '24px',
              borderRadius: '16px',
              width: '90%',
              maxWidth: '320px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: '#452D18', marginBottom: '16px', fontSize: '1.25rem' }}>
              Acceso a la galería
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Contraseña"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: `1px solid ${passwordError ? '#D32F2F' : '#AA977D'}`,
                fontSize: '1rem',
                marginBottom: '12px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
              autoFocus
            />
            {passwordError && (
              <p style={{ color: '#D32F2F', fontSize: '0.875rem', marginBottom: '12px' }}>
                Contraseña incorrecta
              </p>
            )}
            <button
              onClick={handlePasswordSubmit}
              disabled={!password.trim()}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: '#452D18',
                color: '#F8F7F4',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: password.trim() ? 'pointer' : 'not-allowed',
                opacity: password.trim() ? 1 : 0.6,
              }}
            >
              Acceder
            </button>
          </div>
        </div>
      )}

      {/* Panel de acciones (tras contraseña correcta) */}
      {showActionPanel && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
          onClick={() => setShowActionPanel(false)}
        >
          <div
            style={{
              background: '#F8F7F4',
              padding: '24px',
              borderRadius: '16px',
              width: '90%',
              maxWidth: '320px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: '#452D18', marginBottom: '20px', fontSize: '1.25rem' }}>
              Personalizar galería
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowActionPanel(false);
                  setShowUploadInput(true);
                }}
                style={{
                  padding: '16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#452D18',
                  color: '#F8F7F4',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>+</span> Añadir foto
              </button>
              <button
                onClick={handleEnterEditMode}
                style={{
                  padding: '16px',
                  borderRadius: '10px',
                  border: '2px solid #D32F2F',
                  background: 'transparent',
                  color: '#D32F2F',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>🗑</span> Eliminar foto
              </button>
              <button
                onClick={() => setShowActionPanel(false)}
                style={{
                  marginTop: '8px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #AA977D',
                  background: 'transparent',
                  color: '#452D18',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal subida de imagen */}
      {showUploadInput && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
          onClick={() => setShowUploadInput(false)}
        >
          <div
            style={{
              background: '#F8F7F4',
              padding: '24px',
              borderRadius: '16px',
              width: '90%',
              maxWidth: '320px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: '#452D18', marginBottom: '16px', fontSize: '1.25rem' }}>
              Subir foto
            </h3>
            <p style={{ color: '#6B5B4F', marginBottom: '16px', fontSize: '0.9rem' }}>
              Selecciona una imagen desde tu teléfono
            </p>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              disabled={uploading}
              style={{ display: 'none' }}
              id="gallery-file-input"
              ref={(el) => el?.click()}
            />
            <label
              htmlFor="gallery-file-input"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                borderRadius: '8px',
                background: uploading ? '#AA977D' : '#452D18',
                color: '#F8F7F4',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: uploading ? 'not-allowed' : 'pointer',
                opacity: uploading ? 0.7 : 1,
              }}
            >
              {uploading ? 'Subiendo...' : 'Elegir foto'}
            </label>
            <button
              onClick={() => setShowUploadInput(false)}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #AA977D',
                background: 'transparent',
                color: '#452D18',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}