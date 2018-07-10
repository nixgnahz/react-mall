import React from 'react'

import Empty from './Empty'
import Goods from './Goods'
import Action from './Action'
import Recommend from '../Recommend/index'

import './index.scss'

const goods = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '16.9',
    num: 1,
    selected: true
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '26.9',
    num: 1,
    selected: true
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '36.9',
    num: 1,
    selected: true
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '14.9',
    num: 1,
    selected: true
  }
]

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      goods: goods,
      showEmpty: false,
      selected: false,
      total: 0
    }
    this._getTotal = this._getTotal.bind(this)
    this._getTotalStatus = this._getTotalStatus.bind(this)
    this.cancelAll = this.cancelAll.bind(this)
    this.cancelGoods = this.cancelGoods.bind(this)
    this.addNum = this.addNum.bind(this)
    this.minusNum = this.minusNum.bind(this)
  }

  componentWillMount () {
    this._getTotal()
    this._getTotalStatus()
  }

  _getTotal () {
    var total = 0
    this.state.goods.forEach((item)=>{
      if(item.selected) {
        total += (item.price * item.num)
      }
    })
    this.setState({
      total: total.toFixed(2)
    })
    if(!this.state.goods.length) {
      this.setState({
        showEmpty: true
      })
    }
  }

  _getTotalStatus () {
    for(var i in this.state.goods) {
      if(!this.state.goods[i].selected) {
        this.setState({
          selected: false
        })
        return
      }
    }
    this.setState({
      selected: true
    })
  }

  cancelAll () {
    this.state.goods.forEach((item)=>{
      item.selected = !this.state.selected
    })
    this.setState(prevState => ({
      selected: !prevState.selected,
      goods: prevState.goods
    }))
    this._getTotal()
  }

  cancelGoods (index) {
    this.state.goods[index].selected = !this.state.goods[index].selected
    this.forceUpdate()
    this._getTotal()
    this._getTotalStatus()
  }

  addNum (index) {
    this.state.goods[index].num ++
    this.setState({
      goods: this.state.goods
    })
    this._getTotal()
    this._getTotalStatus()
  }

  minusNum (index) {
    this.state.goods[index].num --
    if(this.state.goods[index].num <= 0) {
      this.state.goods.splice(index, 1)
    }
    this._getTotal()
    this._getTotalStatus()
    this.setState({
      goods: this.state.goods
    })
  }

  render () {
    const {goods, showEmpty, selected, total} = this.state
    const goodsData= {
      goods: goods,
      cancel: (index)=> {this.cancelGoods(index)},
      add: (index)=> {this.addNum(index)},
      minus: (index)=> {this.minusNum(index)}
    }
    const actionData = {
      selected: selected,
      total: total,
      cancelAll: this.cancelAll
    }
    return(
      <section className="cart">
        {showEmpty ? <Empty/> : <div><Goods {...goodsData}/><Action {...actionData}/></div>}
        <Recommend/>
      </section>
    )
  }
}

export default Cart