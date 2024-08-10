// For Of
const kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"];
for (let namaKota of kota) {
    console.log(namaKota);
}

const kelompok = [
    ["Andi", "Budi", "Citra"],
    ["Dewi", "Eka", "Fajar"],
    ["Gina", "Hadi", "Indra"]
];

let AnggotaKelompok = 1;
for (let namaKelompok of kelompok){
    console.log(`Kelompok ${AnggotaKelompok}`);
    for (namaAnggota of namaKelompok) {
        console.log(`${namaAnggota}`)
        AnggotaKelompok++
    }
    console.log(" ")
}

const dataSiswa = [
    {
        kelas: "10A",
        siswa: [
            { nama: "Andi", nilai: { matematika: 80, bahasa: 85, fisika: 78 } },
            { nama: "Budi", nilai: { matematika: 70, bahasa: 75, fisika: 82 } },
            { nama: "Citra", nilai: { matematika: 90, bahasa: 88, fisika: 92 } }
        ]
    },
    {
        kelas: "10B",
        siswa: [
            { nama: "Dewi", nilai: { matematika: 85, bahasa: 80, fisika: 89 } },
            { nama: "Eka", nilai: { matematika: 75, bahasa: 70, fisika: 85 } },
            { nama: "Fajar", nilai: { matematika: 95, bahasa: 90, fisika: 94 } }
        ]
    },
    {
        kelas: "10C",
        siswa: [
            { nama: "Gina", nilai: { matematika: 88, bahasa: 86, fisika: 91 } },
            { nama: "Hadi", nilai: { matematika: 82, bahasa: 79, fisika: 84 } },
            { nama: "Indra", nilai: { matematika: 78, bahasa: 82, fisika: 80 } }
        ]
    }
];

for (let i = 0; i < dataSiswa.length; i++) {
    console.log(`Kelas: ${dataSiswa[i].kelas}`);
    
    // Loop untuk mengiterasi setiap siswa dalam kelas
    for (let j = 0; j < dataSiswa[i].siswa.length; j++) {
        console.log(`Nama Siswa: ${dataSiswa[i].siswa[j].nama}`);
        console.log(`Nilai Matematika: ${dataSiswa[i].siswa[j].nilai.matematika}`);
        console.log(`Nilai Bahasa: ${dataSiswa[i].siswa[j].nilai.bahasa}`);
        console.log(`Nilai Fisika: ${dataSiswa[i].siswa[j].nilai.fisika}`);
        console.log('---');
    }

    console.log('');
}


const universitas = [
    {
        fakultas: "Teknik",
        jurusan: [
            { namaJurusan: "Informatika", mahasiswa: [
                { nama: "Arif", IPK: 3.5 },
                { nama: "Budi", IPK: 3.7 },
                { nama: "Citra", IPK: 3.9 }
            ]},
            { namaJurusan: "Elektro", mahasiswa: [
                { nama: "Dewi", IPK: 3.4 },
                { nama: "Eko", IPK: 3.8 },
                { nama: "Farhan", IPK: 3.6 }
            ]}
        ]
    },
    {
        fakultas: "Ekonomi",
        jurusan: [
            { namaJurusan: "Manajemen", mahasiswa: [
                { nama: "Gina", IPK: 3.6 },
                { nama: "Hendra", IPK: 3.2 },
                { nama: "Indri", IPK: 3.7 }
            ]},
            { namaJurusan: "Akuntansi", mahasiswa: [
                { nama: "Joko", IPK: 3.5 },
                { nama: "Kiki", IPK: 3.8 },
                { nama: "Lina", IPK: 3.9 }
            ]}
        ]
    },
    {
        fakultas: "Sastra",
        jurusan: [
            { namaJurusan: "Sastra Inggris", mahasiswa: [
                { nama: "Mira", IPK: 3.7 },
                { nama: "Nina", IPK: 3.3 },
                { nama: "Oki", IPK: 3.8 }
            ]},
            { namaJurusan: "Sastra Jepang", mahasiswa: [
                { nama: "Putu", IPK: 3.9 },
                { nama: "Qori", IPK: 3.4 },
                { nama: "Rina", IPK: 3.6 }
            ]}
        ]
    }
];


for (let dataMahasiswa of universitas) {
    console.log(" ")
    console.log(`Fakultas ${dataMahasiswa.fakultas}`);

    for (let Prodi of dataMahasiswa.jurusan) {
        console.log(" ")
        console.log(`-- Jurusan ${Prodi.namaJurusan}`)

        for (let namaMahasiswa of Prodi.mahasiswa) {
            console.log(`Nama = ${namaMahasiswa.nama}, IPK = ${namaMahasiswa.IPK}`)
        }
    }
}

// for in
const dataMahasiswa = {
    Indra: {
        nilai: 50,
        IPK: 4.0,
        alamat: {
            jalan: "Jl. Merdeka No. 10",
            kota: "Jakarta",
            kodePos: "10110"
        },
        mataKuliah: ["Fisika", "Matematika", "Kimia"]
    },
    Rina: {
        nilai: 75,
        IPK: 3.8,
        alamat: {
            jalan: "Jl. Pahlawan No. 15",
            kota: "Bandung",
            kodePos: "40115"
        },
        mataKuliah: ["Biologi", "Fisika", "Bahasa Inggris"]
    },
    Budi: {
        nilai: 85,
        IPK: 3.9,
        alamat: {
            jalan: "Jl. Kartini No. 25",
            kota: "Surabaya",
            kodePos: "60125"
        },
        mataKuliah: ["Matematika", "Sejarah", "Kimia"]
    },
    Siti: {
        nilai: 90,
        IPK: 4.0,
        alamat: {
            jalan: "Jl. Sudirman No. 35",
            kota: "Yogyakarta",
            kodePos: "55135"
        },
        mataKuliah: ["Fisika", "Matematika", "Kimia"]
    }
};

// Menggunakan for...in untuk iterasi properti dalam objek
for (let nama in dataMahasiswa) {
    console.log("Nama: " + nama);
    console.log("Nilai: " + dataMahasiswa[nama].nilai);
    console.log("IPK: " + dataMahasiswa[nama].IPK);
    
    // Mengakses alamat
    let alamat = dataMahasiswa[nama].alamat;
    console.log("Alamat: " + alamat.jalan + ", " + alamat.kota + ", " + alamat.kodePos);
    
    // Mengakses daftar mata kuliah
    console.log("Mata Kuliah:");
    for (let i = 0; i < dataMahasiswa[nama].mataKuliah.length; i++) {
        console.log("- " + dataMahasiswa[nama].mataKuliah[i]);
    }
    
    console.log("-------------");
}
