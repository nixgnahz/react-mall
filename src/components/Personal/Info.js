import React from 'react'
import {Link} from 'react-router-dom'

import Icon from '../common/Icon'

class Info extends React.Component {
  render () {
    return (
      <ul className="personal-info">
        <li>
          <Link to='./setting'>
            <p>
              <Icon icon='setting' size='middle'/>
              <span>我的设置</span>
            </p>
            <Icon icon='enter' size='smaller'/>
          </Link>
        </li>
        <li>
          <Link to='./address'>
            <p>
              <Icon icon='address' size='middle'/>
              <span>我的地址</span>
            </p>
            <Icon icon='enter' size='smaller'/>
          </Link>
        </li>
        <li>
          <Link to='./contact'>
            <p>
              <Icon icon='contact' size='middle'/>
              <span>联系客服</span>
            </p>
            <Icon icon='enter' size='smaller'/>
          </Link>
        </li>
        <li>
          <Link to='./question'>
            <p>
              <Icon icon='question' size='middle'/>
              <span>常见问题</span>
            </p>
            <Icon icon='enter' size='smaller'/>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Info