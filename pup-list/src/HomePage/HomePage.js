import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'


function HomePage(props) {
  return (
    <div className="home-page">
      <Link to={`/pups`} className="home-button">See Pups</Link>
      <Link to={`/info`} className="home-button">Info About Pups</Link>
      <Link to={`/findvet`} className="home-button">Find a Vet</Link>      
    </div>
  );
}
export default HomePage;