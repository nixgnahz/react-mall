import React from 'react'

import './index.scss'

import Icon from '../common/Icon'
import Toast from '../common/Toast'

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      telephone: '',
      imgArr: [],
      showToast: false,
      toast: ''
    }
    this.getContent = this.getContent.bind(this)
    this.getTel = this.getTel.bind(this)
    this.submit = this.submit.bind(this)
    this.hideToast = this.hideToast.bind(this)
  }

  hideToast () {
    this.setState({
      showToast: false
    })
  }

  getContent (e) {
    this.setState({
      content: e.target.value.replace(/\s+/, '')
    })
  }

  getTel (e) {
    this.setState({
      telephone: e.target.value
    })
  }

  submit () {
    if(!this.state.content || !this.state.telephone || this.state.telephone.length < 11) {
      return
    }
    let telRegex = '^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$'
    if(!this.state.telephone.match(telRegex)) {
      this.setState({
        showToast: true,
        toast: '您输入的手机号有误'
      })
    }
  }

  render () {
    const {content, telephone, showToast, toast, imgArr} = this.state
    return (
      <section className='feedback'>
        <div className='feedback-desc'>
          <p className='feedback-desc-tip'>
            <span>意见反馈</span>
            <span>{content.length}/150</span>
          </p>
          <textarea placeholder='请提出您的宝贵建议，我们将不断优化您的体验' maxLength='150' value={content} onChange={this.getContent}></textarea>
          <div className='feedback-desc-cover'>
          {imgArr.map((item, index)=>
            <p key={index} style={{backgroundImage: 'url(' + item + ')'}}>
              <span className='feedback-desc-cover-close'>x</span>
            </p>
          )}
            <p className='feedback-desc-upload'>
              <Icon icon='paizhao' size='middle'/>
              <span>{imgArr.length ? imgArr.length + '/9' : '上传'}</span>
            </p>
          </div>
        </div>
        <div className='feedback-tel'>
          <span>联系电话</span>
          <input type='number' placeholder='请输入您的手机号' value={telephone} onChange={this.getTel} maxLength='11'/>
        </div>
        <p className={!content.length || !telephone || telephone.length < 11 ? 'feedback-action disabled' : 'feedback-action'} onClick={this.submit}>提交</p>
        {showToast ? <Toast toast={toast} hideToast={this.hideToast}/> : ''}
      </section>
    )
  }
}

export default Feedback