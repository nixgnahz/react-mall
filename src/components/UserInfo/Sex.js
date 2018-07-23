import React from 'react'

class Sex extends React.Component {
  constructor(props) {
    super(props)
    this.changeSex = this.changeSex.bind(this)
  }

  changeSex (e) {
    e.stopPropagation()
    this.props.changeSex(e.target.getAttribute("data-value"))
  }

  render () {
    const {change} = this.props
    return (
      <div className='float-mask userinfo-float' onClick={change}>
        <div className='userinfo-change'>
          <p className='userinfo-change-title'>修改性别</p>
          <div className='userinfo-change-list'>
            <p onClick={this.changeSex} data-value='男'>
              <span>男</span>
            </p>
            <p onClick={this.changeSex} data-value='女'>
              <span>女</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sex