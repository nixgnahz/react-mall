import React from "react"
import {NavLink} from "react-router-dom"

import './index.scss'
import '../assets/iconfont'

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
  render () {
    return (
      <div>
        <div className="tabBar-empty"></div>
        <ul className="tabBar">
        {tabBar.map((route, index)=>
          <li key={route.path}>
            <NavLink to={route.path} activeClassName='active'>
              <svg className={'icon-svg-menu'} aria-hidden="true">
                <use xlinkHref={'#icon-' + route.icon}></use>
              </svg>
              <span>{route.name}</span>
            </NavLink>
          </li>
        )}
        </ul>
      </div>
    )
  }
}

export default TabBar