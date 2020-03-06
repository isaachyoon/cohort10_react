import React from 'react';
import './Card.css';
import PupContext from '../PupContext';
import PropTypes from 'prop-types';


class Card extends React.Component {

  navigate = (id) => {
    //run logic here
    this.props.history.push(`/pups/${id}`)
  }

  render() {
    if (this.props.dogData.id === 2) {
      throw new Error();
    }
    return(
      <PupContext.Consumer>
        {(context) => 
          <div className="card">
            <img src={this.props.dogData.imageUrl} 
                alt="profile pic" 
                onClick={() => this.navigate(this.props.dogData.id)}/>
            <h1>{this.props.dogData.name}</h1>
            <button onClick={(e) => context.updateLikes(this.props.dogData.id)}>{this.props.dogData.likes} Likes </button>
            <p>age: {this.props.dogData.age}</p>
            <p>{this.props.dogData.description}</p>
            <button onClick={() => context.releasePup(this.props.dogData.id)}>Release the pup!</button>
          </div>
        }
      </PupContext.Consumer>

    )  
  }
}

Card.defaultProps={
  dogData: {
    imageUrl: 'https://source.unsplash.com/mx0DEnfYxic/300x300',
    name: 'unknown',
    age: 'unknown',
    description: 'not available',
    id: 1,
    likes: 0
  }
}

Card.propTypes = {
  prop1: PropTypes.array.isRequired,
  prop2: PropTypes.oneOf([1,2,3,4,5]).isRequired,
  prop3: PropTypes.bool.isRequired,
  prop4: PropTypes.number.isRequired,
  dogData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    likes: PropTypes.bool.isRequired,
  })


}

export default Card;