// =========================
// 1. Mengimpor Modul events
// =========================

const EventEmitter = require('events'); // Mengimpor modul 'events'

// Membuat instance EventEmitter
const eventEmitter = new EventEmitter();

// =========================
// 2. Mendefinisikan Event dan Event Listener
// =========================

/**
 * Event-driven programming bekerja dengan memicu (emit) dan menangkap (listen) event.
 * Sebuah event 'greet' didefinisikan dan didengarkan oleh event listener.
 */

// Menambahkan event listener untuk event 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`Halo, ${name}! Selamat datang di event-driven programming Node.js.`);
});

// Menambahkan event listener kedua untuk event 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`${name} telah diproses oleh listener kedua.`);
});

// =========================
// 3. Memicu (emit) Event
// =========================

/**
 * Event 'greet' dipicu dengan data (nama) yang akan diproses oleh event listener yang sudah didefinisikan.
 */
eventEmitter.emit('greet', 'Indrawansyah');
