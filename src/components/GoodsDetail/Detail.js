import React from 'react'

class Detail extends React.Component {
  render () {
    const {details} = this.props
    return (
      <div className='goods-detail-cover'>
        {details.map((item)=>
          <img key={item.id} alt='' src={item.img}/>
        )}
      </div>
    )
  }
}

export default Detail