import React from 'react'

import Icon from '../common/Icon'

class Info extends React.Component {
  render () {
    return (
      <ul className="personal-info">
        <li>
          <p>
            <Icon icon='setting' size='middle'/>
            <span>我的设置</span>
          </p>
          <Icon icon='enter' size='smaller'/>
        </li>
        <li>
          <p>
            <Icon icon='address' size='middle'/>
            <span>我的地址</span>
          </p>
          <Icon icon='enter' size='smaller'/>
        </li>
        <li>
          <p>
            <Icon icon='contact' size='middle'/>
            <span>联系客服</span>
          </p>
          <Icon icon='enter' size='smaller'/>
        </li>
        <li>
          <p>
            <Icon icon='callback' size='middle'/>
            <span>意见反馈</span>
          </p>
          <Icon icon='enter' size='smaller'/>
        </li>
      </ul>
    )
  }
}

export default Info