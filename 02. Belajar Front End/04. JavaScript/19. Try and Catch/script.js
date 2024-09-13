
try {
    let result = 10 / 0; // Mungkin ada kesalahan logika atau lainnya
    console.log("Hasil:", result);
    
    // Misalkan kode di bawah ini memiliki potensi menghasilkan kesalahan
    let user = null;
    console.log(user.name); // Ini akan menghasilkan kesalahan karena user adalah null
  } catch (error) {
    console.log("Terjadi kesalahan:", error.message);
  }


let jsonData = '{"name": "Indra", "age": 25}';

try {
  // Mencoba memparsing string JSON menjadi objek JavaScript
  let user = JSON.parse(jsonData);

  // Akses properti dari objek yang dihasilkan
  console.log(`Nama: ${user.name}, Usia: ${user.age}`);
  
  // Kesalahan sengaja: Memanggil properti yang tidak ada
  console.log(user.address.city); // Akan menyebabkan kesalahan karena 'address' tidak ada
} catch (error) {
  // Tangani kesalahan jika parsing JSON atau akses properti gagal
  console.log("Terjadi kesalahan:", error.message);
}
