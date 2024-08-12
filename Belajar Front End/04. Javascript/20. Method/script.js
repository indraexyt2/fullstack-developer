// method
const person = {
    name: "Indra",
    greet: function() {
      return `Halo, nama saya ${this.name}`;
    }
  };
  
// Memanggil method greet
console.log(person.greet());

// foreach method
let angka = [1, 2, 3, 4, 5];

angka.forEach(function(nilai, haha) {
    console.log('Nilai:', nilai, 'Indeks:', haha);
});

// map method