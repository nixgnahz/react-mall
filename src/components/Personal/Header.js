import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render () {
    const {avatar, name, account} = this.props.userInfo
    return (
      <Link to={account ? './userinfo' : './login'} className="personal-head">
        <img className="personal-head-portrait" src={avatar} alt=''/>
        <div className="personal-head-info">
          <p className='personal-head-info-name'>{name}</p>
          {account ? <p className="personal-head-info-account">登录账号：{account}</p> : ''}
        </div>
      </Link>
    )
  }
}

export default Header