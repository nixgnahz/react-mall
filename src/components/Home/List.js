import React from 'react'

import {withRouter} from 'react-router-dom'

const list = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/4/4/d/5b49aa016c765.png',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/d/c/9/9/5b481040c7f32.jpeg',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  },
  {
    id: 5,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  },
  {
    id: 6,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/0/6/a/5b480e10dbac3.jpeg',
    desc: '善存儿童智能语音对话机器人早教机学习机男女陪伴玩具可连wifi',
    price: '123',
    sales: '246'
  }
]

class List extends React.Component {
  constructor(props) {
    super(props)
    this.showGoodsDetail = this.showGoodsDetail.bind(this)
  }

  showGoodsDetail (id) {
    this.props.history.push('./detail/' + id)
  }

  render () {
    return (
      <ul className='home-list'>
        {list.map((item, index)=>
          <li key={item.id} onClick={()=>this.showGoodsDetail(index)}>
            <div className='home-list-cover' style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
            <p className='home-list-desc'>{item.desc}</p>
            <div className='home-list-info'>
              <p className='home-list-info-price'><span>¥</span>{item.price}</p>
              <p className='home-list-info-sales'>{item.sales}人付款</p>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

export default withRouter(List)