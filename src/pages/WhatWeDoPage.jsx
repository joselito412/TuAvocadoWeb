import React from 'react';

function WhatWeDoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-block" id="what-hero" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="content-wrapper">
          <span className="eyebrow">NUESTRA MISIÓN</span>
          <h1 style={{ marginBottom: '30px' }}>¿Qué es Avocado?</h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Somos la primera plataforma legal impulsada por Inteligencia Artificial que democratiza el acceso a la justicia.
            Combinamos tecnología de vanguardia con supervisión de abogados certificados para ofrecer asesoría legal accesible, rápida y confiable.
          </p>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="section-block" style={{ background: 'white', padding: '80px 0' }}>
        <div className="content-wrapper">
          <span className="eyebrow">TECNOLOGÍA RAG</span>
          <h2>Cómo funciona nuestra IA</h2>
          <div className="dashboard-cards-container" style={{ marginTop: '40px' }}>
            <div className="dashboard-card">
              <div className="card-icon-wrapper">
                <i className="fas fa-brain"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px', color: 'var(--color-dark)' }}>Procesamiento Inteligente</h4>
                <span>Tecnología RAG (Retrieval-Augmented Generation) que consulta bases de datos legales actualizadas en tiempo real.</span>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="card-icon-wrapper">
                <i className="fas fa-gavel"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px', color: 'var(--color-dark)' }}>Supervisión Profesional</h4>
                <span>Todas las respuestas son revisadas por abogados certificados antes de ser entregadas en casos críticos.</span>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="card-icon-wrapper">
                <i className="fas fa-shield-check"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px', color: 'var(--color-dark)' }}>Precisión Garantizada</h4>
                <span>Mantenemos una tasa de precisión superior al 95% gracias a nuestro entrenamiento continuo con normativa colombiana.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-block" style={{ padding: '80px 0' }}>
        <div className="content-wrapper">
          <span className="eyebrow">COBERTURA LEGAL</span>
          <h2>Áreas de Derecho</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
            Cubrimos las 5 áreas más demandadas del derecho en Colombia y Estados Unidos
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {[
              { area: 'Civil', icon: 'fa-home', examples: 'Contratos, Arrendamientos, Compraventas' },
              { area: 'Laboral', icon: 'fa-briefcase', examples: 'Despidos, Liquidaciones, Acosos' },
              { area: 'Comercial', icon: 'fa-building', examples: 'Constitución SAS, Propiedad Intelectual' },
              { area: 'Penal', icon: 'fa-balance-scale', examples: 'Defensas, Denuncias, Audiencias' },
              { area: 'Tutelas', icon: 'fa-hands-helping', examples: 'Salud, Educación, Derechos Fundamentales' }
            ].map((item, index) => (
              <div key={index} style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '16px', 
                boxShadow: 'var(--shadow-soft)', 
                textAlign: 'center',
                transition: 'all 0.3s'
              }} className="practice-area-card">
                <i className={`fas ${item.icon}`} style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '20px' }}></i>
                <h3 style={{ marginBottom: '10px' }}>{item.area}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-block" style={{ background: 'var(--gradient-hero)', padding: '80px 0' }}>
        <div className="content-wrapper">
          <span className="eyebrow">PROCESO SIMPLE</span>
          <h2>De la Consulta a la Solución</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '60px', flexWrap: 'wrap' }}>
            {[
              { step: '01', title: 'Haz tu Consulta', desc: 'Describe tu situación legal en lenguaje cotidiano' },
              { step: '02', title: 'IA Analiza', desc: 'Nuestro sistema procesa y consulta bases de datos legales' },
              { step: '03', title: 'Recibe Respuesta', desc: 'Orientación clara y accionable en minutos' },
              { step: '04', title: 'Supervisión (Opcional)', desc: 'Abogado revisa casos complejos' }
            ].map((item, index) => (
              <div key={index} style={{ maxWidth: '220px', textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'var(--color-primary)', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold', 
                  fontSize: '1.5rem', 
                  margin: '0 auto 20px' 
                }}>
                  {item.step}
                </div>
                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDoPage;
