// Variabel Global untuk menghitung masing-masing kategori
let counts = {
  tasbih: 0,
  tahmid: 0,
  takbir: 0,
  tahlil: 0
};

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

// Fungsi Menampilkan Count berdasarkan kategori yang dipilih
function updateDisplay() {
  const selectedCategory = categorySelect.value;
  display.textContent = counts[selectedCategory];
}

// Fungsi Menambah Count
countButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value;
  counts[selectedCategory]++;
  updateDisplay();
  playSound(); // Mainkan suara setiap kali tombol Count ditekan
});

// Fungsi Mengurangi Count
backButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value;
  if (counts[selectedCategory] > 0) {
    counts[selectedCategory]--;
    updateDisplay();
  }
});

// Fungsi Reset Count
resetButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value;
  counts[selectedCategory] = 0;
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

// Update tampilan setiap kali kategori berubah
categorySelect.addEventListener('change', updateDisplay);

// Update tampilan pertama kali aplikasi berjalan
updateDisplay();
