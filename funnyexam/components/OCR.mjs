/* eslint-disable indent */
import {
  html,
  useEffect,
  useState,
  useRef,
} from 'https://g.alicdn.com/code/lib/htm/3.1.0/preact/standalone.module.js';

export default function OCR({onComplete}) {
  const fileRef = useRef();
  const [result, setResult] = useState('');
  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState(null);
  const handleUpload = e => {
    const reader = new FileReader();
    const file = e.srcElement.files[0];
    reader.readAsBinaryString(file);
    reader.onload = () => {
      const img = btoa(reader.result);
      setPreview(`data:${file.type};base64,${img}`);
      fetch('https://mquestion.market.alicloudapi.com/ocrservice/mathQuestion', {
        body: JSON.stringify({ img }),
        headers: {
          Authorization: 'APPCODE 0d58da96f83941aea8a02e94f62830fc',
          Accept: 'application/json;charset=UTF-8'
        },
        method: 'POST',
      })
      .then(r => r.json())
      .then(r => setResult(r.content));
    };
    reader.onerror = () => {
      console.log('Error occurs.');
    };
  };
  const handleClose = () => {
    setPreview(null);
    setResult('');
  };
  return html`
    ${preview ? html`
      <div class="ocr-result">
        ${
          result ? html`
            <button class="ocr-result-close" onClick=${handleClose}>×</button>
         ` : '' 
        }
        <div class="ocr-result-preview">
          <div class="ocr-img-wrapper${result ? '' : ' ocr-processing'}">
            <img src="${preview}" />
          </div>
        </div>
        <div class="ocr-result-content">
          <textarea>${result || '处理中...'}</textarea>
        </div>
      </div>
    ` : ''}
    <div class="bn-ocr" onClick=${() => fileRef.current.click()}>
      <input ref=${fileRef} type="file" accept="image/*" onChange=${handleUpload}/>
    </div>
  `;
}
