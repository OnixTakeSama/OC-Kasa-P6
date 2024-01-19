import BannerImg from '../images/banner.png';

function Banner() {

  return (
    <section className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={BannerImg} alt="Paysage de falaises" className="banner-img"/>
    </section>
  );
}

export default Banner;