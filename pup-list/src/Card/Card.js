import React from 'react';
import './Card.css';

function Card(props) {
  return(
    <div className="card">
      <img src={props.image} alt="profile pic"/>
      <h1>{props.name}</h1>
      <p>age: {props.age}</p>
      <p>{props.description}</p>
    </div>
  )  
}

export default Card;