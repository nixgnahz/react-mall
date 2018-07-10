import React from 'react'

import Icon from '../common/Icon'

class Recent extends React.Component {
  render () {
    return (
      <div className="search-box recent">
        <p className="search-box-title">
          <Icon icon='recent' size='small'/>
          <span>最近搜索</span>
        </p>
        <ul className="search-box-list"></ul>
        <span className='search-box-delete'>
          <Icon icon='delete' size='small'/>
        </span>
      </div>
    )
  }
}

export default Recent