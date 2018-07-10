import React from 'react'

import Icon from '../common/Icon'

class Input extends React.Component {
  render () {
    return (
      <div className="search-input">
        <span className="search-input-icon"><Icon icon='search' size='small'/></span>
        <input type='text' placeholder='请输入商品名称'/>
        <span className="search-input-delete"><Icon icon='delete-cuo' size='small'/></span>
        <button>搜索</button>
      </div>
    )
  }
}

export default Input