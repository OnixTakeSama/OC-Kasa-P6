import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Lodgings from '../lodgings.json';

function LodgingPage () {
    
    const lodgingId = useParams().id;
    const selectedLodging = Lodgings.find((lodging) => lodging.id === lodgingId);
    const lodgingTags = selectedLodging.tags.map((tag) => tag.name);
    const lodgingEquipments = selectedLodging.equipments.map((equipment) => equipment.name);

    if (!selectedLodging) {
        return <Navigate to="/Error404.jsx" />;
    }

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
