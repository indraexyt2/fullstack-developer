function AkunBank(nama, saldoAwal) {
    this.nama = nama;
    this.saldo = saldoAwal;

    this.cekSaldo = function() {
        console.log(`Saldo akun ${this.nama}: Rp ${this.saldo}`)
    };

    this.deposit = function(jumlah) {
        if(jumlah > 0) {
            this.saldo += jumlah;
            console.log(`Deposit Rp${jumlah} berhasil. Saldo ${this.nama}: ${this.saldo}`);
        } else {
            console.log(`Masukkan jumlah deposit yang valid!`)
        }
    };

    this.transfer = function(jumlah, akunTujuan) {
        if(jumlah > 0 && jumlah < this.saldo) {
            this.saldo -= jumlah;
            akunTujuan.terimaTransfer(jumlah);
            console.log(`Berhasil mengirim Rp${jumlah} ke ${akunTujuan.nama}. Sisa saldo Anda: Rp${this.saldo}`)
        }
    };

    this.terimaTransfer = function(jumlah) {
        this.saldo += jumlah;
        console.log(`Menerima transfer Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`)
    }

}

const Indra = new AkunBank('Indra', 5000);
const Putri = new AkunBank('Putri', 5000);

Indra.cekSaldo()
Indra.deposit(5000)
Indra.transfer(1000, Putri)
Putri.cekSaldo()