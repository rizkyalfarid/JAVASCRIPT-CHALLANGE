const display = document.getElementById('display');
const mulaiButton = document.getElementById('mulai');
const berhentiButton = document.getElementById('berhenti')
const resetButton = document.getElementById('reset');

let sedangBerjalan = false;
let detik = 0;
let intervalId;

function mulaiStopWatch() {
  if(!sedangBerjalan) {
    intervalId = setInterval(() => {
      detik++;
      display.textContent = formatWaktu(detik);
    }, 1000);
    sedangBerjalan = true;
    mulaiButton.textContent = 'Pause';
  } else {
    clearInterval(intervalId);
    sedangBerjalan = false;
    mulaiButton.textContent = 'Lanjutkan';
  }
}

function berhentiStopWatch() {
  clearInterval(intervalId);
  sedangBerjalan = false;
  mulaiButton.textContent = 'Mulai';
  detik = 0;
  display.textContent = formatWaktu(detik)
}

function resetStopWatch() {
  berhentiStopWatch();
  detik = 0;
  display.textContent = formatWaktu(detik)
}

function formatWaktu(detik) {
  const jam = Math.floor(detik / 3600);
  const menit = Math.floor((detik % 3600) / 60);
  const detikSisa = detik % 60;

  const waktuYangDiFormat = `${padNo1(jam)}:${padNo1(menit)}:${padNo1(detikSisa)}`;
  return waktuYangDiFormat;
}

function padNo1(angka) {
  return angka < 10 ? `0${angka}` : angka;
}

mulaiButton.addEventListener('click', mulaiStopWatch)
berhentiButton.addEventListener('click', berhentiStopWatch);
resetButton.addEventListener('click', resetStopWatch);