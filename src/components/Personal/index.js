import React from 'react'

import Header from './Header'
import Orders from './Orders'
import Actions from './Actions'
import Info from './Info'
import Recommend from '../Recommend/index'
import './index.scss'

class Personal extends React.Component {
  render () {
    return (
      <section className="personal">
        <Header/>
        <Orders/>
        <Actions/>
        <Info/>
        <Recommend/>
      </section>
    )
  }
}

export default Personal