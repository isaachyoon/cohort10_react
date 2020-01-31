import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

function CardList(props) {
  const dogs = props.data.map((dog, i) => 
    <Card 
      key = {i}
      name={dog.name}
      age={dog.age}
      image={dog.imageUrl}
      description={dog.description}
    />
  )
  return(
    <div className="container">
      {dogs}
    </div>
  )  
}

export default CardList;