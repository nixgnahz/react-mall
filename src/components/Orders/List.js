import React from 'react'

class List extends React.Component {
  render () {
    const {orders} = this.props
    return (
      <ul className="order-detail">
        {orders.map((item)=>
          <li key={item.id}>
            <div className="order-list">
              <ItemStatus value={item} />
              <Item value={item} />
              <ItemTotal value={item} />
            </div>
            <ItemAction value={item} />
          </li>
        )}
      </ul>
    )
  }
}

function ItemStatus(prop) {
  const item = prop.value
  return (
    <p className="order-list-head">
      <span>{item.shop}</span>
      <span className="order-list-head-status">{item.status}</span>
    </p>
  )
}

function Item(prop) {
  const item = prop.value
  return (
    <div className="order-list-info">
      <div className="order-list-info-cover" style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
      <div className="order-list-info-detail">
        <p className="order-list-info-detail-name">{item.name}</p>
        <p className="order-list-info-detail-param">
          <span>{item.param.color} </span>
          <span>{item.param.size}</span>
        </p>
      </div>
      <p className="order-list-info-price">
        <span>¥{item.price}</span>
        <span>x{item.num}</span>
      </p>
    </div>
  )
}

function ItemTotal(prop) {
  const item = prop.value
  const total = (item.num * item.price).toFixed(2)
  return (
    <p className="order-list-total">
      <span>合计：</span>
      <span>¥{total}</span>
    </p>
  )
}

function ItemAction(prop) {
  const item = prop.value
  switch (item.statusCode) {
    case 0:
      return <div className="order-detail-action"><span>取消订单</span><span className="light">去支付</span></div>
    case 1:
      return <div className="order-detail-action"><span>查看订单</span></div>
    case 2:
      return <div className="order-detail-action"><span>查看物流</span></div>
    case 3:
      return <div className="order-detail-action"><span>再来一单</span><span className="light">去评价</span></div>
    case 4:
      return <div className="order-detail-action"><span>再来一单</span></div>
    default:
      return null
  }
}

export default List