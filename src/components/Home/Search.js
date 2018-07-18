import React from 'react'
import {Link} from "react-router-dom"

import Icon from '../common/Icon'

class Search extends React.Component {
  render () {
    return (
      <div className='home-search'>
        <Link to='./search'>
          <Icon icon='search' size='small'/>
          <span>请输入商品名称</span>
        </Link>
      </div>
    )
  }
}

export default Search