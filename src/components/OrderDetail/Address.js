import React from 'react'

import Icon from '../common/Icon'

class Address extends React.Component {
  render () {
    const {info} = this.props
    return (
      <div className='order-detail-address'>
        <Icon icon='address' size='small'/>
        <div>
          <p>
            <span>{info.consignee}</span>
            <span>{info.phone}</span>
          </p>
          <p>{info.positionStr}{info.detailAddress}</p>
        </div>
      </div>
    )
  }
}

export default Address