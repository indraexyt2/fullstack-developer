const { MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'latihan';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung dengan server...');

        const db = client.db(dbName);

        const result = await db.collection('mahasiswa').insertOne({
            nama: 'Indrawansyah',
            nim: 'J1C020045',
        });

        console.log(`Data berhasil ditambahkan dengan _id: ${result.insertedId}`);

        const semuaMahasiswa = await db.collection('mahasiswa').find({}).toArray();
        console.log('Daftar semua mahasiswa:', semuaMahasiswa);

    } catch (error) {
        console.log(`Terjadi kesalahan: ${error}`);
    } finally {
        await client.close();
    }
}

main() 