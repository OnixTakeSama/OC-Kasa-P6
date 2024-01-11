import React from 'react';
import starFilled from '../images/starFilled.png';

const Rating = ({ value }) => {
  const maxRating = 5;
  const normalizedValue = Math.max(0, Math.min(value, maxRating));

  const stars = Array.from({ length: maxRating }, (_, index) => (
    <img key={index} src={starFilled} alt={index < normalizedValue ? 'filled star' : 'empty star'} 
        className={`star${index >= normalizedValue ? ' empty' : ''}`}
    />
  ));

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default Rating;