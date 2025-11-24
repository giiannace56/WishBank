import React from 'react';
import './Home.css';
import Header from './components/Header';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleDenunciaClick = () => {
      navigate("/registrardenuncia");
  }

  const handleEmpresasClick = () => {
      navigate("/relatorioempresas");
  }

  return (
    <div className="home-container">
      <Header />

      <main className="main-content">
        
        <div className="home-text">
          <h2 className="home-title">
            Proteja-se de Golpes e <span className="highlight">Ajude Outras Pessoas</span>
          </h2>

          <p className="home-description">
            Denuncie golpes, consulte empresas suspeitas e faça parte de uma comunidade 
            que luta contra fraudes. Sua experiência pode salvar outras pessoas.
          </p>

          <div className="buttons-container">
            <button className="main-action-btn denuncia-btn" onClick={ handleDenunciaClick }>Fazer uma denúncia</button>
            <button className="main-action-btn empresas-btn" onClick={ handleEmpresasClick }>Ver empresas suspeitas</button>
          </div>
        </div>

      </main>
    </div>
  );
}
