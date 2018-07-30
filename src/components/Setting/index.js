import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../../api/login'

import './index.scss'

import Icon from '../common/Icon'
import Modal from '../common/Modal'

class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: '',
      title: '',
      desc: ''
    }
    this.showModal = this.showModal.bind(this)
    this.makeSure = this.makeSure.bind(this)
    this.makeCancel = this.makeCancel.bind(this)
  }

  showModal () {
    this.setState({
      showModal: true,
      title: '提示',
      desc: '确定要退出当前帐号？'
    })
  }

  makeSure () {
    logout().then((res)=> {
      this.props.history.replace('/login')
    }).catch((error)=> {
      console.log(error)
    })
  }

  makeCancel () {
    this.setState({
      showModal: false
    })
  }

  render () {
    const {showModal, title, desc} = this.state
    return (
      <section className='setting'>
        <div className='setting-list'>
          <div className='setting-list-item'>
            <Link to='./userinfo'>
              <p>账号管理</p>
              <Icon icon='enter'/>
            </Link>
            </div>
          <div className='setting-list-item'>
            <Link to='./address'>
              <p>地址管理</p>
              <Icon icon='enter'/>
            </Link>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-item'>
            <Link to='./feedback'>
              <p>问题反馈</p>
              <Icon icon='enter'/>
            </Link>
          </div>
          <div className='setting-list-item'>
            <Link to='./question'>
              <p>常见问题</p>
              <Icon icon='enter'/>
            </Link>
          </div>
          <div className='setting-list-item'>
            <Link to='./about'>
              <p>关于我们</p>
              <Icon icon='enter'/>
            </Link>
          </div>
        </div>
        {showModal ? <Modal title={title} desc={desc} makeSure={this.makeSure} makeCancel={this.makeCancel}/> : ''}
        <button className='setting-action' onClick={this.showModal}>退出当前帐号</button>
      </section>
    )
  }
}

export default withRouter(Setting)