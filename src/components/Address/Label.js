import React from 'react'

import Icon from '../common/Icon'

class Label extends React.Component {
  render () {
    const {change} = this.props
    return (
      <div className="float-mask">
        <ul className="address-label">
          <li className='close-btn' onClick={change}>
            <Icon icon='close' size='small'/>
          </li>
          <li>
            <input type='text' placeholder='请输入自定义标签，不超过5个字'/>
            <Icon icon='choice' />
          </li>
          <li>
            <p>
              <Icon icon='homePlace' size='middle'/>
              <span>家</span>
            </p>
            <Icon icon='choice' />
          </li>
          <li>
            <p>
              <Icon icon='companyPlace' size='middle'/>
              <span>公司</span>
            </p>
            <Icon icon='choice' />
          </li>
          <li>
            <p>
              <Icon icon='schoolPlace' size='middle'/>
              <span>学校</span>
            </p>
            <Icon icon='choice' />
          </li>
          <li>
            <button className="label-btn">
              <span>完成</span>
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Label