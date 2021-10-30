import katex from 'https://g.alicdn.com/code/lib/KaTeX/0.13.18/katex.mjs';
import { trans } from './index.mjs';

export const exp = str => katex.renderToString(str, {
  strict: false,
  throwOnError: false,
});

export const img = (url, w) => `<figure><img src="${self.location.host === 'kejun.github.io' ? '/funnyexam/resources/images/' : './resources/images/'}${url}"${w ? ` width=${w}` : ''}></figure>`;

export const fract = (n1, n2) => `<span class="fractional"><span class="g">${n1}</span>${n2}</span>`;

export const vline = h => `<svg width="6" height="${h || 28}" viewBox="0 0 6 28" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;"><path d="M3 1v26" stroke="#000" fill="none" fill-rule="evenodd"/></svg>`;

export const table = (rows, width = 320) => `
<table width="${width}">
${rows.map(cells => `<tr>${cells.map(c => `<td>${trans(c)}</td>`).join('')}</tr>`).join('')}
</table>
`;

/**
  displayScale: true,
  points: [
    {label: 'a', value: -1.6},
    {label: 'b', value: 0.4},
  ],
  scale: {
    extent: [-2, 3]
  }
*/
export const xaxis = ({
  displayScale = true,
  displayZero = false,
  width = 320,
  points = [],
  style,
  scale,
}) => {
  const unit = 50;
  const length = scale.extent[1] - scale.extent[0] + 2;
  // arrow
  const da = `\
    M${50 * length - 10} 30l-2 -4l10 4z\
    M${50 * length - 10} 30l-2 4l10 -4z\
  `;
  const zero = (0 - scale.extent[0] + 1) * unit;
  const dots = `\
    ${points.map(e => `M${e.value * unit + zero} 34.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z`).join('')}\
  `;
  let dx = `\
   M0 30h${50 * length - 10}\
   ${displayScale ? [...Array(length - 1)].map((_, i) => `M${(i + 1) * unit} 30v-8`).join('') : ''}\
  `;
  if (!displayScale && displayZero) {
    dx = `M0 30h${50 * length - 10} M${zero} 30v-8`;
  }
  let scaleNum = '';
  if (displayScale) {
    scaleNum = [...Array(length - 1)].map((_, i) => {
      const num = scale.extent[0] + i;
      const x = (i + 1) * unit - num.toString().length * 4;
      return `<text font-family="Times" font-size="20" fill="#000"><tspan x="${x}" y="55">${num}</tspan></text>`;
    }).join('');
  }
  if (!displayScale && displayZero) {
    scaleNum = `<text font-family="Times" font-size="20" fill="#000"><tspan x="${zero - 4}" y="55">0</tspan></text>`;
  }
  const styleValues = style ? Object.keys(style).map(k => {
    const v = style[k];
    k = k.replace(/[A-Z]{1}/g, e => `-${e.toLowerCase()}`);
    return `${k}:${typeof v === 'number' ? `${v}px` : v}`
  }).join('') : '';
  return `\
    <svg width="${width}" viewBox="0 0 ${length * unit} 60" ${styleValues ? `style=${styleValues}` : ''} xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path d="${dx}" stroke="#000" stroke-width="2"/>
        <path d="${da}" fill="#000"/>
        {
          dots ? <path d="${dots}" fill="#000"/> : null
        }
        ${points.length ? points.map(p => `<text font-family="KaTeX_Math" font-size="20" fill="#000"><tspan x="${p.value * unit + zero - 6}" y="20">${p.label}</tspan></text>`).join('') : null}
        ${scaleNum}
      </g>
    </svg>\
  `;
};
