import React from 'react';

function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-block" style={{ minHeight: '60vh', textAlign: 'center', background: 'var(--gradient-hero)' }}>
        <div className="content-wrapper">
          <span className="eyebrow">CONÓCENOS</span>
          <h1 style={{ marginBottom: '30px' }}>Sobre Nosotros</h1>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Somos un equipo de abogados, ingenieros y diseñadores apasionados por democratizar el acceso a la justicia a través de la tecnología.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-block" style={{ background: 'white', padding: '80px 0' }}>
        <div className="content-wrapper">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '30px' }}>Nuestra Misión</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
              Transformar la industria legal combinando inteligencia artificial de última generación con la experiencia de abogados certificados, 
              haciendo que el asesoramiento legal sea accesible, asequible y eficiente para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-block" style={{ padding: '80px 0' }}>
        <div className="content-wrapper">
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>NUESTRO EQUIPO</span>
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>El Equipo TuAvocado</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { name: 'Dra. María Rodríguez', role: 'Directora Legal', area: 'Civil y Comercial', img: '/img/avatar-senior-1.png' },
              { name: 'Dr. Carlos Méndez', role: 'Abogado Senior', area: 'Laboral y Penal', img: '/img/avatar-senior-2.png' },
              { name: 'Dr. Ana Gómez', role: 'Especialista en Tutelas', area: 'Derechos Fundamentales', img: '/img/avatar-junior-1.png' },
              { name: 'Dr. Juan Pérez', role: 'Asesor Corporativo', area: 'Propiedad Intelectual', img: '/img/avatar-junior-2.png' }
            ].map((member, index) => (
              <div key={index} style={{ 
                background: 'white', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }} className="team-member-card">
                <div style={{ 
                  width: '100%', 
                  height: '250px', 
                  background: `url(${member.img}) center/cover`,
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '20px',
                    color: 'white'
                  }}>
                    <h3 style={{ margin: '0 0 5px', color: 'white', fontSize: '1.1rem' }}>{member.name}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#ddd' }}>{member.role}</p>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ margin: 0, color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.95rem' }}>
                    <i className="fas fa-briefcase" style={{ marginRight: '8px' }}></i>
                    {member.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-block" style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div className="content-wrapper">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Nuestros Valores</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { icon: 'fa-users', title: 'Accesibilidad', desc: 'Justicia para todos, sin barreras económicas' },
              { icon: 'fa-lightbulb', title: 'Innovación', desc: 'Tecnología al servicio del derecho' },
              { icon: 'fa-shield-check', title: 'Integridad', desc: 'Ética y transparencia en cada paso' },
              { icon: 'fa-heart', title: 'Empatía', desc: 'Entendemos tus necesidades legales' }
            ].map((value, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '30px' }}>
                <i className={`fas ${value.icon}`} style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '20px' }}></i>
                <h3 style={{ marginBottom: '15px' }}>{value.title}</h3>
                <p style={{ color: '#666' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-block" style={{ background: 'var(--color-dark)', color: 'white', textAlign: 'center', padding: '60px 0' }}>
        <div className="content-wrapper">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>¿Quieres formar parte del equipo?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#ccc' }}>
            Estamos siempre buscando talento legal y tecnológico
          </p>
          <button className="btn-primary">
            Ver Vacantes
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
