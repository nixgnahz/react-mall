import React from 'react'
import {addAddress, editAddress} from '../../api/address'

import Icon from '../common/Icon'
import Label from './Label'
import AddressSelect from './AddressSelect'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLabel: false,
      showSelect: false,
      addressInfo: this.props.info,
      ifEdit: this.props.info.positionStr ? true : false
    }
    this.changeLabelStatus = this.changeLabelStatus.bind(this)
    this.changeSelectStatus = this.changeSelectStatus.bind(this)
    this.setPosition = this.setPosition.bind(this)
    this.setLabel = this.setLabel.bind(this)
    this.getText = this.getText.bind(this)
    this.saveAddress = this.saveAddress.bind(this)
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
    this.state.addressInfo.position_id = positionId
    this.state.addressInfo.positionStr = position
    this.setState({
      addressInfo: this.state.addressInfo
    })
    this.changeSelectStatus()
  }

  setLabel (tag) {
    this.state.addressInfo.tag = tag
    this.setState({
      addressInfo: this.state.addressInfo
    })
    this.changeLabelStatus()
  }

  getText (e) {
    let id = e.target.getAttribute('id')
    let value = e.target.value
    switch (id) {
      case 'name':
        this.state.addressInfo.consignee = value
        break;
      case 'tel':
        this.state.addressInfo.phone = value
        break;
      default:
        this.state.addressInfo.detailAddress = value
        break;
    }
    this.setState({
      addressInfo: this.state.addressInfo
    })
  }

  saveAddress () {
    for(var key in this.state.addressInfo) {
      if(key === 'isDefault' || key === 'id') continue
      if(!this.state.addressInfo[key]) return
    }
    let reg= /^[1][3,4,5,7,8][0-9]{9}$/
    if(!reg.test(this.state.addressInfo.phone)) return
    if(this.state.ifEdit) {
      editAddress(this.state.addressInfo.id, this.state.addressInfo).then((res)=> {
        this.props.add(this.state.addressInfo)
      }).catch((error)=> {
        console.log(error)
      })
    } else{
      addAddress(this.state.addressInfo).then((res)=> {
        this.props.add(this.state.addressInfo)
      }).catch((error)=> {
        console.log(error)
      })
    }
  }

  render () {
    const {showLabel, showSelect} = this.state
    const {consignee, detailAddress, phone, positionStr, position_id, tag} = this.state.addressInfo
    return (
      <div className="address-edit">
        <ul className="address-edit-input">
          <li>
            <span>收货人</span>
            <input type='text' value={consignee} onChange={this.getText} id='name' maxLength='15'/>
          </li>
          <li>
            <span>手机号码</span>
            <input type='number' value={phone} onChange={this.getText} id='tel'/>
          </li>
          <li onClick={this.changeSelectStatus}>
            <span>所在地区</span>
            {positionStr ? <p>{positionStr}</p> : <Icon icon='enter' size='smaller'/>}
          </li>
          <li>
            <textarea placeholder='请输入详细地址，如街道、门牌号、小区、楼栋号、单元室等' value={detailAddress} onChange={this.getText} id='address' maxLength='30'></textarea>
          </li>
        </ul>
        <ul className="address-edit-input">
          <li onClick={this.changeLabelStatus}>
            <span>标签</span>
            {tag ? <p>{tag}</p> : <Icon icon='enter' size='smaller'/>}
          </li>
        </ul>
        <button className="address-btn save" onClick={this.saveAddress}>
          <span>保存</span>
        </button>
        {showLabel ? <Label change={this.changeLabelStatus} setLabel={this.setLabel}/> : ''}
        {showSelect ? <AddressSelect change={this.changeSelectStatus} setPosition={this.setPosition}/> : ''}
      </div>
    )
  }
}

export default Edit