/* eslint-disable indent */
import {
  html,
  useEffect,
  useState,
} from 'https://g.alicdn.com/code/lib/htm/3.1.0/preact/standalone.module.js';
import renderQuestion, { renderSelected } from './Question.mjs';
import OCRButton from './OCR.mjs';

let currentIndex = 0;

export default function Header({ options, onChange }) {
  const [count, setCount] = useState(0);
  const [showSelected, setShowSelected] = useState(false);
  useEffect(() => {
    window.addEventListener('selectChange', (e) => {
      setCount(e.detail.length);
    });
  }, []);
  let selectList = html`
    <select onChange=${(e) => {
      currentIndex = parseInt(e.target.value);
      onChange(currentIndex);
    }}>
      ${options.map((e, i) => {
        if (currentIndex === i) {
          return html`<option value="${i}" selected>${e}</option>`;
        }
        return html`<option value="${i}">${e}</option>`;
      })}
    </select>
  `;
  let selectNum = '';
  const closeSelected = () => {
    renderQuestion();
    setShowSelected(false);
  };
  const displaySelected = () => {
    renderSelected();
    setShowSelected(true);
  };
  if (showSelected) {
    selectList = html`<h2>选中的题目</h2>`;
    selectNum = html`
      <div class="selected-num">
        <button class="bn-close" onClick=${() => closeSelected()} style="transform:scale(.9)">返回 ></button>
      </div>
    `;
  }
  if (count && !showSelected) {
    selectNum = html`
      <div class="selected-num">
        <button onClick=${() => displaySelected()}>${count}</button>
      </div>
    `;
  }
  return html`
    <div>
      <${OCRButton} />
      <button class="print" onClick=${() => window.print()}>打印当前页面</button>
    </div>
    <div>
      ${selectList}
    </div>
    <div>
    ${selectNum}
    </div>
  `;
}
