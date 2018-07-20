import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

import Icon from '../common/Icon'

const recordArr = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  }
]

class ViewRecords extends React.Component {
  render () {
    return (
      <section className='collect'>
      {recordArr.map((item)=>
        <Link to={'./detail/' + item.id} className='collect-list' key={item.id}>
          <div className='collect-list-cover' style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
          <div className='collect-list-info'>
            <span className='collect-list-info-title'>{item.title}</span>
            <span className='collect-list-info-sales'>已售{item.sales}件</span>
            <span className='collect-list-info-price'>¥{item.price}</span>
          </div>
          <p className='collect-list-action'>
            <span>
              <Icon icon='cart' size='small'/>
            </span>
            <span>
              <Icon icon='deleteAddress' size='small'/>
            </span>
          </p>
        </Link>
      )}
      </section>
    )
  }
}

export default ViewRecords