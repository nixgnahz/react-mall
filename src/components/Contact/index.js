import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

import Icon from '../common/Icon'

class Contact extends React.Component {
  render () {
    return (
      <section className='contact'>
        <p className='contact-qrCode'>
          <img src='http://rs.aceclan.cn/uploads/a/admin/7/0/e/e/thumb_5ac5d2aba5090.jpg' alt=''/>
        </p>
        <div className='contact-info'>
          <p className='contact-info-tel'>
            <Icon icon='telephone' size='small'/>
            <span>18182342291</span>
          </p>
          <p className='contact-info-tip'>客服工作时间 9：00-23：00</p>
        </div>
        <p className='contact-question'>
          <Link to='./question'>常见问题</Link>
        </p>
      </section>
    )
  }
}

export default Contact