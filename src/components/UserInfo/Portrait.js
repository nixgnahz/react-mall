import React from 'react'

import Icon from '../common/Icon'

class Portrait extends React.Component {
  constructor(props) {
    super(props)
  }

  getAlbum (e) {
    e.stopPropagation()
  }

  takePhoto (e) {
    e.stopPropagation()
  }

  render () {
    const {change} = this.props
    return (
      <div className='float-mask userinfo-float' onClick={change}>
        <div className='userinfo-change'>
          <p className='userinfo-change-title'>修改头像</p>
          <div className='userinfo-change-list'>
            <p onClick={this.getAlbum}>
              <Icon icon='xiangce' size='middle'/>
              <span>相册</span>
            </p>
            <p onClick={this.takePhoto}>
              <Icon icon='paizhao' size='middle'/>
              <span>拍照</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Portrait