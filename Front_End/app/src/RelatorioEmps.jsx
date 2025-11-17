import React from "react";
import "./RelatorioEmps.css";

export default function RelatorioEmps() {
  const empresas = [
    { id: 1, nome: "NovaTech", denuncias: 187, total: "R$ 890.000", volume: 80 },
    { id: 2, nome: "Cielar Brasil", denuncias: 156, total: "R$ 450.000", volume: 67 },
    { id: 3, nome: "VerdeViva Financeira", denuncias: 142, total: "R$ 3.200.000", volume: 61 },
    { id: 4, nome: "Cloud Solutions", denuncias: 98, total: "R$ 320.000", volume: 42 },
  ];

  return (
    <main className="empresas-page">
      <h1 className="empresas-title">Empresas Mais Usadas para Golpes</h1>
      <p className="empresas-sub">
        Empresas e marcas mais utilizadas por suspeitos para praticar golpes financeiros
      </p>

      <div className="empresas-list">
        {empresas.map((e, i) => (
          <article className="empresa-card" key={e.id}>
            <div className="card-header">#{i + 1} {e.nome}</div>

            <div className="card-body">
              <div className="stats">

                <div className="stat">
                  <i className="fa-solid fa-user icon-style"></i>
                  <div className="stat-top">
                    <span className="stat-num">{e.denuncias}</span>
                    <span className="stat-label">Denúncias</span>
                  </div>
                </div>
                
                <div className="stat">
                  <i className="fa-solid fa-dollar-sign icon-style"></i>
                  <div className="stat-top">
                    <span className="stat-num">{e.total}</span>
                    <span className="stat-label">Total Roubado</span>
                  </div>

                </div>

              </div>

            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
