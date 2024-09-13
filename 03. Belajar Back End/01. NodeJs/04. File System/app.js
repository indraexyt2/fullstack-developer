const fs = require('fs').promises; // Menggunakan versi Promise dari modul 'fs'
const path = require('path');
const readline = require('readline'); // Menggunakan modul readline untuk mendapatkan input dari pengguna

const filePath = path.join(__dirname, 'files');
const fileName = 'data.json'; // Nama file JSON
const fileFullPath = path.join(filePath, fileName); // Path lengkap untuk file JSON

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menanyakan pertanyaan secara berurutan
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function manageFileSystem() {
    try {
        // Periksa apakah folder 'files' ada, jika tidak maka buat folder tersebut
        if (!(await fs.stat(filePath).catch(() => false))) {
            await fs.mkdir(filePath); // Membuat folder jika belum ada
            console.log(`Folder '${filePath}' siap.`);
        }

        // Meminta data pengguna
        const nama = await askQuestion('Masukkan Nama: ');
        const nim = await askQuestion('Masukkan NIM: ');
        const alamat = await askQuestion('Masukkan Alamat: ');

        // Membuat objek data baru
        const newData = {
            nama: nama,
            nim: nim,
            alamat: alamat
        };

        // Memeriksa apakah file JSON sudah ada
        let fileData = [];

        try {
            // Jika file ada, baca data lama
            const jsonData = await fs.readFile(fileFullPath, 'utf-8');
            fileData = JSON.parse(jsonData); // Parse data lama dari JSON
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log(`File '${fileName}' belum ada, akan dibuat baru.`);
            } else {
                throw err;
            }
        }

        // Menambahkan data baru ke data lama
        fileData.push(newData);

        // Menulis semua data (lama + baru) ke file JSON
        await fs.writeFile(fileFullPath, JSON.stringify(fileData, null, 2)); // Menyimpan file JSON dengan format yang rapi
        console.log(`Data berhasil ditambahkan ke file '${fileName}' dengan format JSON.`);

        // Membaca file JSON yang baru ditulis
        const updatedJsonData = await fs.readFile(fileFullPath, 'utf-8');
        console.log(`Isi file '${fileName}':\n${updatedJsonData}`);

        // Menunggu input dari pengguna untuk menghapus file
        const answer = await askQuestion('Ketik "hapus" untuk menghapus file: ');
        if (answer.toLowerCase() === 'hapus') {
            await fs.unlink(fileFullPath);
            console.log(`File '${fileName}' berhasil dihapus.`);
        } else {
            console.log('File tidak dihapus.');
        }

    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    } finally {
        rl.close(); // Menutup interface readline
    }
}

// Menjalankan fungsi
manageFileSystem();
