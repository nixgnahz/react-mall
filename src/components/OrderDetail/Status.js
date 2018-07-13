import React from 'react'

import Icon from '../common/Icon'

class Status extends React.Component {
  render () {
    const {info} = this.props
    return (
      <div className='order-detail-status'>
        <Item value={info} />
        <Icon icon='qianbao' size='big'/>
      </div>
    )
  }
}

function Item(prop) {
  const item = prop.value
  switch (item.statusCode) {
    case 0:
      return <p><span>等待买家付款</span><span>剩余21小时34分钟自动关闭</span></p>
    case 1:
      return <p>等待发货</p>
    case 2:
      return <p>等待收货</p>
    case 3:
      return <p><span>交易成功</span><span>等待评价</span></p>
    case 4:
      return <p>交易成功</p>
    default:
      return <p>交易关闭</p>
  }
}

export default Status