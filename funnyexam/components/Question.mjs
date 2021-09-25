import {
  types,
  questionRender,
  handlePageBreak,
  findQuestionById,
  dispatchEvent,
} from '../resources/utils/index.mjs';

let selectedQuestions = [];
let currentIsRenderSelected = false;

let cacheTitle = '';
let cacheQuestion = null;

const handleQuestionSelected = (el) => {
  if (!el) {
    return;
  }
  const q = el.closest('.question');
  const qid = el.dataset.id;
  const append = () => {
    q.classList.remove('selected');
    selectedQuestions = selectedQuestions.filter(q => q.id !== qid);
    currentIsRenderSelected && renderSelected();
  };
  const remove = () => {
    selectedQuestions.push(findQuestionById(qid));
    q.classList.add('selected');
  };
  q.classList.contains('selected') ? append() : remove();
  return true;
};

export const initEvents = () => {
  document.body.addEventListener('click', (e) => {
    handleQuestionSelected(e.target.classList.contains('question-body') ? e.target : e.target.closest('.question-body'))
    && dispatchEvent('selectChange', selectedQuestions);
  }, false);
};

export const renderSelected = () => {
  currentIsRenderSelected = true;
  renderQuestion(selectedQuestions, `自选题目 (${(new Date()).toLocaleString().split(' ')[0]})`, true);
};

export default function renderQuestion(questions, title, isRenderSelected) {
  if (!questions) {
    questions = cacheQuestion;
    title = cacheTitle;
  }
  const results = [title ? `<h1>${title}</h1>` : ''];
  let index = 0;
  Object.keys(types).forEach((type) => {
    const qs = questions.filter(q => q.type === type);
    if (qs.length === 0) {
      return;
    }
    results.push(`<h2>${types[type]}</h2>`);
    if (type === 'calculation') {
      results.push('<div class="question-calculation">');
    }
    qs.forEach((q) => {
      index++;
      results.push(questionRender[type](q, index, q.style ? q.style.blankHeight : 0));
    });
    if (type === 'calculation') {
      results.push('</div>');
    }
  });
  document.querySelector('#app').innerHTML = `
    <div class="question-list${isRenderSelected ? ' question-list-selected' : ''}">
      ${results.join('')}
    </div>
  `;
  window.scrollTo(0, 0);
  handlePageBreak();
  [...document.querySelectorAll('.question-body')].forEach((q) => {
    if (selectedQuestions.filter(e => e.id === q.dataset.id).length) {
      q.closest('.question').classList.add('selected');
    }
  });
  if (!isRenderSelected) {
    currentIsRenderSelected = false;
    cacheQuestion = questions;
    cacheTitle = title;
  }
}
