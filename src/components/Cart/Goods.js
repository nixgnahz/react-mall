import React from 'react'

import CheckBox from '../common/Checkbox'

class Goods extends React.Component {
  render () {
    const {goods, cancel, add, minus} = this.props
    return(
      <ul className="cart-goods">
      {
        goods.map((item, index) =>
          <li key={item.id}>
            <p onClick={()=> {cancel(index)}}>
              <CheckBox selected={item.selected}/>
            </p>
            <div className="cart-goods-cover" style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
            <div className="cart-goods-info">
              <p>{item.name}</p>
              <p>¥<span>{item.price}</span></p>
            </div>
            <div className="cart-goods-action">
              <span className="cart-goods-action-btn" onClick={()=> {minus(index)}}>-</span>
              <span className="cart-goods-action-num">{item.num}</span>
              <span className="cart-goods-action-btn" onClick={()=> {add(index)}}>+</span>
            </div>
          </li>
        )
      }
      </ul>
    )
  }
}

export default Goods