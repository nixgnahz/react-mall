import React from 'react'

import './index.scss'

import Input from './Input'
import NavBar from './NavBar'
import Empty from './Empty'
import List from './List'

const unpaidArr = [
  {
    id: 1,
    shop: '小米手机商城',
    statusCode: 0,
    status: '待支付',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '1099.00',
    num: 1
  }
]

const undeliveredArr = []

const unreceivedArr = [
  {
    id: 3,
    shop: '小米手机商城',
    statusCode: 2,
    status: '待收货',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  }
]

const unevaluatedArr = [
  {
    id: 4,
    shop: '小米手机商城',
    statusCode: 3,
    status: '待评价',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  }
]

const allArr = [
  {
    id: 1,
    shop: '小米手机商城',
    statusCode: 0,
    status: '待支付',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '1099.00',
    num: 1
  },
  {
    id: 2,
    shop: '小米手机商城',
    statusCode: 5,
    status: '交易关闭',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  },
  {
    id: 3,
    shop: '小米手机商城',
    statusCode: 2,
    status: '待收货',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  },
  {
    id: 4,
    shop: '小米手机商城',
    statusCode: 3,
    status: '待评价',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  },
  {
    id: 5,
    shop: '小米手机商城',
    statusCode: 4,
    status: '交易完成',
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    name: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    param: {
      color: '金色',
      size: '3G+32G'
    },
    price: '999.99',
    num: 1
  }
]

class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      orderArr: allArr
    }
    this.changeNavBar = this.changeNavBar.bind(this)
    this.setList = this.setList.bind(this)
  }

  changeNavBar (index) {
    if(this.state.activeIndex === index) return
    this.setState({
      activeIndex: index
    })
    this.setList(index)
  }

  setList (index) {
    var arr = []
    switch (index) {
      case 1:
        arr = unpaidArr
        break
      case 2:
        arr = undeliveredArr
        break
      case 3:
        arr = unreceivedArr
        break
      case 4:
        arr = unevaluatedArr
        break
      default:
        arr = allArr
        break
    }
    this.setState({
      orderArr: arr
    })
  }

  render () {
    const {activeIndex, orderArr} = this.state
    return (
      <section className='orders'>
        <Input/>
        <NavBar active={activeIndex} change={this.changeNavBar}/>
        {orderArr.length ? <List orders={orderArr}/> : <Empty/>}
      </section>
    )
  }
}

export default Orders