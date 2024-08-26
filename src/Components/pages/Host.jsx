import React, { useState } from 'react';
import './page.css'; // Optional for styling
import img1 from "../images/Rectangle-154.png";
import img4 from "../images/Rectangle-163.png";
import img6 from "../images/Rectangle-156.png";
import CustomBarChart from './CustomBarChart'; // Import the chart component

const Reviews = () => {
  return (
    <div className="rating-bar pad">
      <h2>5.0 Overall Rating</h2>
      <div className="rating-stars">
        <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
        <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
        <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
        <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
        <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
      </div>
      <div className="rating-distribution">
        <div className="rating-item">
          <p>5 stars</p>
          <div className="rating-bar-fill" style={{ width: '100%', backgroundColor: '#FF8C38' }}></div>
        </div>
        <div className="rating-item">
          <p>4 stars</p>
          <div className="rating-bar-fill" style={{ width: '75%', backgroundColor: '#FF8C38' }}></div>
        </div>
        <div className="rating-item">
          <p>3 stars</p>
          <div className="rating-bar-fill" style={{ width: '50%', backgroundColor: '#FF8C38' }}></div>
        </div>
        <div className="rating-item">
          <p>2 stars</p>
          <div className="rating-bar-fill" style={{ width: '25%', backgroundColor: '#FF8C38' }}></div>
        </div>
        <div className="rating-item">
          <p>1 star</p>
          <div className="rating-bar-fill" style={{ width: '0%', backgroundColor: '#FF8C38' }}></div>
        </div>
      </div>
      
      <div className="review-container">
        <h2>Your Reviews (2)</h2>
        <div className="review">
          <div className="review-header">
            <h4>Elliot December 1, 2022</h4>
            <div className="rating">
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
            </div>
          </div>
          <p className="review-text">
            The Beach Bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up, and the host is very accommodating and understanding. Highly recommend!
          </p>
        </div>
        <div className="review">
          <div className="review-header">
            <h4>Sandy November 23, 2022</h4>
            <div className="rating">
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
              <span className="star"><p className='fa'><i className="fa-solid fa-star"></i></p></span>
            </div>
          </div>
          <p className="review-text">
            This is our third time using the Modest Explorer for our travels, and we love it! No complaints, absolutely perfect!
          </p>
        </div>
      </div>
    </div>
  );
};

const VanDashboard = ({ vans }) => {
  const [selectedVan, setSelectedVan] = useState(null);
  const [activeTab, setActiveTab] = useState('vans');

  const handleVanClick = (van) => {
    setSelectedVan(van);
    setActiveTab('details');
  };

  const handleBack = () => {
    setSelectedVan(null);
    setActiveTab('vans');
  };

  const renderTabContent = () => {
    if (activeTab === 'vans') {
      return (
        <div>
          <h2 className="pad">Your Listed Vans</h2>
          <ul className="pad">
            {vans.map((van) => (
              <li key={van.name} onClick={() => handleVanClick(van)}>
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
    }

    if (selectedVan) {
      return (
        <div className='pad'>
          <button onClick={handleBack}>Back to Vans</button>
          <div>
            <h2>{selectedVan.name}</h2>
            <img src={selectedVan.image} alt={selectedVan.name} style={{ width: '300px', height: 'auto' }} />
            <div className='tab'>
              <button onClick={() => setActiveTab('pricing')}>Pricing</button>
              <button onClick={() => setActiveTab('details')}>Details</button>
              <button onClick={() => setActiveTab('photos')}>Photos</button>
            </div>
            {activeTab === 'pricing' && <div><h3>Pricing</h3><p>{selectedVan.price}</p></div>}
            {activeTab === 'details' && <div><h3>Details</h3><p>{selectedVan.details}</p></div>}
            {activeTab === 'photos' && (
              <div>
                <h3>Photos</h3>
                {selectedVan.photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} style={{ width: '100px', height: 'auto' }} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return <div>{renderTabContent()}</div>;
};

export const Host = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleDetailsClick = () => {
    setActiveTab('Income');
  };

  const vans = [
    {
      name: 'Modest Explorer',
      price: '$60/day',
      image: img1,
      details: 'A great van for exploring.',
      photos: [img1]
    },
    {
      name: 'Beach Bum',
      price: '$80/day',
      image: img4,
      details: 'Perfect for beach trips.',
      photos: [img4]
    },
    {
      name: 'Green Wonder',
      price: '$70/day',
      image: img6,
      details: 'Ideal for nature adventures.',
      photos: [img6]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Income':
        return (
          <div className="income-container pa">
            <div className="income-summary">
              <h1>Income</h1>
              <h2>Last 30 days: <span>$2,796</span></h2>
              <p>Details of your earnings over the past 6 months.</p>
            </div>
            <CustomBarChart />
            <div className="income-details">
              <h3>Your Transactions (Last 30 days)</h3>
              <ul>
                <li>
                  <span><h3>$750</h3></span>
                  <span>4/12/22</span>
                </li>
                <li>
                  <span><h3>$930</h3></span>
                  <span>15/11/22</span>
                </li>
                <li>
                  <span><h3>$490</h3></span>
                  <span>23/10/22</span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'Reviews':
        return <Reviews />;
      case 'Van':
        return <VanDashboard vans={vans} />;
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

            <div className="dash3">
              <h2 className="pad">Your Listed Vans</h2>
              <ul className="pad">
                {vans.map((van) => (
                  <li key={van.name} className="ten">
                    <div className="nine">
                      <div>
                        <img src={van.image} alt={van.name} style={{ width: '100px', height: 'auto' }} />
                      </div>
                      <div></div>
                      <h3>{van.name}</h3>
                      <p>{van.price}</p>
                    </div>
                    <div>
                      <button className="edi" onClick={() => setActiveTab('Van')}>Edit</button>
                    </div>
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


