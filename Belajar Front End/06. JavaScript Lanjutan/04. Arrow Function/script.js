// Function Expression
// const tampilNama = function(nama) {
//     return(`halo ${nama}`);
// }


// Arrow Function

// 1 parameter
const tampilNama = nama => `halo ${nama}`;
console.log(tampilNama('Indra'));

// 
let mahasiswa = ['Indrawansyah', 'Putri Yuhawati', 'Kiki Saputri'];
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}))
console.table(jumlahHuruf);

// this
// Construction Function
// const Mahasiswa2 = function () {
//     this.nama = 'Indrawansyah';
//     this.umur = 23
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Indra = new Mahasiswa2();
// Indra.sayHello();

// obbject literal
let mahasiswa1 = {
    nama: 'Indrawansyah',
    umur: 23,
    sayHello: () => { // arrow function
        console.log(`Halo ${this.nama},  saya ${this.umur} tahun!`)
    }
}



