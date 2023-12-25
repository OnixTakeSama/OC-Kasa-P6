import Logo from "../images/footer_logo.svg";

function Footer() {
  return (
    <footer className="footer">
        <img src={Logo} alt="logo Kasa" className="footer-logo"/>
        <p className="copyrights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;