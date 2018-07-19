import React from 'react'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clock: '获取验证码',
      tel: '',
      code: ''
    }
    this.timer = null
    this.countdown = 60
    this.getTel = this.getTel.bind(this)
    this.getCode = this.getCode.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this._countdown = this._countdown.bind(this)
    this.login = this.login.bind(this)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  getTel (e) {
    this.setState({
      tel: e.target.value
    })
  }

  getCode (e) {
    this.setState({
      code: e.target.value
    })
  }

  sendCode () {
    if(!this.state.tel) {
      this.props.show('请输入手机号')
      return
    }
    if(this.state.clock == '获取验证码') {
      this._countdown()
    }
  }

  _countdown () {
    this.setState({
      clock: this.countdown + '秒后重新获取'
    })
    this.timer = setInterval(()=> {
      this.countdown--
      if(this.countdown <= 0) {
        clearInterval(this.timer)
        this.countdown = 60
        this.setState({
          clock: '获取验证码'
        })
      } else {
        this.setState({
          clock: this.countdown + '秒后重新获取'
        })
      }
    }, 1000)
  }

  login () {
    if(!this.state.tel) {
      this.props.show('请输入手机号')
      return
    }
    if(!this.state.code) {
      this.props.show('请输入验证码')
      return
    }
  }

  render () {
    const {tel, code, clock} = this.state
    return (
      <div className='login-input'>
        <div>
          <input type='text' placeholder='请输入手机号' value={tel} onChange={this.getTel}/>
        </div>
        <div>
          <input type='number' placeholder='请输入验证码' value={code} onChange={this.getCode}/>
          <p className='login-message-code' onClick={this.sendCode}>{clock}</p>
        </div>
        <button className='login-btn' onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Message