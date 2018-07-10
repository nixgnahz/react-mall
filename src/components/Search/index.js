import React from 'react'

import Input from './Input'
import Hot from './Hot'
import Recent from './Recent'
import Result from './Result'

import './index.scss'

class Search extends React.Component {
  render () {
    return (
      <section className="search">
        <Input/>
        <Recent/>
        <Hot/>
        <Result/>
      </section>
    )
  }
}

export default Search