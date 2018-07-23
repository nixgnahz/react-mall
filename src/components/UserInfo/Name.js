import React from 'react'

class Name extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.changeName = this.changeName.bind(this)
    this.saveName = this.saveName.bind(this)
  }

  changeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  saveName () {
    if(!this.state.name.replace(/\s+/, '')) return
    this.props.changeName(this.state.name)
  }

  render () {
    const {change} = this.props
    return (
      <div className='float-mask userinfo-float' onClick={change}>
        <div className='userinfo-input' onClick={(e)=> {e.stopPropagation()}}>
          <input type='text' placeholder='请输入昵称' onChange={this.changeName}/>
          <p className='userinfo-input-action' onClick={this.saveName}>保存</p>
          <p className='userinfo-input-tip'>4-20个字符，可由中英文、数字组成</p>
        </div>
      </div>
    )
  }
}

export default Name