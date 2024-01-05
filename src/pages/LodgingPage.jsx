import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Lodgings from '../lodgings.json';
import Error404 from './Error404';

function LodgingPage () {
    
    const lodgingId = useParams().id;
    const selectedLodging = Lodgings.find((lodging) => lodging.id === lodgingId);

    if (!selectedLodging) {
        return <Error404 />;
    }

    // const lodgingTags = selectedLodging.tags.map((tag) => tag.name);
    // const lodgingEquipments = selectedLodging.equipments.map((equipment) => equipment.name);

    return (
        <div>
            <Header />
            <div className="lodging-page">
                <Slider lodging={selectedLodging} />
            </div>
            <Footer/>
        </div>
    );
}

export default LodgingPage;