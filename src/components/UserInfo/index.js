import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import {getUserInfo} from '../../api/user'
import {getGender} from '../../api/keyword'
import {defaultAvatar, getGenderInfo} from '../../assets/common'

import './index.scss'

import Icon from '../common/Icon'
import Name from './Name'
import Portrait from './Portrait'
import Sex from './Sex'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        gender: '保密',
        name: '',
        avatar: defaultAvatar,
        account: ''
      },
      genderArr: [],
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

  componentDidMount () {
    Promise.all([getUserInfo(), getGender()]).then((res)=> {
      let userInfo = res[0].data
      let genderArr = res[1].data
      userInfo.gender = getGenderInfo(genderArr, userInfo.gender)
      this.setState({
        userInfo: userInfo,
        genderArr: genderArr
      })
    }).catch((error)=> {
      this.props.history.replace('/login')
    })
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

  changeSex (gender) {
    this.state.userInfo.gender = getGenderInfo(this.state.genderArr, gender)
    this.setState({
      userInfo: this.state.userInfo
    })
    this.changeSexFlag()
  }

  changeName (name) {
    this.state.userInfo.name = name
    this.setState({
      userInfo: this.state.userInfo
    })
    this.changeNameFlag()
  }

  render () {
    const {showPortrait, showName, showSex, genderArr} = this.state
    const {gender, account, name, avatar} = this.state.userInfo
    return (
      <section className='userinfo'>
        <div className='userinfo-list'>
          <div className='userinfo-list-item'>
            <p>头像</p>
            <p onClick={this.changePortraitFlag}>
              <img src={avatar} alt=''/>
              <Icon icon='enter'/>
            </p>
          </div>
          <div className='userinfo-list-item'>
            <p>用户名</p>
            <p>{account}</p>
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
              <span>{gender}</span>
              <Icon icon='enter'/>
            </p>
          </div>
        </div>
        {showPortrait ? <Portrait change={this.changePortraitFlag}/> : ''}
        {showName ? <Name change={this.changeNameFlag} changeName={this.changeName}/> : ''}
        {showSex ? <Sex change={this.changeSexFlag} changeSex={this.changeSex} genderArr={genderArr}/> : ''}
      </section>
    )
  }
}

export default withRouter(UserInfo)