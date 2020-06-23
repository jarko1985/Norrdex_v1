import React from 'react';

import Tour from './Tour';

const ToursList = ({tours}) => {

//check if Tour array is empty? render something     
if(tours.length === 0){
return(
    <div className='empty-search'>
        <h3>unfortunately no tours matched your search criteria</h3>
    </div>
);}    
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {tours.map(item=>{
                    return <Tour key={item.id} tour={item}/>
                })}
            </div>
        </section>
    )
}

export default ToursList; 
