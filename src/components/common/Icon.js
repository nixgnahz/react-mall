import React from 'react'

import '../../assets/iconfont'
import './index.scss'

class Icon extends React.Component {
  static defaultProps= {
    size: 'smaller'
  }

  render () {
    const {icon, size} = this.props
    return (
      <svg className={'icon-svg', 'icon-svg-' + size} aria-hidden="true">
        <use xlinkHref={'#icon-' + icon}></use>
      </svg>
    )
  }
}

export default Icon