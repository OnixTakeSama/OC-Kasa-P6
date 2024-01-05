import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import lodgings from '../lodgings.json';
import Footer from '../components/Footer'

function Home() {
    return (
        <div className='home-body'>
            <Header />
            <Banner />
            <section className="lodgings-list">{
                lodgings.map((lodging) => {
                    return (
                        <Card
                            key={lodging.id}
                            id={lodging.id}
                            cover={lodging.cover}
                            title={lodging.title}
                        />
                    );
                })
            }</section>
            <Footer />
        </div>
    );
}

export default Home;