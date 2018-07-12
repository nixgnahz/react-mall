import React from 'react'

import Icon from '../common/Icon'
import CheckBox from '../common/Checkbox'

const addressArr = [
  {
    "consignee": "张三",
    "phone": "18888888888",
    "position_id": "10086",
    "positionStr": "辽宁省铁岭市银州区龙山乡",
    "detailAddress": "申莘新村",
    "tag": "家",
    "isDefault": 1
  },
  {
    "consignee": "张四",
    "phone": "19999999999",
    "position_id": "20086",
    "positionStr": "江西省赣州市宁都县对坊乡",
    "detailAddress": "申莘新村2号",
    "tag": "公司",
    "isDefault": 0
  }
]

class List extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       addressArr: addressArr
     }
   }

  changeDefault (index) {
    for(var i in this.state.addressArr) {
      this.state.addressArr[i].isDefault = 0
    }
    this.state.addressArr[index].isDefault = 1
    this.setState({
      addressArr: this.state.addressArr
    })
  }

  render () {
    const {addressArr} = this.state
    return (
      <ul className="address-list">
        {addressArr.map((item, index)=>
          <li key={item.position_id}>
            <div className="address-list-head">
              <p className="name">{item.consignee}</p>
              <p>{item.phone}</p>
              <p className="label"><span>{item.tag}</span></p>
            </div>
            <p className="address-list-info">{item.positionStr} {item.detailAddress}</p>
            <div className="address-list-action">
              <p className="address-list-action-default" onClick={()=> {this.changeDefault(index)}}>
                <CheckBox selected={item.isDefault}/>
                <span>设为默认地址</span>
              </p>
              <p className="address-list-action-icon">
                <Icon icon='edit' size='small'/>
                <span>编辑</span>
              </p>
              <p className="address-list-action-icon">
                <Icon icon='deleteAddress' size='small'/>
                <span>删除</span>
              </p>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

export default List