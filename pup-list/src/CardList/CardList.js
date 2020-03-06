import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
import PupContext from '../PupContext';
import ErrorPage from '../ErrorPage/ErrorPage';

class CardList extends React.Component {
  render() {
    return(
      <PupContext.Consumer>
        {(context) => {
          return (
            <div className="container">
              <div>
                <button onClick={context.getMorePups}>Get More Pups</button>
              </div>
              <div className="pup-container">
                {context.store.cardData.map((dog, i) => 
                <ErrorPage>
                  <Card 
                    {...this.props}
                    key={i}
                    dogData={dog}
                    prop1={['dog1', 'dog2', 'dog3']} 
                    prop2= {2}
                    prop3={false}
                    prop4={5}
                  />
                </ErrorPage>
                )}
              </div>
            </div>
        )}
        } 
      </PupContext.Consumer>
    )  
  }
}

export default CardList;