import React, { useState } from 'react';
import ChevronUp from '../images/chevron-up.png';

const Dropdown = ({ title, dropdownContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown}>
                <h1 className='dropdown-title'>{title}</h1>
                <span className={`chevron ${isOpen ? 'rotate' : ''}`}><img src={ChevronUp} alt="Chevron"></img></span>
            </button>
            {isOpen && (
                <div className='dropdown-content'>
                    <p>{dropdownContent}</p>
                </div>
            )}
        </div>
    );
};

export default Dropdown;