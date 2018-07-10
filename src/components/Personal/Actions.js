import React from 'react'

import Icon from '../common/Icon'

class Actions extends React.Component {
  render () {
    return (
      <div className="personal-actions">
        <p>
          <Icon icon="youhuiquan" size='big'/>
          <span>我的优惠券</span>
        </p>
        <p>
          <Icon icon="collect" size='big'/>
          <span>我的收藏</span>
        </p>
        <p>
          <Icon icon="liulanjilu" size='big'/>
          <span>浏览记录</span>
        </p>
        <p>
          <Icon icon="tuikuan" size='big'/>
          <span>我的退款</span>
        </p>
      </div>
    )
  }
}

export default Actions