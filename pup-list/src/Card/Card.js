import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <img src={this.props.dogData.imageUrl} alt="profile pic"/>
        <h1>{this.props.dogData.name}</h1>
        <button onClick={(e) => this.props.updateLikes(this.props.dogData.id)}>{this.props.dogData.likes} Likes </button>
        <p>age: {this.props.dogData.age}</p>
        <p>{this.props.dogData.description}</p>
        <button onClick={() => this.props.releasePup(this.props.dogData.id)}>Release the pup!</button>
      </div>
    )  
  }
}

Card.defaultProps={
  dogData: {
    imageUrl: 'https://source.unsplash.com/mx0DEnfYxic/300x300',
    name: 'unknown',
    age: 'unknown',
    description: 'not available',
    id: '1',
    likes: 0
  }
}

export default Card;