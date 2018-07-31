import React from 'react'
import {Link} from 'react-router-dom'

import {getUserInfo} from '../../api/user'

import Header from './Header'
import Orders from './Orders'
import Actions from './Actions'
import Info from './Info'
import Recommend from '../Recommend/index'
import Menu from '../../router/index'
import Login from './Login'
import './index.scss'

class Personal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        avatar: '',
        name: '',
        account: ''
      },
      showLogin: true
    }
  }

  componentDidMount () {
    getUserInfo().then((res)=> {
      this.setState({
        userInfo: res.data,
        showLogin: false
      })
    })
  }

  render () {
    const {userInfo, showLogin} = this.state
    const LoginComponent = <Link to='./login'><Login/></Link>
    const UserComponent = <div><Header userInfo={userInfo}/><Orders/><Actions/><Info/><Recommend/></div>
    return (
      <section className="personal">
        {!showLogin ? UserComponent : LoginComponent}
        <Menu/>
      </section>
    )
  }
}

export default Personal