import React from 'react';

import Services from '../components/Services';
import FeaturedTours from '../components/FeaturedTours';
import PartnerSlider from '../components/PartnerSlider';
import { ContactForm } from '../components/ContactForm';
import HomeCardsContainer from '../components/Cards/HomeCardsContainer.jsx';
import HomeSlider from '../components/HomeSlider';

const Home = () => {
  return (
    <React.Fragment>
      <HomeSlider />
      <HomeCardsContainer />
      <Services />
      <FeaturedTours />
      <PartnerSlider />
      <ContactForm />
    </React.Fragment>
  );
};
export default Home;
