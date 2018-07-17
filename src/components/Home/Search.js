import React from 'react'

import Icon from '../common/Icon'

class Search extends React.Component {
  render () {
    return (
      <div className='home-search'>
        <p>
          <Icon icon='search' size='small'/>
          <span>请输入商品名称</span>
        </p>
      </div>
    )
  }
}

export default Search