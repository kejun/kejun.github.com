import { table } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '初一数学作业（2021.09.18）';

export const questions = normalize([
  {
    type: 'choice',
    question: '若三个不相等的有理数的和为0，则下列结论一定正确的是 ( )',
    options: [
      'A. 三个加数全是0',
      'B. 至少有两个加数是负数',
      'C. 至少有一个加数是负数',
      'D. 至少有两个加数是正数',
    ],
  },
  {
    type: 'choice',
    question: '若$|-x|=8$，则$x$的值为 ( )',
    options: [
      'A. $-8$',
      'B. $+8$',
      'C. $\\pm8$',
      'D. $\\frac{1}{8}$',
    ],
  },
  {
    type: 'completion',
    question: '已知$|a|=3，|b|=2$，则$ab < 0$，则$a - b =$____',
  },
  {
    type: 'completion',
    question: '观察下面的一列数$\\frac{1}{2}, -\\frac{1}{6}, \\frac{1}{12}, -20 ...$请你找出其中排列的规律，并按此规律填空，第9个数是____，第n个数________',
  },
  {
    type: 'calculation',
    question: '$-20 - (-14) - |-18| - 13$',
  },
  {
    type: 'calculation',
    question: '$-1 - (-2) - \\vert(-3\\frac{1}{2}) - 2| + (-2.5)$',
  },
  {
    type: 'calculation',
    question: '已知$|a|=2, |b|=5，ab < 0$，求 $a - b$ 的值',
  },
  {
    type: 'program',
    style: {
      blankHeight: 120,
    },
    question: `某大型超市上周日购进新鲜黄瓜1000斤，进价为每公斤1.5元，受暴发的『毒黄瓜』的影响，销售价格出现较大的波动，表中为一周内黄瓜销售价格的涨跌情况（涨为正，跌为负，其中星期一的销售价格与进价比较，单位：元）
<br>①　到星期二时，每公斤黄瓜的售价是多少元？
<br>②　本周最低售价是每公斤多少元？
<br>③  已知截止到星期五，已卖出黄瓜700公斤，销售总额为935元如果超市星期六能将剩下的黄瓜全部卖出，不考虑损耗等其他因素，请算算该超市本周销售黄瓜是盈还是亏，盈亏是多少？
`,
    addition: table([
      ['星期', '一', '二', '三', '四', '五', '六'],
      ['每公斤销售价涨跌<br>(与前一天比较)', '+0.3', '+0.4', '-0.5', '-0.6', '-0.7', '+0.1'],
    ], 500),
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    question: `已知数轴上的点A和点B之间的距离为32个单位长度，点A在原点的左边，距离原点5个单位长度，点B在原点的右边。
<br>①　点A所对应的数是____，点B所对应的数是____；
<br>②　若已知在数轴上的点E从点A处出发向左运动，速度为2个单位长度/秒，同时点F从点B处出发向左运动，速度为4个单位长度/秒，在点C处点F追上了点E，求点C所对应的数____。`,
  },
]);
