import React, { Component } from 'react';
import SocailFollow from './SocialFollow';
import { Link } from 'react-router-dom';
import {
  MdEmail,
  MdPhone,
  MdMyLocation,
  MdQuestionAnswer,
  MdBusiness,
} from 'react-icons/md';

export default class Footer extends Component {
  render() {
    return (
      <div
        className='container-fluid'
        style={{ backgroundColor: '#eee', paddingTop: '10px' }}
      >
        <div className='row'>
          <div className='col myFooterCol' style={{ display: 'flex' }}>
            <div className='footerDiv'>
              <h5>
                <MdQuestionAnswer style={{ margin: '5px' }} />
                <Link to=''>frequently asked questions</Link>
              </h5>
              <h5>
                <MdBusiness style={{ margin: '5px' }} />
                <Link to=''>Privacy Policy</Link>
              </h5>
              <h5>
                <MdBusiness style={{ margin: '5px' }} />
                <Link to=''>Know your Consumer rights</Link>
              </h5>
            </div>

            <div className='footerDiv'>
              <h5>
                <MdEmail style={{ margin: '5px' }} />
                <a href='#info@norrdex-travel.com'>info@norrdex-travel.com</a>
              </h5>
              <h5>
                <MdPhone style={{ margin: '5px' }} />
                +47 221 2345
              </h5>
              <h5>
                <MdMyLocation style={{ margin: '5px' }} />
                <a href='www.norrdex-travel.com'>www.norrdex-travel.com</a>
              </h5>
            </div>

            <div className='footerDiv'>
              <SocailFollow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}