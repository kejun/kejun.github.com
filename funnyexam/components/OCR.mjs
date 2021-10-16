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
  const handleFileSelected = e => {
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
      .then(r => {
        setResult(r.content);
        // TODO:
        // document.querySelector('#scan-result').innerHTML = scanWord(r.prism_wordsInfo);
      });
    };
    reader.onerror = () => {
      console.log('Error occurs.');
    };
  };
  const handleClose = () => {
    setPreview(null);
    setResult('');
  };
  const handleUpload = () => {
    result && handleClose();
    fileRef.current.click();
  };
  const handleCopyText = (e) => {
    e.target.select();
    navigator.clipboard.writeText(e.target.value).then(() => alert('已复制'));
  };
  useEffect(() => {
    if (preview) {
      document.body.classList.add('ocr-opened');
      return;
    }
    document.body.classList.remove('ocr-opened');
  }, [preview]);
  const scanWord = wordInfo => wordInfo ? wordInfo.map(word => {
    return `
      ${word.charInfo.map(c => {
        return `
          <span style="position:absolute;left:${c.x}px;top:${c.y}px;width:${c.w}px;height:${c.h}px;color:blue;">
            ${c.word}
          </span>
        `;
      }).join('')}
    `;
  }).join('') : '';
  return html`
    ${preview ? html`
      <div class="ocr-result">
        ${
          result ? html`
            <button class="ocr-result-close" onClick=${handleClose}>×</button>
            <button class="ocr-upload-file" onClick=${handleUpload}>重新上传</button>
         ` : '' 
        }
        <div class="ocr-result-preview">
          <div class="ocr-img-wrapper${result ? '' : ' ocr-processing'}">
            <img src="${preview}" />
            <div id="scan-result" style="position:absolute;top:0;left:0;right:0;bottom:0;"></div>
          </div>
        </div>
        <div class="ocr-result-content">
          <textarea onClick=${handleCopyText}>${result || '处理中...'}</textarea>
        </div>
      </div>
    ` : ''}
    <div class="bn-ocr" onClick=${handleUpload}>
      <input ref=${fileRef} type="file" accept="image/*" onChange=${handleFileSelected}/>
    </div>
  `;
}
