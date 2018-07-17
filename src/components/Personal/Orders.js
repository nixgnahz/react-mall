import React from 'react'
import {Link} from "react-router-dom"

import Icon from '../common/Icon'

class Orders extends React.Component {
  render () {
    return (
      <div className="personal-order">
        <div className="personal-order-title">
          <span>我的订单</span>
          <Link to='./orders' className="personal-order-title-enter">
            <span>查看全部</span>
            <Icon icon="enter" size="smaller"/>
          </Link>
        </div>
        <ul>
          <li>
            <Icon icon="daifukuan" size='middle'/>
            <span>待付款</span>
          </li>
          <li>
            <Icon icon="daifahuo" size='middle'/>
            <span>待发货</span>
          </li>
          <li>
            <Icon icon="nogoods" size='middle'/>
            <span>待收获</span>
          </li>
          <li>
            <Icon icon="daipingjia" size='middle'/>
            <span>待评价</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Orders