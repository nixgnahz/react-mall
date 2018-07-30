import React from 'react'

import Icon from '../common/Icon'
import CheckBox from '../common/Checkbox'

class List extends React.Component {
   constructor(props) {
     super(props)
   }

   render () {
     const {addressArr, edit, delete_, change} = this.props
     return (
       <ul className="address-list">
        {addressArr.map((item, index)=>
          <li key={index}>
            <div className="address-list-head">
              <p className="name">{item.consignee}</p>
              <p>{item.phone}</p>
              <p className="label"><span>{item.tag}</span></p>
            </div>
            <p className="address-list-info">{item.positionStr} {item.detailAddress}</p>
            <div className="address-list-action">
              <p className="address-list-action-default" onClick={()=> {change(index)}}>
                <CheckBox selected={item.isDefault}/>
                <span>设为默认地址</span>
              </p>
              <p className="address-list-action-icon" onClick={()=> {edit(addressArr[index])}}>
                <Icon icon='edit' size='small'/>
                <span>编辑</span>
              </p>
              <p className="address-list-action-icon" onClick={()=> {delete_(index)}}>
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