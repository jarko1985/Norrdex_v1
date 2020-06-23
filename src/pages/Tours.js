import React from 'react'
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ToursContainer from '../components/ToursContainer';

const Tours = () => {
    return (
        <React.Fragment>
            <Hero hero='toursHero'>
                <Banner title='Our Tours'>
                    <Link to='/' className='btn-primary'>
                        Return to Home Page 
                    </Link>
                </Banner>
            </Hero>
            <ToursContainer/>
        </React.Fragment>
       
    )
}

export default Tours;
