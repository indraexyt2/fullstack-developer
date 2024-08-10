// struktur data obbject

let buku = {
    judul: "Belajar JavaScript",
    penulis: "Indrawansyah",
    tahunTerbit: 2024
};

console.log(buku);

let mahasiswa = {
    nama: "Indrawansyah",
    umur: 22,
    jurusan: "Fisika",
    universitas: "Universitas Nasional",
    mataKuliah: ["Fisika Dasar", "Geofisika", "Matematika"],
    alamat: {
        jalan: "Jl. Merdeka No. 10",
        kota: "Jakarta",
        kodePos: 12345
    },
};

document.getElementById("tombol").onclick = function() {
    console.log(`Nama: ${mahasiswa.nama}, Alamat: ${mahasiswa.alamat.jalan}, Kota: ${mahasiswa.alamat.kota}`);
    document.getElementById("hasil").textContent = `Nama: ${mahasiswa.nama}, Alamat: ${mahasiswa.alamat.jalan}, Kota: ${mahasiswa.alamat.kota}`;
}