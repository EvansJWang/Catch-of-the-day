import React from 'react';

export default class Header extends React.Component {
  render() {
    let {tagline} = this.props
    return(
      <header className='top'>
        <h1>
        Catch
        <span className='ofThe'>
          <span className='of'>of</span>
          <span className='the'>the</span>
        day
        </span>
        </h1>
        <h3 className='tagline'> <span>{tagline}</span> </h3>

      </header>
    )
  }
}
