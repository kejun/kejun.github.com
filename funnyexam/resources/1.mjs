import { xaxis, table } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '七年级数学课堂作业 2';

export const questions = normalize([
  {
    type: 'choice',
    question: '下列说法不正确的是 ( )',
    options: [
      'A. $-3.14$既是负数，分数，也是有理数',
      'B. $0$既不是正数，也不是负数，但是整数',
      'C. $-2000$即是负数，也是整数，但不是有理数',
      'D. $0$是非正数',
    ],
  },
  {
    type: 'choice',
    question: '下列说法正确的是 ( )',
    options: [
      'A. 绝对值较大的数较大',
      'B. 绝对值较大的数较小',
      'C. 绝对值相等的两数相等',
      'D. 相等两数的绝对值相等',
    ],
  },
  {
    type: 'choice',
    question: '不大于$4$的所有正整数有 ( )',
    options: [
      'A. $5$个',
      'B. $4$个',
      'C. $3$个',
      'D. 无数个',
    ],
  },
  {
    type: 'choice',
    question: '若$|a|+a=0$，则$a$是 ( )',
    options: [
      'A. 正数',
      'B. 负数',
      'C. 正数或０',
      'D. 负数或０',
    ],
  },
  {
    type: 'choice',
    question: '有理数$a、b$数轴上的对应点的位置如图所示，则下列正确的是 ( )',
    addition: xaxis({
      width: 260,
      points: [{ label: 'a', value: -1.6 }, { label: 'b', value: 0.4 }],
      scale: { extent: [-2, 3] },
    }),
    options: [
      'A. $a + b = 0$',
      'B. $a + b > 0$',
      'C. $|a| > |b|$',
      'D. $a - b > 0$',
    ],
  },
  {
    type: 'choice',
    question: '在运用有理数加法法则求两个有理数的和时，下列的一些思考步骤中最先进行的是 ( )',
    options: [
      'A. 求两个有理数的绝对值，并比较大小',
      'B. 确定和的符号',
      'C. 观察两个有理数的符号，并作出一些判断',
      'D. 用较大的绝对值减去较小的绝对值',
    ],
  },
  {
    type: 'choice',
    question: '数$a$是在数轴上表示$-3$的点右边的数，则$-3-a$的值 ( )',
    options: [
      'A. 大于0',
      'B. 小于0',
      'C. 等于0',
      'D. 不确定正、负',
    ],
  },
  {
    type: 'choice',
    question: '数轴上的点A、B、C分别对应数0、-1、x，C与A的距离大于C与B的距离，则 ( )',
    options: [
      'A. $x > 0$',
      'B. $x \\geqslant -1$',
      'C. $x \\leqslant -1$',
      'D. $x < -0.5$',
    ],
  },
  {
    type: 'completion',
    question: '$|\\pi - 3|=$________',
  },
  {
    type: 'completion',
    question: '$|x|=$____($x < 0$)',
  },
  {
    type: 'completion',
    question: '数轴上的A点与表示-3的点距离4个单位长度，则A点表示的数为____',
  },
  {
    type: 'completion',
    question: '比较大小：$0$____$-0.01$，$-\\frac{2}{3}$____$-\\frac{3}{4}$ (用"<"、">"或"="填空)',
  },
  {
    type: 'completion',
    question: '冰箱开始启动时内部温度为10℃，如果每小时冰箱内部温度降低5℃，那么3小时后冰箱内部的温度是____',
  },
  {
    type: 'completion',
    question: '已知$|a-1|+|b+2|=0$，则$-ab=$____',
  },
  {
    type: 'completion',
    question: '当$x=$____时，式子$2-|2x-1|$取最大值，最大值为____',
  },
  {
    type: 'completion',
    question: `下列各数填到适当的集合中: 5，$-\\frac{2}{3}$，0，1.48，-10，$\\pi$，-0.32<br>
      正数集合{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......}；
      负数集合{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......}；<br>
      整数集合{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......}；
      分数集合{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......}。
      `,
  },
  {
    type: 'completion',
    question: '细心观察前三个图形，按下述方法找出规律。请你用你发现的规律写出第四个正方形中的数为____',
    addition: '<svg width="600" viewBox="0 0 658 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M19 20h71v71H19z"/><path id="b" d="M19 20h71v71H19z"/><path id="c" d="M19 20h71v71H19z"/><path id="d" d="M19 20h71v71H19z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(10 6)"><use fill="#FFF" xlink:href="#a"/><path stroke="#000" stroke-width="2" d="M20 21h69v69H20z"/></g><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(10 6)"><tspan x=".5" y="14">-1</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(10 6)"><tspan x="100" y="14">-2</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(10 6)"><tspan x=".5" y="104">-4</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(10 6)"><tspan x="100" y="104">-3</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(10 6)"><tspan x="46" y="59">14</tspan></text><g><g transform="translate(185 6)"><use fill="#FFF" xlink:href="#b"/><path stroke="#000" stroke-width="2" d="M20 21h69v69H20z"/></g><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(185 6)"><tspan x=".5" y="14">-1</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(185 6)"><tspan x="100" y="14">-3</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(185 6)"><tspan x=".5" y="104">-5</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(185 6)"><tspan x="100" y="104">-4</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(185 6)"><tspan x="46" y="59">47</tspan></text></g><g><g transform="translate(359 6)"><use fill="#FFF" xlink:href="#c"/><path stroke="#000" stroke-width="2" d="M20 21h69v69H20z"/></g><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(359 6)"><tspan x=".5" y="14">-1</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(359 6)"><tspan x="100" y="14">-4</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(359 6)"><tspan x=".5" y="104">-6</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(359 6)"><tspan x="100" y="104">-5</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(359 6)"><tspan x="43" y="59">104</tspan></text></g><g><g transform="translate(534 6)"><use fill="#FFF" xlink:href="#d"/><path stroke="#000" stroke-width="2" d="M20 21h69v69H20z"/></g><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(534 6)"><tspan x=".5" y="14">-1</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(534 6)"><tspan x="100" y="14">-5</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(534 6)"><tspan x=".5" y="104">-7</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(534 6)"><tspan x="100" y="104">-6</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="16" fill="#000" transform="translate(534 6)"><tspan x="51.449" y="59">?</tspan></text></g></g></svg>',
  },
  {
    type: 'calculation',
    question: '$-7 + 13 - 6 + 20$',
  },
  {
    type: 'calculation',
    question: '$(-49) - (+91) - (-5) + (-9)$',
  },
  {
    type: 'calculation',
    question: '$-5\\frac{3}{4} + (+2\\frac{3}{7}) + (-1\\frac{1}{4}) - (-\\frac{4}{7})$',
  },
  {
    type: 'calculation',
    question: '$(-\\frac{2}{3}) + |-5\\frac{1}{6}| + |-4\\frac{5}{6}| + (-9\\frac{1}{3})$',
  },
  {
    type: 'calculation',
    question: '$-2\\frac{1}{4} + 5\\frac{1}{2} - 4\\frac{1}{3} + 3\\frac{1}{6}$',
  },
  {
    type: 'calculation',
    question: '$1 - 3 - 5 + 7 + 9 - 11 - 13 + 15 + 17 - ... - 2013 + 2015$',
  },
  {
    type: 'program',
    question: `请在下题每一步的计算后面注明理由:
<br>&nbsp;$16 + (-25) + (+24) + (-32)$
<br>$= 16 + (+24) + (-25) + (-32)$
<br>$= [16 + (+24)] + [(-25) + (-32)]$
<br>$= 40 + (-57)$
<br>$= -17$
      `,
  },
  {
    type: 'program',
    style: {
      blankHeight: 40,
    },
    question: '已知$|x|=2$, $|y|=3$，且$x<y$，求$x-y$的值',
  },
  {
    type: 'program',
    style: {
      blankHeight: 60,
    },
    question: '若$a、b$互为相反数，$c、d$互为倒数，m的绝对值为2。求式子$m + cd + \\frac{a + b}{m}$的值',
  },
  {
    type: 'program',
    style: {
      blankHeight: 60,
    },
    question: '根据下图中有理数a、b、c在数轴上的大致位置，化简|a-b|+|c-b|',
    addition: xaxis({
      displayScale: false,
      points: [
        { label: 'c', value: -3 },
        { label: '0', value: 0 },
        { label: 'b', value: 1 },
        { label: 'a', value: 2.2 },
      ],
      scale: {
        extent: [-3, 4],
      },
    }),
  },
  {
    type: 'program',
    style: {
      blankHeight: 60,
    },
    question: '某食品厂从生产的袋装食品中抽出样品20袋，检测每袋的质量是否符合标准，超过或不足的部分分别用正、负数来表示（如下表）。这批样品的平均质量比标准质量多还是少？多或少几克？若每袋标准质量为450克，则抽样检测的总质量是多少？',
    addition: table([
      ['与标准质量的差值<br>（单位： g ）', -5, -2, 0, 1, 3, 6],
      ['袋 数', 1, 4, 3, 4, 5, 3],
    ], 500),
  },
  {
    type: 'program',
    style: {
      blankHeight: 80,
    },
    question: `如图，已知数轴上点A表示的数6，B是数轴上在A左侧的一点，且A、B两点间的距离为8。动点P从点A出发，以每秒4个单位长度的速度沿数轴向左匀速运动，设运动时间为t(t>0)秒。
      <br>(1) 数轴上点B表示的数是，点P表示的数是 (用含t的代数式表示)；
      <br>(2) 动点Q从点B出发，以每秒2个单位长度的速度沿数轴向左匀速运动，若点P、Q同时出发，求：
      <br>① 当点P运动多少秒时，点P与点Q相遇?
      <br>② 当点P运动多少秒时，点P与点Q的距离为5个单位长度?`,
    addition: '<svg width="300" viewBox="0 0 326 58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1 31h315" stroke="#000" stroke-width="2"/><path d="M313.88 30.995L312 26l10 4.995h-8.12zm0 .01H322L312 36l1.88-4.995zM195 15l8-4-1.504 4L203 19l-8-4z" fill="#000"/><text font-family="KaTeX_Math,Times" font-size="20" fill="#494949"><tspan x="276" y="21">A</tspan></text><text font-family="KaTeX_Math, Times" font-size="20" fill="#000"><tspan x="226" y="21">P</tspan></text><text font-family="KaTeX_Math,Times" font-size="20" fill="#000"><tspan x="46" y="21">Q</tspan></text><text font-family="KaTeX_Math,Times" font-size="20" fill="#000"><tspan x="76" y="21">B</tspan></text><text font-family="KaTeX_Math, Times New Roman" font-size="20" font-weight="bold" fill="#000"><tspan x="156" y="55">0</tspan></text><circle fill="#000" cx="161.5" cy="31.5" r="4.5"/><circle fill="#000" cx="230.5" cy="31.5" r="4.5"/><circle fill="#000" cx="50.5" cy="31.5" r="4.5"/><circle fill="#000" cx="80.5" cy="31.5" r="4.5"/><circle fill="#000" cx="280.5" cy="31.5" r="4.5"/><path d="M200.26 14.847h24.26" stroke="#000"/><path d="M14 15l8-4-1.504 4L22 19l-8-4z" fill="#000"/><path d="M19.26 14.847h24.26" stroke="#000"/></g></svg>',
  },
]);
