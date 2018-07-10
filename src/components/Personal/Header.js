import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="personal-head">
        <img className="personal-head-portrait" src='http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/4/e/0/5b3db4fd3eab9.jpeg' alt=''/>
        <div className="personal-head-name">
          <p>HI我的英文名字叫zhangxin，好听吗</p>
          <p className="vip">vip用户</p>
        </div>
      </div>
    )
  }
}

export default Header