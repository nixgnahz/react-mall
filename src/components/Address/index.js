import React from 'react'
import {getAddressList, editAddress, deleteAddress} from '../../api/address'

import './index.scss'

import Icon from '../common/Icon'
import List from './List'
import Edit from './Edit'

class Address extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEdit: false,
      addressArr: [],
      addressInfo: {
        consignee: '',
        detailAddress: '',
        isDefault: 0,
        phone: '',
        positionStr: '',
        position_id: 1,
        tag: ''
      }
    }
    this._getAddress = this._getAddress.bind(this)
    this.addAddress = this.addAddress.bind(this)
    this.changeEdit = this.changeEdit.bind(this)
    this.editAddress = this.editAddress.bind(this)
    this.changeDefault = this.changeDefault.bind(this)
    this.deleteAddress = this.deleteAddress.bind(this)
  }

  componentDidMount () {
    this._getAddress()
  }

  _getAddress () {
    getAddressList().then((res)=> {
      this.setState({
        addressArr: res.data
      })
    }).catch((error)=> {
      console.log(error)
    })
  }

  changeDefault (index) {
    for(var i in this.state.addressArr) {
      this.state.addressArr[i].isDefault = 0
    }
    this.state.addressArr[index].isDefault = 1
    editAddress(this.state.addressArr[index].id, this.state.addressArr[index]).then((res)=> {
      this.setState({
        addressArr: this.state.addressArr
      })
    }).catch((error)=> {
      console.log(error)
    })
  }

  deleteAddress (index) {
    deleteAddress(this.state.addressArr[index].id).then((res)=> {
      this.state.addressArr.splice(index, 1)
      this.setState({
        addressArr: this.state.addressArr
      })
    }).catch((error)=> {
      console.log(error)
    })
  }

  changeEdit () {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  editAddress (address) {
    this.setState({
      addressInfo: address
    })
    this.changeEdit()
  }

  addAddress () {
    this._getAddress()
    this.changeEdit()
  }

  render () {
    const {addressArr, addressInfo} = this.state
    const EditButton = <button className="address-btn add" onClick={this.changeEdit}><Icon icon='custom-add' size='small'/><span>新建地址</span></button>
    const ListComponent = <div><List addressArr={addressArr} edit={this.editAddress} delete_={this.deleteAddress} change={this.changeDefault}/>{EditButton}</div>
    return (
      <section className="address">
        {this.state.showEdit ? <Edit info={addressInfo} add={this.addAddress}/> : ListComponent}
      </section>
    )
  }
}

export default Address