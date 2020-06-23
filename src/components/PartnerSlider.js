import React from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Title from './Title';

import franceLogo from '../images/logos/air-france.svg';
import airCanadaLogo from '../images/logos/air-canada.svg';
import britishLogo from '../images/logos/british.svg';
import deltaLogo from '../images/logos/delta.svg';
import etihadLogo from '../images/logos/etihad.svg';
import emiratesLogo from '../images/logos/emirates.svg';
import thaiLogo from '../images/logos/thai.svg';
import expediaLogo from '../images/logos/expedia.svg';
import klmLogo from '../images/logos/klm.svg';
import singaporeLogo from '../images/logos/singapore.svg';
import lufthansaLogo from '../images/logos/lufthansa.svg';
import turkishLogo from '../images/logos/turkish.svg';

import amadeusLogo from '../images/logos/amadeus.svg';
import sabreLogo from '../images/logos/sabre.svg';
import westernUnionLogo from '../images/logos/western-union.svg';
import ervLogo from '../images/logos/erv.svg';
import mscLogo from '../images/logos/msc.svg';

const PartnerSlider = () => {
  const AirlinesPartnerLogos = [
    {
      id: '1',
      name: 'air-canada',
      url: airCanadaLogo,
    },
    {
      id: '2',
      name: 'air-france',
      url: franceLogo,
    },
    {
      id: '3',
      name: 'british-airlines',
      url: britishLogo,
    },
    {
      id: '4',
      name: 'delta',
      url: deltaLogo,
    },
    {
      id: '5',
      name: 'etihad',
      url: etihadLogo,
    },
    {
      id: '6',
      name: 'emirates',
      url: emiratesLogo,
    },
    {
      id: '7',
      name: 'Thai',
      url: thaiLogo,
    },
    {
      id: '8',
      name: 'expedia',
      url: expediaLogo,
    },
    {
      id: '9',
      name: 'klm',
      url: klmLogo,
    },
    {
      id: '10',
      name: 'singapore',
      url: singaporeLogo,
    },
    {
      id: '11',
      name: 'lufthansa',
      url: lufthansaLogo,
    },
    {
      id: '12',
      name: 'turkish',
      url: turkishLogo,
    },
  ];

  const CompaniesPartnerLogos = [
    {
      id: '13',
      name: 'amadeus',
      url: amadeusLogo,
    },
    {
      id: '14',
      name: 'Sabre',
      url: sabreLogo,
    },
    {
      id: '15',
      name: 'wetern Union',
      url: westernUnionLogo,
    },
    {
      id: '16',
      name: 'erv',
      url: ervLogo,
    },
    {
      id: '17',
      name: 'msc',
      url: mscLogo,
    },
  ];

  const settings = {
    autoplay: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    className: 'mySlider',
    easing: 'linear',
  };

  return (
    <>
      <div className='sliderContainer'>
        <Title title='our Partners' />
        <Slider {...settings}>
          {AirlinesPartnerLogos.map((logo) => {
            return (
              <div className='slide' key={logo.id}>
                <img width='100px' height='100px' src={logo.url} alt='' />
              </div>
            );
          })}
        </Slider>
        <Slider {...settings}>
          {CompaniesPartnerLogos.map((logo) => {
            return (
              <div className='slide' key={logo.id}>
                <img width='100px' height='100px' src={logo.url} alt='' />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default PartnerSlider;
