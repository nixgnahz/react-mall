import React from 'react'

import './index.scss'

import Icon from '../common/Icon'
import Slider from './Slider'
import Info from './Info'
import Detail from './Detail'
import Action from './Action'
import Explain from './Explain'
import SpecList from './SpecList'

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
      title: '72小时发货',
      desc: ''
    },
    {
      id: 2,
      title: '7天无理由退货',
      desc: '商家承诺7天无理由退货'
    },
    {
      id: 3,
      title: '延误必赔',
      desc: '享受快递延误险'
    },
    {
      id: 4,
      title: '正品保障',
      desc: ''
    },
    {
      id: 5,
      title: '假一赔十',
      desc: '若收到商品为假冒品牌，享受10倍赔偿'
    }
  ],
  details: [
    {
      id: 1,
      img: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/9/1/9/5b49a7987dc66.jpeg'
    },
    {
      id: 2,
      img: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/9/0/a/7/5b49a78ca7ca3.jpeg'
    },
    {
      id: 3,
      img: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg'
    },
    {
      id: 4,
      img: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg'
    }
  ],
  spec: {
    color: [
      {
        id: 1,
        color: '灰色+白色+黑色',
        price: '129'
      },
      {
        id: 2,
        color: '红色+绿色+蓝色',
        price: '119'
      }
    ],
    size: [
      {
        id: 1,
        name: 'S'
      },
      {
        id: 2,
        name: 'M'
      },
      {
        id: 3,
        name: 'L'
      },
      {
        id: 4,
        name: 'XL'
      },
      {
        id: 5,
        name: 'XXL'
      }
    ]
  }
}

class GoodsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showExplain: false,
      showSpec: false
    }
    this.changeExplainStatus = this.changeExplainStatus.bind(this)
  }

  changeExplainStatus () {
    this.setState((prevState, props) => ({
      showExplain: !prevState.showExplain
    }))
  }

  render () {
    const {showExplain, showSpec} = this.state
    return (
      <section className='goods-detail'>
        <Slider swiper={goodsInfo.swiper}/>
        <Info info={goodsInfo} changeExplain={this.changeExplainStatus}/>
        <Detail details={goodsInfo.details} />
        <Action/>
        {showExplain ? <Explain labels={goodsInfo.labels} change={this.changeExplainStatus}/> : ''}
        {showSpec ? <SpecList/> : ''}
      </section>
    )
  }
}

export default GoodsDetail