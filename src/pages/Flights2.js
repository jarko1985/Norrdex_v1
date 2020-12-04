import React, { Component } from "react";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";
import Hero from "../components/Hero";

class Flights2 extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    origin: "",
    destination: "",
    class: "",
    insurance: "",
    adult: 0,
    child: 0,
    infant: 0,
    sent: false,
  };

  //handle Inputs
  handleFName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleOrigin = (event) => {
    this.setState({
      origin: event.target.value,
    });
  };
  handleDestination = (event) => {
    this.setState({
      destination: event.target.value,
    });
  };
  handleClass = (event) => {
    this.setState({
      class: event.target.value,
    });
  };
  handleInsurance = (event) => {
    this.setState({
      insurance: event.target.value,
    });
  };

  handleAdult = (event) => {
    this.setState({
      adult: event.target.value,
    });
  };
  handleChild = (event) => {
    this.setState({
      child: event.target.value,
    });
  };
  handleInfant = (event) => {
    this.setState({
      infant: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      origin: this.state.origin,
      destination: this.state.destination,
      class: this.state.class,
      insurance: this.state.insurance,
      adult: this.state.adult,
      child: this.state.child,
      infant: this.state.infant,
    };
    axios
      .post("/api/form2", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      origin: "",
      destination: "",
      class: "",
      insurance: "",
      adult: 0,
      child: 0,
      infant: 0,
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 2000);
  };

  render() {
    console.log(this.state.firstName);
    return (
      <React.Fragment>
        <Hero hero="flightHero" />
        <div className="container">
          <Form
            style={{
              border: "1px black solid",
              padding: "15px",
              marginTop: "20px",
            }}
            onSubmit={this.handleSubmit}
          >
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="firstName">first name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFName}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="lastName">last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Smith"
                  value={this.state.lastName}
                  onChange={this.handleLName}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@smith"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="London"
                  value={this.state.origin}
                  onChange={this.handleOrigin}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="New York"
                  value={this.state.destination}
                  onChange={this.handleDestination}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Class of travel</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.class}
                  onChange={this.handleClass}
                >
                  <option>Economy</option>
                  <option>Buisness</option>
                  <option>First</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Travel Insurance</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.insurance}
                  onChange={this.handleInsurance}
                >
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premuim</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Adults</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.adult}
                  onChange={this.handleAdult}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Children</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.child}
                  onChange={this.handleChild}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Infants</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.infant}
                  onChange={this.handleInfant}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <div className="text-center">
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
            <div className={this.state.sent ? "sent sentAppear" : "sent"}>
              your message has been sent...
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default Flights2;
