import React from 'react'
import {withRouter} from 'react-router-dom'

import {getUserInfo} from '../../api/user'
import {defaultAvatar} from '../../assets/common'

import Header from './Header'
import Orders from './Orders'
import Actions from './Actions'
import Info from './Info'
import Recommend from '../Recommend/index'
import Menu from '../../router/index'
import './index.scss'

class Personal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        avatar: defaultAvatar,
        name: '请登录',
        account: ''
      }
    }
  }

  componentDidMount () {
    getUserInfo().then((res)=> {
      this.setState({
        userInfo: res.data
      })
    }).catch((error)=> {
      this.props.history.replace('/login')
    })
  }

  render () {
    const {userInfo} = this.state
    return (
      <section className="personal">
        <Header userInfo={userInfo}/>
        <Orders/>
        <Actions/>
        <Info/>
        <Recommend/>
        <Menu/>
      </section>
    )
  }
}

export default withRouter(Personal)