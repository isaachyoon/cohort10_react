import React from 'react';
import './Dummy.css';
import PupContext from '../PupContext';

function Dummy(props) {
  return (
    <PupContext.Consumer>
      {(data) => {
       return (
        <div>
          We are now in the Dummy Page      
        </div>
       )}
      }
    </PupContext.Consumer>
  );
}
export default Dummy;