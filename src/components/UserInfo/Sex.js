import React from 'react'

class Sex extends React.Component {
  render () {
    const {change, changeSex, genderArr} = this.props
    return (
      <div className='float-mask userinfo-float' onClick={change}>
        <div className='userinfo-change' onClick={(e)=> {e.stopPropagation()}}>
          <p className='userinfo-change-title'>修改性别</p>
          <div className='userinfo-change-list'>
            {genderArr.map((item)=>
              <p key={item.id} onClick={()=> {changeSex(item.id)}}>
                <span>{item.name}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Sex