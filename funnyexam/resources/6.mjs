import { xaxis, table, img } from './utils/graphic.mjs';
import { normalize } from './utils/index.mjs';

export const title = '七上数学周未课堂作业 4';

export const questions = normalize([
  {
    type: 'choice',
    question: '在代数式$x^2+5, -1, x^2 - 3x + 2, \\pi, \\frac{5}{x}, x^2+\\frac{1}{x+1}$中，整式有 ( )',
    options: [
      'A. 3个',
      'B. 4个',
      'C. 5个',
      'D. 6个',
    ],
  },
  {
    type: 'completion',
    question: ' 若$(m+2)^2x^3y^{n-2}$是关于$x,y$ 的六次单项式则$m$____, $n$____',
  },
  {
    type: 'completion',
    question: '计算: $(m+3m+5m+\\cdots+2009m)-(2m+4m+6m+\\cdots+2008m)=$________',
  },
  {
    type: 'completion',
    question: ' 已知$a^2+2ab=-8, b^2+2ab=14$, 则$a^2+4ab+b^2=$____; $a^2-b^2=$____',
  },
  {
    type: 'completion',
    question: `\
     小博表演扑克牌游戏，她将两副牌分别交给观众$A$和观众$B$，然后背过脸去，请他们各自按照她的囗令操作：
    <br>a. 在桌上摆$3$堆牌，每堆牌的张数相等，每堆多于$10$张，但是不要告诉我;
    <br>b. 从第$2$堆拿出$4$张牌放到第$1$堆里;
    <br>c. 从第$3$堆牌中拿出$8$张牌放到第$1$堆里;
    <br>d. 数一下此时第$2$堆牌的张数，从第$1$堆牌中取出与第$2$堆相同张数的牌放在第$3$堆里;
    <br>e. 从第$2$堆中拿出$5$张牌放在第$1$堆中。
    <br> 小博转过头问两名观众：“请告诉我现在第$2$堆有多少张牌”观众$A$说$5$张，观众$B$说$8$张，小博猜出$A$、$B$两人最初每一堆里放的牌数正确应该分别为____张，____张
    `,
  },
  {
    type: 'program',
    question: ' 已知$x=3$时，代数式$ax^3+bx+1$的值是$-2009$，求$x=-3$时代数式的值',
  },
  {
    type: 'program',
    question: ' 已知$a^2-1=b$，求$3(a^2-b)+a^2-2(a^2-\\frac{1}{2}b)$的值',
  },
  {
    type: 'program',
    question: `\
     在数轴上，点$A$向右移动$1$个单位得到$B$点，点$B$向右移动$(n+1)$($n$为正整数)个单位得到点$C$，点$A, B, C$分别表示有理数$a, b, c$，如图所示。
    <br>$(1)$ 若当$n=1$时，$a, b, c$ 三个数的乘积为正数，
    <br>$\\textcircled 1$数轴上原点的位置可能 ( )
    <br>A. 在点$A$左侧或在$A, B$两点之间 B. 在点$C$右侧或在$A, B$两点之间
    <br>C. 在点$A$左侧或在$B, C$两点之间 B. 在点$C$右侧或在$B, C$两点之间
    <br>$\\textcircled 2$若这三数的和与其中的一个数相等，求$a$ 的值。
    <br>
    <br>$(2)$ 将点$C$向右移动$(n+2)$个单位得到点$D$，点$D$表示有理数$d$，$a, b, c, d$ 四个数的积为正数，且这四个数的和与其中两个数的和相等，$a$ 为整数。若$n$ 分别取$1, 2, 3, \\cdots, 200$时，对应的$a$ 的值分别为$a_1, a_2, a_3, \\cdots, a_{200}$，则$a_1+a_2+a_3+\\cdots+ a_{200}=$____
    `,
    addition: img('hw-7-25.png', 450),
  },
]);

