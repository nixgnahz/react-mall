import React from 'react'
import getPositionInfo from '../../api/position'

import Icon from '../common/Icon'

class AddressSelect extends React.Component {
  constructor(props) {
    super(props)
    this.waitFlag = 1
    this.state = {
      provinceArr: [],
      cityArr: [],
      countyArr: [],
      townArr: [],
      positionArr: [],
      positionIndex: 0,
      positionId: [],
      position: []
    }
    this.getNextPosition = this.getNextPosition.bind(this)
    this._setPosition = this._setPosition.bind(this)
    this.changePositionIndex = this.changePositionIndex.bind(this)
  }

  componentDidMount () {
    getPositionInfo().then((res)=> {
      this.setState({
        provinceArr: res.data,
        positionArr: res.data
      })
    }).catch((error)=> {
      console.log(error)
    })
  }

  getNextPosition (index) {
    if(!this.waitFlag) return
    this.waitFlag = 0
    let id = this.state.positionArr[index].id
    let name = this.state.positionArr[index].name
    this.state.positionId[this.state.positionIndex] = id
    this.state.position[this.state.positionIndex] = name
    this.setState({
      positionId: this.state.positionId,
      position: this.state.position
    })
    getPositionInfo(id).then((res)=> {
      if(!res.data.length) {
        this._setPosition()
        return
      }
      switch (this.state.positionIndex) {
        case 0:
          this.state.position[1] = ''
          this.setState({
            cityArr: res.data,
            countyArr: [],
            townArr: [],
            position: this.state.position
          })
          break
        case 1:
          this.state.position[2] = ''
          this.setState({
            countyArr: res.data,
            townArr: [],
            position: this.state.position
          })
          break
        case 2:
          this.state.position[3] = ''
          this.setState({
            townArr: res.data,
            position: this.state.position
          })
          break
      }
      this.setState((prevState)=> {
        return {
          positionArr: res.data,
          positionIndex: prevState.positionIndex + 1
        }
      })
      this.waitFlag = 1
    }).catch((error)=> {
      console.log(error)
    })
  }

  _setPosition () {
    var position = ''
    let len = this.state.positionId.length - 1
    let id = this.state.positionId[len]
    for(let i = 0; i < this.state.position.length; i++) {
      position += this.state.position[i]
    }
    this.props.setPosition(position, id)
  }

  changePositionIndex (index) {
    var arr = null
    switch (index) {
      case 0:
        arr = this.state.provinceArr
        break
      case 1:
        arr = this.state.cityArr
        break
      case 2:
        arr = this.state.countyArr
        break
      case 3:
        arr = this.state.townArr
        break
    }
    this.setState({
      positionIndex: index,
      positionArr: arr
    })
  }

  render () {
    const {change} = this.props
    const {provinceArr, cityArr, countyArr, townArr, positionArr, positionId, positionIndex, position} = this.state
    return (
      <div className="float-mask">
        <div className='address-choice'>
          <p className='address-choice-title'>
            配送至
            <span onClick={change}><Icon icon='close' size='small'/></span>
          </p>
          <div className='address-choice-detail'>
            {provinceArr.length ? <p className={positionIndex === 0 ? 'active' : ''} onClick={()=> {this.changePositionIndex(0)}}>{position[0] ? position[0] : "请选择"}</p> : ''}
            {cityArr.length ? <p className={positionIndex === 1 ? 'active' : ''} onClick={()=> {this.changePositionIndex(1)}}>{position[1] ? position[1] : "请选择"}</p> : ''}
            {countyArr.length ? <p className={positionIndex === 2 ? 'active' : ''} onClick={()=> {this.changePositionIndex(2)}}>{position[2] ? position[2] : "请选择"}</p> : ''}
            {townArr.length ? <p className={positionIndex === 3 ? 'active' : ''} onClick={()=> {this.changePositionIndex(3)}}>{position[3] ? position[3] : "请选择"}</p> : ''}
          </div>
          <div className='row-choice'>
            <div className='scroll-mask'>
              <ul className='level'>
                {positionArr.map((item, index)=>
                  <li key={item.id} onClick={()=> {this.getNextPosition(index)}}>
                    <span>{item.name}</span>
                    {positionId[positionIndex] === item.id ? <Icon icon='choice' size='smaller'/> : ''}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddressSelect