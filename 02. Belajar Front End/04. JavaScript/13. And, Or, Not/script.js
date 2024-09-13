// and (&&)
// true && true = true (sisanya false)

// Mengambil input dari pengguna
let umur = 20;
let statusSekarang = "mahasiswa";

// Mengonversi umur dari string ke integer
umur = parseInt(umur);

if (umur > 18 && statusSekarang === "mahasiswa") {
    console.log("Anda adalah mahasiswa dewasa.");
} else if (umur > 18 && statusSekarang === "bekerja") {
    console.log("Anda adalah pekerja dewasa.");
} else if (umur <= 18 && statusSekarang === "mahasiswa") {
    console.log("Anda adalah mahasiswa muda.");
} else {
    console.log("Data tidak cocok dengan kondisi yang ditentukan.");
}

// or (||)
// ada satu true maka hasilnya true
let role = "admin";

if (role === "admin" || role === "superuser") {
    console.log("Anda memiliki akses penuh ke sistem.");
} else {
    console.log("Anda memiliki akses terbatas.");
}

// not (!)
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Anda belum masuk. Silakan login terlebih dahulu.");
} else {
    console.log("Selamat datang kembali!");
}


