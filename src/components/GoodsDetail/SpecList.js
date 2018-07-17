import React from 'react'

import Icon from '../common/Icon'

class SpecList extends React.Component {
  render () {
    const {change} = this.props
    return (
      <div className='float-mask'>
        <div className='goods-detail-spec'>
          <div className='goods-detail-spec-info'>
            <div className='goods-detail-spec-info-cover' style={{backgroundImage: 'url(http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/4/4/d/5b49aa016c765.png)'}}></div>
            <div className='goods-detail-spec-info-price'>
              <p>¥45</p>
              <p>库存4923</p>
              <p>选择颜色尺寸</p>
            </div>
            <span className='goods-detail-spec-info-close' onClick={change}>
              <Icon icon='close' size='small'/>
            </span>
          </div>
          <div className='goods-detail-spec-list'>
            <p className='title'>颜色</p>
            <ul>
              <li>黑色+深灰+藏蓝+浅灰</li>
              <li>灰色+深灰+深蓝+黑色</li>
              <li>藏蓝+天蓝+咖啡+浅灰</li>
              <li>藏蓝+天蓝+咖啡+浅灰</li>
              <li>浅灰+深绿+咖啡+黑色</li>
            </ul>
          </div>
          <div className='goods-detail-spec-list'>
            <p className='title'>尺码</p>
            <ul>
              <li>L(尺码偏小，拍大一码)</li>
              <li>XL(尺码偏小，拍大一码)</li>
              <li>2XL(尺码偏小，拍大一码)</li>
              <li>3XL</li>
            </ul>
          </div>
          <p className='goods-detail-spec-btn'>确定</p>
        </div>
      </div>
    )
  }
}

export default SpecList