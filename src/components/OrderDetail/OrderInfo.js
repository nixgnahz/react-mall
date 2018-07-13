import React from 'react'

class OrderInfo extends React.Component {
  render () {
    return (
      <div className='order-detail-order'>
        <p>订单编号: <span>180710-630372183128023</span></p>
        <p>创建时间: <span>2018-07-10 22:27:21</span></p>
        <p>付款时间: <span>2018-07-10 23:27:21</span></p>
        <p>交易单号: <span>4200000022364546410395893244</span></p>
        <p>快递单号: <span>4002353350098</span></p>
      </div>
    )
  }
}

export default OrderInfo