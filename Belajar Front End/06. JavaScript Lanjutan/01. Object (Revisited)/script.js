// 1. Object Literal
let mahasiswa1 = {
    nama: 'Indrawansyah',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }
}

let mahasiswa2 = {
    nama: 'Kiki Saputri',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }
}

// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }

    return(mahasiswa)
}

let Indrawansyah = Mahasiswa('Indrawansyah', 10)
let kikiSaputri = Mahasiswa('Kiki Saputri', 10)

// 
function luasPersegiPanjang(panjang,lebar) {
    let hasil = panjang * lebar;
    console.log(hasil);
}

luasPersegiPanjang(5, 10)
luasPersegiPanjang(10, 20)

//
function Buku(judul, halaman) {
    let buku = {};
    buku.judul = judul;
    buku.halaman = halaman;

    buku.baca = function(halamanDibaca) {
        this.halaman -= halamanDibaca;
        console.log(`Buku dengan judul ${this.judul}, halaman yang belum dibaca ${this.halaman}`)
    }

    return(buku);
}

let bJavascript = Buku('Pemrograman JavaScript', 200);



// 3. Constructor Function keyword new
function Mobil(merk, model, bensin) {
    this.merk = merk;
    this.model = model;
    this.bensin = bensin;

    this.jalan = function(kilometer) {
        this.bensin -= kilometer;
        console.log(`Anda sudah melaju sekitar ${kilometer} km, bensin tersisa ${this.bensin}`)
    }

    this.isiBensin = function(liter) {
        this.bensin += liter;
        console.log(`Isi bensin sekitar ${liter} liter, bensin sekarang ${this.bensin} liter`)
    }
}

let mobilToyota = new Mobil('Toyota', 'Avanza', 100);

// 4. Object.create()
const jenisKomputer = {
    nyalakan: function() {
        console.log(`Kompter ${this.nama} dinyakakan, daya yang digunakan adalah ${this.daya} watt`)
    },

    overclock: function() {
        this.daya += this.daya;
        console.log(`Kompter ${this.nama} dinyakakan, daya yang digunakan adalah ${this.daya} watt`)
    },

    matikan: function() {
        this.daya = this.dayaAwal;
    }
}

function Komputer(nama, daya) {
    let komputer = Object.create(jenisKomputer)
    komputer.nama = nama;
    komputer.daya = daya;
    komputer.dayaAwal = daya;

    return(komputer)
}

let pcGaming = Komputer('Asus ROG', 200)

// protoype()
function Smartphone(merk, model, baterai) {
    this.merk = merk;
    this.model = model;
    this.baterai = baterai;
    hpMati = false;
}

Smartphone.prototype.isiBaterai = function(jumlah) {
    if (this.baterai + jumlah > 100) {
        this.baterai = 100;
    }
    console.log(`Baterai ${this.baterai}%`)
}

Smartphone.prototype.matikan = function() {
    hpMati = true;
}

Smartphone.prototype.nyalakan = function() {
    hpMati = false;
}

Smartphone.prototype.gunakanAplikasi = function(namaAplikasi, durasiPenggunaan) {
    if (hpMati === true) {
        console.log(`Aplikasi tidak dapat dijalankan, HP Anda mati`);
    } else {
        this.baterai -= durasiPenggunaan;
        console.log(`Anda menggunakan aplikasi ${namaAplikasi} selama ${durasiPenggunaan} menit, sisa bateri ${this.baterai}%`);
    }

}

let iPhone = new Smartphone('Iphone', 'Iphone 15', 100);

// class
class Laptop {
    constructor(merk, model, baterai) {
        this.merk = merk;
        this.model = model;
        this.baterai = baterai;
    }

    gunakanProgram(program, durasi) {
        this.baterai -= durasi;
        console.log(`Laptop merk ${this.merk}, model ${this.model}, telah menggunakan program ${program} selama ${durasi} menit, sisa baterai ${this.baterai}%`)
    }
}

let Lennovo = new Laptop('Lennovo', 'LOQ', 100)