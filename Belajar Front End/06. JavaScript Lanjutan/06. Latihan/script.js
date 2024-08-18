function tambahBarang() {

    // Ambil nilai dari input form
    const namaBarang = document.getElementById('nama-barang').value;
    const jumlahBarang = document.getElementById('jumlah-barang').value;
    const hargaSatuan = document.getElementById('harga-barang-satuan').value;
    const hargTotal = jumlahBarang * hargaSatuan;
    const kategoriBarang = document.getElementById('kategori-barang').value;
    const tBody = document.querySelector('table tbody');

    // Hitung jumlah baris yang ada untuk menentukan nomor urut
    const nomorUrut = tBody.rows.length + 1;

    // Buat elemen <tr> dan <td>
    let tr = document.createElement('tr');

    let tdNomor = document.createElement('td');
    let tdNamaBarang = document.createElement('td');
    let tdJumlahBarang = document.createElement('td');
    let tdHargaTotal = document.createElement('td');
    let tdKategori = document.createElement('td');

    // Isi nilai ke dalam elemen <td>
    tdNomor.textContent = nomorUrut; // Masukkan nomor urut
    tdNamaBarang.textContent = namaBarang;
    tdJumlahBarang.textContent = jumlahBarang;
    tdHargaTotal.textContent = hargTotal;
    tdKategori.textContent = kategoriBarang;

    // Tambahkan <td> ke dalam <tr>
    tr.appendChild(tdNomor);
    tr.appendChild(tdNamaBarang);
    tr.appendChild(tdJumlahBarang);
    tr.appendChild(tdHargaTotal);
    tr.appendChild(tdKategori);

    // Tambahkan <tr> ke dalam <tbody>
    tBody.appendChild(tr);

    // Kosongkan input setelah data dimasukkan
    document.getElementById('nama-barang').value = '';
    document.getElementById('jumlah-barang').value = '';
    document.getElementById('harga-barang-satuan').value = '';
    document.getElementById('kategori-barang').value = '';
}

// Tambahkan event listener pada tombol submit
const tombolSubmit = document.getElementById('submit');
tombolSubmit.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah submit form yang menyebabkan refresh halaman
    tambahBarang(); // Panggil fungsi tambahBarang
});

function filterBarang() {
    const kategoriFilter = document.getElementById('filter-kategori').value.toLowerCase();
    const tBody = document.querySelector('table tbody');
    const rows = tBody.getElementsByTagName('tr');
    let visibleRowIndex = 0; // Variabel untuk melacak nomor urut yang terlihat

    // Looping setiap baris pada tabel
    for (let i = 0; i < rows.length; i++) {
        let kategori = rows[i].getElementsByTagName('td')[4].textContent.toLowerCase();
        
        if (kategori.includes(kategoriFilter) || kategoriFilter === '') {
            rows[i].style.display = ''; // Tampilkan baris jika sesuai filter atau jika filter kosong
            rows[i].getElementsByTagName('td')[0].textContent = visibleRowIndex + 1; // Perbarui nomor urut
            visibleRowIndex++; // Tingkatkan nomor urut untuk baris berikutnya
        } else {
            rows[i].style.display = 'none'; // Sembunyikan baris jika tidak sesuai filter
        }
    }
}

// Tambahkan event listener pada select filter
const selectFilter = document.getElementById('filter-kategori');
selectFilter.addEventListener('change', filterBarang);


