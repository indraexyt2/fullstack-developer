// manipulation node
// document.createElement() // document.createTextNode()

const pBaru = document.createElement('p');
const tekspBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru);

// simpan pBaru di akhir article home
const home = document.querySelector('#home')
home.appendChild(pBaru)


// node.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('#item-list');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
const contact = document.querySelector('#contact-form');
const emailForm = contact.querySelector('#email');
const labelEmail = contact.querySelector('#label-email');

contact.removeChild(emailForm);
contact.removeChild(labelEmail);

// parentNode.replaceChild()
const sectionContact = document.querySelector('#contact');
const pKontak = sectionContact.querySelector('p');

const h2Baru = document.createElement('h2');
const h2Teks = document.createTextNode('Kontak Kami');
h2Baru.appendChild(h2Teks);

sectionContact.replaceChild(h2Baru, pKontak)

const tKirim = document.getElementById('kirim');
tKirim.style.backgroundColor = 'lightblue'