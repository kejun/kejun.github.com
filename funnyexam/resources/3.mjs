import { normalize } from './utils/index.mjs';
import { xaxis, img } from './utils/graphic.mjs';

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
    question: '$(\\frac{1}{4}+\\frac{1}{6}-\\frac{1}{2})\\times(-12)$',
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
    question: '$(-6) \\div (-\\frac{1}{6}) = (-6) \\times $ ____ $ = $ ____',
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
      已知$ab<0$，$\\frac{a}{c} > 0$，且$|c| > |b| > |a|$，如图，数轴上对应的点是$A$，$B$，$C$。
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
  {
    type: 'choice',
    remark: 'P26',
    question: '设$a，b，c$为非零有理数，$a>b>c$，则下列大小关系一定成立的是 ( )',
    options: [
      'A. $a-b>b-c$',
      'B. $\\frac { 1 } { a } < \\frac { 1 } { b } < \\frac { 1 } { c }$',
      'C. $a ^ { 2 } > b ^ { 2 } > c ^ { 2 }$',
      'D. $a-c>b-c$',
    ],
  },
  {
    type: 'completion',
    remark: 'P26',
    question: '若 $a ^ { 2 } = \\left( - 3 \\right) ^ { 2 }$ ， 则$a$的值为____',
  },
  {
    type: 'completion',
    remark: 'P26',
    question: '若 $a ^ { 2 } = \\left( - 3 \\right) ^ { 2 }$ ， 则$a$的值为____',
  },
  {
    type: 'calculation',
    remark: 'P26',
    question: '$- 2 ^ { 2 } \\div \\left( 3 - \\frac { 1 } { 2 } \\right) - \\left( 2 - 4 \\right)$',
  }, { type: 'calculation',
    remark: 'P26',
    question: '$-1 ^ { 2 } \\times 2 + \\left( - 2 \\right) ^ { 2 } \\div 4 - \\left( - 3 \\right)$',
  },
  {
    type: 'calculation',
    remark: 'P27',
    question: '$-3 ^ { 3 } \\div \\frac { 9 } { 4 } \\times { \\left( - \\frac { 2 } { 3 } \\right) ^ { 2 } }$',
  },
  {
    type: 'calculation',
    remark: 'P27',
    question: '$2 \\times  \\left( - 3 \\right) ^ { 2 } - 26 \\div \\left( - \\frac { 1 } { 2 } \\right) $',
  },
  {
    type: 'calculation',
    remark: 'P27',
    question: '$-2 ^ { 2 } \\div \\left( \\frac { 1 } { 3 } - 1 \\frac { 1 } { 2 } - 3 \\right) \\times 6$',
  },
  {
    type: 'choice',
    remark: 'P27',
    question: '$a，b$是两个有理数，下列判断正确的是 ( )',
    options: [
      'A. 如果$a>b$，那么$a ^ { 2 } > b ^ { 2 }$',
      'B. 如果$|a|>|b|$， 那么$a=b$',
      'C. 如果$a>|b|$， 那么$a>b$',
      'D. 如果$a \\neq b$， 那么$a ^ { 2 } \\neq b ^ { 2 }$',
    ],
  },
  {
    type: 'calculation',
    remark: 'P28',
    question: '$-1^4+(-2)\\div(-\\frac{1}{3})-|-9|$',
  },
  {
    type: 'program',
    remark: 'P35',
    question: '如图2.1一1，将连续的自然数$1$至$36$按右图的方式排成一个正方形阵列，用一个小正方形任意圈出其中的$9$个数，设圈出的$9$个数的中心的数为$a$，则这$9$个数的和为____ (用含有$a$的式子表示).<br>$\\textcircled 1$ 你能用具体的例子解释一下你是如何发现这个规律的吗?<br>$\\textcircled 2$ 你有没有想过，如果把条件改为“将连续的自然数$1$至$49$按图2.1-1的方式排成一 个正方形阵列”，结果会有变化吗?如果有变化，请尝试说说理由.',
    addition: img('p35.12.png', 260),
  },
  {
    type: 'completion',
    remark: 'P36',
    question: '写出一个含有字母$x，y$的二次三项式，其中最高次项的系数为$-2$，一次项不含字母$y$，则 这个多项式可以是________.',
  },
  {
    type: 'completion',
    remark: 'P36',
    question: '已知$\\left( a - 2 \\right) x ^ { 2 } y ^ { | a | }$ 是关于$x，y$的四次单项式，则$a$的值为____',
  },
  {
    type: 'completion',
    remark: 'P36',
    question: ` 
    如图 2 .1一4，在$ △ABC$ 中， $\\angle B = 9 0 ^ { \\circ }$ ， $AB = 22cm$ ， $BC = 20cm$ ， 点$P$从$A$点出发沿$AB$边向点B以$2cm/s$ 的速度移动，点$Q$从点$B$出发沿$BC$边向点$C$以$1cm/s$的速度移动，$P$，$Q$分别从$A$，$B$同时出发.<br> (1)当$P，Q$运动$2s$时，线段$BP=$____$cm$， 线段$BQ=$____$cm$，$ △PBQ$ 的面积$S=$____$cm ^ { 2 }$;<br> (2)当$P，Q$运动$x s(x<1)$ 时，线段$BP=$____$cm$，线段$BQ=$____cm，$△PBQ$ 的面积$S=$____$cm ^ { 2 }$. 
    `,
    addition: img('p36.11.png', 160),
  },
]);

