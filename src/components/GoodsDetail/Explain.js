import React from 'react'

import Icon from '../common/Icon'

class Explain extends React.Component {
  render () {
    const {labels, change} = this.props
    return (
      <div className='float-mask'>
        <div className='goods-detail-explain'>
          <p className='goods-detail-explain-title'>服务说明
            <span onClick={change}>
              <Icon icon='close' size='small'/>
            </span>
          </p>
          <ul className='goods-detail-explain-list'>
          {labels.map((item)=>
            <li key={item.id}>
              <Icon icon='uutchoice' size='smaller'/>
              <div>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </li>
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Explain