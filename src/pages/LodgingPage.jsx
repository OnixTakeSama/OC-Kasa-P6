import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Lodgings from '../lodgings.json';
import Error404 from './Error404';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

function LodgingPage () {
    
    const lodgingId = useParams().id;
    const selectedLodging = Lodgings.find((lodging) => lodging.id === lodgingId);

    if (!selectedLodging) {
        return <Error404 />;
    }

    const hostName = selectedLodging.host.name;
    const tag = selectedLodging.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>);
    const equipmentList = (
        <ul>
            {selectedLodging.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    );

    return (
        <div>
            <Header />
            <div className="lodging-page">
                <Slider lodging={selectedLodging} />
                <section className="lodging-info">
                    <div className="infos-header">
                        <div className="title-location">
                            <h1>{selectedLodging.title}</h1>
                            <h2>{selectedLodging.location}</h2>
                        </div>
                        <div className="host">
                            <h2>{selectedLodging.host.name}</h2>
                            <img className="host-picture" src={selectedLodging.host.picture} alt={hostName} />
                        </div>
                    </div>
                    <div className="infos-content">
                        <div className='tags-rating'>
                            <div className="tags">
                                {tag}
                            </div>
                            <Rating value={selectedLodging.rating} />
                        </div>
                        <div className="collapses">
                            <Collapse title="Description" content={selectedLodging.description} />
                            <Collapse title="Equipements" content={equipmentList} />
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default LodgingPage;