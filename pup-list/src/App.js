import React from 'react';
import './App.css';
import CardList from './CardList/CardList';
import Info from './Info/Info';
import HomePage from './HomePage/HomePage'
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import Store from './STORE';
import { Route, Link, Switch } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to={'/'}>PUP HOME</Link>
        <Switch>
          {/* <Route exact path='/' component={HomePage}/> */}
          <Route exact path='/' render={(props) => <HomePage/>}/>
          <Route path='/info' component={Info}/>
          <Route exact path='/pups' render={(props) => <CardList {...props} store={Store}/>}/>
          <Route path='/pups/:id' render={(props) => <Details {...props} store={Store}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
