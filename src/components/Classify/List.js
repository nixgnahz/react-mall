import React from 'react'

class List extends React.Component {
  render () {
    const {active, menu, change} = this.props
    return (
      <ul className='classify-menu'>
      {menu.map((item, index)=>
        <li key={item.id} className={index === active ? 'active' : ''} onClick={()=>{change(index)}}>{item.title}</li>
      )}
      </ul>
    )
  }
}

export default List