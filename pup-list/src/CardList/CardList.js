import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
import PupContext from '../PupContext';

class CardList extends React.Component {
  render() {
    return(
      <PupContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <div className="container">
              <div>
                <button onClick={context.getMorePups}>Get More Pups</button>
              </div>
              <div className="pup-container">
                {context.store.cardData.map((dog, i) => 
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