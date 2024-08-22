import React, { useState } from 'react';
import img1 from "../images/Rectangle-154.png";
import img2 from "../images/Rectangle-153.png";
import img3 from "../images/image-55.png";
import img4 from "../images/Rectangle-163.png";
import img5 from "../images/image-57.png";
import img6 from "../images/Rectangle-156.png";
import "../pages/page.css";

const carsData = {
  all: [
    { id: 1, type: 'Luxury', model: 'Modest Explorer', image: img1, price: '$60/day', description: 'A luxurious van equipped with all modern amenities for a comfortable adventure.' },
    { id: 2, type: 'Simple', model: 'Reliable Red', image: img3, price: '$40/day', description: 'A reliable and simple van, perfect for quick getaways.' },
    { id: 3, type: 'Rugged', model: 'Beach Bum', image: img4, price: '$50/day', description: 'A rugged van designed for the wild outdoors and beachside camping.' },
    { id: 4, type: 'Luxury', model: 'Dream Finder', image: img5, price: '$70/day', description: 'Find your dream adventures with this top-tier luxury van.' },
    { id: 5, type: 'Simple', model: 'The Cruiser', image: img2, price: '$35/day', description: 'A cruiser van that’s simple, affordable, and ready to roll.' },
    { id: 6, type: 'Rugged', model: 'Green Wonder', image: img6, price: '$55/day', description: 'A robust van that’s green and great for tough terrains.' },
  ],
  luxury: [
    { id: 1, type: 'Luxury', model: 'Modest Explorer', image: img1, price: '$60/day', description: 'A luxurious van equipped with all modern amenities for a comfortable adventure.' },
    { id: 2, type: 'Luxury', model: 'Dream Finder', image: img5, price: '$70/day', description: 'Find your dream adventures with this top-tier luxury van.' },
  ],
  simple: [
    { id: 1, type: 'Simple', model: 'Reliable Red', image: img3, price: '$40/day', description: 'A reliable and simple van, perfect for quick getaways.' },
    { id: 2, type: 'Simple', model: 'The Cruiser', image: img2, price: '$35/day', description: 'A cruiser van that’s simple, affordable, and ready to roll.' },
  ],
  rugged: [
    { id: 1, type: 'Rugged', model: 'Beach Bum', image: img4, price: '$50/day', description: 'A rugged van designed for the wild outdoors and beachside camping.' },
    { id: 2, type: 'Rugged', model: 'Green Wonder', image: img6, price: '$55/day', description: 'A robust van that’s green and great for tough terrains.' },
  ],
};

export const Vans = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedCar, setSelectedCar] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedCar(null); // Reset selected car when changing tabs
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleBackClick = () => {
    setSelectedCar(null);
  };

  if (selectedCar) {
    return (
      <div className="car-details-page pad">
        <button onClick={handleBackClick} className="back-button">Back to all Vans</button>
        <img src={selectedCar.image} alt={selectedCar.model} className="car-image-large" />
        <h2>{selectedCar.model}</h2>
         {/* Car Type Button */}
        <button className={`car-type-button ${getButtonClassName(selectedCar.type)}`}>{selectedCar.type}</button>
        <p>{selectedCar.price}</p>
        <p>{selectedCar.description}</p>
       
        <button className='bttn1' type="submit">Rent this van</button>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text2'>Explore our van options</h1>
      <div className="tabs">
        <button onClick={() => handleTabClick('all')} className={selectedTab === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleTabClick('luxury')} className={selectedTab === 'luxury' ? 'active' : ''}>Luxury</button>
        <button onClick={() => handleTabClick('simple')} className={selectedTab === 'simple' ? 'active' : ''}>Simple</button>
        <button onClick={() => handleTabClick('rugged')} className={selectedTab === 'rugged' ? 'active' : ''}>Rugged</button>
      </div>
      <div className="car-list">
        {carsData[selectedTab].map(car => (
          <div key={car.id} className="car-item" onClick={() => handleCarClick(car)}>
            <img src={car.image} alt={car.model} className="car-image" />
            <div className="car-details">
              <h2>{car.model}</h2>
              <p>{car.price}</p>   
            </div>
            <button className={`car-type-button ${getButtonClassName(car.type)}`}>{car.type}</button>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer> 
    </div>
  );
};

const getButtonClassName = (type) => {
  switch (type) {
    case 'Luxury':
      return 'luxury';
    case 'Simple':
      return 'simple';
    case 'Rugged':
      return 'rugged';
    default:
      return '';
  }
};
