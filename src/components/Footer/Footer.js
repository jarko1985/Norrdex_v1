import React, { Component } from "react";
import SocailFollow from "./SocialFollow";
import { Link } from "react-router-dom";
import {
  MdEmail,
  MdPhone,
  MdMyLocation,
  MdQuestionAnswer,
  MdBusiness,
} from "react-icons/md";

export default class Footer extends Component {
  render() {
    let d = new Date();

    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "#eee", paddingTop: "10px" }}
      >
        <div className="row">
          <div className="col myFooterCol" style={{ display: "flex" }}>
            <div className="footerDiv">
              <h5>
                <MdQuestionAnswer
                  size={30}
                  color="grey"
                  style={{ margin: "5px" }}
                />
                <Link to="">frequently asked questions</Link>
              </h5>
              <h5>
                <MdBusiness color="black" size={30} style={{ margin: "5px" }} />
                <Link to="">Privacy Policy</Link>
              </h5>
              <h5>
                <MdBusiness color="black" size={30} style={{ margin: "5px" }} />
                <Link to="">Know your Consumer rights</Link>
              </h5>
            </div>

            <div className="footerDiv">
              <h5>
                <MdEmail size={30} color="blue" style={{ margin: "5px" }} />
                <a href="#info@norrdex-travel.com">info@norrdex-travel.com</a>
              </h5>
              <h5>
                <MdPhone size={30} color="green" style={{ margin: "5px" }} />
                +46 76 712 36 21
              </h5>
              <h5>
                <MdMyLocation size={30} color="red" style={{ margin: "5px" }} />
                <a href="www.norrdex-travel.com">www.norrdex-travel.com</a>
              </h5>
            </div>

            <div className="footerDiv">
              <SocailFollow />
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>Norrdex Travel {d.toDateString()}</p>
        </div>
      </div>
    );
  }
}
