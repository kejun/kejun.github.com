import {vline, fract, xaxis, table} from './utils/graphic.mjs';

export const title = '初一自主探究作业（上）';

export const questions = [
  {
    type: 'completion',
    remark: 'P1',
    question: '学校在大桥东面9千米处，那么大桥在学校____面9千米。',
  },
  {
    type: 'choice',
    remark: 'P1',
    question: '带有正号的数是正数，带有负号的数是负数。( )',
    options: ['A. 对', 'B. 错'],
  },
  {
    type: 'choice',
    remark: 'P3',
    question: '有理数包括正数、0、负数。( )',
    options: ['A. 对', 'B. 错'],
  },
  {
    type: 'program',
    remark: 'P6',
    style: {
      blankHeight: 80,
    },
    question: `\
如图，已知数轴上的点A表示的数为6，点B表示的数为-4，点C到点A、点B的距离相等，动点P从点B出发，以每秒2个单位长度的速度沿数轴向右匀速运动，设运动时间为t（t > 0秒）
<br>⑴ 点C表示的数是____
<br>⑵ 求当t等于多少秒时，点P到达点A处?
<br>⑶ 点P表示的数是________(用含字母t的式子表示)
<br>⑷ 求当t等于多少秒时，P、C之间的距离为2个单位长度。\
    `,
    addition: xaxis({
      width: 500,
      points:[
        {label: 'B', value: -4},
        {label: 'A', value: 6},
      ],
      scale: {
        extent: [-5, 7],
      },
    }),
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P6',
    question: `
操作探究：已知在纸面上有一数轴(如图所示)。
<br>⑴  操作一：折叠纸面，使表示1的点与表示-1的点重合，则表示-3的点与表示____的点重合;
<br>⑵  操作二：折叠纸面，使表示-1的点与表示3的点重合，回答以下问题:
<br>&nbsp;①  表示数5的点与表示数____的点重合；
<br>&nbsp;②  若数轴上A、B两点之间距离为11(A在B的左侧)，且A, B两点经折叠后重合，求A、B两点表示的数是多少吗?
    `,
    addition: xaxis({
      width: 500,
      scale: {
        extent: [-5, 5],
      },
    }),
  },
  {
    type: 'completion',
    remark: 'P7',
    question: '数轴上，表示-3的点到原点的距离是____ 个单位长，与原点距离为3个单位长的点表示的数是____',
  },
  {
    type: 'program',
    remark: 'P8',
    style: {
      blankHeight: 80,
    },
    question: '若数a与b互为相反数，在数轴上表示数a, b的两个点A、B之间的距离是2004个单位长度，求a、b两数。',
  },
  {
    type: 'program',
    remark: 'P8',
    style: {
      blankHeight: 80,
    },
    question: '若a为有理数，在—a与a之间(不包含-a与a)有1997个整数，则a的取值范围是________',
  },
  {
    type: 'completion',
    remark: 'P9',
    question: '一个正数的绝对值是____；____的绝对值是它的相反数；____的绝对值是零',
  },
  {
    type: 'completion',
    remark: 'P9',
    question: '相反数等于本身的数是____；绝对值等于本身的数是____；倒数等于本身的数是____',
  },
  {
    type: 'choice',
    remark: 'P10',
    question: '-|-a|是 ( )',
    options: [
      'A. 正数',
      'B. 负数',
      'C. 非负数',
      'D. 非正数',
    ],
  },
  {
    type: 'choice',
    remark: 'P10',
    question: '若|x - 2|=1，则x= ( )',
    options: [
      'A. 3',
      'B. 1',
      'C. -1或1',
      'D. 3或1',
    ],
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '绝对值小于143.5的所有整数的和为____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '若|x|=|y|，则x，y的关系是________',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '如果|x|=2，那么x=____，如果|-x|=2，那么x = ____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当|a|=a时，则a____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当|a - 2| + |b + 3| = 0，则a=____，b=____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当|x|=2，|y|=5，且x > y，则x=____，y=____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '满足3.5 < |x| <= 9的x的整数值是________',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '数a在数轴上的位置如图所示，则|a - 2|=____',
    addition: xaxis({
      width: 200,
      points: [{label: 'a', value: 2.3}],
      scale: {
        extent: [-1, 2]
      }
    }),
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当a=____时，30 - |a + 2|的值最大，最大值是____',
  },
  {
    type: 'completion',
    remark: 'P16',
    question: '从-56起，逐次加上，得到一串整数：-55，-54，-53，...则第100个数为____',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P16',
    question: `小虫从点O出发在一条直线上来回爬行，向右爬行的路程记为正，向左爬行的路程记为负，爬行的各段路程依次为：+5，-3，+10，-8，-6，+12，-10（单位:cm）
<br>⑴  小虫最后是否回到出发点O？为什么？
<br>⑵  小虫离开O点最远时是多少？
<br>⑶  在爬行过程中，如果每爬行1cm奖励1粒芝麻，则小虫一共可以得到多少粒芝麻？
`,
  },
  {
    type: 'program',
    style: {
      blankHeight: 120,
    },
    remark: 'P16',
    question: `出租车司机小王某天下午营运会是在南北走向的公路上进行的。如果向南记作 "+" ，向北记作 "-"，他这天下午行车情况如下（单位：千米，每次行车都有乘客）：-2，+5，-1，+10，-3， -2，-4，+6请回答：
<br>⑴  将最后一名乘客送到目的地时，小王在下午出车的出发地的什么方向？距下午出车的出发地多远？
<br>⑵  若规定每趟车的起步价是10元，且每趟车3千米以内（含3千米）只收起步价；若过3千米，除收起步价外，超过的每千米还需要收2元钱。那么小王这天下午收到乘客给的车费共多少元？
<br>⑶  若小王的出租车每千米耗油0.3升，每升汽油6元，不计汽车的损耗，那么小王这天下午是盈利还是亏损了？盈利或亏损多少钱？
`,
  },
  {
    type: 'calculation',
    style: {
      blankHeight: 120,
    },
    remark: 'P18',
    question: `${vline()}-3${fract(1, 2)} + (-1${fract(5, 8)})${vline()} - ${vline()}-2${fract(3, 4)} + ${fract(7, 8)}${vline()}`,
  },
  {
    type: 'calculation',
    remark: 'P18',
    question: '(-100) + 70 + (-23) + 50 + (-6)'
  },
  {
    type: 'calculation',
    remark: 'P18',
    style: {
      blankHeight: 80,
    },
    question: '89 + 899 + 8999 + 89999 - 9 - 99 - 999 - 9999 - 99999'
  },
];
