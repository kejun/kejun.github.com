import { xaxis, img } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '初一自主探究作业（上）';

export const questions = normalize([
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
如图，已知数轴上的点$A$表示的数为6，点B表示的数为-4，点$C$到点$A$、点B的距离相等，动点$P$从点$B$出发，以每秒2个单位长度的速度沿数轴向右匀速运动，设运动时间为$t$（$t > 0$秒）
<br>⑴ 点$C$表示的数是____
<br>⑵ 求当$t$等于多少秒时，点P到达点$A$处?
<br>⑶ 点$P$表示的数是________(用含字母$t$的式子表示)
<br>⑷ 求当$t$等于多少秒时，$P、C$之间的距离为2个单位长度。\
    `,
    addition: xaxis({
      width: 500,
      points: [
        { label: 'B', value: -4 },
        { label: 'A', value: 6 },
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
<br>⑴  操作一：折叠纸面，使表示1的点与表示$-1$的点重合，则表示-3的点与表示____的点重合;
<br>⑵  操作二：折叠纸面，使表示$-1$的点与表示3的点重合，回答以下问题:
<br>&nbsp;①  表示数$5$的点与表示数____的点重合；
<br>&nbsp;②  若数轴上$A、B$两点之间距离为11($A$在$B$的左侧)，且$A, B$两点经折叠后重合，求$A、B$两点表示的数是多少吗?
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
    question: '若数$a$与$b$互为相反数，在数轴上表示数$a$, $b$的两个点$A$、$B$之间的距离是2004个单位长度，求$a$、$b$两数。',
  },
  {
    type: 'program',
    remark: 'P8',
    style: {
      blankHeight: 80,
    },
    question: '若a为有理数，在$—a$与$a$之间(不包含$-a$与$a$)有1997个整数，则$a$的取值范围是________',
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
    question: '$-|-a|$是 ( )',
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
    question: '若$|x - 2|=1$，则$x=$ ( )',
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
    question: '若$|x|=|y|$，则$x，y$的关系是________',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '如果$|x|=2$，那么$x=$____，如果$|-x|=2$，那么$x =$____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当$|a|=a$时，则$a$____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当$|a - 2| + |b + 3| = 0$，则$a=$____，$b=$____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当$|x|=2$，$|y|=5$，且$x > y$，则$x=$____，$y=$____',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '满足$3.5 < |x| <= 9$的$x$的整数值是________',
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '数$a$在数轴上的位置如图所示，则$|a - 2|=$____',
    addition: xaxis({
      width: 200,
      points: [{ label: 'a', value: 2.3 }],
      scale: {
        extent: [-1, 2],
      },
    }),
  },
  {
    type: 'completion',
    remark: 'P11',
    question: '当$a=$____时，$30 - |a + 2|$的值最大，最大值是____',
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
    question: `小虫从点$O$出发在一条直线上来回爬行，向右爬行的路程记为正，向左爬行的路程记为负，爬行的各段路程依次为：$+5，-3，+10，-8，-6，+12，-10$（单位:cm）
<br>⑴  小虫最后是否回到出发点$O$？为什么？
<br>⑵  小虫离开$O$点最远时是多少？
<br>⑶  在爬行过程中，如果每爬行1cm奖励1粒芝麻，则小虫一共可以得到多少粒芝麻？
`,
  },
  {
    type: 'program',
    style: {
      blankHeight: 120,
    },
    remark: 'P16',
    question: `出租车司机小王某天下午营运会是在南北走向的公路上进行的。如果向南记作 "+" ，向北记作 "-"，他这天下午行车情况如下（单位：千米，每次行车都有乘客）：$-2，+5，-1，+10，-3， -2，-4，+6$请回答：
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
    question: '$|-3\\frac{1}{2} + (-1\\frac{5}{8})| - |-2\\frac{3}{4} + \\frac{7}{8}|$',
  },
  {
    type: 'calculation',
    remark: 'P18',
    question: '$(-100) + 70 + (-23) + 50 + (-6)$',
  },
  {
    type: 'calculation',
    remark: 'P19',
    style: {
      blankHeight: 80,
    },
    question: '$89 + 899 + 8999 + 89999 - 9 - 99 - 999 - 9999 - 99999$',
  },
{
  type: 'calculation',
  remark: 'P21',
  question: '$9 \\times (-6) + 17$',
},
{
  type: 'choice',
  remark: 'P21',
  question: ' 已知$(-ab) \\cdot (-ab) \\cdot (-ab) > 0$，则( )',
  options: [
  'A. $ab<0$',
  'B. $ab>0$',
  'C. $a>0, b<0$',
  'D. $a<0, b<0$',
],
},
{
  type: 'completion',
  remark: 'P21',
  question: `\
对于任意四个有理数$a, b, c, d$，可以组成两个有理数对$(a, b)$ 与$(c, d)$。我们规定: $(a, b)\\bigstar(c, d)=bc - ad$
<br>例如：$(1,2)\\bigstar(3,4) = 2 \\times 3 - 1 \\times 4 = 2$；
<br> 那么，有理数对$(2,-3)\\bigstar(3,-2)=$____________
`,
},
{
  type: 'calculation',
  remark: 'P22',
  question: '$-\\frac{3}{4}\\times(8-1\\frac{1}{3}-0.04)$',
},
{
  type: 'calculation',
  remark: 'P22',
  question: '$(2\\frac{1}{3}-\\frac{238}{54}+\\frac{91}{117})\\times(-1\\frac{2}{7})$',
},
{
  type: 'calculation',
  remark: 'P22',
  question: '$9\\frac{18}{19}\\times19$',
},
{
  type: 'choice',
  remark: 'P28',
  question: '下列数或式：$(-2)^3, (-\\frac{1}{3})^6, -5^2, 0, m^2 + 1$在数轴上所对应的点一定在原点右边的个数是 ( )',
  options: [
  'A. $1$',
  'B. $2$',
  'C. $3$',
  'D. $4$',
],
},
{
  type: 'choice',
  remark: 'P28',
  question: '一个数的立方是它本身，那么这个数是 ( )',
  options: [
  'A. $0$',
  'B. $0$或$1$',
  'C. $-1$或$1$',
  'D. $0$或$-1$或$1$',
],
},
{
  type: 'completion',
  remark: 'P28',
  question: `\
 计算: $(-\\frac{3}{4})^3=$____；
 $-(\\frac{3}{4})^3=$____；
 $-\\frac{3^3}{4}=$____；
 <br>$(-\\frac{3}{4})^2=$____；
 $-(\\frac{3}{4})^2=$____；
 $-\\frac{3^2}{4}=$____；
`,
},
{
  type: 'completion',
  remark: 'P28',
  question: '平方等于它本身的数是____，立方等于它本身的数是____',
},
{
  type: 'completion',
  remark: 'P28',
  question: '$(-2 \\cdot 7)^3, (-2 \\cdot 7)^4, (-2 \\cdot 7)^5$的大小关系用"$<$"号连接可表示为____________',
},
{
  type: 'completion',
  remark: 'P28',
  question: '若$x^2=\\frac{4}{9}$，则$x=$____，若$x^3=-27$，则$x=$____',
},
{
  type: 'calculation',
  remark: 'P28',
  question: '$-(1-0.5)\\div\\frac{1}{3}\\times[2+(-4)^2]$',
},
{
  type: 'calculation',
  remark: 'P29',
  question: '$(-2)^3\\times0.25-4\\div[(-\\frac{1}{2})^2-\\frac{3}{8}]-40$',
},
{
  type: 'calculation',
  remark: 'P29',
  question: '$(0.25)^{2009}\\times4^{2010}$',
},
{
  type: 'completion',
  remark: 'P29',
  question: '如图用苹果垒成的一个『苹果图』，根据题意，第10行有____个苹果，第$n$行有____个苹果。',
  addition: img('p29.6.png', 180),
},
{
  type: 'completion',
  remark: 'P30',
  question: '如果一个数的平方是它的相反数，那么这个数是____；<br>如果一个数的平方是它的倒数，那么这个数是____',
},
{
  type: 'completion',
  remark: 'P30',
  question: '如果$|a^4|=-|a^4|$，那么$a$是____',
},
{
  type: 'calculation',
  remark: 'P30',
  question: '$-1^2-\\big[1\\frac{3}{7}+(-12)\\div6\\big]^2\\times\\big(-\\frac{3}{4}\\big)^3$',
},
{
  type: 'calculation',
  remark: 'P30',
  question: '$\\big(-\\frac{1}{4}\\big)^2\\div\\big(-\\frac{1}{2}\\big)^4\\times(-1)^4-\\big(1\\frac{3}{8}+1\\frac{1}{3}-2\\frac{3}{4}\\big)\\times24$',
},
{
  type: 'program',
  remark: 'P31',
  style: {
  blankHeight: 120,
},
  question: `\
观察下列解题过程
<br>计算：$1+5+5^2+5+^3+...+5^{24}+5^{25}$
<br>解：设$S = 1+5+5^2+5+^3+...+5^{24}+5^{25}$
<br>则$5S = 5+5^2+5+^3+...+5^{24}+5^{25}+5^{26}$
<br>$\\text{\\textcircled 2} - \\text{\\textcircled 1}$的：$4S = 5^{26}-1,\\therefore S=\\frac{5^{26}-1}{4}$
<br>你能用你学到的方法计算下面的题吗？
<br>$1 + 3 + 3^2 + 3^3 + ... + 3^9 + 3^{10}$
`,
},
{
  type: 'choice',
  remark: 'P31',
  question:`\
定义一种对正整数$n$的"$C$运算符":$\\text{\\textcircled 1}$当$n$为奇数时，结果为$3n+1$；$\\text{\\textcircled 2}$当$n$ 为偶数时，结果为$\\frac{n}{2^k}$（其中$k$ 是使$\\frac{n}{2^k}$ 为奇数的正整数），并且运算重复进行。例如，$n=66$时，其"$C$运算"如下图。若$n=26$，则第2019次"$C$运算"的结是是 ()`,
  options: [
  'A. $40$',
  'B. $5$',
  'C. $4$',
  'D. $1$',
],
  addition: img('p31.8.png', 360),
},
{
  type: 'calculation',
  remark: 'P31',
  question: `\
 已知$|ab - 2| + (b - 1)^2 = 0$；
<br> 试求$\\frac{1}{ab}+\\frac{1}{(a+1)(b+1)}+\\frac{1}{(a+2)(b+2)}+\\frac{1}{(a+3)(b+3)}$
`
},
{
  type: 'program',
  style: {
  blankHeight: 200,
},
  remark: 'P32',
  question: `\
本学期我们学习了“有理数乘方”运算，知道乘方的结果叫做“幂”，下面介绍一种有关“幂”的新运算。
<br>定义：$a^{m}$与$a^{n}$ ($a\\ne0$， $m$、$n$都是正整数) 叫做同底数幂，同底数幂除法记作$a^{m}\\div a^{n}$。
<br>运算法则如下： 
<p class="p1">当$m>n$时，$ a ^ { m } \\div { a ^ { n } } = a ^ { m - n }; $</p>
<p class="p1">当$m=n$时，$ a ^ { m } \\div { a ^ { n } } = 1; $</p>
<p class="p1">当$m<n$时，$ a ^ { m } \\div { a ^ { n } } = \\frac { 1 } { a ^ { n - m} }$</p>

根据“同底数幂除法”的运算法则，回答下列问题： 
<br>$(1)$ 填空：$(\\frac{1}{2})^{5} \\div (\\frac{1}{2})^{2} = $____， $4 ^ { 3 } \\div { 4 ^ { 5 } }$ = ____；
<br>$(2)$ 如果 $3 ^ { x - 1 } \\div 3 ^ { 3 x - 4 } = \\frac { 1 } { 2 7 } $ ，求出$x$的值；
<br>$(3)$ 如果$\\left( x - 1 \\right) ^ { 2 x + 2 } \\div { \\left( x - 1 \\right) ^ { x + 6 } } = 1 $， 请直接写出$x$的值. 
`,
},
  {
    type: 'completion',
    remark: 'P40',
    question: '在$7x^2-4x+1-x^2+6x$中，$7x^2$与____同类项，$6x$与____是同类项,$-2$与____是同类项.',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$2x^2y-2xy-4xy^2+xy+4x^2-3xy^2$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$a^3+a^2b-ab^2+a^2b-ab^2+b^3$',
  },
  {
    type: 'calculation',
    remark: 'P40',
    question: '$-9+6ab-6a^2+7-\\frac{4}{3}ab+\\frac{8}{3}a^2$',
  },
  {
    type: 'calculation',
    remark: 'P41',
    question: '$3a^2-5a+2-6a^2+6a-3$，其中$a=-\\frac{1}{2}$',
  },
  {
    type: 'calculation',
    remark: 'P41',
    question: '当$x=-4$，$y=2$时，求代数式$-3x^2y+3xy^2+x^3+3x^2y-3xy^2-y^3$的值',
  },
  {
    type: 'calculation',
    remark: 'P41',
    question: ' 若$|4a+3b|+(3b+2)^2=0$，求$2(2a+3b)^2-3(2a+3b)+8(2a+3b)^2-7(2a+3b)$的值',
  },
  {
    type: 'calculation',
    remark: 'P42',
    question: '$4(a^2b-2ab^2)-(a^2b+2ab^2)$',
  },
  {
    type: 'calculation',
    remark: 'P42',
    question: '$\\frac{1-2x}{3}-\\frac{3-x}{4}$',
  },
  {
    type: 'calculation',
    remark: 'P42',
    question: '化简求值，$2(x^2y+xy)-3(x^2y-xy)-4x^2y$，其中$x=1$，$y=-1$',
  },
  {
    type: 'calculation',
    remark: 'P42',
    question: '化简求值，$2(x^2y+xy)-3(x^2y-xy)-4x^2y$，其中$x=1$，$y=-1$',
  },
  {
    type: 'calculation',
    remark: 'P42',
    question: '化简求值，$10 - \\left( 1 - a \\right) - \\left( 1 - a - a ^ { 2 } \\right) + \\left( 1 + a - a ^ { 2 } - a ^ { 3 } \\right)$ ， 其中 $a = \\frac { 1 } { 2 } $',
  },
  {
    type: 'completion',
    remark: 'P42',
    question: '$3x-[5x-(2x-1)]=$____',
  },
  {
    type: 'completion',
    remark: 'P42',
    question: '$(x + y)^2 - 10x - 10y + 25=\\left( x + y \\right)^{ 2 } - 10( $________$)+25$.',
  },
  {
    type: 'completion',
    remark: 'P42',
    question: '$(a-b+c-d)(a+b-c-d)=[(a-d)+($________$)][(a-d)-($________$)]$.',
  },
  {
    type: 'calculation',
    remark: 'P43',
    question: '已知 $\\left( a + 2 \\right) ^ { 2 } + \\left( 3b - 3 \\right) ^ { 2 } = 0$ ， 求$ 3 a ^ { 2 } b - \\left[ 2 ab ^ { 2 } - 6 \\left( ab - \\frac { 1 } { 2 } a ^ { 2 } b \\right) + 4ab \\right] - 2ab$的值',
  },
  {
    type: 'completion',
    remark: 'P43',
    question: '如图，$a、b、c$在数轴上的位置如图所示，则$|a+b|-|a+c|-|c-b|=$________',
    addition: xaxis({
      width: 300,
      displayScale: false,
      points: [
        { label: 'a', value: -2 },
        { label: 'b', value: -1 },
        { label: 'o', value: 1 },
        { label: 'c', value: 2 },
      ],
      scale: {
        extent: [-2, 2],
      },
    }),
  },
]);
