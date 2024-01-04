import React, { useState } from 'react';

const Dropdown = ({ title, dropdownContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown}>
                <h1>{title}</h1>
                <span className={`chevron ${isOpen ? 'rotate' : ''}`}>&#9650;</span>
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