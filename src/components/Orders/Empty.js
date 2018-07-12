import React from 'react'

import Icon from '../common/Icon'

class Empty extends React.Component {
  render () {
    return(
      <div className="orders-empty">
        <Icon icon="orders" size="bigger" />
        <p>还没有相关订单哦～</p>
      </div>
    )
  }
}

export default Empty