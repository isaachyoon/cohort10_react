import React from 'react';
import './App.css';
import CardList from './CardList/CardList';
import Info from './Info/Info';
import HomePage from './HomePage/HomePage'
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import Store from './STORE';
import { Route, Link, Switch } from 'react-router-dom';
import PupContext from './PupContext';
import ErrorPage from './ErrorPage/ErrorPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = Store
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
    return (
      <div className="App">
        <Link to={'/'}>PUP HOME</Link>
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route path='/info' component={Info}/>
          <Route exact path='/pups' render={(props) => 
            <PupContext.Provider value={{
                store: this.state,
                updateLikes: this.clickHandler,
                getMorePups: this.getMorePups,
                releasePup: this.releasePup,
              }}>
              <CardList {...props} />
            </PupContext.Provider>}/>
          <Route path='/pups/:id' render={(props) => <Details {...props} store={Store}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
