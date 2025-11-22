import React from 'react';
import { PhoneHome, PhoneDocs, PhoneDashboard, PhoneLawyers, PhonePricing } from './PhoneScreens';

const PhoneWrapper = ({ activeSection }) => {
  
  // Determinar qué pantalla mostrar según la sección activa
  const renderScreen = () => {
    switch (activeSection) {
      case 'hero':
        return <PhoneHome />;
      case 'features': // Documentos
        return <PhoneDocs />;
      case 'automation': // Dashboard
        return <PhoneDashboard />;
      case 'specialized': // Abogados
        return <PhoneLawyers />;
      case 'subscriptions': // Pricing
        return <PhonePricing />;
      default:
        return <PhoneHome />;
    }
  };

  return (
    <div className="phone-frame-container">
      {/* Marco del Celular (CSS puro o imagen de fondo) */}
      <div className="phone-mockup">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          {/* Contenido Dinámico con Transición */}
          <div className="screen-content fade-in">
            {renderScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneWrapper;
