import React from "react";
import "./EmpresaCard.css";

export default function EmpresaCard({ posicao, nome, denuncias, total }) {
  return (
    <article className="empresa-card">
      <div className="card-header">
        #{posicao} {nome}
      </div>

      <div className="card-body">
        <div className="stats">

          <div className="stat">
            <i className="fa-solid fa-user icon-style"></i>
            <div className="stat-top">
              <span className="stat-num">{denuncias}</span>
              <span className="stat-label">Denúncias</span>
            </div>
          </div>

          <div className="stat">
            <i className="fa-solid fa-dollar-sign icon-style"></i>
            <div className="stat-top">
              <span className="stat-num">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </span>
              <span className="stat-label">Total Roubado</span>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
