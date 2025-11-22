import React from 'react';

// Estilos inline básicos para prototipado rápido de las pantallas
const screenStyle = {
  width: '100%',
  height: '100%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  overflow: 'hidden',
  position: 'relative'
};

const headerStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#2E7D32',
  fontFamily: 'Comfortaa, cursive'
};

// --- PANTALLA 1: HOME ---
export const PhoneHome = () => (
  <div style={screenStyle}>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img src="/img/logo.png" alt="Logo" style={{ width: '60px', margin: '0 auto 10px' }} />
      <h3 style={headerStyle}>Hola, Usuario</h3>
    </div>
    
    <div style={{ 
      backgroundColor: '#FFEBEE', 
      padding: '15px', 
      borderRadius: '12px', 
      marginTop: '20px',
      textAlign: 'center',
      border: '1px solid #FFCDD2'
    }}>
      <i className="fas fa-exclamation-circle" style={{ color: '#D32F2F', fontSize: '24px', marginBottom: '10px' }}></i>
      <h4 style={{ margin: '0 0 5px', color: '#C62828' }}>Línea de Emergencia</h4>
      <p style={{ fontSize: '0.8rem', margin: 0 }}>Asistencia legal inmediata 24/7</p>
    </div>

    <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
      <div style={{ backgroundColor: '#F5F5F5', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
        <i className="fas fa-search"></i> Buscar servicio...
      </div>
    </div>
  </div>
);

// --- PANTALLA 2: DOCUMENTOS ---
export const PhoneDocs = () => (
  <div style={screenStyle}>
    <h3 style={headerStyle}>Mis Documentos</h3>
    
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <div style={{ flex: 1, background: '#E8F5E9', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
        <i className="fas fa-plus" style={{ color: '#2E7D32' }}></i><br/>
        <span style={{ fontSize: '0.7rem' }}>Nuevo</span>
      </div>
      <div style={{ flex: 1, background: '#F5F5F5', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
        <i className="fas fa-folder" style={{ color: '#757575' }}></i><br/>
        <span style={{ fontSize: '0.7rem' }}>Archivos</span>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {['Contrato Arrendamiento', 'Derecho de Petición Salud', 'Tutela'].map((doc, i) => (
        <div key={i} style={{ padding: '10px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-file-alt" style={{ color: '#1565C0' }}></i>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{doc}</div>
            <div style={{ fontSize: '0.6rem', color: '#888' }}>Editado hace 2h</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- PANTALLA 3: DASHBOARD ---
export const PhoneDashboard = () => (
  <div style={screenStyle}>
    <h3 style={headerStyle}>Tablero de Casos</h3>
    
    <div style={{ marginBottom: '20px' }}>
      <div style={{ fontSize: '0.8rem', color: '#666' }}>Casos Activos</div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2E7D32' }}>3</div>
    </div>

    <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
      <div style={{ minWidth: '120px', background: '#FFF3E0', padding: '10px', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.7rem', color: '#EF6C00' }}>En Proceso</div>
        <div style={{ fontWeight: 'bold' }}>Multa Tránsito</div>
        <div style={{ height: '4px', background: '#FFE0B2', marginTop: '5px', borderRadius: '2px' }}>
          <div style={{ width: '60%', height: '100%', background: '#EF6C00', borderRadius: '2px' }}></div>
        </div>
      </div>
      <div style={{ minWidth: '120px', background: '#E3F2FD', padding: '10px', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.7rem', color: '#1565C0' }}>Revisión</div>
        <div style={{ fontWeight: 'bold' }}>Contrato Laboral</div>
      </div>
    </div>
    
    <img src="/img/dashboard-img.png" alt="Graph" style={{ width: '100%', marginTop: '20px', opacity: 0.8, borderRadius: '8px' }} />
  </div>
);

// --- PANTALLA 4: ABOGADOS (MARKETPLACE) ---
export const PhoneLawyers = () => (
  <div style={screenStyle}>
    <h3 style={headerStyle}>Especialistas</h3>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {[
        { name: 'Dr. Juan Pérez', spec: 'Laboral', stars: 4.8, img: '/img/avatar-senior-1.png' },
        { name: 'Dra. Ana Gómez', spec: 'Familia', stars: 4.9, img: '/img/avatar-senior-2.png' },
        { name: 'Dr. Carlos Ruiz', spec: 'Penal', stars: 4.7, img: '/img/avatar-junior-2.png' }
      ].map((lawyer, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
          <img src={lawyer.img} alt={lawyer.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{lawyer.name}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>{lawyer.spec}</div>
          </div>
          <div style={{ color: '#FFC107', fontSize: '0.8rem' }}>
            <i className="fas fa-star"></i> {lawyer.stars}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- PANTALLA 5: PRICING ---
export const PhonePricing = () => (
  <div style={screenStyle}>
    <h3 style={headerStyle}>Mejora tu Plan</h3>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', justifyContent: 'center' }}>
      <div style={{ padding: '15px', border: '2px solid #eee', borderRadius: '12px', opacity: 0.6 }}>
        <div style={{ fontWeight: 'bold' }}>Free</div>
        <div style={{ fontSize: '0.8rem' }}>Básico</div>
      </div>
      
      <div style={{ padding: '15px', border: '2px solid #2E7D32', borderRadius: '12px', backgroundColor: '#E8F5E9', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-10px', right: '10px', background: '#2E7D32', color: 'white', fontSize: '0.6rem', padding: '2px 8px', borderRadius: '10px' }}>RECOMENDADO</div>
        <div style={{ fontWeight: 'bold', color: '#2E7D32' }}>Junior</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>$15<span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>/mes</span></div>
        <ul style={{ fontSize: '0.7rem', paddingLeft: '15px', marginTop: '5px' }}>
          <li>IA Ilimitada</li>
          <li>Sin supervisión</li>
        </ul>
      </div>
      
      <div style={{ padding: '15px', border: '2px solid #1565C0', borderRadius: '12px' }}>
        <div style={{ fontWeight: 'bold', color: '#1565C0' }}>Senior</div>
        <div style={{ fontSize: '0.8rem' }}>Supervisado</div>
      </div>
    </div>
  </div>
);
