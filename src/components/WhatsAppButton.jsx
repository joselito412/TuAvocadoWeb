import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Auto-show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Hide after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simulate "Connecting to agent..." delay
    setTimeout(() => {
      setIsConnecting(false);
      window.open('https://wa.me/1234567890', '_blank');
    }, 1000);
  };

  return (
    <div className="whatsapp-float">
      <div className={`wa-tooltip ${showTooltip ? 'show' : ''}`}>
        {isConnecting ? (
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
            <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '5px' }}></i>
            <strong>Llevándote con un agente...</strong>
          </p>
        ) : (
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
            <strong>¿Necesitas un abogado ya?</strong><br />
            Habla con un experto en tiempo real.
          </p>
        )}
      </div>
      
      <a 
        href="#" 
        className="wa-button" 
        onClick={handleClick}
        onMouseEnter={() => !isConnecting && setShowTooltip(true)}
        onMouseLeave={() => !isConnecting && setShowTooltip(false)}
      >
        <i className="fab fa-whatsapp"></i>
        {!isConnecting && <div className="notification-badge">1</div>}
      </a>
    </div>
  );
};

export default WhatsAppButton;
