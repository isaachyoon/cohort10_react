import React from 'react';
import './Details.css';


function Details(props) {
  const dogData = props.store.cardData.filter(dog => {
    return dog.id + '' === props.match.params.id
  });
  return (
    <div>
      <h1>Welcome to {dogData[0].name}'s page</h1>
    </div>
  );
}
export default Details;