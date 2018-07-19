import React from 'react'

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPwd: false,
      username: '',
      password: ''
    }
    this.changeType = this.changeType.bind(this)
    this.login = this.login.bind(this)
    this.getUsername = this.getUsername.bind(this)
    this.getPassword = this.getPassword.bind(this)
  }

  changeType () {
    this.setState({
      showPwd: !this.state.showPwd
    })
  }

  login () {
    if(!this.state.username) {
      this.props.show('请输入用户名')
      return
    }
    if(!this.state.password) {
      this.props.show('请输入密码')
      return
    }
  }

  getUsername (e) {
    this.setState({
      username: e.target.value
    })
  }

  getPassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    const {showPwd, username, password} = this.state
    return (
      <div className='login-input'>
        <div>
          <input type='text' placeholder='请输入用户名' onChange={this.getUsername} value={username}/>
        </div>
        <div>
          <input type={showPwd ? 'text' : 'password'} placeholder='请输入密码' onChange={this.getPassword} value={password}/>
          <p className='switch'>
            <input type="checkbox" id="show"/>
            <label htmlFor="show" onClick={this.changeType}></label>
          </p>
        </div>
        <button className='login-btn' onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Password