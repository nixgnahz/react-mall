import React from 'react'

import CheckBox from '../common/Checkbox'

class Action extends React.Component {
  render () {
    const {selected, total, cancelAll} = this.props
    return (
      <div className="cart-foot">
        <p className="cart-foot-checkbox" onClick={cancelAll}>
          <CheckBox selected={selected}/>
          <span>全选</span>
        </p>
        <p className="cart-foot-total">合计<span>¥{total}</span></p>
        <div className="cart-foot-action">
          <p>去结算</p>
          <span></span>
        </div>
      </div>
    )
  }
}

export default Action