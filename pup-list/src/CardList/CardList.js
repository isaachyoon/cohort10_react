import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: props.store.count,
      cardData: props.store.cardData
    }
  }

  clickHandler = (id) => {
    let newState = this.state.cardData.map(dog => {
      if (id === dog.id) {
        dog.likes = dog.likes + 1;
      }
      return dog;
    });
    this.setState({
      cardData: newState
    })
  }

  getMorePups = () => {
    const newPup = {
      id: this.state.count,
      name: "tbd",
      imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
      age: 'tbd',
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      likes: 0,
    };
    const newState = [...this.state.cardData, newPup];
    this.setState({
      count: this.state.count + 1,
      cardData: newState
    })
  }

  releasePup = (id) => {
    const newState = this.state.cardData.filter(dog => {
      if (id !== dog.id) {
        return dog
      }
    });
    this.setState({
      cardData: newState
    });
  }

  render() {
    return(
      <div className="container">
        <div>
          <button onClick={this.getMorePups}>Get More Pups</button>
        </div>
        <div className="pup-container">
          {this.state.cardData.map((dog, i) => 
          <Card 
            {...this.props}
            key={i}
            dogData={dog}
            updateLikes={this.clickHandler}
            releasePup={this.releasePup}
          />)}
        </div>
      </div>
    )  
  }
}

export default CardList;