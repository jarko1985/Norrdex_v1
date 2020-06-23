import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocailFollow = () => {
  return (
    <div className='social-container'>
      <h3>Follow us</h3>
      <a
        href='https://www.facebook.com/norrdextravel'
        className='facebook social'
      >
        <FontAwesomeIcon icon={faFacebook} size='3x' />
      </a>
      <a
        href='https://www.youtube.com/channel/UCqYn8-Pdfsxiz6FeHG4MpRw'
        className='youtube social'
      >
        <FontAwesomeIcon icon={faYoutube} size='3x' />
      </a>
      <a href='https://twitter.com/norrdextravel' className='twitter social'>
        <FontAwesomeIcon icon={faTwitter} size='3x' />
      </a>
      <a
        href='https://www.facebook.com/norrdextravel'
        className='instagram social'
      >
        <FontAwesomeIcon icon={faInstagram} size='3x' />
      </a>
    </div>
  );
};

export default SocailFollow;
