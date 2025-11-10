import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-left">
          <div className="logo">🛡</div>
          <div className="title">
            <h1>WISHBANK</h1>
            <p>Proteção contra fraudes por telefone</p>
          </div>
        </div>

        <nav className="navbar-right">
          <Link to="/">Início</Link>
          <Link to="/empresas">Empresas</Link>
          <button className="report-btn">Denunciar Golpe</button>
        </nav>
      </div>
    </header>
  );
}
