const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const pertanyaan = (pertanyaannya) => {
    return new Promise(resolve => {
        rl.question(pertanyaannya, (jawaban) => resolve(jawaban))
    })
}

async function ambilData() {
    try {
        const nama = await pertanyaan('Nama lengkap Anda: ');
        const nim = await pertanyaan('Masukan NIM Anda: ');

        const newMahasiswa = {
            nama: nama,
            nim: nim,
        }

        const file = await fs.readFile('data/contact.json', 'UTF-8');
        const listMahasiswa = JSON.parse(file);

        listMahasiswa.push(newMahasiswa);
        await fs.writeFile('data/contact.json', JSON.stringify(listMahasiswa, null, 2));

    } catch(error) {
        console.log(`Terjadi kesalahan ${error}`)
    } finally {
        rl.close();
    }
}

async function hapusData() {
    try {
        const nim = await pertanyaan('Masukan NIM mahasiswa yang ingin dihapus: ');

        const file = await fs.readFile('data/contact.json', 'UTF-8');
        const listMahasiswa = await JSON.parse(file);

        const index = listMahasiswa.findIndex(mahasiswa => mahasiswa.nim === nim);

        if (index !== -1) {
            listMahasiswa.splice(index, 1);
            await fs.writeFile('data/contact.json', JSON.stringify(listMahasiswa, null, 2));
        } else {
            console.log("NIM Tidak Ditemukan!")
        }
    } catch(error) {
        console.log(`Terjadi error: ${error}`)
    } finally {
        rl.close();
    }
}

async function main() {
    try {
        const pilihan = await pertanyaan('Apakah Anda ingin [tambah/hapus] data mahasiswa?')

        if(pilihan.toLowerCase() === 'tambah') {
            await ambilData();
        } else if (pilihan.toLowerCase() === 'hapus') {
            await hapusData();
        } else {
            console.log('Pilihan tidak valid. Silakan pilih "tambah" atau "hapus".')
        }
    } catch(error) {
        console.log(`Terjadi error: ${error}`)
    } finally {
        rl.close();
    }
}

main()