import React from 'react'

import Empty from './Empty'
import Goods from './Goods'
import Action from './Action'
import Recommend from '../Recommend/index'

import './index.scss'

const goods = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
    name: '粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋',
    param: {
      color: '米色',
      size: '35'
    },
    price: '16.9',
    num: 1,
    selected: true
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
    name: '2017夏季新款韩版宽松收腰显廋短袖牛仔连衣裙女中长款休闲长裙',
    param: {
      color: '浅蓝色',
      size: 'XS'
    },
    price: '26.9',
    num: 1,
    selected: true
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg',
    name: '2018夏季男士短袖T恤休闲潮流圆领T恤汗衫男装套头男生外套衣服',
    param: {
      color: '909短袖灰色',
      size: 'M'
    },
    price: '36.9',
    num: 1,
    selected: true
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/c/9/9/5b481040c7f32.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
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