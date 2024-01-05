import BannerImg from '../images/banner.png';
import { useParams } from 'react-router-dom';
import lodgings from '../lodgings.json';

function Banner() {

  const { id } = useParams();
  const lodging = lodgings.find((lodging) => lodging.id === id);

  if (!lodging) {
    return <div>Lodging not found</div>;
  }

  return (
    <section className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={BannerImg} alt="Paysage de falaises" className="banner-img"/>
    </section>
  );
}

export default Banner;