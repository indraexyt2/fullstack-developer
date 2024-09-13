const http = require('http');
const fs = require('fs'); // Mengimpor modul File System
const path = require('path'); // Mengimpor modul Path

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Membaca dan mengirim file HTML
        fs.readFile(path.join(__dirname, 'page', 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error di server!');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content); // Mengirim konten file ke klien
            }
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'page', 'about.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error di server!');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Halaman Tidak Ditemukan</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
