import React from 'react'

class Category extends React.Component {
  render () {
    const {category, activeIndex, change} = this.props
    return (
      <div className='home-scroll'>
        <ul className='home-category'>
          {category.map((item, index)=>
            <li key={item.id} className={index == activeIndex ? 'active' : 'inactive'} onClick={()=> change(index)}>{item.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Category