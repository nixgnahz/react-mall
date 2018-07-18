import React from 'react'

import './index.scss'

import Search from './Search'
import Slider from './Slider'
import Category from './Category'
import List from './List'
import Menu from '../../router/index'

const categoryArr = [
  {
    id: 1,
    name: '热门'
  },
  {
    id: 2,
    name: '服饰'
  },
  {
    id: 3,
    name: '鞋包'
  },
  {
    id: 4,
    name: '母婴'
  },
  {
    id: 5,
    name: '百货'
  },
  {
    id: 6,
    name: '食品'
  },
  {
    id: 7,
    name: '内衣'
  },
  {
    id: 8,
    name: '家电'
  },
  {
    id: 9,
    name: '手表'
  },
  {
    id: 10,
    name: '家具'
  }
]

const swiper = [
  {
    id: 1,
    cover: 'https://t00img.yangkeduo.com/t09img/images/2018-07-17/12cbb62b9ada2512ff7399defa0602c4.jpeg'
  },
  {
    id: 2,
    cover: 'https://t00img.yangkeduo.com/t02img/images/2018-07-17/739ec209ab0703688f1b06552d08a167.jpeg'
  },
  {
    id: 3,
    cover: 'https://t00img.yangkeduo.com/t01img/images/2018-07-16/7df735fc06224379188643157b7163aa.jpeg'
  },
  {
    id: 4,
    cover: 'https://t00img.yangkeduo.com/t10img/images/2018-07-15/6ffb686c00598a665b5323e4fa3eb1d7.jpeg'
  }
]

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

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
    this.changeMenu = this.changeMenu.bind(this)
  }

  changeMenu (index) {
    this.setState({
      activeIndex: index
    })
  }

  render () {
    return (
      <section className='home'>
        <Search/>
        <Category category={categoryArr} activeIndex={this.state.activeIndex} change={this.changeMenu}/>
        <Slider swiper={swiper}/>
        <List list={list}/>
        <Menu/>
      </section>
    )
  }
}

export default Home