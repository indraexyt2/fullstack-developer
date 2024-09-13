// =========================
// 1. Mengimpor Modul Bawaan
// =========================

const fs = require('fs'); // Mengimpor modul 'fs' (file system)

// Menulis file baru dengan konten sederhana
const fileName = 'output.txt';
const fileContent = 'Ini adalah contoh penggunaan modul fs di Node.js.\n';

fs.writeFileSync(fileName, fileContent);
console.log(`File '${fileName}' berhasil dibuat.`);

// Membaca file yang baru dibuat
const data = fs.readFileSync(fileName, 'utf-8');
console.log(`Isi file '${fileName}':\n`, data);

// =========================
// 2. Mengimpor Modul Eksternal
// =========================

const _ = require('lodash'); // Mengimpor modul eksternal 'lodash'

// Menggunakan lodash untuk memanipulasi array
const numbers = [1, 2, 3, 4, 5, 6];
const shuffledNumbers = _.shuffle(numbers); // Mengacak urutan array
console.log("Array yang sudah diacak menggunakan lodash:", shuffledNumbers);

// =========================
// 3. Mengimpor Modul Buatan Sendiri
// =========================

const sayHello = require('./module/helloModule'); // Mengimpor helloModule
const math = require('./module/mathModule'); // Mengimpor mathModule
const string = require('./module/stringModule'); // Mengimpor stringModule

// Menggunakan fungsi dari helloModule
console.log(sayHello('Indrawansyah'));

// Menggunakan fungsi dari mathModule
console.log('Penjumlahan:', math.add(5, 3));
console.log('Pengurangan:', math.subtract(10, 4));
console.log('Perkalian:', math.multiply(7, 6));
console.log('Pembagian:', math.divide(12, 4));
console.log('Pembagian dengan nol:', math.divide(12, 0));

// Menggunakan fungsi dari stringModule
console.log('Huruf besar:', string.toUpperCase('nodejs'));
console.log('Huruf kecil:', string.toLowerCase('NODEJS'));
console.log('Panjang string:', string.getLength('Belajar Node.js'));
