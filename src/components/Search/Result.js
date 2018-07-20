import React from 'react'
import {Link} from 'react-router-dom'

class Result extends React.Component {
  render () {
    const {result} = this.props
    return (
      <ul className="search-result">
        {result.map((item)=>
          <li key={item.id}>
            <Link to={'./detail/' + item.id}>
              <div className="search-result-cover" style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
              <div className="search-result-info">
                <p>{item.title}</p>
                <p>{item.desc}</p>
                <p>¥<span>{item.price}</span></p>
              </div>
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

export default Result