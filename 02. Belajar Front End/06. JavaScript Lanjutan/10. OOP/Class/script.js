class Produk {
    constructor(nama, harga, stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    jual(jumlah) {
        if (this.stok >= jumlah) {
            this.stok -= jumlah;
            return this.harga * jumlah;
        } else {
            alert(`Stok tidak mencukupi untuk ${this.nama}. Stok saat ini: ${this.stok}`);
            return 0;
        }
    }

    tambahStok(jumlah) {
        this.stok += jumlah;
    }

    infoProduk() {
        return `${this.nama} - Harga: Rp${this.harga} - Stok: ${this.stok}`;
    }
}

class Kasir {
    constructor() {
        this.daftarProduk = [];
        this.keranjang = [];
        this.totalHarga = 0;
        this.riwayatTransaksi = [];
    }

    tambahProduk(nama, harga, stok) {
        const produkBaru = new Produk(nama, harga, stok);
        this.daftarProduk.push(produkBaru);
        this.renderProdukList();
        this.updateDropdownPenjualan();
    }

    tambahKeKeranjang(namaProduk, jumlah) {
        const produk = this.daftarProduk.find(p => p.nama === namaProduk);
        if (produk && produk.stok >= jumlah) {
            this.keranjang.push({ produk, jumlah });
            this.totalHarga += produk.harga * jumlah;
            document.getElementById('totalHarga').innerText = this.totalHarga;
        } else {
            alert('Stok tidak mencukupi atau produk tidak ditemukan.');
        }
    }

    jualProduk() {
        if (this.keranjang.length === 0) {
            alert("Keranjang kosong!");
            return;
        }

        let transaksiDetail = 'Transaksi: ';
        this.keranjang.forEach(item => {
            item.produk.jual(item.jumlah);
            transaksiDetail += `${item.jumlah} ${item.produk.nama}, `;
        });

        transaksiDetail += `Total: Rp${this.totalHarga}`;
        this.riwayatTransaksi.push(transaksiDetail);
        this.renderRiwayatTransaksi();

        // Reset keranjang dan total harga setelah transaksi
        this.keranjang = [];
        this.totalHarga = 0;
        document.getElementById('totalHarga').innerText = this.totalHarga;
        this.renderProdukList();
    }

    renderProdukList() {
        const daftarProdukEl = document.getElementById('daftarProduk');
        daftarProdukEl.innerHTML = '';
        this.daftarProduk.forEach(produk => {
            const li = document.createElement('li');
            li.innerText = produk.infoProduk();
            daftarProdukEl.appendChild(li);
        });
    }

    updateDropdownPenjualan() {
        const produkPenjualanEl = document.getElementById('produkPenjualan');
        produkPenjualanEl.innerHTML = '';
        this.daftarProduk.forEach(produk => {
            const option = document.createElement('option');
            option.value = produk.nama;
            option.innerText = produk.nama;
            produkPenjualanEl.appendChild(option);
        });
    }

    renderRiwayatTransaksi() {
        const riwayatTransaksiEl = document.getElementById('riwayatTransaksi');
        riwayatTransaksiEl.innerHTML = '';
        this.riwayatTransaksi.forEach(riwayat => {
            const li = document.createElement('li');
            li.innerText = riwayat;
            riwayatTransaksiEl.appendChild(li);
        });
    }
}

// Inisialisasi objek kasir
const kasir = new Kasir();

// Event listener untuk menambah produk
document.getElementById('tambahProdukBtn').addEventListener('click', () => {
    const namaProduk = document.getElementById('namaProduk').value;
    const hargaProduk = parseInt(document.getElementById('hargaProduk').value);
    const stokProduk = parseInt(document.getElementById('stokProduk').value);

    if (namaProduk && hargaProduk > 0 && stokProduk > 0) {
        kasir.tambahProduk(namaProduk, hargaProduk, stokProduk);
        document.getElementById('namaProduk').value = '';
        document.getElementById('hargaProduk').value = '';
        document.getElementById('stokProduk').value = '';
    } else {
        alert('Data produk tidak valid!');
    }
});

// Event listener untuk menambah produk ke keranjang
document.getElementById('tambahKeranjangBtn').addEventListener('click', () => {
    const namaProduk = document.getElementById('produkPenjualan').value;
    const jumlahPenjualan = parseInt(document.getElementById('jumlahPenjualan').value);

    if (jumlahPenjualan > 0) {
        kasir.tambahKeKeranjang(namaProduk, jumlahPenjualan);
        document.getElementById('jumlahPenjualan').value = '';
    } else {
        alert('Jumlah penjualan tidak valid!');
    }
});

// Event listener untuk menjual produk
document.getElementById('jualProdukBtn').addEventListener('click', () => {
    kasir.jualProduk();
});
