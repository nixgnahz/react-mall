import React from 'react'

const categoryArr = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '品牌特卖'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '女装'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '上衣'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '男装'
  },
  {
    id: 5,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '内衣'
  },
  {
    id: 6,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '美妆护理'
  },
  {
    id: 7,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '女鞋'
  },
  {
    id: 8,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '男鞋'
  },
  {
    id: 9,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '女鞋'
  },
  {
    id: 10,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/1/5/f/5b49aa09d4552.png',
    name: '男鞋'
  }
]

class Category extends React.Component {
  render () {
    return (
      <ul className='home-category'>
        {categoryArr.map((item)=>
          <li key={item.id}>
            <img src={item.cover} alt=''/>
            <p>{item.name}</p>
          </li>
        )}
      </ul>
    )
  }
}

export default Category