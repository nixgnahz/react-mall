import React from 'react'

import Icon from '../common/Icon'

class Empty extends React.Component {
  render () {
    return(
      <div className="search-empty">
        <Icon icon="nodata" size="bigger" />
        <p>抱歉，暂无搜索结果</p>
      </div>
    )
  }
}

export default Empty