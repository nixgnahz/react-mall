import React from 'react'
import {Link} from 'react-router-dom'

import Icon from '../common/Icon'

class Action extends React.Component {
  render () {
    return (
      <div className='goods-detail-action'>
        <Link replace to='/home' className='goods-detail-action-icon'>
          <Icon icon='home1' size='small'/>
        </Link>
        <div className='goods-detail-action-icon'>
          <Icon icon='collection' size='small'/>
        </div>
        <Link to='/cart' className='goods-detail-action-icon'>
          <Icon icon='cart' size='small'/>
        </Link>
        <p className='goods-detail-action-btn btn1'>加入购物车</p>
        <p className='goods-detail-action-btn btn2'>立即购买</p>
      </div>
    )
  }
}

export default Action