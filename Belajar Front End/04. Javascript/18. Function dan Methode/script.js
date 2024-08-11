// function
function jumlahkanDuaAngka(angka1, angka2) {
    return angka1 + angka2;
}

let hasil = jumlahkanDuaAngka(5, 3);
console.log(hasil);  

function sapa(nama) {
    return `Halo, ${nama}!`;
}

let sapaan = sapa("Indrawansyah");
console.log(sapaan);

// lexical
function luar() {
    let variabelLuar = 'Saya berada di luar!';

    function dalam() {
        let variabelDalam = 'Saya berada di dalam!';
        console.log(variabelLuar); // Ini akan mengakses variabel dari lingkup luar
        console.log(variabelDalam); // Ini mengakses variabel dari lingkup dalam
    }

    dalam();
    // console.log(variabelDalam); // Ini akan menghasilkan error karena variabelDalam tidak ada di lingkup luar
}

luar();


// expression
const tambahkan = function(angka1, angka2) {
    return angka1 + angka2;
};

// Memanggil fungsi dengan angka
console.log(tambahkan(5, 7)); // Output: 12
console.log(tambahkan(10, 20)); // Output: 30
