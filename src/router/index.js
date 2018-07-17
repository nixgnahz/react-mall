import React from "react"
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom"

import './index.scss'
import '../assets/iconfont'

import Home from '../components/Home/index'
import Search from '../components/Search/index'
import Cart from '../components/Cart/index'
import Personal from '../components/Personal/index'
import Orders from '../components/Orders/index'
import Address from '../components/Address/index'

const tabBar = [
  {
    name: "首页",
    path: "/home",
    icon: 'homefill'
  },
  {
    name: "购物车",
    path: "/cart",
    icon: 'cartfill'
  },
  {
    name: "个人",
    path: "/person",
    icon: 'personfill'
  }
]

class TabBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

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
          <div className="tabBar-empty"></div>
          <ul className="tabBar">
          {
            tabBar.map((route, index)=>
              <li key={route.path}>
                <NavLink to={route.path} activeClassName='active'>
                  <svg className={'icon-svg-menu'} aria-hidden="true">
                    <use xlinkHref={'#icon-' + route.icon}></use>
                  </svg>
                  <span>{route.name}</span>
                </NavLink>
              </li>
            )
          }
          </ul>
        </div>
      </Router>
    )
  }
}

export default TabBar