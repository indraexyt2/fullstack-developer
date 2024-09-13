// 1. variabel dengan let
let nama = "Indrawansyah";
console.log(nama);

nama = "Putri Yuhawati" // ubah nilai variabel
console.log(nama);

// 2. variabel dengan var
var namaDepan ="Indrawansyah";
console.log(namaDepan);

namaDepan = "Putri Yuhawati" // ubah nilai variabel
console.log(namaDepan);

// 3. variabel dengan const
const TTL = "10 Maret 2022";
console.log(TTL);
// TTL = "11 Maret 2054"; gak boleh dilakukan karena sudah janji konstan

// 1. kelakukan let
let namaBelakang = "Wansyah";
{
    let namaBelakang = "Wati";
    console.log(namaBelakang);
}
console.log(namaBelakang); 

// 2. kelakuan var
var namaTengah = "Yuha";
{
    var namaTengah = "Wansyah";
    console.log(namaTengah);
}
console.log(namaTengah);

// jika tanpa keyword maka akan menjadi var
namaLengkap = "Indrawansyah si Keren";
{
    namaTengah = "Indrawansyah si Ganteng";
    console.log(namaTengah);
}
console.log(namaTengah)