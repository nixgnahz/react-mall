import React from 'react'
import {Link} from 'react-router-dom'

import Icon from '../common/Icon'

class Actions extends React.Component {
  render () {
    return (
      <div className="personal-actions">
        <Link to='./ticket'>
          <Icon icon="youhuiquan" size='big'/>
          <span>优惠券</span>
        </Link>
        <Link to='./collect'>
          <Icon icon="collect" size='big'/>
          <span>我的收藏</span>
        </Link>
        <Link to='./records'>
          <Icon icon="liulanjilu" size='big'/>
          <span>浏览记录</span>
        </Link>
        <Link to='./refund'>
          <Icon icon="tuikuan" size='big'/>
          <span>我的退款</span>
        </Link>
      </div>
    )
  }
}

export default Actions