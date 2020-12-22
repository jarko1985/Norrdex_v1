import React from "react";
import { Nav } from "react-bootstrap";
import { Slide } from "react-slideshow-image";

import img1 from "../images/flight-booking.jpeg";
import img2 from "../images/bgHome.jpg";
import img3 from "../images/hotel-slider.jpeg";
import Banner from "./Banner";
import { Button } from "react-bootstrap";

const properties = {
  duration: 3000,
  transitionDuration: 900,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const HomeSlider = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Slide {...properties}>
            <div className="each-slide">
              <div
                className="slide-img"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <Banner title="cheap flights">
                  <Nav.Link href="/flights">
                    <Button>know more</Button>
                  </Nav.Link>
                </Banner>
              </div>
            </div>
            <div className="each-slide">
              <div
                className="slide-img"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <Banner title="relaxing Holidays">
                  <Nav.Link href="/tours">
                    <Button>Know more</Button>
                  </Nav.Link>
                </Banner>
              </div>
            </div>
            <div className="each-slide">
              <div
                className="slide-img"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <Banner title="Luxioruis Hotels">
                  <Nav.Link href="/hotels">
                    <Button>Know more</Button>
                  </Nav.Link>
                </Banner>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
