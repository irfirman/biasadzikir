// Pengaturan awal
let counts = {
  category1: 0,
  category2: 0,
  category3: 0
};
let currentCategory = "category1";
let soundEnabled = false;

/* Fungsi untuk memperbarui kategori */
function updateCategory() {
  const selectElement = document.getElementById("categorySelect");
  currentCategory = selectElement.value;
  updateDisplay();
}

/* Fungsi untuk memperbarui tampilan hitungan */
function updateDisplay() {
  document.getElementById("display").textContent = counts[currentCategory];
}

/* Fungsi untuk menambah hitungan */
function increment() {
  counts[currentCategory]++; // Menambah hitungan untuk kategori yang dipilih
  updateDisplay(); // Memperbarui tampilan angka

  // Jika fitur suara diaktifkan, buat instance baru audio dan putar
  if (soundEnabled) {
    const sound = new Audio('count-sound.mp3');
    sound.play();
  }

  // Jika perangkat mendukung vibrasi, maka ponsel akan bergetar
  if (navigator.vibrate) {
    navigator.vibrate(100); // Bergetar selama 100ms
  }
}

/* Fungsi untuk mengurangi hitungan */
function decrement() {
  if (counts[currentCategory] > 0) { // Memastikan nilai hitungan tidak kurang dari 0
    counts[currentCategory]--; // Mengurangi hitungan untuk kategori yang dipilih
    updateDisplay(); // Memperbarui tampilan angka

    // Jika fitur suara diaktifkan, buat instance baru audio dan putar
    if (soundEnabled) {
      const backSound = new Audio('back-sound.mp3');
      backSound.play();
    }
  }
}

/* Fungsi untuk mereset hitungan */
function resetCount() {
  counts[currentCategory] = 0;
  updateDisplay();
}

/* Fungsi untuk mengaktifkan/menonaktifkan suara */
function toggleSound() {
  soundEnabled = !soundEnabled; // Mengubah status suara
  const button = document.getElementById("soundToggle");
  button.textContent = soundEnabled ? "Disable Sound" : "Enable Sound"; // Memperbarui teks tombol
}
