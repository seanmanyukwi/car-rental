import React, { useState } from 'react';
import './Host'; // Optional for styling
import img1 from "../images/Rectangle-154.png";
import img4 from "../images/Rectangle-163.png";
import img6 from "../images/Rectangle-156.png";

export const Host = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleDetailsClick = () => {
    setActiveTab('Income');
  };

  // Define vans data outside of JSX for reuse
  const vans = [
    {
      name: 'Modest Explorer',
      price: '$60/day',
      image: img1 // Replace with actual image URL
    },
    {
      name: 'Beach Bum',
      price: '$80/day',
      image: img4 // Replace with actual image URL
    },
    {
      name: 'Green Wonder',
      price: '$70/day',
      image: img6 // Replace with actual image URL
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Income':
        return (
          <div>
            <h2>Income</h2>
            <p>This is the Income tab content.</p>
          </div>
        );
      case 'Reviews':
        return (
          <div>
            <h2>Reviews</h2>
            <p>This is the Reviews tab content.</p>
          </div>
        );
      case 'Van':
        return (
          <div>
            <h2 className='pad'>Your Listed Vans</h2>
            <ul className='pad'>
              {vans.map((van) => (
                <li key={van.name}>
                  <img src={van.image} alt={van.name} style={{ width: '100px', height: 'auto' }} />
                  <h3>{van.name}</h3>
                  <p>{van.price}</p>
                </li>
              ))}
            </ul>
            <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer> 



          </div>
        );
      case 'Dashboard':
        return (
          <div>
            <div className="dash1">
              <div className="pad">
                <h2>Welcome!</h2>
                <p>Income last 30 days</p>
                <h1>$2,354</h1>
              </div>
              <div className="pad">
                <p onClick={handleDetailsClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Details
                </p>
              </div>
            </div>

            <div className="dash2">
              <div className="pad">
                <h3>Review score</h3>
                <p className="fa"><i className="fa-solid fa-star"></i> </p>4.5/5
              </div>

              <div className="pad">
                <p onClick={handleDetailsClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Details
                </p>
              </div>
            </div>

            {/* Add the Vans List here */}
            <div className="dash3">
              <h2 className='pad'>Your Listed Vans</h2>
              <ul className='pad'>
                {vans.map((van) => (
                  <li key={van.name}>
                    <img src={van.image} alt={van.name} style={{ width: '100px', height: 'auto' }} />
                    <h3>{van.name}</h3>
                    <p>{van.price}</p>
                    <button>Edit</button>
                  </li>
                ))}
              </ul>
            </div>
            <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer> 



          </div>
        );
      default:
        return (
          <div>
            <h2>Dashboard</h2>
            <p>This is the Dashboard tab content.</p>
          </div>
        );
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === 'Dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'Income' ? 'active' : ''}
          onClick={() => setActiveTab('Income')}
        >
          Income
        </button>
        <button
          className={activeTab === 'Reviews' ? 'active' : ''}
          onClick={() => setActiveTab('Reviews')}
        >
          Reviews
        </button>
        <button
          className={activeTab === 'Van' ? 'active' : ''}
          onClick={() => setActiveTab('Van')}
        >
          Vans
        </button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};
