import React from 'react'
import PropTypes from 'prop-types'

import '../../assets/iconfont'
import './index.scss'

class Icon extends React.Component {
  static defaultProps= {
    color: 'currentColor',
    size: 'smaller'
  }

  static propTypes = {
    icon: PropTypes.string.isRequired
  }

  render () {
    const {color, icon, size} = this.props
    return (
      <svg className={'icon-svg', 'icon-svg-' + size} aria-hidden="true" fill={color}>
        <use xlinkHref={'#icon-' + icon}></use>
      </svg>
    )
  }
}

export default Icon