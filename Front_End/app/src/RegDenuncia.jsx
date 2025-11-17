import React, { useState } from "react";
import "./RegDenuncia.css";
import Header from "./components/Header.jsx";

export default function RegDenuncia() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    tipoGolpe: "",
    valorRoubado: "",
    dataGolpe: "",
    nomeVitima: "",
    emailVitima:"",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", formData);
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
                />

                <label>Tipo de Golpe*</label>
                <input
                    type="text"
                    name="tipoGolpe"
                    value={formData.tipoGolpe}
                    onChange={handleChange}
                />

                <label>Valor Perdido (R$)</label>
                <input
                    type="text"
                    name="valorPerdido"
                    value={formData.valorPerdido}
                    onChange={handleChange}
                    placeholder="R$ 0,0"
                />

                <label>Data do Golpe*</label>
                <input
                    type="date"
                    name="dataGolpe"
                    value={formData.dataGolpe}
                    onChange={handleChange}
                    placeholder="dd/mm/aaaa"
                />

                <h1>Seus Dados*</h1>

                <label>Seu Nome</label>
                <input 
                    type="text"
                    name="nomeVitima"
                    value={formData.nomeVitima}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                />

                <label>Seu E-mail</label>
                <input 
                    type="email"
                    name="emailVitima"
                    value={formData.emailVitima}
                    onChange={handleChange}
                    placeholder="Seu@email.com"
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
