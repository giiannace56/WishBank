import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./assets/logo-wishbank.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <img src={ logo } alt="WishBank" className="login-logo" />
        <h1 className="login-title">WishBank</h1>

        <form className="login-form">
          <label>Usuário:</label>
          <input type="text" placeholder="Digite seu usuário" />

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" />

          <button className="btn-login">Entrar</button>
        </form>

        <p className="signup-text">
          Não tem conta?  
          <Link to="/cadastro" className="signup-link">Criar conta</Link>
        </p>

      </div>
    </div>
  );
}