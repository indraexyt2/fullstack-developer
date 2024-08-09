// array

let peserta = []; // array kosong
let warna = ['merah', 'kuning', 'hijau']; // kumpulan string
let angka = [1, 2, 3]; // kumpulan angka
let a = [1, true, 'indra', null] // kumpulan campuran

// nilai index dan mengubah isinya
let namaMahasiswa = ['Indra', 'Kiki', 'Putri', 'Hasna'];
console.log(namaMahasiswa[0]);

namaMahasiswa[0] = "Indri"
console.log(namaMahasiswa);

namaMahasiswa[4] = 'Nabila' // menambah nilai
console.log(namaMahasiswa);

// array push dan pop

// push = menambah item pada paling akhir
// pop = menghapus item pada paling akhir

// shift = menghapus item pada paling awal
// unshif - menambahkan item pada paling awal

let barbel = [20, 40, 60, 80];
barbel.push(100);
console.log(barbel);

barbel.pop();
console.log(barbel);

barbel.shift();
console.log(barbel);

barbel.unshift(20);
console.log(barbel);

// method yang sering digunakan

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// concat: Menggabungkan dua array
let gabungan = array1.concat(array2);
console.log("Hasil concat:", gabungan);

// includes: Mencari nilai dalam array
let adaLima = gabungan.includes(5);
console.log("Apakah ada nilai 5?", adaLima);

// indexOf: Mencari indeks dari nilai tertentu dalam array
let indexTiga = gabungan.indexOf(3);
console.log("Indeks nilai 3:", indexTiga); 

// join: Membuat string dari array
let stringArray = gabungan.join(", ");
console.log("Array sebagai string:", stringArray); 

// reverse: Membalikkan urutan nilai dalam array
let dibalik = gabungan.reverse();
console.log("Array setelah dibalik:", dibalik); 

// slice: Menyalin sebagian nilai dari array
let sebagian = dibalik.slice(1, 4);
console.log("Hasil slice:", sebagian); 

// sort: Mengurutkan nilai dalam array
let diurutkan = gabungan.sort();
console.log("Array setelah diurutkan:", diurutkan);

let hewan = ["Kucing", "Anjing", "Kelinci", "Burung", "Ikan"];

// splice: Menghapus 2 elemen dari indeks 1
hewan.splice(1, 4, "Kodok", "Angsa");
console.log(hewan);
