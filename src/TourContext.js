import React, { Component } from 'react';
import items from './data';
import Client from './contentful';

Client.getEntries({
  content_type: 'norrdexTravelTour',
}).then((response) => console.log(response.items));

const TourContext = React.createContext();

class TourProvider extends Component {
  state = {
    tours: [],
    sortedTours: [],
    featuredTours: [],
    loading: true,

    //filter properties
    startingCity: 'all',

    price: 0,
    minPrice: 0,
    maxPrice: 0,

    minSize: 0,
    maxSize: 0,

    capacity: 1,
    breakfast: false,
  };

  //getting the Data
  componentDidMount() {
    let tours = this.formatData(items);
    let featuredTours = tours.filter((tour) => tour.featured === true);

    let maxPrice = Math.max(...tours.map((item) => item.price));
    let maxSize = Math.max(...tours.map((item) => item.size));

    this.setState({
      tours,
      featuredTours,
      sortedTours: tours,
      loading: false,

      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let tour = { ...item.fields, images, id };
      return tour;
    });
    return tempItems;
  }

  getTour = (slug) => {
    let tempTours = [...this.state.tours];
    const tour = tempTours.find((tour) => tour.slug === slug);

    return tour;
  };

  handleChange = (event) => {
    const target = event.target;
    const value =
      event.startingCity === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterTours
    );
  };

  filterTours = () => {
    let { tours, startingCity, price, capacity } = this.state;

    //all the tours
    let tempTours = [...tours];
    //transform to Numbers
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by Starting City
    if (startingCity !== 'all') {
      tempTours = tempTours.filter(
        (tour) => tour.startingCity === startingCity
      );
    }

    //filter by capacity
    if (capacity !== 1) {
      tempTours = tempTours.filter((tour) => tour.capacity >= capacity);
    }
    //filter by price
    tempTours = tempTours.filter((tour) => tour.price <= price);

    //change state
    this.setState({
      sortedTours: tempTours,
    });
  };

  render() {
    return (
      <TourContext.Provider
        value={{
          ...this.state,
          getTour: this.getTour,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </TourContext.Provider>
    );
  }
}

const TourConsumer = TourContext.Consumer;

//function to be used with TourContainer.js
export function withTourConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <TourConsumer>
        {(value) => <Component {...props} context={value} />}
      </TourConsumer>
    );
  };
}

export { TourContext, TourConsumer, TourProvider };
