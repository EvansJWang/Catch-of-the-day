import React from 'react';
import AddFishForm from './AddFishForm';

export default class Inventory extends React.Component {
  render() {
    return(
      <div>
        <AddFishForm/>
        <p> Inventory </p>
      </div>
    )
  }
}
