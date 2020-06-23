import React, { Component } from 'react';

import {TourContext} from '../TourContext';
import Title from './Title';
import Loading from './Loading';
import Tour from './Tour';

class FeaturedTours extends Component {

static contextType = TourContext;    
    render() {

    let {loading,featuredTours:tours} = this.context;    
    tours = tours.map(tour=>{
        return<Tour key={tour.id} tour={tour}/>
    });   
        
        return (
            <section className='featured-rooms'>
                <Title title='Our Featured Tours'/>
                <div className='featured-rooms-center'>
                    {loading?<Loading/>:tours}
                </div>
            
            </section>
        )
    }
}

export default FeaturedTours;
