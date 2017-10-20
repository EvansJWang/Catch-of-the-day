import React from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends React.Component{
  render() {
    let details = this.props.details;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable? 'Add To Order' : 'Sold Out!'
    return(
      <li className="menu-fish">
      <img src={details.image} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}
