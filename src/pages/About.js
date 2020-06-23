import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import team from '../images/team.jpeg';
import person from '../images/person.jpeg';
import person2 from '../images/person2.jpeg';
import person3 from '../images/person3.jpeg';

class About extends Component {
  render() {
    return (
      <div>
        <Image src={team} className='header-image' />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col aboutCol' style={{ display: 'flex' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Image
                  src={person}
                  roundedCircle
                  className='about-profile-pic'
                />
                <h3>Vanessa Nixon</h3>
                <h4>Managing Director</h4>
                <p> "In God we Trust"</p>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Image
                  src={person2}
                  roundedCircle
                  className='about-profile-pic'
                />
                <h3>Vanessa Nixon</h3>
                <h4>Managing Director</h4>
                <p> "Life is Good"</p>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Image
                  src={person3}
                  roundedCircle
                  className='about-profile-pic'
                />
                <h3>Vanessa Nixon</h3>
                <h4>Managing Director</h4>
                <p> "I believe everybody deserves a second chance"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
