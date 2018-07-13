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
              <p className='cart-goods-info-name'>{item.name}</p>
              <p className='cart-goods-info-desc'>{item.param.color} {item.param.size}</p>
              <div className='cart-goods-info-action'>
                <p className='cart-goods-info-action-price'>¥<span>{item.price}</span></p>
                <p className="action">
                  <span className="cart-goods-info-action-btn" onClick={()=> {minus(index)}}>-</span>
                  <span className="cart-goods-info-action-num">{item.num}</span>
                  <span className="cart-goods-info-action-btn" onClick={()=> {add(index)}}>+</span>
                </p>
              </div>
            </div>
          </li>
        )
      }
      </ul>
    )
  }
}

export default Goods