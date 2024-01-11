import React from 'react';
import { useState } from 'react';
import Chevron from '../images/chevron.png';

const Slider = ({ lodging }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = lodging.pictures;
    const length = images.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    const isSingle = length > 1;

    return (
        <section className="slider">
            <button className="slider-btn left" onClick={prevSlide} style={{display: isSingle ? 'flex' : 'none'}}><img src={Chevron} alt ="Chevron gauche"></img></button>
            <img classname="slider-img" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <button className="slider-btn right" onClick={nextSlide} style={{display: isSingle ? 'flex' : 'none'}}><img src={Chevron} alt ="Chevron droite"></img></button>
            <span className="slider-dots" style={{display: isSingle ? 'flex' : 'none'}}>{currentSlide + 1} / {length}</span>
        </section>
    );
};

export default Slider;
