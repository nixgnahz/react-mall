import React from 'react'

import './index.scss'

import Search from './Search'
import Slider from './Slider'
import Category from './Category'
import List from './List'
import Menu from '../../router/index'

class Home extends React.Component {
  render () {
    return (
      <section className='home'>
        <Search/>
        <Category/>
        <Slider/>
        <List/>
        <Menu/>
      </section>
    )
  }
}

export default Home