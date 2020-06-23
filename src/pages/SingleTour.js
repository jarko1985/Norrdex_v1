import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {TourContext} from '../TourContext';
import defaultTourImg from '../images/paris1.jpg';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';


class SingleTour extends Component {

constructor(props){
super(props);
this.state={
    slug: this.props.match.params.slug,
    defaultTourImg   
}
}    

static contextType = TourContext;

    render() {
        const {getTour} = this.context;
        const tour = getTour(this.state.slug);
        if(!tour){
            return(
                <div className='toursHero'>
                    <h3>No such tour could be found...</h3>
                    <Link to='/tours' className='btn-primary'>
                        Back to tours
                    </Link>       
                </div>
            );
        }
       const {name,description,price,activities,breakfast,extras,images} = tour;
       const [coverImg,...otherImg] = images;
        return (
        <React.Fragment>    
          <StyledHero img={coverImg}>
              <Banner title={`${name}`}>
                <Link to='/tours' className='btn-primary'>
                    Back to tours
                </Link>
              </Banner>
          </StyledHero>
          <section className='single-room'>
            <div className='single-room-images'>
                {otherImg.map((item,index)=>{
                    return <img key={index} src={item} alt={name}/>
                })}
            </div>
            <div className='single-room-info'>
                <article className='desc'>
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className='info'>
                    <h3>info</h3>
                    <h6>Price : ${price}</h6>
                    <h6>{activities?'Activities included':'No Activities'}</h6>
                    <h6>{breakfast?'Breakfast included':'No Breakfast'}</h6>
                </article>
            </div>
          </section>
          <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                {extras.map((item,index)=>{
                    return <li key={index}>- {item}</li>
                })}
                </ul>
          </section>
        </React.Fragment>    
        )
    }
}

export default SingleTour;
