import { normalize } from './utils/index.mjs';
import { xaxis } from './utils/graphic.mjs';

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
  {
    type: 'completion',
    remark: 'P20',
    question: '已知$|x|=3$，$|y|=4$，且$x>y$，则$xy$的值为____',
  },
  {
    type: 'calculation',
    style: {
      blankHeight: 60,
    },
    remark: 'P20',
    question: '$(-\\frac{2}{3})\\times(-\\frac{8}{5})\\times\\frac{3}{4}\\times(-\\frac{5}{12})$',
  },
  {
    type: 'calculation',
    style: {
      blankHeight: 60,
    },
    remark: 'P21',
    question: '$(\\frac{1}{4}+\\frac{1}{6}-\\frac{1}{12})\\times(-12)$',
  },
  {
    type: 'calculation',
    style: {
      blankHeight: 80,
    },
    remark: 'P21',
    question: '$-13 \\times 125 - 13 \\times 216 - (-13) \\times (301)$',
  },
  {
    type: 'calculation',
    style: {
      blankHeight: 80,
    },
    remark: 'P21',
    question: '$(\\frac{1}{2} - 3 + \\frac{5}{6} - \\frac{7}{12})\\times(-36)$',
  },
  {
    type: 'completion',
    remark: 'P22',
    question: '已知$|x|=4$，$|y|=\\frac{1}{2}$，且$xy < 0$，则$\\frac{x}{y}$的值等于____',
  },
  {
    type: 'completion',
    remark: 'P23',
    question: '$1 \\div (-1\\frac{3}{4}) = $ ____ $ = $ ____',
  },
  {
    type: 'completion',
    remark: 'P23',
    question: '$(-6) \\div (-1\\frac{1}{6}) = (-6) \\times $ ____ $ = $ ____',
  },
  {
    type: 'choice',
    remark: 'P23',
    question: '有理数a，b，c在数轴上的对应点的位置如图1.4-3所示，若$|a|>|b|$， 则下列结论中一定成立的是 ( )',
    addition: xaxis({
      displayScale: false,
      points: [
        { label: 'a', value: 0 },
        { label: 'c', value: 1 },
        { label: 'b', value: 6 },
     ],
     scale: {
       extent: [0, 6],
     },
    }),
    options: [
      '$A. b+c>0$',
      '$B. a+c < -2$',
      '$C. \\frac { b } { a } < 1$',
      '$D. abc \\geqslant 0$',
    ],
  },
  {
    type: 'calculation',
    remark: 'P24',
    question: '$|-5\\frac{1}{2}| \\times (\\frac{1}{3} - \\frac{1}{2}) \\times \\frac{3}{11} \\div (1 - \\frac{1}{4})$'
  },
  {
    type: 'program',
    remark: 'P24',
    question: `
      已知$|ab|<0$，$\\frac{a}{b} > 0$，且$|c| > |b| > |a|$，如图，数轴上对应的点是$A$，$B$，$C$。
      <br>$(1)$ 若$|a| = -a$，请在数轴上标出$A$，$B$，$C$的大致位置；
      <br>$(2)$ 在$(1)$的条件下，化简$|a - b| - |b + c| + |c + a|$
    `,
    addition: xaxis({
      displayScale: false,
      displayZero: true,
      style: {
        marginTop: 20,
      },
      scale: {
        extent: [-3, 3]
      }
    }),
  },
{
  type: 'choice',
  remark: 'P25',
  question: '计算 $-4^2$ 的结果是 ( )',
  options: [
    'A. -8',
    'B. 8',
    'C. -16',
    'D. 16',
  ], 
},
{
  type: 'completion',
  remark: 'P25',
  question: '$-3^2 = $____',
},
{
  type: 'completion',
  remark: 'P25',
  question: '$-(-2)^5 = $____',
},
{
  type: 'choice',
  remark: 'P25',
  question: '在$-(-0.3), -\\frac{1}{3} + \\frac{1}{3}, |-1|, (-2)^2, -2^2$ 这5个算式中，运算结果为非负有理数的个数为 ( )',
  options: [
  'A. $5$',
  'B. $4$',
  'C. $3$',
  'D. $2$',
],
},
{
  type: 'calculation',
  remark: 'P25',
  question: '$(-10)^3$',
},
]);

