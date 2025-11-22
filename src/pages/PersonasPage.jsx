import React from 'react';

function PersonasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-block" id="personas-hero" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="content-wrapper">
          <span className="eyebrow">SOLUCIONES PERSONALIZADAS</span>
          <h1 style={{ marginBottom: '30px' }}>Soluciones para Cada Cliente</h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Entendemos que cada cliente tiene necesidades únicas. Por eso ofrecemos servicios adaptados a tres segmentos clave.
          </p>
        </div>
      </section>

      {/* B2C Section */}
      <section className="section-block" style={{ background: 'white', padding: '100px 0' }}>
        <div className="content-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">PERSONAS NATURALES</span>
              <h2>Consumidores Finales</h2>
              <div style={{ background: '#FFEBEE', padding: '20px', borderRadius: '12px', marginTop: '20px', borderLeft: '4px solid #D32F2F' }}>
                <h4 style={{ margin: '0 0 10px', color: '#C62828' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                  El Dolor Principal
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Alto costo y complejidad percibida para resolver asuntos que, en esencia, son sencillos o recurrentes.
                </p>
              </div>
            </div>
            
            <div>
              <div style={{ background: '#E8F5E9', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--color-primary)' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                  Nuestra Solución
                </h3>
                <p style={{ marginBottom: '20px' }}>Consultas personales asequibles y trámites estandarizados que resuelven tus necesidades legales sin complicaciones.</p>
                
                <h4 style={{ marginBottom: '15px' }}>Casos de Uso:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                    <i className="fas fa-briefcase" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                    <strong>Asuntos Laborales:</strong> Despidos injustificados, liquidaciones, acoso laboral
                  </li>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                    <i className="fas fa-shopping-cart" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                    <strong>Derechos del Consumidor:</strong> Productos defectuosos, garantías, PQR
                  </li>
                  <li style={{ padding: '10px 0' }}>
                    <i className="fas fa-home" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                    <strong>Contratos de Arrendamiento:</strong> Revisión, redacción, disputas
                  </li>
                </ul>
                
                <button className="btn-primary" style={{ marginTop: '30px' }}>
                  <i className="fas fa-comment-dots" style={{ marginRight: '8px' }}></i>
                  Consulta Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="section-block" style={{ background: 'var(--gradient-hero)', padding: '100px 0' }}>
        <div className="content-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--color-secondary)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--color-secondary)' }}>
                  <i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>
                  Nuestra Solución
                </h3>
                <p style={{ marginBottom: '20px' }}>Servicios mercantiles, laborales, de propiedad intelectual y regulatorios ágiles que aceleran tu crecimiento.</p>
                
                <h4 style={{ marginBottom: '15px' }}>Casos de Uso:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <i className="fas fa-building" style={{ color: 'var(--color-secondary)', marginRight: '10px' }}></i>
                    <strong>Constitución SAS:</strong> Formalización empresarial en 48 horas
                  </li>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <i className="fas fa-file-signature" style={{ color: 'var(--color-secondary)', marginRight: '10px' }}></i>
                    <strong>Contratos Comerciales:</strong> Acuerdos de confidencialidad, servicios, distribución
                  </li>
                  <li style={{ padding: '10px 0' }}>
                    <i className="fas fa-shield-alt" style={{ color: 'var(--color-secondary)', marginRight: '10px' }}></i>
                    <strong>Compliance y Regulatorio:</strong> RGPD, LOPD, normativas sectoriales
                  </li>
                </ul>
                
                <button className="btn-primary" style={{ marginTop: '30px', background: 'var(--color-secondary)' }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i>
                  Agenda Demo
                </button>
              </div>
            </div>
            
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-secondary)' }}>PYMES & STARTUPS</span>
              <h2>Empresas</h2>
              <div style={{ background: 'rgba(21, 101, 192, 0.1)', padding: '20px', borderRadius: '12px', marginTop: '20px', borderLeft: '4px solid var(--color-secondary)' }}>
                <h4 style={{ margin: '0 0 10px', color: 'var(--color-secondary)' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                  El Dolor Principal
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Lentitud en la formalización de procesos clave (que frena el crecimiento) y el alto costo recurrente de la asesoría tradicional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B2C Section */}
      <section className="section-block" style={{ background: 'white', padding: '100px 0' }}>
        <div className="content-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>PLATAFORMAS & AGENCIAS</span>
              <h2>Intermediarios</h2>
              <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', marginTop: '20px', borderLeft: '4px solid var(--color-accent)' }}>
                <h4 style={{ margin: '0 0 10px', color: '#E65100' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                  El Dolor Principal
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Necesidad de externalizar y automatizar el compliance legal de sus servicios sin tener que desarrollar infraestructura propia.
                </p>
              </div>
            </div>
            
            <div>
              <div style={{ background: '#FFF8E1', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--color-accent)' }}>
                  <i className="fas fa-plug" style={{ marginRight: '10px' }}></i>
                  Nuestra Solución
                </h3>
                <p style={{ marginBottom: '20px' }}>Integración legal White Label para dar soporte a tus propios clientes sin infraestructura propia.</p>
                
                <h4 style={{ marginBottom: '15px' }}>Casos de Uso:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                    <i className="fas fa-bullhorn" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i>
                    <strong>Agencias de Marketing:</strong> Servicio legal para clientes corporativos
                  </li>
                  <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                    <i className="fas fa-network-wired" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i>
                    <strong>Plataformas de Servicios:</strong> Compliance automatizado vía API
                  </li>
                  <li style={{ padding: '10px 0' }}>
                    <i className="fas fa-building" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i>
                    <strong>Inmobiliarias:</strong> Contratos y documentación legal integrada
                  </li>
                </ul>
                
                <button className="btn-primary" style={{ marginTop: '30px' }}>
                  <i className="fas fa-code" style={{ marginRight: '8px' }}></i>
                  Documentación API
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-block" style={{ background: 'var(--color-dark)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="content-wrapper">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>¿Listo para simplificar tu experiencia legal?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#ccc' }}>
            Únete a cientos de clientes que ya confían en Avocado
          </p>
          <button className="btn-primary">
            Comienza Ahora
          </button>
        </div>
      </section>
    </div>
  );
}

export default PersonasPage;
