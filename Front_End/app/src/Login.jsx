import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}


        <h1 className="title">WishBank</h1>

        <form className="form">
          <label htmlFor="user">Usuário:</label>
          <input type="text" id="user" name="user" />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}