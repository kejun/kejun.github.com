import {
  types,
  questionRender,
  handlePageBreak,
  findQuestionById,
  dispatchEvent,
} from '../resources/utils/index.mjs';

let selectedQuestions = [];

export const initEvents = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.dataset.id && e.target.classList.contains('bn-select')) {
      selectedQuestions.push(findQuestionById(e.target.dataset.id));
      e.target.closest('.question').classList.add('selected');
      dispatchEvent('selectChange', selectedQuestions);
      return;
    }
    if (e.target.dataset.id && e.target.classList.contains('bn-unselect')) {
      e.target.closest('.question').classList.remove('selected');
      selectedQuestions = selectedQuestions.filter(q => q.id !== e.target.dataset.id);
      if (currentIsRenderSelected) {
        renderSelected();
      }
      dispatchEvent('selectChange', selectedQuestions);
    }
  }, false);
};

let currentIsRenderSelected = false;

export const renderSelected = () => {
  currentIsRenderSelected = true;
  renderQuestion(selectedQuestions, true);
};

let cacheQuestion = null;

export default function renderQuestion(questions, isRenderSelected) {
  if (!questions) {
    questions = cacheQuestion;
  }
  const results = [];
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
  document.querySelector('#app').innerHTML = results.join('');
  window.scrollTo(0, 0);
  handlePageBreak();
  [...document.querySelectorAll('.question')].forEach((q) => {
    if (selectedQuestions.filter(e => e.id === q.dataset.id).length) {
      q.classList.add('selected');
    }
  });
  if (!isRenderSelected) {
    currentIsRenderSelected = false;
    cacheQuestion = questions;
  }
}
