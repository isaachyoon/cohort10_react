import React from 'react';
import './App.css';
import CardList from './CardList/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      cardData: [
        {
          id: 1,
          name: "Steve",
          imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
          age: 5,
          description: "Lorem ipsum dolor sit amet",
          likes: 100,
        },
        {
          id: 2,
          name: "Chip",
          imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
          age: 3,
          description: "consectetur adipiscing elit",
          likes: 100,
        },
        {
          id: 3,
          name: "Banjo",
          imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
          age: 2,
          description: "Sed do eiusmod tempor incididunt ut ",
          likes: 100,
        },  
        {
          id: 4,
          name: "Flip",
          imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
          age: 6,
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          likes: 0,
        }
      ]
    }
  }

  clickHandler = (id) => {
    console.log('id', id);
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
  

  render() {
    return (
      <div className="App">
        <CardList 
          data={this.state.cardData}
          updateLikes={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
