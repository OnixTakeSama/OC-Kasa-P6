import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerImg from '../images/about.webp';

function About() {
    return (
        <div>
            <Header />
            <section className="banner">
                <img src={BannerImg} alt="Paysage de falaises" className="banner-img"/>
            </section>
            <section className="dropdown-list">
                <Dropdown title="Fiabilité" dropdownContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
                photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes."/>
                <Dropdown title="Respect" dropdownContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Dropdown title="Service" dropdownContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown title="Sécurité" dropdownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
                voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Enfin, notre plateforme vous permet de discuter avec votre 
                hôte avant votre arrivée afin de vous assurer que le logement correspond bien à vos attentes."/>
            </section>
            <Footer />
        </div>
    );
}

export default About;