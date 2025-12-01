import React, { useEffect, useState } from "react";
import "./RelatorioEmps.css";
import Header from "./components/Header.jsx";
import EmpresaCard from "./components/EmpresaCard.jsx";

export default function RelatorioEmps() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    async function carregarEmpresas() {
      try {
        const response = await fetch("http://localhost:8080/api/empresas");
        const data = await response.json();

        // transforma o array de objetos do backend em objetos com propriedades claras
        const empresasFormatadas = data.map((empresa) => ({
          nome: empresa.nome,
          denuncias: empresa.denuncias,
          total: empresa.total,
        }));

        setEmpresas(empresasFormatadas);
      } catch (error) {
        console.error("Erro ao carregar empresas:", error);
      }
    }

    carregarEmpresas();
  }, []);

  return (
    <>
      <Header />

      <main className="empresas-page">
        <h1 className="empresas-title">Empresas Mais Usadas para Golpes</h1>
        <p className="empresas-sub">
          Empresas e marcas mais utilizadas por suspeitos para praticar golpes financeiros
        </p>

        <div className="empresas-list">
          {empresas.map((empresa, index) => (
            <EmpresaCard
              key={index}
              posicao={index + 1}
              nome={empresa.nome}
              denuncias={empresa.denuncias}
              total={empresa.total}
            />
          ))}
        </div>
      </main>
    </>
  );
}
