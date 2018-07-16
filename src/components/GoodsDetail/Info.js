import React from 'react'

import Icon from '../common/Icon'

class Info extends React.Component {
  render () {
    const {info, changeExplain} = this.props
    return (
      <div className='goods-detail-info'>
        <p className='goods-detail-info-title'>{info.name}</p>
        <p className='goods-detail-info-desc'>{info.desc}</p>
        <p className='goods-detail-info-price'>
          <span className='price'>¥{info.price}</span>
          <span className='origin-price'>¥{info.originPrice}</span>
          <span className='sales'>已售{info.sales}</span>
        </p>
        <div className='goods-detail-info-labels' onClick={changeExplain}>
          {info.labels.slice(0, 3).map((item)=>
            <p key={item.id}>
              <Icon icon='uutchoice' size='smaller'/>
              <span>{item.title}</span>
            </p>
          )}
          <Icon icon='enter' size='smaller'/>
        </div>
        <div className='goods-detail-info-spec'>
          <p>请选择 颜色 尺寸</p>
          <Icon icon='enter' size='smaller'/>
        </div>
      </div>
    )
  }
}

export default Info