import React from 'react'

import './index.scss'

import Search from './Search'
import Slider from './Slider'
import Category from './Category'
import List from './List'

class Home extends React.Component {
  render () {
    return (
      <section className='home'>
        <Search/>
        <Slider/>
        <Category/>
        <List/>
      </section>
    )
  }
}

export default Home