import { NavLink } from "react-router-dom";
import Logo from "../images/header_logo.svg";

function Header() {
  return (
    <header>
        <div className="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={Logo} alt="Logo de Kasa" className="header-logo"/>
                </NavLink>
            </div>

            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;