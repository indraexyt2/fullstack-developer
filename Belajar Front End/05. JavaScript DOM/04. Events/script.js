// events handler

// inline html
const ubahWarnaTo = document.getElementById('change-color-btn');
function ubahWarna() {
    ubahWarnaTo.style.backgroundColor = '#3498db';
}

// method
const judulArtikel = document.querySelector('h3')
function ubahWarnaJudul() {
    judulArtikel.style.backgroundColor = '#3498db';
    judulArtikel.style.color = 'white'
}
judulArtikel.onclick = ubahWarnaJudul;

// addEventListener()
const addItemButton = document.getElementById('add-item-btn');
addItemButton.addEventListener('click', function() {
    const ul = document.getElementById('item-list');
    const liBaru = document.createElement('li')
    const input = document.getElementById('new-item-text');
    const teksLiBaru = document.createTextNode(input.value)
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru)
})

// mengisi tabel
const namaLengkap = document.getElementById('name');
const emailUser = document.getElementById('email');
const jenisKelamin = document.getElementById('gender');
const setujuTerm = document.getElementById('terms');
const tabelUser = document.querySelector('#user-table tbody')

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
    event.preventDefault();

    const trTabel = document.createElement('tr')

    const tdNama = document.createElement('td');
    tdNama.textContent = namaLengkap.value;

    const tdEmail = document.createElement('td');
    tdEmail.textContent = emailUser.value;

    const tdJenis = document.createElement('td')
    tdJenis.textContent = jenisKelamin.value;

    const tdTemrs = document.createElement('td')
    tdTemrs.textContent = setujuTerm.checked ? 'Setuju' : 'Tidak';

    const tdNomor = document.createElement('td');
    tdNomor.textContent = tabelUser.children.length + 1;

    if (setujuTerm.checked) {
        trTabel.appendChild(tdNomor)
        trTabel.appendChild(tdNama)
        trTabel.appendChild(tdEmail)
        trTabel.appendChild(tdJenis)
        trTabel.appendChild(tdTemrs)

        tabelUser.appendChild(trTabel)

        document.getElementById('registration-form').reset();
    } else {
        alert('Setujui terms')
    }

})

document.querySelectorAll('.btn-toggle-article').forEach(button => {
    button.addEventListener('click', function() {
        const article = this.parentElement;
        const paragraph = article.querySelector('p');

        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
            this.textContent = 'Sembunyikan Artikel';
        } else {
            paragraph.style.display = 'none';
            this.textContent = 'Tampilkan Artikel';
        }
    });
});
