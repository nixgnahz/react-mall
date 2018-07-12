import React from 'react'

import Icon from '../common/Icon'

class Recent extends React.Component {
  render () {
    const {history, empty, search} = this.props
    return (
      <div className="search-box recent">
        <p className="search-box-title">
          <Icon icon='recent' size='small'/>
          <span>最近搜索</span>
        </p>
        <ul className="search-box-list">
        {history.map((item, index)=>
          <li key={index} onClick={()=> {search(item)}}>{item}</li>
        )}
        </ul>
        <span className='search-box-delete' onClick={empty}>
          <Icon icon='delete' size='small'/>
        </span>
      </div>
    )
  }
}

export default Recent