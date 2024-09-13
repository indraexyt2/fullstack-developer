// selection

// document.getElementById('')
let header = document.getElementById('judul');
header.innerHTML = "Latihan Javascript DOM"
header.style.color = "red"

// documen.getElementsByTagName('')
let paragraf = document.getElementsByTagName('p');
paragraf[3].innerHTML = "Paragraf diubah dengan Javascript"

for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName(''
let list = document.getElementsByClassName('list');
list[0].innerHTML = "List diubah dengan Javascript";

let list2 = document.getElementsByClassName('list')[1];
list2.innerHTML = "Ini juga diubah dengan Javascript";

// document.querySelectorAll('')
let semuaList = document.querySelectorAll('a');
semuaList.forEach(function(item, index) {
    item.innerHTML = `Item update ${index + 1}`
});