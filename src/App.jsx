import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import AIChat from './components/AIChat';
import PhoneWrapper from './components/PhoneWrapper';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  // IDs de las secciones que queremos trackear
  const sectionIds = ['hero', 'features', 'specialized', 'automation', 'subscriptions', 'consultancy', 'blog'];
  const activeSection = useScrollSpy(sectionIds, 300); // 300px offset para mejor detección

  return (
    <>
      <nav className="main-nav">
        <div className="nav-content-wrapper">
          <div className="nav-brand">
            <img src="/img/logo.png" alt="AVO Logo" className="avocado-logo-img" />
          </div>
          <ul className="nav-links">
            <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Inicio</a></li>
            <li><a href="#features" className={activeSection === 'features' ? 'active' : ''}>Servicios</a></li>
            <li><a href="#specialized" className={activeSection === 'specialized' ? 'active' : ''}>Abogados</a></li>
            <li><a href="#subscriptions" className={activeSection === 'subscriptions' ? 'active' : ''}>Planes</a></li>
          </ul>
          <button className="btn-login">Log In</button>
        </div>
      </nav>

      <div className="split-layout">
        {/* COLUMNA IZQUIERDA: CONTENIDO SCROLLABLE */}
        <div className="scroll-content">
          
          <header className="section-block" id="hero">
            <div className="text-content">
              <h1>Orientación legal profesional al alcance de tu bolsillo</h1>
              <p className="lead-text">El Futuro Legal en la comodidad de tu Celular.</p>
              <button className="btn-primary">Descargar App</button>
            </div>
          </header>

          <section className="section-block" id="features">
            <div className="text-content">
              <h2>Crea documentos para ti y tu empresa</h2>
              <p>TuAvocado se encarga del trabajo repetitivo. Genera documentos legales en minutos.</p>
              <div className="features-list">
                <div className="feature-item-text">✓ Nuevos contratos</div>
                <div className="feature-item-text">✓ Derecho de petición</div>
                <div className="feature-item-text">✓ PQR de consumidor</div>
              </div>
            </div>
          </section>

          <section className="section-block" id="automation">
            <div className="text-content">
              <h2>Gestiona tus servicios en el Tablero privado</h2>
              <p>Mantén el control de todos tus procesos legales en un solo lugar.</p>
              <ul className="text-list">
                <li>Seguimiento de casos en tiempo real</li>
                <li>Notificaciones de estado</li>
                <li>Archivo digital seguro</li>
              </ul>
            </div>
          </section>

          <section className="section-block" id="specialized">
            <div className="text-content">
              <h2>¿Necesitas un abogado especializado?</h2>
              <p>Te conectamos con <strong>profesionales verificados</strong> listos para atender tu caso específico.</p>
              <div className="flag-identifier" style={{ marginTop: '20px' }}>
                <img src="/img/colombia-flag.png" alt="Bandera de Colombia" className="flag-img" />
                <span>Cobertura Nacional</span>
              </div>
            </div>
          </section>

          <section className="section-block" id="subscriptions">
            <div className="text-content">
              <h2>Suscripciones</h2>
              <p>Elige el plan que se ajusta a tus necesidades.</p>
              
              <div className="pricing-table-text">
                <div className="pricing-row">
                  <strong>Free</strong> <span>$0</span>
                  <p>Orientación básica con IA</p>
                </div>
                <div className="pricing-row highlight">
                  <strong>Junior</strong> <span>$15</span>
                  <p>IA Ilimitada + Documentos</p>
                </div>
                <div className="pricing-row">
                  <strong>Senior</strong> <span>$100</span>
                  <p>Soporte humano supervisado</p>
                </div>
              </div>
            </div>
          </section>

          {/* Secciones Full Width (fuera del flujo del celular sticky si se desea, o integradas) */}
          {/* Por ahora las mantenemos en el flujo para que el scroll siga funcionando */}
          
          <section className="section-block" id="consultancy" style={{ minHeight: 'auto', padding: '60px 0' }}>
             <div className="text-content" style={{ width: '100%' }}>
                <h2>Consultorio Jurídico IA</h2>
                <AIChat />
             </div>
          </section>

          <section className="section-block" id="blog" style={{ minHeight: 'auto' }}>
             <div className="text-content">
                <h2>Blog Legal-Tech</h2>
                <p>Últimas noticias y actualizaciones.</p>
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

      <footer>
        <div className="content-wrapper">
          <p className="copyright">&copy; 2024 - 2025, <strong>AVOCADO</strong>. All right reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}

export default App;
