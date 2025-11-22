import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import AIChat from '../components/AIChat';
import PhoneWrapper from '../components/PhoneWrapper';
import { PhoneHome, PhoneDocs, PhoneDashboard, PhoneLawyers, PhonePricing } from '../components/PhoneScreens';
import DocExplorer from '../components/DocExplorer';
import SocialImpact from '../components/SocialImpact';
import useScrollSpy from '../hooks/useScrollSpy';

function HomePage() {
  // IDs de las secciones que queremos trackear
  const sectionIds = ['hero', 'features', 'automation', 'specialized', 'subscriptions', 'social-impact', 'consultancy', 'blog'];
  const activeSection = useScrollSpy(sectionIds, 300);

  return (
    <>
      <div className="split-layout">
        {/* COLUMNA IZQUIERDA: CONTENIDO SCROLLABLE */}
        <div className="scroll-content">
          
          <header className="section-block" id="hero">
            <div className="text-content">
              <span className="eyebrow">TU ABOGADO DE BOLSILLO</span>
              <h1>Orientación legal profesional al alcance de tu mano</h1>
              <p className="lead-text">El futuro legal, simplificado y accesible desde tu celular.</p>

              <div style={{ marginTop: '30px' }}>
                 <img src="/img/hombre3d.png" alt="Asistente Virtual" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
              </div>
            </div>
            <div className="mobile-phone-display">
              <div className="phone-mockup-mobile">
                <PhoneHome />
              </div>
            </div>
          </header>

          <section className="section-block" id="features">
            <div className="text-content">
              <span className="eyebrow">DOCUMENTACIÓN INTELIGENTE</span>
              <h2>Crea documentos para ti y tu empresa</h2>
              <p>TuAvocado se encarga del trabajo repetitivo. Genera contratos y documentos legales en minutos.</p>
              
              <DocExplorer />

            </div>
            <div className="mobile-phone-display">
              <div className="phone-mockup-mobile">
                <PhoneDocs />
              </div>
            </div>
          </section>

          <section className="section-block" id="automation">
            <div className="text-content">
              <span className="eyebrow">GESTIÓN EFICIENTE</span>
              <h2>Gestiona tus servicios en el Tablero privado</h2>
              <p>Un espacio organizado tipo Notion para llevar el control total de tus procesos.</p>
              <div className="dashboard-cards-container">
                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <span>Seguimiento de casos en tiempo real</span>
                </div>
                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <i className="fas fa-bell"></i>
                  </div>
                  <span>Notificaciones de estado</span>
                </div>
                <div className="dashboard-card">
                  <div className="card-icon-wrapper">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>Archivo digital seguro</span>
                </div>
              </div>
            </div>
            <div className="mobile-phone-display">
              <div className="phone-mockup-mobile">
                <PhoneDashboard />
              </div>
            </div>
          </section>

          <section className="section-block" id="specialized">
            <div className="text-content">
              <span className="eyebrow">MARKETPLACE LEGAL</span>
              <h2>¿Necesitas un abogado especializado?</h2>
              <p>Te conectamos con <strong>profesionales verificados</strong> en múltiples jurisdicciones.</p>
              
              <div className="flag-carousel" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                <div className="flag-item" title="Colombia">
                   <img src="https://flagcdn.com/w80/co.png" alt="Colombia" style={{ width: '40px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                   <span style={{ display: 'block', fontSize: '0.8rem', marginTop: '5px' }}>Colombia</span>
                </div>
                <div className="flag-item" title="USA">
                   <img src="https://flagcdn.com/w80/us.png" alt="USA" style={{ width: '40px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                   <span style={{ display: 'block', fontSize: '0.8rem', marginTop: '5px' }}>USA</span>
                </div>
              </div>
            </div>
            <div className="mobile-phone-display">
              <div className="phone-mockup-mobile">
                <PhoneLawyers />
              </div>
            </div>
          </section>

          <section className="section-block" id="subscriptions">
            <div className="text-content">
              <span className="eyebrow">PLANES FLEXIBLES</span>
              <h2>Suscripciones</h2>
              <p>Elige el nivel de acompañamiento que necesitas.</p>
              
              <div className="pricing-cards-container">
                {/* Plan Free */}
                <div className="pricing-card">
                  <div className="plan-header">
                    <h3>Free</h3>
                    <div className="price">$0</div>
                  </div>
                  <ul className="plan-features">
                    <li><i className="fas fa-robot"></i> Consultas Limitadas</li>
                    <li className="disabled"><i className="fas fa-file-contract"></i> Sin Documentos</li>
                    <li className="disabled"><i className="fas fa-user-tie"></i> Sin Abogado</li>
                  </ul>
                </div>

                {/* Plan Junior */}
                <div className="pricing-card popular">
                  <div className="popular-badge">Recomendado</div>
                  <div className="plan-header">
                    <h3>Junior</h3>
                    <div className="price">$15</div>
                  </div>
                  <ul className="plan-features">
                    <li><i className="fas fa-robot"></i> <strong>IA Ilimitada</strong></li>
                    <li><i className="fas fa-file-contract"></i> Generación Docs</li>
                    <li className="disabled"><i className="fas fa-user-tie"></i> Sin Abogado</li>
                  </ul>
                </div>

                {/* Plan Senior */}
                <div className="pricing-card premium">
                  <div className="plan-header">
                    <h3>Senior</h3>
                    <div className="price">$100</div>
                  </div>
                  <ul className="plan-features">
                    <li><i className="fas fa-robot"></i> IA Ilimitada</li>
                    <li><i className="fas fa-file-contract"></i> Docs Premium</li>
                    <li><i className="fas fa-user-tie"></i> <strong>Abogado Humano</strong></li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="mobile-phone-display">
              <div className="phone-mockup-mobile">
                <PhonePricing />
              </div>
            </div>
          </section>

        </div>

        {/* COLUMNA DERECHA: CELULAR STICKY */}
        <div className="sticky-column">
          <div className="sticky-wrapper">
            <PhoneWrapper activeSection={activeSection} />
          </div>
        </div>
      </div>

      {/* SECCIONES FULL WIDTH (SIN CELULAR) */}
      
      <section className="section-block section-consultancy-full" id="consultancy">
         <div className="content-wrapper" style={{ textAlign: 'center', maxWidth: '900px' }}>
            <span className="eyebrow">ASISTENCIA INTELIGENTE</span>
            <h2 style={{ marginBottom: '20px' }}>Consultorio Jurídico IA</h2>
            <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto 40px' }}>
              Obtén orientación legal instantánea con nuestro asistente de IA. Haz preguntas sobre contratos, derechos laborales, tutelas y más. Disponible 24/7 para resolver tus dudas legales.
            </p>
            
            <AIChat />
         </div>
      </section>

      <div className="content-wrapper">
        <SocialImpact />
      </div>

      <section className="section-block" id="blog" style={{ minHeight: 'auto', textAlign: 'center' }}>
         <div className="text-content" style={{ margin: '0 auto' }}>
            <h2>Blog Legal-Tech</h2>
            <p>Últimas noticias y actualizaciones.</p>
         </div>
      </section>

    </>
  );
}

export default HomePage;
