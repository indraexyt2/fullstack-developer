function tokoSaya () {
    let inventaris = [];
    let penjualan = [];
    return {
        tambahProduk: function(namaProduk, hargaProduk, jumlahStok) {
            let produkBaru = {
                namaProduk: namaProduk,
                hargaProduk: hargaProduk,
                jumlahStok: jumlahStok
            }

            inventaris.push(produkBaru);
        }, 

        jualProduk: function(namaProduk, jumlah, pembayaran) {
  
            let produk = inventaris.find(produk => produk.namaProduk === namaProduk);
    
            if (produk) {
                let hargaTotal = jumlah * produk.hargaProduk;
    
                if (produk.jumlahStok >= jumlah && pembayaran >= hargaTotal) {
                    produk.jumlahStok -= jumlah;
    
                    let penjualanBaru = {
                        namaProduk: namaProduk,
                        jumlah: jumlah,
                        hargaTotal: hargaTotal,
                        pembayaran: pembayaran,
                        kembalian: pembayaran - hargaTotal
                    };

                    penjualan.push(penjualanBaru);
    
                    console.log(`${namaProduk} terjual sebanyak ${jumlah} unit. Total harga: ${hargaTotal}. Kembalian: ${penjualanBaru.kembalian}`);
                } else {
                    console.log("Stok tidak mencukupi atau pembayaran kurang.");
                }
            } else {
                console.log("Produk tidak ditemukan dalam inventaris.");
            }
        },

        lihatInventatis: function() {
            return(inventaris);
        },

        lihatPenjualan: function() {
            return(penjualan);
        }
    }

}

const tokoTrisno = tokoSaya();

tokoTrisno.tambahProduk('Kapal Api Mix', 15500, 10);
tokoTrisno.tambahProduk('Indomie Goreng', 3000, 20);
tokoTrisno.tambahProduk('Aqua Botol', 5000, 15);

console.log(tokoTrisno.lihatInventatis())