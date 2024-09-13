// Data String

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = "Indra berkata \"Halo, apa kabar mu?\"";
console.log(data1)
let data2 = "Putri menjawab \n\"Aku baik-baik saja\"";
console.log(data2)

// 2. literal string
let namaDepan = "Indra";
let namaBelakang = "Wansyah"; 
let umur = 23;
let namaLengkap = namaDepan + " " + namaBelakang + " " + "saya berusia" + " " + umur;
console.log(namaLengkap)

// lebih rapih menggunakan ` `
let namaLengkap2 = `${namaDepan} ${namaBelakang} saya berusia ${umur}`
console.log(namaLengkap2)