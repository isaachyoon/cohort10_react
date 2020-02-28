import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
import PupContext from '../PupContext';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      // count: props.store.count,
      // cardData: props.store.cardData
    // }
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
      <PupContext.Consumer>
        {(data) => {
          return (
            <div className="container">
              <div>
                <button onClick={this.getMorePups}>Get More Pups</button>
              </div>
              <div className="pup-container">
                {data.store.cardData.map((dog, i) => 
                <Card 
                  {...this.props}
                  key={i}
                  dogData={dog}
                />)}
              </div>
            </div>
        )}
        } 
      </PupContext.Consumer>
    )  
  }
}

export default CardList;