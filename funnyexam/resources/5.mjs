import { xaxis, table } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '七上数学周未课堂作业 3';

export const questions = normalize([
{
  type: 'completion',
  question: '计算 $4.4 + (-8.1) = $____，计算 $-1 \\div 9 \\times -\\frac{1}{9} = $____',
},
{
  type: 'calculation',
  style: {
    blankHeight: 80,
  },
  question: '已知$|a|=2, |b|=5, ab<0$，求$a - b$的值',
},
{
  type: 'program',
  style: {
    blankHeight: 80,
  },
  question: `\
某自行车厂一周计划生产$1400$辆自行车，平均每天生产$200$辆。由于各种原因，实际上每天的生产与计划量相比有出入。下表是某周的生产情况(超产为正，减产为负，单位：辆) 
<br>$(1)$ 根据记录可知，前三天共生产了____辆自行车；
<br>$(2)$ 产量最多的一天比产量最少的一天多生产____辆自行车；
<br>$(3)$ 该厂实行计件工资制，每生产一辆得$60$元，超额完成则每辆奖$15$元，少生产一辆则扣$15$元，那该厂工人这一周的工资总额是多少?
`,
  addition: table([
['星期', '一', '二', '三', '四', '五', '六', '日'],
['增减', '+5', '-2', '-4', '+13', '-10', '+16', '-9']
]),
},
{
  type: 'program',
  style: {
    blankHeight: 120,
  },
  question: `
已知数轴上两点$A$、$B$对应的数分别为$-2$、$3$。点$P$为数轴上一动点，其对应的数为$x$。
<br>$(1)$ 若点P到点$A$、点$B$的距离相等，则点$P$对应的数为____
<br>$(2)$ 数轴上是否存在点$P$，使点$P$到点$A$、点$B$的距离之和为$6$? 若存在，请<em>直接</em>写出x的值；若不存在，说明理由； 
<br>$(3)$ 点$A$、点$B$分别以$2$个单位长度/分、$1$个单位长度/分的速度向右运动，同时点$P$以$6$个单位长度/分的速度从$O$点向左运动，当遇到点$A$时，点$P$立即以同样的速度向右运动，并不停地往返于点$A$与点$B$之间，求当点$A$与点$B$重合时，点$P$所经过的总路程是多少?
`,
  addition: xaxis({
width: 240,
points: [
{label: 'A', value: -2},
{label: 'O', value: 0},
{label: 'P', value: 1.3},
{label: 'B', value: 3},
],
scale: {
  extent: [-2, 3]
},
}),
},
{
  type: 'program',
  style: {
    blankHeight: 120,
  },
  question: `\
如图，点$A$，$B$在数轴上分别表示有理数$a，b$。$A, B$两点之间的距离表示为$AB$。在数轴上$A, B$两点之间的距离$AB=|a-b|$。
<br>利用数形结合思想回答下列问题： 
<br>$(1)$ 数轴上表示$2$和$10$两点之间的距离是____，数轴上表示$2$和$-10$两点之间的距离是____；
<br>$(2)$ 数轴上表示$x$和$-2$的两点之间的距离表示为____________；
<br>$(3)$ 若$x$表示一个有理数，$|x - 1| + |x + 2|$ 有最小值吗? 若有，请<em>直接</em>写出最小值;若没有，写出理由； 
<br>$(4)$ 若$x$表示一个有理数，求 $|x-1|+|x-2|+|x-3|+⋯+|x-100|+|x-101|$ 的最小值。
`,
  addition: xaxis({
  width: 200,
  displayScale: false,
  displayZero: true,
  points: [
{label: 'a', value: -1},
{label: 'b', value: 2},
],
  scale: {
  extent: [-1, 2]
},
}),
},
]);
