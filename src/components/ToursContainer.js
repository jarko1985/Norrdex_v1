import React from 'react';

import ToursFilter from './ToursFilter';
import ToursList from './ToursList';
import Loading from './Loading';

import {withTourConsumer} from '../TourContext';


const ToursContainer = ({context}) => {
const {loading,sortedTours,tours} = context;

if(loading){
return <Loading/>
}        
return(
<>
<ToursFilter tours={tours}/>
<ToursList tours = {sortedTours}/>
</>);   
}

export default withTourConsumer(ToursContainer);


// const ToursContainer = () => {
// return (
//     <TourConsumer>
//         {
//         (value)=>{
//         const {loading,sortedTours,tours} = value;
//         if(loading){
//             return <Loading/>
//         }
            
//             return(
//                 <div>
//                     Hello from Tours Container
//                     <ToursFilter tours={tours}/>
//                     <ToursList tours = {sortedTours}/>
//                 </div>      
//                 )
//             }
//         }
//     </TourConsumer>
        
//     )
// }

// export default ToursContainer;
