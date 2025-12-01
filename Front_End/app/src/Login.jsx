import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./assets/logo-wishbank.png";

export default function Login() {

  const navigate = useNavigate();

  const handleLoginSuccess = async () => {
    navigate("/home");
  }

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = { email, senha };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials)
    });

    const data = await resumeAndPrerenderToNodeStream.text();

    if (!response.ok) {
      setError(data);
      return;
    }

    const usuario = JSON.parse(data);

    localStorage.setItem("usuario", JSON.stringify(usuario));
    navigate("/home");

    } catch (err) {
      setErr("Erro ao conectar ao servidor.");
    } 
  };


  return (
    <div className="login-container">
      <div className="login-card">

        <img src={ logo } alt="WishBank" className="login-logo" />
        <h1 className="login-title">WishBank</h1>

        <form className="login-form">
          <label>Usuário:</label>
          <input 
            type="text" 
            placeholder="Digite seu usuário" 
            value={usuario}
            onChange={ (e) => setUsuario(e.target.value) }
            required
          />

          <label>Senha:</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha}
            onChange={ (e) => setSenha(e.target.value) }
            required  
          />

          <button className="btn-login" onClick={ handleLoginSuccess }>Entrar</button>

          {err && <p className="erro-login">{err}</p>}
        </form>

        <p className="signup-text">
          Não tem conta?  
          <Link to="/cadastro" className="signup-link">Criar conta</Link>
        </p>

      </div>
    </div>
  );
}