import React from 'react'
import {withRouter} from 'react-router-dom'

import Icon from '../common/Icon'

class GoodsInfo extends React.Component {
  constructor(props) {
    super(props)
    this.showGoodsDetail = this.showGoodsDetail.bind(this)
  }

  showGoodsDetail () {
    this.props.history.push('/detail/0')
  }

  render () {
    const {info} = this.props
    const money  = (info.price * info.num).toFixed(2)
    const freight = Number(info.freight) > 0 ? '¥' + info.freight : '免运费'
    const total = (info.price * info.num + Number(info.freight)).toFixed(2)
    return (
      <div className='order-detail-goods'>
        <p className='order-detail-goods-shop'>
          <Icon icon='shop' size='small'/>
          <span>{info.shop}</span>
        </p>
        <div className='order-detail-goods-info' onClick={this.showGoodsDetail}>
          <div className='cover' style={{backgroundImage: 'url(' + info.cover + ')'}}></div>
          <div className='info'>
            <p>{info.name}</p>
            <p>{info.param.color} {info.param.size}</p>
          </div>
          <div className='price'>
            <p>¥{info.price}</p>
            <p>x{info.num}</p>
          </div>
        </div>
        <div className='order-detail-goods-money'>
          <p><span>商品金额</span><span>¥{money}</span></p>
          <p><span>运费</span><span>{freight}</span></p>
          <p><span>实际付款（含运费）</span><span>¥{total}</span></p>
        </div>
      </div>
    )
  }
}

export default withRouter(GoodsInfo)