import React from 'react'

import Icon from './Icon'

class Loading extends React.Component {
  render () {
    return (
      <div className="loading">
        <p className="loading-icon">
          <Icon icon='loading' size='middle'/>
        </p>
      </div>
    )
  }
}

export default Loading