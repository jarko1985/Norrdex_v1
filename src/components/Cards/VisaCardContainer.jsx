import React, { Component } from 'react';
import Card from './CardUI.jsx';

import canadaVisa from '../../images/visa/canada-visa.jpg';
import usaVisa from '../../images/visa/usa-visa.jpg';
import turkeyVisa from '../../images/visa/turkey-visa.jpg';
import australiaVisa from '../../images/visa/australia-visa.jpg';

class VisaCardsContainer extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center cardsBody mt-4'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={canadaVisa}
              imgTitle='Canada ETA'
              link=''
              btnTitle='Apply now'
              subTitle='easy proccess'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={usaVisa}
              imgTitle='USA ESTA'
              link=''
              btnTitle='Apply now'
              subTitle='easy proccess'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={turkeyVisa}
              imgTitle='Turkey e-visa'
              link='/turkey-visa'
              btnTitle='Apply now'
              subTitle='easy proccess'
            />
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-xs-12'>
            <Card
              imgSRC={australiaVisa}
              imgTitle='Australia ETA'
              link=''
              btnTitle='Apply now'
              subTitle='easy proccess'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VisaCardsContainer;
