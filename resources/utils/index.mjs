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

export const handlePageBreak = () => {
  if (/mobile/i.test(navigator.userAgent)) {
    return;
  }
  let dpi = document.querySelector('.detect-dpi');
  if (!dpi) {
    dpi = document.createElement('div');
    dpi.className = 'detect-dpi';
    dpi.style.cssText = `
      position: absolute;
      left: -100%;
      top: -100%;
      height: 1in;
      width: 1in;
    `;
    document.body.appendChild(dpi);
  }
  const pageHeightLimit = dpi.offsetHeight * 10;
  document.body.style.cssText = `
    width: ${dpi.offsetHeight * 7}px;
    margin-left: auto;
    margin-right: auto;
  `;
  let h = 0;
  [...document.querySelectorAll('#app > *')].forEach(q => {
    if (q.offsetTop + q.offsetHeight - h > pageHeightLimit) {
      h = h + q.offsetTop;
      const pagebreak = document.createElement('div');
      pagebreak.className = 'pagebreak';
      q.parentNode.insertBefore(pagebreak, q);
    }
  });
};
