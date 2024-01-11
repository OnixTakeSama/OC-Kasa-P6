import React, { useState } from 'react';
import ChevronUp from '../images/chevron-up.png';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleCollapse}>
                <h1 className='title'>{title}</h1>
                <span className={`chevron ${isOpen ? 'rotate' : ''}`}><img src={ChevronUp} alt="Chevron"></img></span>
            </button>
            <div className={isOpen ? 'content-parent show' : 'content-parent'}>
                <div className='content'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Collapse;