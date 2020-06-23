import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBoots from './components/NavBoots';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Error from './pages/Error';
import SingleTour from './pages/SingleTour';
import Contact from './pages/ContactPage';
import Flights from './pages/Flights2';
import Footer from './components/Footer/Footer';
import About from './pages/About';

import './App.css';

function App() {
  //NavBar is fixed Here
  return (
    <React.Fragment>
      <NavBoots />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/tours' component={Tours} />
        <Route exact path='/tours/:slug' component={SingleTour} />
        <Route exact path='/flights' component={Flights} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
