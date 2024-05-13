import React from 'react';
import {chakra } from '@chakra-ui/react';
const Rating = ({ value, max = 5 }) => {
  const starStyle = {
    fontSize: '1.5rem',
    color: '#ccc',
    cursor: 'default',
  };

  const filledStarStyle = {
    ...starStyle,
    color: '#ffc107',
  };

  const ratingStyle = {
    display: 'inline-flex',
  };

  const stars = [];

  for (let i = 1; i <= max; i++) {
    const star = (
      <span
        key={i}
        style={i <= value ? filledStarStyle : starStyle}
      >
        &#9733;
      </span>
    );
    stars.push(star);
  }

  return <chakra.div style={ratingStyle} className="rating" fontSize={"x-large"}>({value}) {stars} </chakra.div>;
};

export default Rating;