// Closure
function init() {
    return function(nama) {
        console.log(nama)
    }
}
let panggilNama = init();
panggilNama('Indrawansyah')
panggilNama('Kiki Saputri')

function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam= ucapkanSalam('Malam');

selamatPagi('Indrawansyah');

// latihan

function buatAccount () {
    let saldo = 0;
    return {
        deposit: function(jumlah) {
            saldo += jumlah;
            console.log(`Saldo anda sekarang adalah Rp${saldo}`)
        },
        tarik: function(jumlah) {
            saldo -= jumlah;
            console.log(`Saldo anda sekarang adalah Rp${saldo}`)
        },
        cekSaldo: function() {
            console.log(`Saldo anda sekarang adalah Rp${saldo}`)
        },
        transfer: function(jumlah, tujuan) {
            if ( jumlah <= saldo) {
                tujuan.deposit(jumlah);
                saldo -= jumlah;
                console.log(`Berhasil transfer ke ${tujuan}, sisa saldo ${saldo}`)
            } else {
                console.log('Saldo tidak mencukupi untuk transfer.');
            }
        }
    }
}

let akunA = buatAccount();
let akunB = buatAccount();
