import React from 'react';

import './card-style.css';

const CardUI = (props) => {
  const { imgSRC, imgTitle, link, btnTitle, subTitle } = props;
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img
          height='230px'
          src={imgSRC}
          alt='flight'
          className='card-img-top'
        />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{imgTitle}</h4>
        <p className='card-text text-secondary'>{subTitle}</p>
        <a href={link} className='btn btn-outline-success'>
          {btnTitle}
        </a>
      </div>
    </div>
  );
};

export default CardUI;
