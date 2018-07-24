import React from 'react'

import './index.scss'

const aboutArr = [
  'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-01.png',
  'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-02.png',
  'https://p-h5.missfresh.cn/h5_file/2BEB6474AD0611A1658D7B0ADD0A42FD/statics/img/about-us-03.png'
]

class About extends React.Component {
  render () {
    return (
      <section className='about'>
      {aboutArr.map((item, index)=>
        <img src={item} key={index} alt=''/>
      )}
        <p className='about-copyright'>
          <span>Copyright@2004-2018</span>
          <span>京东JD.com版权所有</span>
        </p>
      </section>
    )
  }
}

export default About
