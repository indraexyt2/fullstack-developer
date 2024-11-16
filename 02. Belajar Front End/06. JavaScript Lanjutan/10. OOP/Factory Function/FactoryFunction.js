function buatAkunBank(nama, saldoAwal) {
    let saldo = saldoAwal;

    return {
        nama,
        cekSaldo() {
            console.log(`Saldo ${this.nama}: Rp${saldo}`)
        },

        deposit( jumlah ) {
            const { nama } = this;
            if(jumlah > 0) {
                saldo += jumlah;
                console.log(`Rp${jumlah} berhasil ditambahkan ke akun ${nama}, saldo Anda sekarang Rp${saldo}`);
            } else {
                console.log(`Masukkan jumlah deposit yang valid`)
            }
        },
        transfer( jumlah, akunTujuan ) {
            const { nama } =  this;
            if(jumlah > 0 && jumlah <= saldo) {
                saldo -= jumlah;
                setTimeout(() => {
                    akunTujuan.terimaTransfer(jumlah);
                }, 300)
                console.log(`Berhasil transfer ${jumlah} dari ${nama} ke akun ${akunTujuan.nama}. Saldo anda sekarang adalah ${saldo}`)
            } else {
                console.log('Jumlah transfer harus lebih besar dari nol.');
            }
        },
        terimaTransfer(jumlah) {
            const { nama } = this;
            saldo += jumlah; // Saldo bertambah pada akun tujuan
            console.log(`${nama} menerima transfer Rp${jumlah}. Saldo sekarang: Rp${saldo}`);
        }
    };
};

const Indra = buatAkunBank('Indra', 5000);
const Putri = buatAkunBank('Putri', 5000);

Indra.cekSaldo()
Indra.deposit(2000)
Indra.transfer(2000, Putri)