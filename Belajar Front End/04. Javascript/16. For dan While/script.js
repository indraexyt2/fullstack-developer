// for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let total = 0;

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
    total += i;
}

let Mahasiswa = ['Indra', 'Kiki', 'Saputri'];
for (let i = 0; i <= Mahasiswa.length; i++) {
    console.log(Mahasiswa[i]);
}

let namaDepan = ["Indra", "Putri", "Kiki"];
let namaBelakang = ["Wansyah", "Yuhawati", "Saputri"];
for (i = 0; i <= namaDepan.length; i++) {
    console.log(`${namaDepan[i]} ${namaBelakang[i]}`)
}

// nested loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++)
        console.log(`${i} x ${j} = ${i * j}`)
}

// nested loop dan nested array
let jadwalKegiatan = [
    ["Olahraga", "Sarapan", "Belajar"],    // Kegiatan Hari 1
    ["Meeting", "Makan Siang", "Kerja"],   // Kegiatan Hari 2
    ["Belanja", "Memasak", "Menonton TV"]  // Kegiatan Hari 3
];

for (let m = 0; m < jadwalKegiatan.length; m++) {
    console.log(`Jadwal Kegiatan Hari ${m + 1}:`);
    for (let k = 0; k < jadwalKegiatan[m].length; k++)
        console.log(`Kegiatan ${k + 1}: ${jadwalKegiatan[m][k]}`)
}

// while
let angka = 1;

while (angka <= 5) {
    console.log(`Angka: ${angka}`);
    angka++;
}

const PASSWORD = "indra";

let pass = prompt("Masukan password");
while(pass !== PASSWORD) {
    alert("Password salah");
    pass = prompt("Masukan password");
}
alert("Password benar")