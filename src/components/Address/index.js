import React from 'react'

import {getAddressList} from '../../api/address'

import './index.scss'

import Icon from '../common/Icon'
import List from './List'
import Edit from './Edit'

class Address extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEdit: false
    }
    this.changeEdit = this.changeEdit.bind(this)
  }

  componentDidMount () {
    getAddressList().then((res)=> {
      console.log(res)
    }).catch((error)=> {
      console.log(error)
    })
  }

  changeEdit () {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  render () {
    const EditButton = <button className="address-btn add" onClick={this.changeEdit}><Icon icon='custom-add' size='small'/><span>新建地址</span></button>
    const ListComponent = <div><List/>{EditButton}</div>
    return (
      <section className="address">
        {this.state.showEdit ? <Edit/> : ListComponent}
      </section>
    )
  }
}

export default Address