import React from 'react'

import Personal from './Personal/index'
import Cart from './Cart/index'
import Search from './Search/index'
import Orders from './Orders/index'
import Address from './Address/index'
import OrderDetail from './OrderDetail/index'
import GoodsDetail from './GoodsDetail/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <GoodsDetail/>
      </div>
    )
  }
}

export default App