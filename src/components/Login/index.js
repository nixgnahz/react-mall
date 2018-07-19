import React from 'react'

import './index.scss'
import Message from './Message'
import Password from './Password'
import Toast from '../common/Toast'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      toast: ''
    }
    this.changeActiveIndex = this.changeActiveIndex.bind(this)
    this.hideToast = this.hideToast.bind(this)
    this.showToast = this.showToast.bind(this)
  }

  changeActiveIndex () {
    this.setState({
      activeIndex: !this.state.activeIndex
    })
  }

  showToast (toast) {
    this.setState({
      toast: toast
    })
  }

  hideToast () {
    this.setState({
      toast: ''
    })
  }

  render () {
    const {activeIndex, toast} = this.state
    return (
      <section className='login'>
        <img src='http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/8/a/6/5b50448103280.png' />
        <div className='login-menu'>
          <p className={activeIndex ? "inactive" : "active"} onClick={this.changeActiveIndex}>短信登录</p>
          <p className={!activeIndex ? "inactive" : "active"} onClick={this.changeActiveIndex}>密码登录</p>
        </div>
        {activeIndex ? <Password show={this.showToast}/> : <Message show={this.showToast}/>}
        {toast ? <Toast toast={toast} hideToast={this.hideToast}/> : ''}
      </section>
    )
  }
}

export default Login