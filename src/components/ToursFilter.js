import React from 'react';
import {useContext} from 'react';
import {TourContext} from '../TourContext';
import Title from './Title';

//get only unique values

const getUnique = (items,value) =>{

    return [...new Set(items.map(item=>item[value]))]

}

const ToursFilter = ({tours}) => {
const context = useContext(TourContext);
const 
{handleChange,startingCity,price,minPrice,maxPrice,capacity} = context;  


/*STARTING CITY FILTER*/

//get unique starting city
let startingCities = getUnique(tours,'startingCity');
//add all starting cities
startingCities = ['all',...startingCities];
//map to JSX
startingCities = startingCities.map((item,index)=>{
return (
    <option value={item} key={index}>
        {item}
    </option>
)  
});


/*CAPACITY FILTER*/

let people = getUnique(tours,'capacity');
people = people.map((item,index)=>{
return (
    <option key={index} value={item}>
        {item}
    </option>
)
})

    return (
      <section className="filter-container">
        <Title title="search tours" />
        <form className="filter-form">
          {/*Select Starting City*/}
          <div className="form-group">
            <label htmlFor="startingCity">starting City</label>
            <select
              name="startingCity"
              id="startingCity"
              value={startingCity}
              className="form-control"
              onChange={handleChange}
            >
              {startingCities}
            </select>
          </div>
          {/*End of Select Starting City*/}

          {/*Select Number of People*/}
          <div className="form-group">
            <label htmlFor="capacity">Number of People</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* End of Select Number of People*/}

          {/* Tour Price Gauge*/}
          <div className="form-group">
            <label htmlFor="price">Tour price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/*End of Tour Price Gauge*/}
        </form>
      </section>
    );
}

export default ToursFilter;
