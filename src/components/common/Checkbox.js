import React from 'react'

import Icon from '../common/Icon'

class Checkbox extends React.Component {
  render () {
    const {selected} = this.props
    return(
      <Icon icon={selected ? 'selected': 'unselected'} size='middle'/>
    )
  }
}

export default Checkbox