import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

function CardList(props) {
  const dogs = props.data.map((dog, i) => 
    <Card 
      // dogData={dog}
      updateLikes={props.updateLikes}
    />
  )
  return(
    <div className="container">
      {dogs}
    </div>
  )  
}

CardList.defaultProps = {
  data: []
}

export default CardList;