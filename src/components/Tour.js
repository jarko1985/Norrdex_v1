import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tour = ({ tour }) => {
  const { name, slug, images, price } = tour;

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>Per night</p>
        </div>
        <NavLink to={`/tours/${slug}`} className='btn-primary room-link'>
          More Info
        </NavLink>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Tour;
