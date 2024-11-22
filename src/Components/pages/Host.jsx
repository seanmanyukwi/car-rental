import React, { useState, useEffect } from 'react';
import './page.css'; // Optional for styling
import CustomBarChart from './CustomBarChart'; // Import the chart component


const Host = () => {
  const [vans, setVans] = useState([]);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [reviews, setReviews] = useState([]);

  // Fetch vans data and reviews when component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/vans')  // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setVans(data))
      .catch((error) => console.error('Error fetching vans:', error));

    fetch('http://localhost:3000/api/test')  // Replace with your API URL for reviews
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  // Handle deleting a van
  const handleDelete = (vanId) => {
    fetch(`/api/vans/${vanId}`, {  // Replace with your API URL for delete
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setVans(vans.filter((van) => van.id !== vanId));  // Remove deleted van from state
      })
      .catch((error) => console.error('Error deleting van:', error));
  };

  // Handle adding a new van
  const handleAddVan = (newVan) => {
    fetch('/api/vans', {  // Replace with your API URL for add
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVan),
    })
      .then((response) => response.json())
      .then((addedVan) => {
        setVans([...vans, addedVan]);  // Add new van to the state
      })
      .catch((error) => console.error('Error adding van:', error));
  };

  // Handle updating a van
  const handleUpdateVan = (updatedVan) => {
    fetch(`/api/vans/${updatedVan.id}`, {  // Replace with your API URL for update
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVan),
    })
      .then((response) => response.json())
      .then(() => {
        setVans(vans.map((van) => (van.id === updatedVan.id ? updatedVan : van)));  // Update the van in the state
      })
      .catch((error) => console.error('Error updating van:', error));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div>
            <h2>Welcome!</h2>
            <h3>Your Listed Vans</h3>
            <ul>
            {vans.map((van) => (
  <li key={van._id}> {/* Use _id instead of id */}
    <img src={van.image} alt={van.name} style={{ width: '100px' }} />
    <h4>{van.name}</h4>
    <p>{van.price}</p>
    <button onClick={() => handleDelete(van._id)}>Delete</button> {/* Use _id */}
  </li>
))}

            </ul>
          </div>
        );
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
            <div className="review-container">
              <h2>Your Reviews</h2>
              {reviews.map((review) => (
                <div className="review" key={review.id}>
                  <div className="review-header">
                    <h4>{review.author}</h4>
                    <h5>{review.date}</h5>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="star">
                          <p className="fa"><i className={`fa-solid fa-star ${index < review.rating ? 'filled' : ''}`}></i></p>
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Van':
        return (
          <div>
            <h2>Edit Van</h2>
            <ul>
              {vans.map((van) => (
                <li key={van.id}>
                  <h4>{van.name}</h4>
                  <p>{van.price}</p>
                  {/* Edit Van form goes here */}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Select a tab to view its content.</p>;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('Dashboard')}>Dashboard</button>
        <button onClick={() => setActiveTab('Income')}>Income</button>
        <button onClick={() => setActiveTab('Reviews')}>Reviews</button>
        <button onClick={() => setActiveTab('Van')}>Vans</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Host;
