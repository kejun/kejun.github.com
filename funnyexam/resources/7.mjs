import { xaxis, table, img } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '数学周未课堂作业 (10/30)';

export const questions = normalize([
  {
    type: 'choice',
    question: '如果上升$8 ^ { \\circ }C$记作$+ 8 ^ { \\circ }C$ ，那么$-5 ^ { \\circ }C$ 表示 ( )',
    options: [
      'A. 上升$5 ^ { \\circ }C$',
      'B. 下降$5 ^ { \\circ }C$',
      'C. 上升$3 ^ { \\circ }C$',
      'D .下降$3 ^ { \\circ }C$',
    ],
  },
  {
    type: 'choice',
    question: '全面贯彻落实“大气十条”，抓好大气污染防治，是今年环保工作的重中之重，其中推进燃煤电厂脱硫改造$15000000$千瓦是《政府工作报告》中确定的重点任务之一.将数据$15000000$用科学记数法表示为 ( )',
    options: [
      'A. $1.5 \\times { 1 0 ^ { 7 } }$',
      'B. $15 \\times { 1 0 ^ { 8 } }$',
      'C. $1.5 \\times { 1 0 ^ { 8 } }$',
      'D. $0.15 \\times { 1 0 ^ { 8 } }$',
    ],
  },
  {
    type: 'choice',
    question: '下列各式中运算正确的是 ( )',
    options: [
      'A. $4m-m=3$',
      'B. $a ^ { 2 } b - a b ^ { 2 } = 0$',
      'C. $2a ^ { 3 } - 3 a ^ { 3 } = a ^ { 3 }$',
      'D. $xy-2xy=-xy$',
    ],
  },
  {
    type: 'choice',
    question: '如图所示，数轴上点$A、B$对应的有理数分别为$a、b$，下列说法正确的是 ( )',
    addition: img('hw-1030-4.png', 300),
    options: [
      'A. $ab>0$',
      'B. $a+b>0$',
      'C. $|a| - |b|<0$',
      'D. $a-b<0$',
    ],
  },
  {
    type: 'choice',
    question: '下列说法正确的是 ( )',
    options: [
      'A. 若$ac = bc$， 则$a=b$',
      'B. 若$\\frac { a } { c } = \\frac { b } { c }$ ， 则$ a=b$',
      'C. 若$a ^ { 2 } = b ^ { 2 }$ ， 则$ a=b$',
      'D. 若$- \\frac { 1 } { 3 } x = 6$ ，则$x=-2$ ',
    ],
  },
  {
    type: 'choice',
    question: '若$\\frac { 1 } { 2 } x ^ { a - 1 } y ^ { 2 b }$ 与 $- \\frac { 1 } { 3 } x y ^ { 2 }$ 是同类项则$a、b$值分别为()',
    options: [
      'A. $a=2，b=-1$',
      'B. $a=2，b=1$',
      'C. $a=-2，b=1$',
      'D. $a=-2，b=-1$',
    ],
  },
  {
    type: 'choice',
    question: '下列结论正确的是 ( )',
    options: [
      'A. $- 3 a b ^ { 2 }$ 和 $b ^ { 2 } a$ 是同类项',
      'B. $\\frac { \\pi } { 2 }$ 不是单项式',
      'C. $a$比$-a$大',
      'D. 一个数的绝对值越大，表示它的点在数轴上越靠右',
    ],
  },
  {
    type: 'choice',
    question: '已知$x ^ { 2 } - 2 x - 3 = 0$ ， 则$ 2 x ^ { 2 } - 4 x$ 的值为 ( )',
    options: [
      'A. $-6$',
      'B. $6$',
      'C. $-2$或$6$',
      'D. $-2$或$30$',
    ],
  },
  {
    type: 'choice',
    question: '若$x=a$是关于$x$的方程$ 2x+3=a$ 的解，则$ a$ 的值为 ( ) ',
    options: [
      'A. $1$',
      'B. $3$',
      'C. $-1$',
      'D. $-3$',
    ],
  },
  {
    type: 'choice',
    question: '当$x$分别为$-1，0，1，2$时，式子$ ax+b$ 的值如表，则$a+2b$的值为 ( )',
    addition: table([
      ['$x$','$-1$', '$0$', '$1$', '$2$' ],
      ['$ax+b$','$-5$', '$-3$', '$-1$', '$1$' ],
    ]),
    options: [
      'A. $4$',
      'B. $-4$',
      'C. $1$',
      'D. $-3$',
    ],
  },
  {
    type: 'completion',
    question: '把$0.0158$精确到$0.001$是________',
  },
  {
    type: 'completion',
    question: '写出一个系数是$2020$，且只含$x，y$两个字母的三次单项式是____________',
  },
  {
    type: 'completion',
    question: '若多项式$x ^ { 2 } - 2 k x y + y ^ { 2 } + 6 x y - 6$ 不含$ xy$ 的项，则$k$=____',
  },
  {
    type: 'completion',
    question: '大于$-3$ 且不大于$2$的所有整数的和为____',
  },
  {
    type: 'completion',
    question: '若$\\left( k + 3 \\right) x ^ { 2 } + x - 2 k = 0$ 是关于$ x$ 的一元一次方程，则 $k=$____ ，这个方程的解为____',
  },
  {
    type: 'completion',
    question: '如图所示，把同样大小的黑色棋子摆放在正多边形的边上，按照这样的规律摆下去，则 第$5$个图形需要黑色棋子的个数是____，第$n$ 个图形需要黑色棋子的个数是____',
    addition: img('hw-1030-16.png', 500),
  },
  {
    type: 'calculation',
    question: '$7-(-6)+(-4)\\times(-3)$',
  },
  {
    type: 'calculation',
    question: '$\\left( - 2 \\right) ^ { 3 } \\times 4 + 8 \\div \\left( - \\frac { 4 } { 7 } \\right)$',
  },
  {
    type: 'calculation',
    question: '$ \\left( \\frac { 5 } { 1 2 } + \\frac { 2 } { 3 } - \\frac { 3 } { 4 } \\right) \\times \\left( - 1 2 \\right)$',
  },
  {
    type: 'calculation',
    question: '$ - 2 . 5 \\div \\frac { 5 } { 1 6 } \\times \\left( - \\frac { 1 } { 8 } \\right) \\div \\left( - 4 \\right)$',
  },
  {
    type: 'calculation',
    question: '化简: $-3a+2ab-4ab+2a$',
  },
  {
    type: 'calculation',
    question: '化简: $5 x ^ { 2 } y - 2 x y - 4 \\left( x ^ { 2 } y - \\frac { 1 } { 2 } x y \\right)$',
  },
  {
    type: 'equation',
    question: '$4(2x-1)-3(5x+1)=14$',
  },
  {
    type: 'equation',
    question: '$\\frac { 1 - 3 x } { 2 } - \\frac { 3 - 5 x } { 3 } = 1$',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    question: '$5 \\left( 3 a ^ { 2 } b - a b ^ { 2 } \\right) - \\left( a b ^ { 2 } + 3 a ^ { 2 } b \\right) + 2 a b ^ { 2 }$。其中$a、b$  满足 $| a + 1 | + \\left( b - 2 \\right) ^ { 2 } = 0$',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    question: '有理数$a，b$在数轴上的对应点位置如图所示。<br>(1). 在图中标出$ -a，-b$ 所对应的点，并用“$<$”连接$ a，b，-a，-b，0$；<br>(2). 化简： $|a|+|a+b|-2|b-a|$。',
    addition: img('hw-1030-21.png', 360),
  },
  {
    type: 'program',
    style: {
      blankHeight: 120,
    },
    question: `有8筐白菜，以每筐$25$千克为标准，超过的千克数记作正数，不足的千克数记作负数， 称后的纪录如下图，回答下列问题；\
    <br>(1) 这$8$筐白菜中最接近标准重量的这筐白菜重____千克
    <br>(2) 与标准重量比较，$8$筐白菜总计超过或不足多少千克? 
    <br>(3) 若白菜每千克售价$2.6$元，则出售这$8$筐白菜可卖多少元? 
    `,
    addition: img('hw-1030-22.png', 600),
  },
  {
    type: 'program',
    style: {
      blankHeight: 120,
    },
    question: `\
    一般情况下，对于数 $a$ 和 $b$ ， $\\frac { a } { 2 } + \\frac { b } { 4 } \\ne \\frac { a + b } { 2 + 4 }$ ("$\\ne$"不等号)，但是对于某些特殊的数$ a $和$ b$ ，$ \\frac { a } { 2 } + \\frac { b } { 4 } = \\frac { a + b } { 2 + 4 } $. 我们把这些特殊的数$ a $和$b$，称为“理想数对”，记作$\\langle a，b \\rangle$ .例如当$ a=1，b=-4 $时，有$ \\frac { 1 } { 2 } + \\frac { -4 } { 4 } = \\frac { 1 + \\left( - 4 \\right) } { 2 + 4 }$ ， 那么$ \\langle 1，-4 \\rangle$ 就是“理想数对”。
    <br>(1) $\\langle 3，-12 \\rangle，\\langle -2，4 \\rangle$ 可以称为“理想数对”的是________.
    <br>(2) 如果$ \\langle 2，x \\rangle$ 是“理想数对”，那么$x=$____
    <br>(3) 若$ \\langle m，n \\rangle$ 是“理想数对”，求 $3 \\left[ \\left( 9 n - 4 m \\right) - 8 \\left( n - \\frac { 7 } { 6 } m \\right) \\right] - 4 m - 12$ 的值`,
  },
]);
