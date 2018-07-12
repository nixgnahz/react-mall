import React from 'react'

import Input from './Input'
import Hot from './Hot'
import Recent from './Recent'
import Result from './Result'
import Empty from './Empty'
import Loading from '../common/Loading'

import './index.scss'

const resultArr = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  }
]

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoad: false,
      showResult: false,
      input: '',
      resultArr: resultArr,
      historyArr: []
    }
    this.addHistory = this.addHistory.bind(this)
    this.hideResult = this.hideResult.bind(this)
    this.emptyHistory = this.emptyHistory.bind(this)
    this.searchItem = this.searchItem.bind(this)
  }

  addHistory (text) {
    if(!text) {
      this.hideResult()
      return
    }
    this.setState({
      showResult: true,
      input: text
    })
    for(var i in this.state.historyArr) {
      if(this.state.historyArr[i] == text) {
        return
      }
    }
    this.state.historyArr.unshift(text)
    if(this.state.historyArr.length > 10) {
      this.state.historyArr.pop()
    }
    this.forceUpdate()
  }

  searchItem (text) {
    this.addHistory(text)
    this.setState({
      input: text
    })
  }

  emptyHistory () {
    this.setState({
      historyArr: [],
      input: ''
    })
  }

  hideResult () {
    this.setState({
      showResult: false,
      input: ''
    })
  }

  render () {
    const {showLoad, showResult, input, resultArr, historyArr} = this.state
    const ResultComponent = resultArr.length ? <Result result={resultArr}/> : <Empty/>
    const HistoryComponent = historyArr.length ? <Recent history={historyArr} empty={this.emptyHistory} search={this.searchItem}/> : ''
    const ListComponent = <div>{HistoryComponent}<Hot search={this.searchItem}/></div>
    return (
      <section className="search">
        <Input add={this.addHistory} hide={this.hideResult} inputValue={input}/>
        {showLoad ? <Loading/> : showResult ? ResultComponent : ListComponent}
      </section>
    )
  }
}

export default Search