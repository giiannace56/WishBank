import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";

export default function CadastroUsuario() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    const novoUsuario = {
      nome,
      email,
      senha,
    };

    try {
      const response = await fetch("http://localhost:8080/api/usuarios/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
      });

      const data = await response.text();

      if (!response.ok) {
        setErro(data);
        return;
      }

      setSucesso("Conta criada com sucesso! Redirecionando...");
      
      setTimeout(() => navigate("/"), 1500);

    } catch (error) {
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Cadastro de Usuário</h2>
      <p className="cadastro-subtitle">Preencha os dados abaixo para criar sua conta</p>

      <div className="cadastro-card">

        <div className="cadastro-section-title">
          <span className="icon">👤</span>
          <div>
            <h3>Informações do Usuário</h3>
            <p>Insira suas informações pessoais corretamente</p>
          </div>
        </div>

        <form className="cadastro-form" onSubmit={handleCadastro}>

          <label>Nome Completo *</label>
          <input 
            type="text" 
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>E-mail *</label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha *</label>
          <input 
            type="password" 
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <label>Confirmar Senha *</label>
          <input 
            type="password" 
            placeholder="Repita a senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          <button className="btn-submit">Criar Conta</button>

          {erro && <p className="erro-msg">{erro}</p>}
          {sucesso && <p className="sucesso-msg">{sucesso}</p>}

        </form>

      </div>
    </div>
  );
}
