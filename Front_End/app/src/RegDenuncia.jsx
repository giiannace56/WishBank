import React, { useState } from "react";
import "./RegDenuncia.css";
import Header from "./components/Header.jsx";

export default function RegDenuncia() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    tipoGolpe: "",
    valorPerdido: "",
    dataGolpe: "",
    nomeVitima: "",
    emailVitima: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const novaDenuncia = { 
      ...formData, 
      valorPerdido: Number(formData.valorPerdido) || 0,
    };

    console.log("Enviando denúncia:", formData);

    try {
      const response = await fetch("http://localhost:8080/api/denuncias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaDenuncia),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar denúncia");
      }

      const data = await response.json();
      console.log("Denúncia registrada:", data);

      alert("Denúncia registrada com sucesso!");

      setFormData({
        nomeEmpresa: "",
        tipoGolpe: "",
        valorPerdido: "",
        dataGolpe: "",
        nomeVitima: "",
        emailVitima: "",
      });

    } catch (error) {
      console.error(error);
      alert("Erro ao enviar denúncia. Tente novamente.");
    }
  }

  return (
    <>
      <Header />

      <main className="denuncia-page">
        <div className="denuncia-header">
          <h1 className="denuncia-title">Registrar Denúncia</h1>
          <p className="denuncia-sub">
            Preencha os campos abaixo para registrar um golpe ou fraude
          </p>
        </div>

        <div className="denuncia-card">
          <form className="denuncia-form" onSubmit={handleSubmit}>
            
            <label>Nome da Empresa*</label>
            <input
              type="text"
              name="nomeEmpresa"
              value={formData.nomeEmpresa}
              onChange={handleChange}
              required
            />

            <label>Tipo de Golpe*</label>
            <input
              type="text"
              name="tipoGolpe"
              value={formData.tipoGolpe}
              onChange={handleChange}
              required
            />

            <label>Valor Perdido (R$)</label>
            <input
              type="number"
              name="valorPerdido"
              value={formData.valorPerdido}
              onChange={handleChange}
              placeholder="0.00"
            />

            <label>Data do Golpe*</label>
            <input
              type="date"
              name="dataGolpe"
              value={formData.dataGolpe}
              onChange={handleChange}
              required
            />

            <h1>Seus Dados*</h1>

            <label>Seu Nome</label>
            <input
              type="text"
              name="nomeVitima"
              value={formData.nomeVitima}
              onChange={handleChange}
              required
            />

            <label>Seu E-mail</label>
            <input
              type="email"
              name="emailVitima"
              value={formData.emailVitima}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn-denunciar">
              Enviar Denúncia
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
