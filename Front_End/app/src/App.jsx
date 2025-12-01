import { Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import CadastroUsuario from "./CadastroUsuario.jsx";
import RelatorioEmps from "./RelatorioEmps.jsx";
import RegDenuncia from "./RegDenuncia.jsx";
import Home from "./Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/relatorioempresas" element={<RelatorioEmps />} />
      <Route path="/registrardenuncia" element={<RegDenuncia />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
