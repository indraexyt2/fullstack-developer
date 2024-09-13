// =========================
// 1. Pengenalan Node.js
// =========================

/**
 * Node.js adalah runtime environment yang memungkinkan JavaScript berjalan di sisi server.
 * Node.js menggunakan model event-driven dan non-blocking I/O, membuatnya sangat efisien untuk aplikasi yang membutuhkan skalabilitas tinggi.
 */

// =========================
// 2. Mengimpor Modul Bawaan
// =========================

/**
 * Menggunakan beberapa modul bawaan Node.js tanpa perlu instalasi tambahan.
 * Di sini digunakan modul 'os' dan 'path'.
 */
const os = require('os');     // Modul untuk mendapatkan informasi sistem operasi
const path = require('path'); // Modul untuk bekerja dengan path file dan direktori

// =========================
// 3. Menampilkan Informasi Sistem
// =========================

console.log("=== Informasi Sistem Operasi ===");

// Mendapatkan platform (Windows, Linux, macOS, dll.)
console.log("Platform:", os.platform());

// Mendapatkan arsitektur CPU (x64, arm, dll.)
console.log("Arsitektur CPU:", os.arch());

// Mendapatkan informasi jumlah CPU
console.log("Jumlah CPU:", os.cpus().length);

// Mendapatkan total memori sistem dalam bytes
console.log("Total Memori (bytes):", os.totalmem());

// Mendapatkan memori bebas dalam bytes
console.log("Memori Bebas (bytes):", os.freemem());

// Mendapatkan hostname (nama komputer)
console.log("Hostname:", os.hostname());

// Mendapatkan sistem operasi yang digunakan
console.log("Type OS:", os.type());

// =========================
// 4. Bekerja dengan Path
// =========================

console.log("\n=== Manipulasi Path ===");

// __dirname adalah variabel global yang menyimpan direktori saat ini
console.log("Direktori saat ini:", __dirname);

// Menyusun path absolut
const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log("Path yang disusun:", filePath);

// Mendapatkan ekstensi dari file
const fileExtension = path.extname(filePath);
console.log("Ekstensi file:", fileExtension);

// Mendapatkan nama file tanpa ekstensi
const fileName = path.basename(filePath, fileExtension);
console.log("Nama file tanpa ekstensi:", fileName);

// =========================
// 5. Membuat Fungsi Sederhana
// =========================

/**
 * Fungsi ini menampilkan pesan selamat datang di Node.js.
 */
function haloDunia() {
    console.log("\nHalo, Dunia! Ini adalah fungsi sederhana Node.js");
}

// Memanggil fungsi
haloDunia();

// =========================
// 6. Asynchronous Programming dengan setTimeout
// =========================

/**
 * Asynchronous Programming: setTimeout akan menjalankan fungsi setelah 3 detik tanpa memblokir eksekusi program lainnya.
 */
console.log("\nMenunggu 3 detik...");

setTimeout(() => {
    console.log("Sudah 3 detik!");
}, 3000);

// =========================
// 7. Membuat Server Sederhana
// =========================

/**
 * Membuat server HTTP sederhana menggunakan modul 'http'.
 * Server ini akan merespons setiap request dengan pesan sederhana.
 */

const http = require('http'); // Mengimpor modul 'http' untuk membuat server

// Membuat server
const server = http.createServer((req, res) => {
    // Menetapkan status response dan header
    res.statusCode = 200; // 200 OK
    res.setHeader('Content-Type', 'text/plain'); // Tipe konten sebagai teks biasa

    // Mengirim response
    res.end('Halo dari server Node.js!\n');
});

// Menentukan port dan hostname
const port = 3000; // Port yang digunakan server
const hostname = '127.0.0.1'; // Alamat localhost

// Menjalankan server
server.listen(port, hostname, () => {
    console.log(`\nServer berjalan di http://${hostname}:${port}/`);
    console.log("Buka browser dan akses alamat di atas untuk melihat hasilnya.");
});

/**
 * ========================
 * Cara Menjalankan Aplikasi
 * ========================
 * 
 * 1. Buka terminal atau command prompt.
 * 2. Navigasi ke direktori tempat file ini berada.
 * 3. Jalankan aplikasi dengan perintah:
 *    node dasarNodeJs.js
 * 4. Informasi sistem akan ditampilkan di terminal.
 * 5. Untuk melihat server, buka browser dan akses http://127.0.0.1:3000/
 *    Pesan 'Halo dari server Node.js!' akan muncul di halaman tersebut.
 */
