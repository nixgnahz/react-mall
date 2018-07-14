import React from 'react'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

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
    const {swiper} = this.props
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