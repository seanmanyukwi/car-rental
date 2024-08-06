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
    { id: 1, type: 'Luxury', model: 'Modest Explorer', image: img1, price: '$60/day' },
    { id: 2, type: 'Simple', model: 'Reliable Red', image: img3, price: '$40/day' },
    { id: 3, type: 'Rugged', model: 'Beach Bum', image: img4, price: '$50/day' },
    { id: 4, type: 'Luxury', model: 'Dream Finder', image: img5, price: '$70/day' },
    { id: 5, type: 'Simple', model: 'The Cruiser', image: img2, price: '$35/day' },
    { id: 6, type: 'Rugged', model: 'Green Wonder', image: img6, price: '$55/day' },
  ],
  luxury: [
    { id: 1, type: 'Luxury', model: 'Modest Explorer', image: img1, price: '$60/day' },
    { id: 2, type: 'Luxury', model: 'Dream Finder', image: img5, price: '$70/day' },
  ],
  simple: [
    { id: 1, type: 'Simple', model: 'Reliable Red', image: img3, price: '$40/day' },
    { id: 2, type: 'Simple', model: 'The Cruiser', image: img2, price: '$35/day' },
  ],
  rugged: [
    { id: 1, type: 'Rugged', model: 'Beach Bum', image: img4, price: '$50/day' },
    { id: 2, type: 'Rugged', model: 'Green Wonder', image: img6, price: '$55/day' },
  ],
};

export const Vans = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getButtonClassName = (type) => {
    switch (type) {
      case 'Luxury':
        return 'car-type-button luxury';
      case 'Simple':
        return 'car-type-button simple';
      case 'Rugged':
        return 'car-type-button rugged';
      default:
        return 'car-type-button';
    }
  };

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
          <div key={car.id} className="car-item">
            <img src={car.image} alt={car.model} className="car-image" />
            <div className="car-details">
              <h2>{car.model}</h2>
              <p>{car.price}</p>   
            </div>
            <button className={getButtonClassName(car.type)}>{car.type}</button>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer> 
    </div>
  );
};
