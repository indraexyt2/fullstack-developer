// app.js

// 1. Apa itu Express.js?
// Express.js adalah framework minimalis dan fleksibel untuk Node.js yang menyediakan serangkaian fitur kuat 
// untuk pengembangan aplikasi web dan API. Express memudahkan pengelolaan routing, middleware, dan HTTP requests/responses.

// Mengapa menggunakan Express.js?
// - Sederhana dan Mudah Digunakan: Express menyediakan API yang sederhana dan intuitif untuk menangani routing 
//   dan middleware, sehingga memudahkan dalam membangun aplikasi web atau API.
// - Fleksibel: Dengan Express, Anda bisa menambahkan berbagai middleware untuk menangani request, response, 
//   validasi, autentikasi, logging, dan masih banyak lagi.
// - Performa: Express dibangun di atas Node.js yang sangat cepat dan efisien dalam menangani asynchronous requests.
// - Komunitas Besar: Karena Express adalah salah satu framework yang paling populer untuk Node.js, ada banyak 
//   sumber daya, tutorial, dan library tambahan yang dapat membantu pengembangan.

// 2. Import express framework ke dalam aplikasi Node.js
const express = require('express');

// 3. Membuat instance Express
// Instance ini akan digunakan untuk mendefinisikan route, middleware, dan logika server.
const app = express();

// 4. Membuat route sederhana
// Route ini akan merespon GET request ke URL '/' dan mengirimkan teks sederhana ke client sebagai respon.
app.get('/', (req, res) => {
  res.send('Halo, ini adalah server Express.js pertama saya!');
});

app.get('/about', (req, res) => {
    res.send('Halaman about')
})

app.post('/about', (req, res) => {
    res.send('Halalamat abot dengan POST')
})

app.get('*', (req, res) => {
    res.send('Halama tidak ditemukan!')
})
// 5. Mendefinisikan port dan memulai server
// Server akan mendengarkan request yang datang pada port 3000. 
// Fungsi callback akan menampilkan pesan di console setelah server berhasil berjalan.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
