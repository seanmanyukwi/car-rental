import React, { useState, useEffect } from 'react';
import "../pages/page.css";

export const Vans = () => {
  const [vansData, setVansData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedVan, setSelectedVan] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:3000/api/test') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setVansData(data))
      .catch((error) => console.error('Error fetching vans:', error));
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedVan(null); // Reset selected van when changing tabs
  };

  const handleVanClick = (van) => {
    setSelectedVan(van);
  };

  const handleBackClick = () => {
    setSelectedVan(null);
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

  const filteredVans = selectedTab === 'all' 
    ? vansData 
    : vansData.filter((van) => van.type.toLowerCase() === selectedTab);

  if (selectedVan) {
    return (
      <div className="return pad">
        <button onClick={handleBackClick} className="back-button">Back to all Vans</button>
        <div className="car-details-page">
          <div>
            <img src={selectedVan.image} alt={selectedVan.model} className="car-image-large" />
          </div>
          <div>
            <h2>{selectedVan.model}</h2>
            <button className={`car-type-button ${getButtonClassName(selectedVan.type)}`}>{selectedVan.type}</button>
            <p>{selectedVan.price}</p>
            <p>{selectedVan.description}</p>
            <button className="bttn1" type="submit">Rent this van</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text2">Explore our van options</h1>
      <div className="tabs">
        <button onClick={() => handleTabClick('all')} className={selectedTab === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleTabClick('luxury')} className={selectedTab === 'luxury' ? 'active' : ''}>Luxury</button>
        <button onClick={() => handleTabClick('simple')} className={selectedTab === 'simple' ? 'active' : ''}>Simple</button>
        <button onClick={() => handleTabClick('rugged')} className={selectedTab === 'rugged' ? 'active' : ''}>Rugged</button>
      </div>
      <div className="car-list">
        {filteredVans.map((van) => (
          <div key={van.id} className="car-item" onClick={() => handleVanClick(van)}>
            <img src={van.image} alt={van.model} className="car-image" />
            <div className="car-details">
              <h2>{van.model}</h2>
              <p>{van.price}</p>
            </div>
            <button className={`car-type-button ${getButtonClassName(van.type)}`}>{van.type}</button>
          </div>
        ))}
      </div>
      <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer>
    </div>
  );
};
