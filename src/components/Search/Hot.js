import React from 'react'

import Icon from '../common/Icon'

const hotArr = [
  {
    id: 1,
    value: '儿童教育玩具'
  },
  {
    id: 2,
    value: '日本进口'
  },
  {
    id: 3,
    value: '高科技'
  },
  {
    id: 4,
    value: '橡皮擦模具'
  },
  {
    id: 5,
    value: '电磁炉'
  },
  {
    id: 6,
    value: '小米手机'
  }
]

class Hot extends React.Component {
  render () {
    const {search} = this.props
    return (
      <div className="search-box">
        <p className="search-box-title">
          <Icon icon='hot' size='small'/>
          <span>热门搜索</span>
        </p>
        <ul className="search-box-list">
          {hotArr.map((item)=>
            <li key={item.id} onClick={()=> {search(item.value)}}>{item.value}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Hot