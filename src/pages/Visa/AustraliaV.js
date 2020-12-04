import React, { Component } from "react";
import Title from "../../components/Title";
import { ToastContainer, toast } from "react-toastify";
import flag from "../../images/visa/australia.svg";

class AustraliaV extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        toast.success("Thank you...we will contact you shortly");
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  render() {
    return (
      <div className="container">
        <section className="services">
          <img src={flag} width="200px" height="150px" alt="australia-visa" />
          <Title title="Australia e-Visa" />
          <div className="services-center">
            <p>
              Please fill in your Details and someone from our Office will get
              in touch with you shortly
            </p>
          </div>
        </section>
        <ToastContainer />
        <form
          style={{ marginTop: "20px" }}
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xleowkgp"
          method="POST"
        >
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstname"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastname"
              />
            </div>
            <div className="col">
              <input
                type="tel"
                className="form-control"
                placeholder="phone number"
                name="phone"
              />
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="email address"
                name="email"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
              />
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="form-group col-md-4">
              <input type="date" className="form-control" id="dob" name="dob" />
              <small id="dob" className="form-text text-muted">
                date of Birth
              </small>
            </div>
            <div className="form-group col-md-4">
              <input
                type="date"
                className="form-control"
                name="date-of-travel"
              />
              <small id="emailHelp" className="form-text text-muted">
                date of travel
              </small>
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Passport of citizenship"
                name="nationality"
              />
            </div>
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="form-row mt-3"
          >
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AustraliaV;
