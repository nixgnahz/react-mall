import React from 'react'
import {withRouter} from 'react-router-dom'

import Header from './Header'
import Orders from './Orders'
import Actions from './Actions'
import Info from './Info'
import Recommend from '../Recommend/index'
import Menu from '../../router/index'
import './index.scss'

class Personal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    //this.props.history.replace('/login')
  }

  render () {
    return (
      <section className="personal">
        <Header/>
        <Orders/>
        <Actions/>
        <Info/>
        <Recommend/>
        <Menu/>
      </section>
    )
  }
}

export default withRouter(Personal)