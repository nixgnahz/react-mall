import React from 'react'

import Icon from '../common/Icon'

class Empty extends React.Component {
  render () {
    return(
      <div className="cart-empty">
        <Icon icon='empty' size='bigger'/>
        <p>您还没有添加任何商品哦～</p>
      </div>
    )
  }
}

export default Empty