// Manipulasi Element

// innerHTML
let pPengantar = document.querySelector('section p');
pPengantar.innerHTML = "Ini adalah paragraf yang diubah menggunakan innerHTML pada JavaScript."

// style.<property>
let header = document.querySelector('header');
header.style.backgroundColor = "lightblue"

// setAttribute()
let h2 = document.getElementsByTagName('h2');
for (let i = 0; i < h2.length; i++) {
    h2[i].setAttribute('class', 'h2'); // ini akan menimpa
} 

// classList()
// classList.add()
let fitur = document.querySelectorAll('section ul li');
fitur.forEach(function(item) {
    item.classList.add('fitur-item')
})

// classList.replace()
let fitur = document.querySelectorAll('section ul li');
fitur.forEach(function(item) {
    item.classList.replace('fitur-item', 'fitur-item2')
})

// classList.toggle()
let uWarna = document.getElementById('ubah-warna');
uWarna.onclick = function() {
    uWarna.classList.toggle('ubah-warna')
}

