import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

const swiper = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/b/bhdzxy1517652939/f/1/c/0/5b177421ee708.gif'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/s/snhpft1505529697/9/0/c/2/5b3b2300d877a.jpg'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/b/bhdzxy1517652939/f/1/c/0/5b177421ee708.gif'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/s/snhpft1505529697/9/0/c/2/5b3b2300d877a.jpg'
  }
]

class Slider extends React.Component {
  componentDidMount() {
    new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  render () {
    return (
      <div className="swiper-container">
      <div className="swiper-wrapper">
        {swiper.map((item)=>
          <div className="swiper-slide" key={item.id}>
            <img src={item.cover} alt=""/>
          </div>
        )}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Slider