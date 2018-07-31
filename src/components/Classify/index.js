import React from "react";
import "./index.scss";
import Menu from "../../router/index";
import List from "./List";
import Content from "./Content";

const classArr = [
  {
    id: 1,
    title: '热门推荐',
    content: [
      {
        id: 1,
        title: '猜你喜欢',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '你可能还喜欢',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 3,
        title: '精选推荐',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '女装',
    content: [
      {
        id: 1,
        title: '热卖',
        list: [
          {
            id: 1,
            title: '夏季新品',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '连衣裙',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: 'T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '衬衫',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 5,
            title: '牛仔裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '上装',
        list: [
          {
            id: 1,
            title: '短袖T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '雪纺衫',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '棉麻T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '吊带',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 5,
            title: '卫衣',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 6,
            title: '防晒衣',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 3,
        title: '下装',
        list: [
          {
            id: 1,
            title: '牛仔短裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '休闲短裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '背带裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '男装',
    content: [
      {
        id: 1,
        title: '热卖',
        list: [
          {
            id: 1,
            title: 'T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '休闲裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '牛仔裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '短裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '上装',
        list: [
          {
            id: 1,
            title: '短袖T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '长袖T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '运动T恤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '衬衫',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 3,
        title: '下装',
        list: [
          {
            id: 1,
            title: '短裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '休闲裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '牛仔裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '运动裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 5,
            title: '九分裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: '内衣内裤',
    content: [
      {
        id: 1,
        title: '热卖',
        list: [
          {
            id: 1,
            title: '内衣',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '文胸',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '内衣',
        list: [
          {
            id: 1,
            title: '文胸',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '文胸套装',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '无钢圈文胸',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '蕾丝文胸',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 3,
        title: '内裤',
        list: [
          {
            id: 1,
            title: '男士内裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '女士内裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '情侣内裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '莫代尔内裤',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '女鞋',
    content: [
      {
        id: 1,
        title: '热门',
        list: [
          {
            id: 1,
            title: '单鞋',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '高跟鞋',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '帆布鞋',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '板鞋',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: '男鞋',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: '手表配饰',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: '护肤彩妆',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: '个人护理',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: '母婴',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: '手机',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: '电脑',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: '运动',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: '食品',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: '儿童',
    content: [
      {
        id: 1,
        title: '小米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      },
      {
        id: 2,
        title: '红米手机',
        list: [
          {
            id: 1,
            title: '小米8',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 2,
            title: '小米8 SE',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 3,
            title: '小米MIX 2S',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          },
          {
            id: 4,
            title: '小米Max 3',
            cover: 'https://i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png'
          }
        ]
      }
    ]
  }
]

class Classify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      listArr: classArr[0]
    }
    this.changeMenu = this.changeMenu.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.activeIndex === this.state.activeIndex) {
      return false
    }
    return true
  }

  changeMenu (index) {
    this.setState({
      activeIndex: index,
      listArr: classArr[index]
    })
  }

  render () {
    const {activeIndex, listArr} = this.state
    return (
      <section>
        <div className='classify'>
          <List menu={classArr} active={activeIndex} change={this.changeMenu}/>
          <Content list={listArr}/>
        </div>
        <Menu/>
      </section>
    )
  }
}

export default Classify