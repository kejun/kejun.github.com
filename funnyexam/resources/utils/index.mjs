import { exp } from './graphic.mjs';

export const types = {
  choice: '选择题',
  completion: '填空题',
  calculation: '计算题',
  program: '解答题',
};

export const normalize = arr => arr.map(e => ({
  ...e,
  id: `${e.type}-${Math.random().toString(16).split('.')[1]}`,
}));

export const trans = (str) => {
  if (!/string|number/.test(typeof str)) {
    return '';
  }
  str += '';
  if (str.indexOf('$') < 0) {
    str = str.replace(/[0-9a-zA-Z-]+/g, (e) => {
      if (/^br|pre$/i.test(e) || /^[A-H]+\./.test(str)) {
        return e;
      }
      return `$${e}$`;
    });
  }
  str = str
    .replaceAll('____', '<span class="line"></span>')
    .replaceAll('&nbsp;', '<span class="space"></span>')
    .replace(/(\$[^$]+\$)/g, e => exp(e.replaceAll('$', '')));
  return str;
};

const remark = value => (value ? `<sup>(注: ${value})</sup>` : '');
const addition = value => (value ? `<div class="addition">${value}</div>` : '');

const cacheMap = {};

export const findQuestionById = id => cacheMap[id];

export const questionRender = {
  base(type, q, index, child = '') {
    cacheMap[q.id] = {
      ...q,
    };
    return `
    <div class="question">
      <div data-id="${q.id}" class="question-body"> 
        <span class="index">${index}.</span> ${trans(q.question)}
        ${remark(q.remark)}
      </div>
      ${addition(q.addition)}
      ${child}
    </div>
    `;
  },
  choice(q, index) {
    return this.base('choice', q, index, `
      <div class="choice-options">
        ${q.options.map(e => `<div class="option">${trans(e)}</div>`).join('')}
      </div>
    `);
  },
  completion(q, index) {
    return this.base('completion', q, index);
  },
  calculation(q, index, blankHeight = 0) {
    return this.base('calculation', q, index, `
      <div class="question-blank" style="height:${blankHeight}px;"></div>
    `);
  },
  program(q, index, blankHeight = 0) {
    return this.base('program', q, index, `
      <div class="question-blank" style="height:${blankHeight}px;"></div>
    `);
  },
};

export const dispatchEvent = (type, payload) => {
  const event = new CustomEvent(type, {
    detail: payload,
  });
  window.dispatchEvent(event);
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
  setTimeout(() => {
  [...document.querySelectorAll('#app .question')].forEach((q) => {
    if (q.offsetTop + q.offsetHeight - h > pageHeightLimit) {
      h = h + q.offsetTop;
      const pagebreak = document.createElement('div');
      pagebreak.className = 'pagebreak';
      q.parentNode.insertBefore(pagebreak, q);
    }
  });
  }, 500);
};
