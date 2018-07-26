import React from 'react'
import {Link} from 'react-router-dom'

class List extends React.Component {
  render () {
    const {lists, ifRow} = this.props
    return (
      <ul className={ifRow ? 'goods-list row' : 'goods-list column'}>
        {lists.map((item)=>
          <li key={item.id}>
            <Link to={'/detail/' + item.id}>
              <div className='cover' style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
              <div className='info'>
                <p className='info-title'>{item.title}</p>
                <div className='info-content'>
                  <p className='info-content-price'><span>¥</span>{item.price}</p>
                  <p className='info-content-sales'>销量 {item.sales}</p>
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

export default List