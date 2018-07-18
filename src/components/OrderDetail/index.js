import React from 'react'

import './index.scss'

import Icon from '../common/Icon'
import Status from './Status'
import Address from './Address'
import GoodsInfo from './GoodsInfo'
import OrderInfo from './OrderInfo'
import Action from './Action'

const orderInfo = {
  id: 1,
  shop: '小米手机商城',
  statusCode: 0,
  status: '待支付',
  cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
  name: '粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋',
  param: {
    color: '金色',
    size: '3G+32G'
  },
  price: '1099.00',
  freight: '0.00',
  num: 1,
  address: {
    "consignee": "张三",
    "phone": "18888888888",
    "position_id": "10086",
    "positionStr": "辽宁省铁岭市银州区龙山乡",
    "detailAddress": "申莘新村",
    "tag": "家",
    "isDefault": 1
  }
}

class OrderDetail extends React.Component {
  render () {
    const orderId = this.props.match.params.id
    return (
      <section className='order-detail'>
        <Status info={orderInfo}/>
        <Address info={orderInfo.address} />
        <GoodsInfo info={orderInfo} />
        <button className='order-detail-call'>
          <Icon icon='tel' size='middle'/>
          <span>拨打商家电话</span>
        </button>
        <OrderInfo info={orderInfo}/>
        <Action/>
      </section>
    )
  }
}

export default OrderDetail