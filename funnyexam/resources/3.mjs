import { normalize } from './utils/index.mjs';

export const title = '七年级数学目标检测（上）';

export const questions = normalize([
  {
    type: 'completion',
    remark: 'P8',
    question: '若$-|a|=-3.2$，则a的值为____',
  },
  {
    type: 'choice',
    remark: 'P9',
    question: '已知$a < 0, b > 0$, 且$|a| > |b|$，则$a，b，-a，-b$的大小关系是 ( )',
    options: [
      'A. $-b < a < -a < b$',
      'B. $b < -a < a < -b$',
      'C. $b < -a < -b < a$',
      'D. $a < -b < b < -a$',
    ],
  },
  {
    type: 'completion',
    remark: 'P9',
    question: '若$a$为有理数，且$a$满足$|a| + a = 0$，则$a$的取值范围是________',
  },
  {
    type: 'completion',
    remark: 'P9',
    question: '____ $+ (-\\frac{3}{2}) = 0$',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P11',
    question: '若$|m|=2，|n|=9$，且$m > n$，求 $m + n$ 的值.',
  },
  {
    type: 'calculation',
    remark: 'P12',
    question: '$(-46) + (+27) + (-24) + (+13)$',
  },
  {
    type: 'completion',
    remark: 'P13',
    question: '$\\frac{2}{3} - (-\\frac{5}{6}) = $____',
  },
  {
    type: 'completion',
    remark: 'P13',
    question: '$(-5) - (+\\frac{1}{2}) = $____',
  },
  {
    type: 'calculation',
    remark: 'P14',
    question: '$-4\\frac{1}{3} + 2\\frac{1}{2} - (-1\\frac{1}{3})$',
  },
  {
    type: 'calculation',
    remark: 'P19',
    question: '$1\\frac{1}{7} \\times (-0.125)$',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P14',
    question: '$|a - b|$与$a - b$的大小.',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P14',
    question: '某检修小组乘汽车检修供电线路，约定前进为正，后退为负。某天自A地出发到收工时，所走路程（单位: km）为$+22， -3， +4， -2， -8， +17， -2， -3$，收工时检修小组距A地多远?',
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    remark: 'P14',
    question: `若规定用$[x]$表示不超过x的最大整数，如$[5.34] = 5，[-1.24] = -2$。
    <br>计算:
    <br>⑴ $[4.6] - [-3]$
    <br>⑵ $[-6.25] - [-\\frac{1}{2}]$
    `,
  },
  {
    type: 'completion',
    remark: 'P19',
    question: '我们用有理数的运算研究下面的问题。规定：水位上升为正，水位下降为负。如果水位每天下降4cm，那么5天后的水位变化用算式表示为________',
  },
]);
