import React from 'react'

import './index.scss'

import Head from './Head'
import List from './List'

const lists = [
  {
    id: 1,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄，千元全面屏，红米Note5-AI双摄',
    price: '1099.00',
    sales: 99
  },
  {
    id: 2,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 3,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/c/9/9/5b481040c7f32.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 4,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 5,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 6,
    cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  }
]

class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 'general',
      ifAsc: true,
      ifRow: true
    }
    this.changeId = this.changeId.bind(this)
    this.changeRank = this.changeRank.bind(this)
  }

  changeId (id) {
    switch (id) {
      case 'price':
        if(this.state.activeId === id) {
          this.setState({
            ifAsc: !this.state.ifAsc
          })
        }
        break;
      case 'sales':
        break;
      default:
        break;
    }
    if(id != this.state.activeId) {
      this.setState({
        activeId: id
      })
    }
  }

  changeRank () {
    this.setState({
      ifRow: !this.state.ifRow
    })
  }

  render () {
    const {activeId, ifAsc, ifRow} = this.state
    return (
      <section className='goods'>
        <Head activeId={activeId} ifAsc={ifAsc} ifRow={ifRow} changeId={this.changeId} changeRank={this.changeRank}/>
        <div className='goods-empty'></div>
        <List lists={lists} ifRow={ifRow}/>
      </section>
    )
  }
}

export default GoodsList