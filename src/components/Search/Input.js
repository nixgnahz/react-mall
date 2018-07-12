import React from 'react'

import Icon from '../common/Icon'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: props.inputValue
    }
    this.getInput = this.getInput.bind(this)
    this.searchInput = this.searchInput.bind(this)
    this.emptyInput = this.emptyInput.bind(this)
  }

  componentWillReceiveProps (nextProps){
    if(nextProps.inputValue == this.state.inputValue) {
      return
    }
    this.setState({
      inputValue: nextProps.inputValue
    })
  }

  getInput (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  searchInput () {
    var value = this.state.inputValue.replace(/\s+/, '')
    this.props.add(value)
  }

  emptyInput () {
    this.props.hide()
  }

  render () {
    const {hide} = this.props
    return (
      <div className="search-input">
        <span className="search-input-icon"><Icon icon='search' size='small'/></span>
        <input type='text' placeholder='请输入商品名称' value={this.state.inputValue} onChange={this.getInput}/>
        {!this.state.inputValue ? '' : <span className="search-input-delete" onClick={this.emptyInput}><Icon icon='delete-cuo' size='small'/></span>}
        <button onClick={this.searchInput}>搜索</button>
      </div>
    )
  }
}

export default Input