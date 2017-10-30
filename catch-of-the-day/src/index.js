import React from 'react';
import {render} from 'react-dom'
import './css/style.css';
import App from './components/App'
import NotFound from './components/NotFound'
import StorePicker from './components/StorePicker'

import {BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return(
    <BrowserRouter basename="getting-fishy-with-it">
      <div>
        <Match exactly pattern='/' component={StorePicker}/>
        <Match exactly pattern='/store/:storeId' component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('main'))
