import React from 'react'

import Icon from '../common/Icon'
import Label from './Label'
import AddressSelect from './AddressSelect'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLabel: false,
      showSelect: false,
      name: '',
      tel: '',
      position: '',
      positionId: 1,
      address: '',
      label: ''
    }
    this.changeLabelStatus = this.changeLabelStatus.bind(this)
    this.changeSelectStatus = this.changeSelectStatus.bind(this)
    this.setPosition = this.setPosition.bind(this)
    this.setLabel = this.setLabel.bind(this)
  }

  changeLabelStatus () {
    this.setState({
      showLabel: !this.state.showLabel
    })
  }

  changeSelectStatus () {
    this.setState({
      showSelect: !this.state.showSelect
    })
  }

  setPosition (position, positionId) {
    this.setState({
      position: position,
      positionId: positionId
    })
    this.changeSelectStatus()
  }

  setLabel (label) {
    this.setState({
      label: label
    })
    this.changeLabelStatus()
  }

  render () {
    const {showLabel, showSelect, name, tel, position, address, label} = this.state
    return (
      <div className="address-edit">
        <ul className="address-edit-input">
          <li>
            <span>收货人</span>
            <input type='text'/>
          </li>
          <li>
            <span>手机号码</span>
            <input type='number'/>
          </li>
          <li onClick={this.changeSelectStatus}>
            <span>所在地区</span>
            {position ? <p>{position}</p> : <Icon icon='enter' size='smaller'/>}
          </li>
          <li>
            <textarea placeholder='请输入详细地址，如街道、门牌号、小区、楼栋号、单元室等'></textarea>
          </li>
        </ul>
        <ul className="address-edit-input">
          <li onClick={this.changeLabelStatus}>
            <span>标签</span>
            {label ? <p>{label}</p> : <Icon icon='enter' size='smaller'/>}
          </li>
        </ul>
        <button className="address-btn save">
          <span>保存</span>
        </button>
        {showLabel ? <Label change={this.changeLabelStatus} setLabel={this.setLabel}/> : ''}
        {showSelect ? <AddressSelect change={this.changeSelectStatus} setPosition={this.setPosition}/> : ''}
      </div>
    )
  }
}

export default Edit