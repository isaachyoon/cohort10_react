import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

function CardList(props) {
  const dogs = props.data.map((dog, i) => 
    <Card 
      key={i}
      dogData={dog}
      updateLikes={props.updateLikes}
      releasePup={props.releasePup}
    />
  )
  return(
    <div className="container">
      <div>
        <button onClick={props.getMorePups}>Get More Pups</button>
      </div>
      <div className="pup-container">
        {dogs}
      </div>
    </div>
  )  
}

CardList.defaultProps = {
  data: []
}

export default CardList;