import React from 'react'

import './index.scss'

class Modal extends React.Component {
  static defaultProps = {
    showCancel: true,
    title: '提示',
    desc: '这里是重点提示内容哦～',
    makeCancel: ()=> {},
    makeSure: ()=> {}
  }

  render () {
    const {showCancel, title, desc, makeCancel, makeSure} = this.props
    return (
      <div className="float-mask modal-box">
        <div className="modal">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
          <div className="btns">
            {showCancel ? <p onClick={makeCancel}>取消</p> : ''}
            <p onClick={makeSure}>确认</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal