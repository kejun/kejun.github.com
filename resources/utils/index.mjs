import {vline} from './graphic.mjs';

export const types = {
  choice: '选择题',
　completion: '填空题',
  calculation: '计算题',
  program: '解答题',
};

const trans = str => str
  .replaceAll('<=', '⩽')
  .replaceAll('>=', '⩾')
  .replaceAll('____', '<span class="line"></span>')
  .replaceAll('|', vline(18))
  .replaceAll('&nbsp;', '<span class="space"></span>');

const remark = value => value ? `<sup>(注: ${value})</sup>` : '';
const addition = value => value ? `<div class="addition">${value}</div>` : '';

export const questionRender = {
  choice(q, index) {
    return `
    <div class="question">
      <span class="index">${index}.</span> ${trans(q.question)}
      ${remark(q.remark)}
      ${addition(q.addition)}
      <div class="choice-options">
        ${q.options.map(e => `<div class="option">${trans(e)}</div>`).join('')}
      </div>
    </div>
    `;
  },
　completion(q, index) {
    return `
    <div class="question">
      <span class="index">${index}.</span> ${trans(q.question)}
      ${remark(q.remark)}
      ${addition(q.addition)}
    </div>
    `;
  },
  calculation(q, index, blankHeight=0) {
    return `
    <div class="question">
      <span class="index">${index}.</span> ${trans(q.question)}
      ${remark(q.remark)}
      ${addition(q.addition)}
      <div style="height:${blankHeight}px;"></div>
    </div>
    `;
  },
  program(q, index, blankHeight=0) {
    return `
    <div class="question">
      ${index}. ${trans(q.question)}
      ${remark(q.remark)}
      ${addition(q.addition)}
      <div style="height:${blankHeight}px;"></div>
    </div>
    `;
  },
};
