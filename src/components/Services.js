import React, { Component } from 'react';
import { MdFlight } from "react-icons/md";
import { FaHiking,FaStarAndCrescent } from "react-icons/fa";




import Title from './Title';

class Services extends Component {

state={
services:[
        {
            icon:<MdFlight/>,
            title:'Flights',
            info:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon:<FaHiking/>,
            title:'Tours',
            info:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon:<FaStarAndCrescent/>,
            title:'Umrah and Hajj',
            info:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            icon:<MdFlight/>,
            title:'Travel Insurance',
            info:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },

        
    ]
}    
    render() {
        return (
           <section className='services'>
                <Title title='Our Services'/>
                <div className='services-center'>
                {this.state.services.map((item,index)=>{
                return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
           </section>
            
        )   
    }
}

export default Services;
