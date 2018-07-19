import React from 'react'

import './index.scss'

class Toast extends React.Component {
  static defaultProps = {
    toast: '提示信息',
    hideToast: ()=> {}
  }

  constructor(props) {
    super(props)
    this.timer = null
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  componentDidMount () {
    this.timer = setTimeout(()=> {
      this.props.hideToast()
    }, 1500)
  }

  render () {
    const {toast} = this.props
    return (
      <div className="toast-container">
        <div className="toast">{toast}</div>
      </div>
    )
  }
}

export default Toast