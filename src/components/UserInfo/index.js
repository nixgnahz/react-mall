import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

import Icon from '../common/Icon'
import Name from './Name'
import Portrait from './Portrait'
import Sex from './Sex'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sex: '保密',
      name: 'jd_1886182z',
      portrait: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/4/e/0/5b3db4fd3eab9.jpeg',
      showPortrait: false,
      showName: false,
      showSex: false
    }
    this.changePortraitFlag = this.changePortraitFlag.bind(this)
    this.changeNameFlag = this.changeNameFlag.bind(this)
    this.changeSexFlag = this.changeSexFlag.bind(this)
    this.changeSex = this.changeSex.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  changePortraitFlag () {
    this.setState({
      showPortrait: !this.state.showPortrait
    })
  }

  changeNameFlag () {
    this.setState({
      showName: !this.state.showName
    })
  }

  changeSexFlag () {
    this.setState({
      showSex: !this.state.showSex
    })
  }

  changeSex (sex) {
    this.setState({
      sex: sex
    })
    this.changeSexFlag()
  }

  changeName (name) {
    this.setState({
      name: name
    })
    this.changeNameFlag()
  }

  render () {
    const {sex, name, portrait, showPortrait, showName, showSex} = this.state
    return (
      <section className='userinfo'>
        <div className='userinfo-list'>
          <div className='userinfo-list-item'>
            <p>头像</p>
            <p onClick={this.changePortraitFlag}>
              <img src={portrait} alt=''/>
              <Icon icon='enter'/>
            </p>
          </div>
          <div className='userinfo-list-item'>
            <p>用户名</p>
            <p>jd_5d0384hd74h3nx02</p>
          </div>
          <div className='userinfo-list-item'>
            <p>昵称</p>
            <p onClick={this.changeNameFlag}>
              <span>{name}</span>
              <Icon icon='enter'/>
            </p>
          </div>
          <div className='userinfo-list-item'>
            <p>性别</p>
            <p onClick={this.changeSexFlag}>
              <span>{sex}</span>
              <Icon icon='enter'/>
            </p>
          </div>
        </div>
        {showPortrait ? <Portrait change={this.changePortraitFlag}/> : ''}
        {showName ? <Name change={this.changeNameFlag} changeName={this.changeName}/> : ''}
        {showSex ? <Sex change={this.changeSexFlag} changeSex={this.changeSex}/> : ''}
      </section>
    )
  }
}

export default UserInfo