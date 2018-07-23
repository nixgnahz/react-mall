import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <Link to='./userinfo' className="personal-head">
        <img className="personal-head-portrait" src='http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/4/e/0/5b3db4fd3eab9.jpeg' alt=''/>
        <div className="personal-head-name">
          <p>HI我的英文名字叫zhangxin，好听吗</p>
          <p className="vip">vip用户</p>
        </div>
      </Link>
    )
  }
}

export default Header