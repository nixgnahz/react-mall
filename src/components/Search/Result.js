import React from 'react'

const resultArr = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '小米电视4A 32英寸',
    desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身／人工智能／高清全屏／大内存',
    price: '899'
  }
]

class Result extends React.Component {
  render () {
    return (
      <ul className="search-result">
        {resultArr.map((item)=>
          <li key={item.id}>
            <div className="search-result-cover" style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
            <div className="search-result-info">
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <p>¥<span>{item.price}</span></p>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

export default Result