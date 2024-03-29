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
    addition: img('p35.12.0.png', 260),
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
    addition: img('p36.11.0.png', 160),
  },
  {
    type: 'program',
    remark: 'P37',
    question: '有一组单项式：$-a ， 2a^{ 2 } ， -3a^{ 3 } ， 4a^{ 4 } ， \\cdots ， -19a ^ { 1 9 } ， 20a ^ { 20 }， \\cdots $ .<br> (1)请你说出它们的规律； <br>(2)写出第$100$个和第$2019$个单项式；<br> (3)写出第$2n$ 个和第$(2n+1)$个单项式.',
  },
  {
    type: 'completion',
    remark: 'P37',
    question: '如果多项式$-\\frac { 2 } { 3 } x ^ { a - 2 } y ^ { 2 } + x ^ { 2 } y ^ { 2 } $是六次二项式，则$ a ^ { 2 } + 1 =$________',
  },
  {
    type: 'completion',
    remark: 'P37',
    question: ' 若$3x-2y-7=0$，则$4y-6x+12=$____',
  },
  {
    type: 'program',
    remark: 'P38',
    question: '历史上数学家欧拉最先把关于$x$的多项式用记号$f(x)$来表示，把$x$等于某数$a$时的多项式的值用$f(a)$来表示。已知，对于多项式$f(x)=mx^3+nx+5$，当$x=2$时，多项式的值为$f(2)=8m+2n+5$， 若$f(2)=6$，请求出$ f(-2)$ 的值.',
  },
  {
    type: 'program',
    remark: 'P38',
    question: '判断一个正整数能被$3$整除的方法是：把这个正整数各个数位上的数字相加，如果所得的和能够被$ 3 $整除，则这个正整数就能被$3$整除。请证明对于任意两位正整数，这个判断方法都是正确的. ',
  },
  {
    type: 'completion',
    remark: 'P39',
    question: ' 如图，在长方形网格中，四边形$ABCD$的面积为________.（用含字母$a, b$ 的代数式表示）',
    addition: img('p39.9.png', 360),
  },
  {
    type: 'calculation',
    remark: 'P39',
    question: '$6x-10x^2+12x^2-5x$',
  },
  {
    type: 'calculation',
    remark: 'P39',
    question: '$x^2y-3xy^2+2yx^2-y^2x$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$-6ab-5+ba+4ab-4$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$\\frac{1}{2}x^2y-\\frac{1}{2}xy^2-\\frac{1}{3}xy^2$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$a^2-\\frac{1}{2}ac+2a^2+ac-\\frac{3}{5}a^2$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$3x^2+4x-2x^2-x+x^2-3x-1$，其中$x=-\\frac{1}{2}$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$3a-abc-\\frac{1}{3}c^3-3a+\\frac{1}{3}c^3$，其中$a=\\frac{1}{6},b=2,c=-3$',
  },
  {
    type: 'completion',
    remark: 'P41',
    question: '如图2.2一3，下列图形都是由面积为$1$的正方形按一定的规律组成的，其中，第①个图形中面积为$1$的正方形有$2$个，第②个图形中面积为$1$的正方形有$5$个，第③个图形中面积为$1$的正方形有$9$个……按此规律，第$\\textcircled n$个图形中面积为$1$的正方形的个数为____',
    addition: img('p41.7.png', 400),
  },
  {
    type: 'choice',
    remark: 'P47',
    question: `已知有下列方程： 
    <br>$\\textcircled 1 x - 2 = \\frac { 2 } { x }; \\textcircled 2 0.3 x = 1; \\textcircled 3 \\frac { x } { 2 } = 5 x - 1 \\textcircled 4  x ^ { 2 } - 4 x = 3; \\textcircled 5  x = 6; \\textcircled 6 x + 2 y = 0$.
     <br>其中一元一次方程的个数是 ( )
      `,
    options: [
      'A. $2$',
      'B. $3$',
      'C. $4$',
      'D. $5$',
    ],
  },
  {
    type: 'program',
    remark: 'P47',
    question: `
      设某数为$x$，根据题意列方程，不必求解：
    <br>(1) 比某数的$3$倍大$6$的数恰好等于这个数的一半；
    <br>(2) 比某数的相反数大$1$的数是$5$；
    <br>(3) 与某数的差比这个数小$11$.
    `,
  },
  {
    type: 'completion',
    remark: 'P48',
    question: '方程$-2x=4$的解是________',
  },
  {
    type: 'choice',
    remark: 'P53',
    question: ' 把方程$\\frac {1} {2} x = 1$变形为$x = 2$，其依据是 ( )',
    options: [
      'A. 分数的基本性质',
      'B. 等式的性质1',
      'C. 等式的性质2',
      'D. 解方程中的移项',
    ],
  },
  {
    type: 'program',
    remark: 'P59',
    question: `
    已知数轴上三点$M, N, O$，$N$对应的数分别为$-2，0，4$，点$P$为数轴上任意一点，其对应的数为$x$.
    <br>(1) 如果点$P$到点$M$、点$N$的距离相等，那么$x$的值是____.
    <br>(2) 数轴上是否存在点$P$，使点$P$到点$M$、点$N$的距离之和是$7$?如果存在，求出$x$的值； 如果不存在，请说明理由.
    <br>(3) 如果点$P$以每秒$6$个单位长度的速度从点$O$向右运动，点$M$ 和点$N$ 分别以每秒$1 $个单位长度和每秒$3$个单位长度的速度也向右运动，且三点同时出发，那么经过几秒，点$P$到点$M$、点$N$的距离相等?
    `
  },
  {
    type: 'equation',
    remark: 'P59',
    question: '$\\frac {y + 2} {2} - \\frac {2y - 1} {3} = 1$',
  },
  {
    type: 'equation',
    remark: 'P60',
    question: '$\\frac {2x+1} {3} = 1 - \\frac {x-1} {2}$',
  },
  {
    type: 'choice',
    remark: 'P60',
    question: ' 将$\\frac {x} {0.2} - \\frac {0.5+0.01x} {0.03} = 1$ 的分母化为整数，得 ( )',
    options: [
      'A. $\\frac {x} {2} - \\frac {0.5 + 0.01x} {3} = 1$',
      'B. $5x - \\frac {50 + x} {3} = 100$',
      'C. $\\frac {x} {20} - \\frac {0.5 + 0.01x} {3} = 100$',
      'D. $5x - \\frac {50 + x} {3} = 1$',
    ],
  },
  {
    type: 'completion',
    remark: 'P60',
    question: ' 已知方程$\\frac {x-2} {5} = 2 - \\frac {x+3} {2}$的解也是方程$| 3x - 2|=b$ 的解，则$b=$____.',
  },
  {
    type: 'program',
    remark: 'P60',
    question: `
     关于$x$的一元一次方程$\\frac {3x-1} {2} + m = 5$，其中$ m $是正整数。
    <br>(1) 当$ m=3$时，求方程的解；
    <br>(2) 若方程有正整数解，求$m $的值.
    `,
  },
  {
    type: 'equation',
    remark: 'P61',
    question: '$2 - \\frac {2x + 1} {3} = \\frac {x+1} {2}$',
  },
  {
    type: 'completion',
    remark: 'P61',
    question: ' 关于$y$ 的方程$\\frac {ky - 1} {2} - \\frac {y - 2} {3} = 1$ 的解是整数，则整数$k$ 的值为____',
  },
]);

