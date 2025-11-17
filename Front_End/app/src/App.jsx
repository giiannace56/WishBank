import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login.jsx";
import CadastroUsuario from "./CadastroUsuario.jsx";
// import Home from "./Home.jsx";
import Header from "./components/Header.jsx";
import RelatorioEmps from "./RelatorioEmps.jsx";

export default function App() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/cadastro";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/relatorioemps" element={<RelatorioEmps />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}