import React from 'react';
import { getFunName } from '../helpers'

export default class StorePicker extends React.Component {
  // Best practice if using more than once
  // constructor() {
  //   super()
  //   this.goToStore = this.goToStore.bind(this)
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('work')
    //first grab text from the box
    //transition from '/' to '/store/:storeId'
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render(){
    return(
      <form className="store-selector" onSubmit={(event) => this.goToStore(event)}>
        <h2> Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}}/>
        <button type='submit'>Enter the Store!</button>
      </form>
    )
  }
}


StorePicker.contextTypes = {
  router: React.PropTypes.object
}
