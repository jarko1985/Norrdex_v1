import React, { Component } from 'react';
import Card from './CardUI.jsx';

import flightIMG from '../../images/plane.jpg';
import hotelIMG from '../../images/hotel.jpg';
import visaIMG from '../../images/visa.jpg';
import insuranceIMG from '../../images/insurance.jpg';

class HomeCardsContainer extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center cardsBody mt-4'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={flightIMG}
              imgTitle='Flights'
              link='/flights'
              btnTitle='know More'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={hotelIMG}
              imgTitle='Hotels'
              link='/hotels'
              btnTitle='know More'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={visaIMG}
              imgTitle='Visa'
              link='/visa'
              btnTitle='know More'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={insuranceIMG}
              imgTitle='Travel Insurance'
              btnTitle='know More'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCardsContainer;
