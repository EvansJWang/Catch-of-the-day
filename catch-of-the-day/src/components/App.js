import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fishes: {},
      order: {}
    }
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addFish(fish) {
    // copy then update state
    const fishes = {...this.state.fishes};
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    // set state
    this.setState( {fishes} )
    //same as this ^
    //this.setState({ fishes: fishes })
  }

  render() {
    return(
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul className="list-of-fish">
            {
              Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
          <Order/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}
