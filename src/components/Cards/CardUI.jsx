import React from 'react';


import './card-style.css';

const CardUI = (props) => {

const {imgSRC, imgTitle} = props;
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img height='230px' src={imgSRC} alt='flight' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
            <h4 className='card-title'>{imgTitle}</h4>
                <p className='card-text text-secondary'>this is very nice card</p>
                <a href='/' className='btn btn-outline-success'>more info</a>
            </div>        
        </div>
    )
}

export default CardUI;
