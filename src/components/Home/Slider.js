import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

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