import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
    console.log('constructor');
  }

  componentDidMount = () => {
    console.log('componentDidMount()');
  } // Called after component mounts

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  } // Called after each render

  componentWillUnmount() {
    console.log('componentWillUnmount');
  } // Called before component unmounts

  clickHandler = (name) => {
    console.log(name);
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return(
      <div className="card">
        <img src={this.props.image} alt="profile pic"/>
        <h1>{this.props.name}</h1>
        <button onClick={(e) => this.clickHandler(this.props.name)}>{this.state.likes} Likes </button>
        <p>age: {this.props.age}</p>
        <p>{this.props.description}</p>
      </div>
    )  
  }
}

export default Card;