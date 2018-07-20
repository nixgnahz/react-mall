import React from 'react'

import './index.scss'

import Icon from '../common/Icon'

const questionArr = [
  {
    title: '热门问题',
    content: [
      {
        id: 1,
        title: '7天无理由退货条件',
        desc: [
          '大部分商品支持7天无理由退货，但以下情况（商品）不支持退货：',
          '签收次日算起超过7天的商品；',
          '吊牌不完整，有明显使用痕迹，影响二次销售的商品；',
          '配件、赠品、发票不齐全的商品；',
          '已激活的手机、电脑、数码产品等；',
          '酒类相关商品，部分食品（如巧克力等）；',
          '原礼包或套装商品，拆散后进行部分退换货；',
          '已拆封食品药品、化妆品、贴身用品，婴儿特殊用品；',
          '售价4000人民币或以上的手表类商品；'
        ]
      },
      {
        id: 2,
        title: '运费说明',
        desc: [
          '全国（港澳台地区除外）购物满288免邮，未满额则统一收取运费10元/单；',
          '个别品牌商直销商品，运费以商品详情页描述为准；',
          '开通超级VIP，尊享无限次免邮特权。'
        ]
      }
    ]
  },
  {
    title: '账号问题',
    content: [
      {
        id: 3,
        title: '昵称怎么修改',
        desc: ['请点击【个人中心】-【我的设置】-【个人信息设置】修改相关的个人信息，如昵称头像等']
      },
      {
        id: 4,
        title: '头像怎么修改',
        desc: ['请点击【个人中心】-【我的设置】-【个人信息设置】修改相关的个人信息，如昵称头像等']
      },
      {
        id: 5,
        title: '账号如何绑定手机号',
        desc: ['请点击【个人中心】-【我的设置】-【个人信息设置】进行手机号的绑定']
      }
    ]
  },
  {
    title: '订单问题',
    content: [
      {
        id: 6,
        title: '发货时间',
        desc: [
          '下单后12小时内有专人核实订单信息（包括商品/地址/支付等）。',
          '审核通过后，不同的商品发货时效略有差异：',
          '普通订单：2天内发货（跨仓/异地调拨订单延迟1-2天）；',
          '供应商直发订单以商品页面注明的发货时间为准。'
        ]
      },
      {
        id: 7,
        title: '修改收货信息',
        desc: [
          '目前暂不支持修改订单信息，配送员会按照订单上的预留信息进行配送，',
          '如需修改收货信息，建议您申请退款，重新下单购买。'
        ]
      },
      {
        id: 8,
        title: '商品不想要了怎么退款',
        desc: [
          '生鲜商品具有新鲜度、易腐性等特点限制，目前不支持无理由退换货；',
          '若您收到的商品有问题，请你在签收后48小时内电话联系客服人员'
        ]
      },
      {
        id: 9,
        title: '如何查询我的订单进程',
        desc: [
          '请点击【全部订单】，找到相应的订单',
          '如果订单处于已发货并且未收货状态，请点击【查看物流】查看具体的物流情况'
        ]
      }
    ]
  },
  {
    title: '其他问题',
    content: [
      {
        id: 10,
        title: '如何添加／修改收货地址',
        desc: [
          '请点击【我的】-【我的地址】进行收货地址的增删改查',
          '或者点击【我的设置】找到收货地址进行增删改查'
        ]
      },
      {
        id: 11,
        title: '企业订购',
        desc: [
          '如您需要企业订购商品或团购储值卡，请您拨打：10106066',
          '也可以添加我们的官方微信：meiriyouxian-qy'
        ]
      }
    ]
  }
]

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: -1
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if(nextState.activeId == this.state.activeId) {
      return false
    }
    return true
  }

  changeQuestion (id) {
    this.setState({
      activeId: id
    })
  }

  render () {
    const {activeId} = this.state
    return (
      <section className='question'>
        <ul>
        {questionArr.map((it)=>
          <li key={it.content.id}>
            <div className='question-title'>
              <p></p>
              <p>{it.title}</p>
            </div>
            {it.content.map((item)=>
              <div className='question-list' key={item.id} onClick={()=> {this.changeQuestion(item.id)}}>
                <p className='question-list-title'>
                  <span>{item.title}</span>
                  <Icon icon={activeId == item.id ? 'up' : 'down'} size='smaller'/>
                </p>
                <div className='question-list-desc' style={{display: activeId == item.id ? 'block' : 'none'}}>
                {item.desc.map((itm,index)=>
                  <p key={index}>● {itm}</p>
                )}
              </div>
            </div>
          )}
          </li>
        )}
        </ul>

      </section>
    )
  }
}

export default Question