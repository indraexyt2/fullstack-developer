// Constructor function untuk Buku
function Buku(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
    this.tersedia = true; // Status awal: tersedia

    // Method untuk mengecek ketersediaan
    this.cekKetersediaan = function() {
        return this.tersedia ? `${this.judul} tersedia` : `${this.judul} sedang dipinjam`;
    };
}

// Constructor function untuk Anggota
function Anggota(nama) {
    this.nama = nama;
    this.bukuDipinjam = [];

    // Method untuk meminjam buku
    this.pinjamBuku = function(buku, perpustakaan) {
        if (buku.tersedia) {
            this.bukuDipinjam.push(buku);
            perpustakaan.pinjamBuku(buku);
            console.log(`${this.nama} meminjam ${buku.judul}`);
        } else {
            console.log(`${buku.judul} sedang dipinjam.`);
        }
    };

    // Method untuk mengembalikan buku
    this.kembalikanBuku = function(buku, perpustakaan) {
        const index = this.bukuDipinjam.indexOf(buku);
        if (index !== -1) {
            this.bukuDipinjam.splice(index, 1); // Menghapus dari daftar pinjaman
            perpustakaan.kembalikanBuku(buku);
            console.log(`${this.nama} mengembalikan ${buku.judul}`);
        } else {
            console.log(`${this.nama} tidak meminjam buku ini.`);
        }
    };

    // Method untuk mengecek buku yang dipinjam
    this.cekBukuDipinjam = function() {
        if (this.bukuDipinjam.length > 0) {
            console.log(`${this.nama} sedang meminjam:`);
            this.bukuDipinjam.forEach(buku => console.log(buku.judul));
        } else {
            console.log(`${this.nama} tidak meminjam buku apapun.`);
        }
    };
}

// Constructor function untuk Perpustakaan
function Perpustakaan() {
    this.koleksiBuku = [];

    // Method untuk menambah buku
    this.tambahBuku = function(buku) {
        this.koleksiBuku.push(buku);
        console.log(`${buku.judul} telah ditambahkan ke koleksi perpustakaan.`);
    };

    // Method untuk meminjam buku
    this.pinjamBuku = function(buku) {
        buku.tersedia = false;
    };

    // Method untuk mengembalikan buku
    this.kembalikanBuku = function(buku) {
        buku.tersedia = true;
    };
}

// --- Simulasi Penggunaan Sistem Manajemen Perpustakaan ---

// 1. Membuat objek perpustakaan
const perpustakaan = new Perpustakaan();

// 2. Membuat beberapa buku
const buku1 = new Buku('Harry Potter', 'J.K. Rowling');
const buku2 = new Buku('Lord of the Rings', 'J.R.R. Tolkien');

// 3. Menambahkan buku ke perpustakaan
perpustakaan.tambahBuku(buku1);
perpustakaan.tambahBuku(buku2);

// 4. Membuat objek anggota perpustakaan
const indra = new Anggota('Indra');
const putri = new Anggota('Putri');

// 5. Anggota meminjam buku
indra.pinjamBuku(buku1, perpustakaan); // Indra meminjam Harry Potter
putri.pinjamBuku(buku2, perpustakaan); // Putri meminjam Lord of the Rings
putri.pinjamBuku(buku1, perpustakaan); // Putri mencoba meminjam Harry Potter, tapi tidak bisa

// 6. Anggota mengecek buku yang dipinjam
indra.cekBukuDipinjam();
putri.cekBukuDipinjam();

// 7. Indra mengembalikan buku
indra.kembalikanBuku(buku1, perpustakaan);
putri.pinjamBuku(buku1, perpustakaan); // Putri berhasil meminjam Harry Potter setelah Indra mengembalikannya
