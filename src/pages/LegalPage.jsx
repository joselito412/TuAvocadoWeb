import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LegalPage() {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-block" style={{ minHeight: '50vh', textAlign: 'center', background: 'var(--gradient-hero)' }}>
        <div className="content-wrapper">
          <span className="eyebrow">TRANSPARENCIA LEGAL</span>
          <h1 style={{ marginBottom: '30px' }}>Información Legal</h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Tu privacidad y seguridad son nuestra prioridad. Conoce cómo manejamos tus datos y los términos de nuestros servicios.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section style={{ background: 'white', borderBottom: '1px solid #eee', position: 'sticky', top: '80px', zIndex: 100 }}>
        <div className="content-wrapper">
          <div style={{ display: 'flex', gap: '30px', padding: '20px 0', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#datos-personales" style={{ color: 'var(--color-dark)', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.3s' }}>
              Datos Personales
            </a>
            <a href="#terminos" style={{ color: 'var(--color-dark)', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.3s' }}>
              Términos y Condiciones
            </a>
            <a href="#privacidad" style={{ color: 'var(--color-dark)', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.3s' }}>
              Política de Privacidad
            </a>
          </div>
        </div>
      </section>

      {/* Datos Personales Section */}
      <section id="datos-personales" className="section-block" style={{ padding: '80px 0' }}>
        <div className="content-wrapper" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '30px' }}>
            <i className="fas fa-user-shield" style={{ color: 'var(--color-primary)', marginRight: '15px' }}></i>
            Protección de Datos Personales
          </h2>
          
          <div style={{ background: '#E8F5E9', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid var(--color-primary)' }}>
            <p style={{ margin: 0, fontWeight: '600' }}>
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, TuAvocado se compromete a proteger tus datos personales.
            </p>
          </div>

          <h3>¿Qué datos recopilamos?</h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Información de identificación (nombre, cédula, correo electrónico)</li>
            <li>Datos de contacto (teléfono, dirección)</li>
            <li>Información profesional (empresa, cargo) para clientes B2B</li>
            <li>Historial de consultas legales y documentos generados</li>
          </ul>

          <h3 style={{ marginTop: '40px' }}>¿Cómo usamos tus datos?</h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Proveer servicios de asesoría legal personalizada</li>
            <li>Mejorar nuestros algoritmos de IA mediante aprendizaje automático</li>
            <li>Comunicaciones relacionadas con tu caso o servicio</li>
            <li>Cumplimiento de obligaciones legales y regulatorias</li>
          </ul>

          <h3 style={{ marginTop: '40px' }}>Tus Derechos</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Tienes derecho a conocer, actualizar, rectificar y suprimir tus datos personales. Para ejercer estos derechos, 
            contáctanos en <strong>datospersonales@avocado.legal</strong>
          </p>
        </div>
      </section>

      {/* Términos y Condiciones Section */}
      <section id="terminos" className="section-block" style={{ background: 'white', padding: '80px 0' }}>
        <div className="content-wrapper" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '30px' }}>
            <i className="fas fa-file-contract" style={{ color: 'var(--color-secondary)', marginRight: '15px' }}></i>
            Términos y Condiciones de Uso
          </h2>
          
          <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '30px' }}>
            Última actualización: Enero 2025
          </p>

          <h3>1. Aceptación de los Términos</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Al acceder y usar los servicios de TuAvocado, aceptas estar sujeto a estos términos y condiciones. 
            Si no estás de acuerdo, no utilices nuestros servicios.
          </p>

          <h3 style={{ marginTop: '40px' }}>2. Descripción del Servicio</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            TuAvocado es una plataforma de asesoría legal impulsada por IA que:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Proporciona orientación legal general basada en normativa colombiana y estadounidense</li>
            <li>Genera documentos legales estandarizados</li>
            <li>Conecta usuarios con abogados certificados para casos complejos</li>
            <li><strong>NO sustituye</strong> el asesoramiento legal personalizado de un abogado licenciado</li>
          </ul>

          <h3 style={{ marginTop: '40px' }}>3. Limitaciones de Responsabilidad</h3>
          <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--color-accent)' }}>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              <strong>IMPORTANTE:</strong> La IA de TuAvocado proporciona información legal general. 
              Para decisiones legales críticas, siempre consulta con un abogado certificado. No nos hacemos responsables 
              por decisiones tomadas exclusivamente basadas en respuestas automatizadas.
            </p>
          </div>

          <h3 style={{ marginTop: '40px' }}>4. Propiedad Intelectual</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Todos los documentos generados son propiedad del usuario. La tecnología, marca y contenidos de la plataforma 
            son propiedad exclusiva de TuAvocado SAS.
          </p>

          <h3 style={{ marginTop: '40px' }}>5. Modificaciones</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos 
            serán notificados por correo electrónico.
          </p>
        </div>
      </section>

      {/* Política de Privacidad Section */}
      <section id="privacidad" className="section-block" style={{ padding: '80px 0' }}>
        <div className="content-wrapper" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '30px' }}>
            <i className="fas fa-lock" style={{ color: 'var(--color-primary)', marginRight: '15px' }}></i>
            Política de Privacidad
          </h2>

          <h3>Cookies y Tecnologías de Rastreo</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Utilizamos cookies esenciales para el funcionamiento de la plataforma, cookies analíticas (Google Analytics) 
            para mejorar la experiencia del usuario, y cookies de preferencias para recordar tus configuraciones.
          </p>

          <h3 style={{ marginTop: '40px' }}>Seguridad de la Información</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Implementamos medidas de seguridad robustas:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Cifrado end-to-end (TLS 1.3) para todas las comunicaciones</li>
            <li>Almacenamiento encriptado de datos sensibles (AES-256)</li>
            <li>Auditorías de seguridad trimestrales</li>
            <li>Acceso restringido a datos bajo principio de mínimo privilegio</li>
          </ul>

          <h3 style={{ marginTop: '40px' }}>Compartir con Terceros</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            <strong>NO vendemos</strong> tus datos personales. Solo compartimos información con:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Abogados asignados a tu caso (con tu consentimiento)</li>
            <li>Proveedores de servicios esenciales (hosting, pagos) bajo acuerdos de confidencialidad</li>
            <li>Autoridades judiciales cuando sea legalmente requerido</li>
          </ul>

          <h3 style={{ marginTop: '40px' }}>Retención de Datos</h3>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Conservamos tus datos mientras mantengas una cuenta activa o según lo requiera la ley. 
            Puedes solicitar la eliminación de tu cuenta y datos asociados en cualquier momento.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-block" style={{ background: 'var(--color-light)', padding: '60px 0', textAlign: 'center' }}>
        <div className="content-wrapper">
          <h3 style={{ marginBottom: '20px' }}>¿Tienes preguntas sobre nuestras políticas?</h3>
          <p style={{ marginBottom: '30px', color: '#666' }}>
            Nuestro equipo legal está disponible para aclarar cualquier duda
          </p>
          <button className="btn-primary">
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
}

export default LegalPage;
