import React from 'react'

import {Link} from 'react-router-dom'

class List extends React.Component {
  render () {
    const {list} = this.props
    return (
      <ul className='home-list'>
        {list.map((item, index)=>
          <li key={item.id}>
            <Link to={'./detail/' + item.id}>
              <div className='home-list-cover' style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
              <p className='home-list-desc'>{item.desc}</p>
              <div className='home-list-info'>
                <p className='home-list-info-price'><span>¥</span>{item.price}</p>
                <p className='home-list-info-sales'>{item.sales}人付款</p>
              </div>
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

export default List