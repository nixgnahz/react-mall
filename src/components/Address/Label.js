import React from 'react'

import Icon from '../common/Icon'

const labels = [
  {
    icon: 'homePlace',
    text: '家'
  },
  {
    icon: 'companyPlace',
    text: '公司'
  },
  {
    icon: 'schoolPlace',
    text: '学校'
  }
]

class Label extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      choice: '家'
    }
    this.getInput = this.getInput.bind(this)
    this.getChoice = this.getChoice.bind(this)
    this.setLabel = this.setLabel.bind(this)
  }

  getInput (e) {
    this.setState({
      input: e.target.value.replace(/\s+/, '')
    })
  }

  getChoice (value) {
    this.setState({
      choice: value
    })
  }

  setLabel () {
    if(this.state.input || this.state.choice) {
      this.props.setLabel(this.state.input || this.state.choice)
    }
  }

  render () {
    const {change} = this.props
    const {input, choice} = this.state
    return (
      <div className="float-mask">
        <ul className="address-label">
          <li className='close-btn' onClick={change}>
            <Icon icon='close' size='small'/>
          </li>
          <li>
            <input type='text' placeholder='请输入自定义标签，不超过5个字' maxLength='5' value={input} onChange={this.getInput}/>
            {input ? <Icon icon='choice' /> : ''}
          </li>
          {labels.map((item, index)=>
            <li key={index} onClick={()=> {this.getChoice(item.text)}}>
              <p>
                <Icon icon={item.icon} size='middle'/>
                <span>{item.text}</span>
              </p>
              {item.text === choice && !input ? <Icon icon='choice' /> : ''}
            </li>
          )}
          <li>
            <button className="label-btn" onClick={this.setLabel}>
              <span>完成</span>
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Label