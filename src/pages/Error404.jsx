import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <div>
            <Header />
            <div className="error">
                <h1 className="error-title">404</h1>
                <h2 className="error-msg">Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/" className="error-link">Retourner sur la page d'accueil</NavLink>
            </div>
            <Footer />
        </div> 
    )
}

export default Error404;