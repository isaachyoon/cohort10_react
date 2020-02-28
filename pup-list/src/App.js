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
class App extends React.Component {
  render() {
    console.log('13', PupContext);
    return (
      <div className="App">
        <Link to={'/'}>PUP HOME</Link>
        <Switch>
          {/* <Route exact path='/' component={HomePage}/> */}
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route path='/info' component={Info}/>
          <Route exact path='/pups' render={(props) => 
            <PupContext.Provider value={{
                store: Store,
                text: 'hello',
                someFunc: () => {}
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
