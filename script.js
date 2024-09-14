// Variabel Global
let count = 0;
let isSoundEnabled = true; // Kontrol suara aktif/nonaktif

// Elemen HTML
const display = document.getElementById('display');
const categorySelect = document.getElementById('categorySelect');
const soundToggleButton = document.getElementById('soundToggleButton');
const countButton = document.getElementById('countButton');
const backButton = document.getElementById('backButton');
const resetButton = document.getElementById('resetButton');

// File Suara (pastikan file audionya sudah diunggah ke repository GitHub)
const audio = new Audio('click-sound.mp3');

// Fungsi Menampilkan Count
function updateDisplay() {
  display.textContent = count;
}

// Fungsi Menambah Count
countButton.addEventListener('click', () => {
  count++;
  updateDisplay();
  playSound(); // Mainkan suara setiap kali tombol Count ditekan
});

// Fungsi Mengurangi Count
backButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Fungsi Reset Count
resetButton.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Fungsi Toggle Suara
soundToggleButton.addEventListener('click', () => {
  isSoundEnabled = !isSoundEnabled;
  soundToggleButton.textContent = isSoundEnabled ? 'Sound ON' : 'Sound OFF';
});

// Fungsi Memutar Suara
function playSound() {
  if (isSoundEnabled) {
    audio.currentTime = 0; // Set audio ke awal untuk menghindari delay
    audio.play();
  }
}

// Update tampilan pertama kali aplikasi berjalan
updateDisplay();
