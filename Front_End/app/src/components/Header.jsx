import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo-wishbank.png";


export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();    

    const handleDenunciaClick = () => {
        navigate("/registrardenuncia");
    }


    return (
        <header className="header">
            <div className="header-left">
                <img src={ logo } alt="WishBank logo" className="header-logo"/>
                <h1 className="header-title">WishBank
                    <br />
                    <span className="tagline">Proteção contra fraudes por telefone</span>
                </h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className="link-home">Início</Link></li>
                    <li><Link to="/relatorioempresas">Empresas</Link></li>
                    <li>
                        <button className="btn-denuncia" onClick={handleDenunciaClick}>
                            Denunciar Golpe
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}