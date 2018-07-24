import React from 'react'

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"

import Home from './Home/index'
import Classify from './Classify/index'
import Cart from './Cart/index'
import Personal from './Personal/index'
import Search from './Search/index'
import Orders from './Orders/index'
import Address from './Address/index'
import GoodsDetail from './GoodsDetail/index'
import OrderDetail from './OrderDetail/index'
import Login from './Login/index'
import Collect from './Collect/index'
import ViewRecords from './ViewRecords/index'
import Setting from './Setting/index'
import Question from './Question/index'
import Contact from './Contact/index'
import Feedback from './Feedback/index'
import UserInfo from './UserInfo/index'
import About from './About/index'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() =><Redirect to='/home'/>}/>
          <Route path='/home' component={Home}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/person' component={Personal}/>
          <Route path='/orders/:id' component={Orders}/>
          <Route path='/address' component={Address}/>
          <Route path='/search' component={Search}/>
          <Route path='/detail/:id' component={GoodsDetail}/>
          <Route path='/order/:id' component={OrderDetail}/>
          <Route path='/login' component={Login}/>
          <Route path='/collect' component={Collect}/>
          <Route path='/records' component={ViewRecords}/>
          <Route path='/setting' component={Setting}/>
          <Route path='/question' component={Question}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/feedback' component={Feedback}/>
          <Route path='/userinfo' component={UserInfo}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    )
  }
}

export default App