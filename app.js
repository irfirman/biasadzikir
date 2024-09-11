// Variabel untuk menyimpan nilai hitungan
let count = 0;

/* Fungsi untuk meng-update elemen display dengan nilai terbaru */
function updateDisplay() {
  document.getElementById('display').innerText = count; // Mengganti angka di elemen #display dengan nilai 'count'
}

/* Fungsi untuk menambah hitungan */
function increment() {
  count++; // Menambah nilai 'count' sebesar 1
  updateDisplay(); // Memperbarui tampilan angka

  // Jika perangkat mendukung vibrasi, maka ponsel akan bergetar
  if (navigator.vibrate) {
    navigator.vibrate(100); // Bergetar selama 100ms
  }
}

/* Fungsi untuk mengurangi hitungan */
function decrement() {
  if (count > 0) { // Memastikan nilai hitungan tidak kurang dari 0
    count--; // Mengurangi nilai 'count' sebesar 1
    updateDisplay(); // Memperbarui tampilan angka
  }
}
