import React from 'react'

import Icon from '../common/Icon'

class Action extends React.Component {
  render () {
    return (
      <div className='goods-detail-action'>
        <div className='goods-detail-action-icon'>
          <Icon icon='home1' size='small'/>
        </div>
        <div className='goods-detail-action-icon'>
          <Icon icon='collection' size='small'/>
        </div>
        <div className='goods-detail-action-icon'>
          <Icon icon='cart' size='small'/>
        </div>
        <p className='goods-detail-action-btn btn1'>加入购物车</p>
        <p className='goods-detail-action-btn btn2'>立即购买</p>
      </div>
    )
  }
}

export default Action