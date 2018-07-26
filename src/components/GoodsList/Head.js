import React from 'react'

class Head extends React.Component {
  render () {
    const {activeId, ifAsc, ifRow, changeId, changeRank} = this.props
    return (
      <div className='goods-head'>
        <div className={activeId === 'general' ? 'active' : ''} onClick={()=> {changeId('general')}}>
          <p>综合</p>
          <svg className={'icon-svg-head icon-sort'} aria-hidden="true">
            <use xlinkHref={'#icon-sortasc'}></use>
          </svg>
        </div>
        <div className={activeId === 'sales' ? 'active' : ''} onClick={()=> {changeId('sales')}}>
          <p>销量</p>
          <svg className={'icon-svg-head icon-sort'} aria-hidden="true">
            <use xlinkHref={'#icon-sortasc'}></use>
          </svg>
        </div>
        <div className={activeId === 'price' ? 'active' : ''} onClick={()=> {changeId('price')}}>
          <p>价格</p>
          <p className={ifAsc ? 'asc' : 'desc'}>
            <svg className={'icon-svg-head icon-asc'} aria-hidden="true">
              <use xlinkHref={'#icon-sortasc'}></use>
            </svg>
            <svg className={'icon-svg-head icon-desc'} aria-hidden="true">
              <use xlinkHref={'#icon-sortdesc'}></use>
            </svg>
          </p>
        </div>
      <div onClick={changeRank}>
        <svg className={'icon-svg-rank'} aria-hidden="true">
          <use xlinkHref={ifRow ? '#icon-row' : '#icon-column'}></use>
        </svg>
      </div>
      </div>
    )
  }
}

export default Head