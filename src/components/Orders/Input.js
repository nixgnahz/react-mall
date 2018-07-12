import React from 'react'

import Icon from '../common/Icon'

class Input extends React.Component {
  render () {
    return (
      <div className="orders-input">
        <span className="search-input-icon"><Icon icon='search' size='small'/></span>
        <input type='text' placeholder='商品名称／商品编号／订单号'/>
      </div>
    )
  }
}

export default Input