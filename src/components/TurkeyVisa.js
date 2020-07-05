// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react';
import TurkeyVisa from '../images/visa/turkey-visa.jpg';
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#e5e5e5',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2rem',
          }}
        >
          <img src={TurkeyVisa} alt='' height='200px' width='400px' />
        </div>
        <form
          onSubmit={this.submitForm}
          action='https://formspree.io/mayppeky'
          method='POST'
        >
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Libre Baskerville',
              margin: '2rem',
            }}
          >
            <div>
              <label style={labelStyle}>First Name</label>
              <input type='text' name='fName' />
            </div>
            <div>
              <label style={labelStyle}>Surname</label>
              <input type='text' name='surname' size='20' />
            </div>
            <div>
              <label style={labelStyle}>Date of Birth</label>
              <input type='date' name='date' />
            </div>
            <div>
              <label style={labelStyle}>Place of Birth</label>
              <input type='text' name='place' />
            </div>
            <div>
              <label style={labelStyle}>Mother's Name</label>
              <input type='text' name='mother' />
            </div>
            <div>
              <label style={labelStyle}> Father's Name</label>
              <input type='text' name='father' />
            </div>
            <div>
              <label style={labelStyle}>Passport Number</label>
              <input type='text' name='passport' size='15' />
            </div>
            <div>
              <label style={labelStyle}> Passport Issue</label>
              <input type='date' name='issue-date' />
            </div>
            <div>
              <label style={labelStyle}> Passport Expiry</label>
              <input type='date' name='expiry-date' size='10' />
            </div>
            <div>
              <label style={labelStyle}> E-mail address</label>
              <input type='email' name='email' />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input type='text' name='phone' />
            </div>
            <div>
              <label style={labelStyle}>Address</label>
              <input type='text' name='address' />
            </div>
            <div>
              <label style={labelStyle}>Passport Copy</label>
              <input type='file' name='passport copy' />
            </div>
            <div>
              {status === 'SUCCESS' ? (
                <p style={{ color: 'green', margin: '5px' }}>
                  Form Submission Successfull
                </p>
              ) : (
                <button className='visaBtn'>Submit</button>
              )}
              {status === 'ERROR' && (
                <p style={{ color: 'red', margin: '5px' }}>
                  please fill all the required fields
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

const labelStyle = {
  margin: '10px',
  fontSize: '1.2rem',
};
