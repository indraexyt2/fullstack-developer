let angka_1, angka_2, hasil;

document.getElementById("jumlah").onclick = function() {
    angka_1 = document.getElementById("angka_1").value;
    angka_2 = document.getElementById("angka_2").valueAsNumber; 

    hasil = parseFloat(angka_1) + angka_2;

    document.getElementById("hasil").textContent = hasil;
    
}