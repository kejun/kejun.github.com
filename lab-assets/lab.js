const buttons = [...document.querySelectorAll("[data-wave]")];
const frequency = document.querySelector("#frequency");
const frequencyValue = document.querySelector("#frequency-value");
const wave = document.querySelector("#wave");
const waveLabel = document.querySelector("#wave-label");

const signals = {
  sine: Math.sin,
  square: phase => Math.sin(phase) >= 0 ? 1 : -1,
  triangle: phase => 2 / Math.PI * Math.asin(Math.sin(phase))
};

let signal = "sine";

function drawWave() {
  const rate = frequency.valueAsNumber;
  let path = "";

  for (let x = 0; x <= 280; x += 2) {
    const phase = x / 280 * Math.PI * 2 * rate;
    const y = Math.round((40 - 25 * signals[signal](phase)) / 2) * 2;
    path += x === 0 ? `M0 ${y}` : `H${x}V${y}`;
  }

  wave.setAttribute("d", path);
  waveLabel.textContent = signal.toUpperCase();
  frequencyValue.value = `${rate} Hz`;
  frequency.setAttribute("aria-valuetext", `${rate} 赫兹`);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    signal = button.dataset.wave;
    buttons.forEach(option => option.setAttribute("aria-pressed", String(option === button)));
    drawWave();
  });
});

frequency.addEventListener("input", drawWave);
drawWave();
