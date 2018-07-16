import React from 'react'

import Icon from '../common/Icon'

class AddressSelect extends React.Component {
  render () {
    const {change} = this.props
    return (
      <div className="float-mask">
        <div className='address-choice'>
          <p className='address-choice-title'>
            配送至
            <span onClick={change}><Icon icon='close' size='small'/></span>
          </p>
          <div className='address-choice-detail'>
            <p className='active'>请选择</p>
            <p>请选择</p>
            <p>请选择</p>
            <p>请选择</p>
          </div>
          <div className='row-choice'>
            <div className='scroll-mask'>
              <ul className='level'>
                <li>
                  <span>上海市</span>
                  <Icon icon='choice' size='smaller'/>
                </li>
              </ul>
            </div>
            <div className='scroll-mask'>
              <ul className='level'>
                <li>
                  <span>上海市</span>
                  <Icon icon='choice' size='smaller'/>
                </li>
              </ul>
            </div>
            <div className='scroll-mask'>
              <ul className='level'>
                <li>
                  <span>上海市</span>
                  <Icon icon='choice' size='smaller'/>
                </li>
              </ul>
            </div>
            <div className='scroll-mask'>
              <ul className='level'>
                <li>
                  <span>上海市</span>
                  <Icon icon='choice' size='smaller'/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddressSelect