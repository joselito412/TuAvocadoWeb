import React, { useState } from 'react';

const categories = {
  'Civil': ['Contrato de Arrendamiento', 'Compraventa Vehículo', 'Poder General', 'Promesa Compraventa'],
  'Laboral': ['Contrato Laboral', 'Liquidación Prestaciones', 'Reglamento Interno', 'Descargos Disciplinarios'],
  'Comercial': ['Constitución SAS', 'Acuerdo de Confidencialidad', 'Registro de Marca', 'Acta de Asamblea'],
  'Penal': ['Denuncia Penal', 'Poder Defensor', 'Solicitud Audiencia', 'Habeas Corpus'],
  'Tutelas': ['Tutela Salud', 'Tutela Educación', 'Derecho de Petición', 'Impugnación Fallo']
};

const DocExplorer = () => {
  const [activeTab, setActiveTab] = useState('Civil');

  return (
    <div className="doc-explorer-container">
      <div className="doc-tabs">
        {Object.keys(categories).map(cat => (
          <button 
            key={cat} 
            className={`doc-tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="doc-list-container">
        <h4 style={{ marginTop: 0, color: '#2E7D32', marginBottom: '15px' }}>
          <i className="fas fa-folder-open" style={{ marginRight: '8px' }}></i>
          Documentos {activeTab}
        </h4>
        <ul className="doc-list">
          {categories[activeTab].map((doc, index) => (
            <li key={index} className="doc-item">
              <i className="fas fa-file-contract doc-icon"></i>
              <span>{doc}</span>
              <i className="fas fa-chevron-right arrow-icon"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocExplorer;
