import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBoots from "./components/NavBoots";
import Home from "./pages/Home";
//import Tours from "./pages/Tours";
import Error from "./pages/Error";
import SingleTour from "./pages/SingleTour";
import Contact from "./pages/ContactPage";
import Flights from "./pages/Flights2";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Visa from "./pages/Visa";
import TurkeyV from "./pages/Visa/TurkeyV";
import AustraliaV from "./pages/Visa/AustraliaV";
import CanadaV from "./pages/Visa/CanadaV";
import AmericaV from "./pages/Visa/AmericaV";

import "./App.css";
function App() {
  //NavBar is fixed Here

  return (
    <React.Fragment>
      <NavBoots />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tours" component={Error} />
        <Route exact path="/tours/:slug" component={SingleTour} />
        <Route exact path="/flights" component={Flights} />
        <Route exact path="/visa" component={Visa} />
        <Route exact path="/turkey-visa" component={TurkeyV} />
        <Route exact path="/australia-visa" component={AustraliaV} />
        <Route exact path="/canada-eta" component={CanadaV} />
        <Route exact path="/usa-esta" component={AmericaV} />
        <Route exact path="/contact" component={Contact} />

        <Route component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
