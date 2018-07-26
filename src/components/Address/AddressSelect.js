import React from 'react'
import getPositionInfo from '../../api/position'

import Icon from '../common/Icon'

class AddressSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      provinceArr: [],
      cityArr: [],
      countyArr: [],
      townArr: [],
      positionArr: [],
      positionIndex: 0,
      positionId: []
    }
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

  getNextPosition (id) {
    let arr = this.state.positionId
    arr[this.state.positionIndex] = id
    this.setState({
      positionId: arr
    })
    getPositionInfo(id).then((res)=> {
      let setData = {}
      switch (this.state.positionIndex) {
        case 0:
          this.setState({
            cityArr: res.data
          })
          break
        case 1:
          this.setState({
            countyArr: res.data
          })
          break
        case 2:
          this.setState({
            townArr: res.data
          })
          break
      }
      this.setState((prevState)=> {
        return {
          positionArr: res.data,
          positionIndex: prevState.positionIndex + 1
        }
      })
    }).catch((error)=> {
      console.log(error)
    })
  }

  changePositionIndex (index) {
    this.setState({
      positionIndex: index
    })
    switch (index) {
      case 0:
        this.setState({
          positionArr: this.state.provinceArr
        })
        break
      case 1:
        this.setState({
          positionArr: this.state.cityArr
        })
        break
      case 2:
        this.setState({
          positionArr: this.state.countyArr
        })
        break
      case 3:
        this.setState({
          positionArr: this.state.townArr
        })
        break
    }
  }

  render () {
    const {change} = this.props
    const {provinceArr, cityArr, countyArr, townArr, positionArr, positionId, positionIndex} = this.state
    return (
      <div className="float-mask">
        <div className='address-choice'>
          <p className='address-choice-title'>
            配送至
            <span onClick={change}><Icon icon='close' size='small'/></span>
          </p>
          <div className='address-choice-detail'>
            {provinceArr.length ? <p className={positionIndex === 0 ? 'active' : ''} onClick={()=> {this.changePositionIndex(0)}}>请选择</p> : ''}
            {cityArr.length ? <p className={positionIndex === 1 ? 'active' : ''} onClick={()=> {this.changePositionIndex(1)}}>请选择</p> : ''}
            {countyArr.length ? <p className={positionIndex === 2 ? 'active' : ''} onClick={()=> {this.changePositionIndex(2)}}>请选择</p> : ''}
            {townArr.length ? <p className={positionIndex === 3 ? 'active' : ''} onClick={()=> {this.changePositionIndex(3)}}>请选择</p> : ''}
          </div>
          <div className='row-choice'>
            <div className='scroll-mask'>
              <ul className='level'>
                {positionArr.map((item)=>
                  <li key={item.id} onClick={()=> {this.getNextPosition(item.id)}}>
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