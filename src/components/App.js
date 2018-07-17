import React from 'react'

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"

import Home from './Home/index'
import Search from './Search/index'
import Cart from './Cart/index'
import Personal from './Personal/index'
import Orders from './Orders/index'
import Address from './Address/index'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() =><Redirect to='/home'/>}/>
          <Route path='/home' component={Home}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/person' component={Personal}/>
          <Route path='/orders' component={Orders}/>
          <Route path='/address' component={Address}/>
          <Route path='/search' component={Search}/>
        </div>
      </Router>
    )
  }
}

export default App