import React from 'react'
//import {Link} from 'react-router-dom';


//import Hero from '../components/Hero';
//import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedTours from '../components/FeaturedTours';
import PartnerSlider from '../components/PartnerSlider';
import { ContactForm } from '../components/ContactForm';
import CardsContainer from '../components/Cards/CardsContainer.jsx';
import HomeSlider from '../components/HomeSlider';





const Home = () => {
    return (
        <React.Fragment>
            <HomeSlider/>
            {/* 
            <Hero>
                <Banner title='Luxurious Tours' subtitle='starting at $299'>
                        <Link to='/tours' className='btn-primary'>
                            Our Tours
                        </Link>
                </Banner> 
            </Hero>*/}
            <CardsContainer/>
            <Services/>
            <FeaturedTours/>
            <PartnerSlider/>
            <ContactForm/>
            
        </React.Fragment>
    )
}
export default Home;