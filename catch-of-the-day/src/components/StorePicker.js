import React from 'react';

export default class StorePicker extends React.Component {
  render(){
    return(
      <form className="store-selector">
        <h2> Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name'/>
        <button type='submit'>Enter the Store!</button>
      </form>
    )
  }
}
