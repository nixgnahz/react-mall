import React from 'react'

const categoryArr = [
  {
    id: 1,
    name: '热门'
  },
  {
    id: 2,
    name: '服饰'
  },
  {
    id: 3,
    name: '鞋包'
  },
  {
    id: 4,
    name: '母婴'
  },
  {
    id: 5,
    name: '百货'
  },
  {
    id: 6,
    name: '食品'
  },
  {
    id: 7,
    name: '内衣'
  },
  {
    id: 8,
    name: '家电'
  },
  {
    id: 9,
    name: '手表'
  },
  {
    id: 10,
    name: '家具'
  }
]

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
    this.changeMenu = this.changeMenu.bind(this)
  }

  changeMenu (index) {
    this.setState({
      activeIndex: index
    })
  }

  render () {
    const {activeIndex} = this.state
    return (
      <div className='home-scroll'>
        <ul className='home-category'>
          {categoryArr.map((item, index)=>
            <li key={item.id} className={index == activeIndex ? 'active' : 'inactive'} onClick={()=> this.changeMenu(index)}>{item.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Category