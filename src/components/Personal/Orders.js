import React from 'react'
import {Link} from "react-router-dom"

import Icon from '../common/Icon'

class Orders extends React.Component {
  render () {
    return (
      <div className="personal-order">
        <div className="personal-order-title">
          <span>我的订单</span>
          <Link to='./orders/0' className="personal-order-title-enter">
            <span>查看全部</span>
            <Icon icon="enter" size="smaller"/>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='./orders/1'>
              <Icon icon="daifukuan" size='middle'/>
              <span>待付款</span>
            </Link>
          </li>
          <li>
            <Link to='./orders/2'>
              <Icon icon="daifahuo" size='middle'/>
              <span>待发货</span>
            </Link>
          </li>
          <li>
            <Link to='./orders/3'>
              <Icon icon="nogoods" size='middle'/>
              <span>待收获</span>
            </Link>
          </li>
          <li>
            <Link to='./orders/4'>
              <Icon icon="daipingjia" size='middle'/>
              <span>待评价</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Orders