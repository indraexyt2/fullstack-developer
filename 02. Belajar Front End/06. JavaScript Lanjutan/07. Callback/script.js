// callbacks

// synchronous callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama Anda');
//     callback(nama);
// }

// tampilkanPesan(halo);

// tampilkanPesan(nama => alert(`Halo ${nama}`));

// const mhs = [
//     {
//         nama: "Indrawansyah",
//         nim: "12345678",
//         jurusan: "Teknik Geofisika",
//         idDosenWali: 1
//     },
//     {
//         nama: "Rahmawati",
//         nim: "87654321",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 2
//     },
//     {
//         nama: "Budi Santoso",
//         nim: "11223344",
//         jurusan: "Teknik Elektro",
//         idDosenWali: 1
//     }
// ];

// mhs.forEach(m => console.log(m.nama));

// asynchronous callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send()
}

getDataMahasiswa('data/mahasiswa.json', results => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => {
        console.log(`${m.nama}`)
    });
}, () => {
    
});


function sudahMakan() {
    console.log('Apakah kamu sudah makan?')
}

function sayHello(nama, sudahMakan) {
    console.log(`Halo ${nama}`)
    sudahMakan();
}

let haloIndra = sayHello('Indra', sudahMakan);
console.log(haloIndra)