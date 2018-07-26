import React from 'react'
import {Link} from 'react-router-dom'

class Content extends React.Component {
  render () {
    const {list} = this.props
    return (
      <ul className='classify-content'>
        {list.content.map((item)=>
          <div className='classify-content-list' key={item.id}>
            <div className='classify-content-list-title'>
              <p className='classify-content-list-title-line'></p>
              <p>{item.title}</p>
              <p className='classify-content-list-title-line'></p>
            </div>
            <ul>
            {item.list.map((itm)=>
              <li key={itm.id}>
                <Link to={'./goods/' + itm.id}>
                  <div className='classify-content-list-cover' style={{backgroundImage: 'url(' + itm.cover + ')'}}></div>
                  <p className='classify-content-list-name'>{itm.title}</p>
                </Link>
              </li>
            )}
            </ul>
          </div>
        )}
      </ul>
    )
  }
}

export default Content