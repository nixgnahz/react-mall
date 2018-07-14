import React from 'react'

import './index.scss'

import Slider from './Slider'
import Action from './Action'

const goodsInfo = {
  swiper: [
    {
      id: 1,
      cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png'
    },
    {
      id: 2,
      cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/4/4/d/5b49aa016c765.png'
    },
    {
      id: 3,
      cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png'
    }
  ],
  name: '红米5 PLus',
  desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
  originPrice: '1599',
  price: '1099',
  freight: '0',
  sales: 1000,
  labels: [
    {
      id: 1,
      title: '72小时发货'
    },
    {
      id: 2,
      title: '7天无理由退货'
    },
    {
      id: 3,
      title: '延误必赔'
    },
    {
      id: 4,
      title: '正品保障'
    },
    {
      id: 5,
      title: '假一赔十'
    }
  ]
}

class GoodsDetail extends React.Component {
  render () {
    return (
      <section className='goods-detail'>
        <Slider swiper={goodsInfo.swiper}/>
        <Action/>
      </section>
    )
  }
}

export default GoodsDetail