// filter()
// for
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        angkaBaru.push(angka[i]);
    }
}
console.log(angkaBaru)

// filter
const angka2 = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const angkaBaru2 = angka2.filter(a => a >= 3)
console.log(angkaBaru2)

// map()
const angkaBaru3 = angka2.map(a => a * 2)
console.log(angkaBaru3)

// reduce()
const angkaBaru4 = angka2.reduce((accumulator, currentValue) => 
accumulator + currentValue, 5) // 5 nilai awal
console.log(angkaBaru4)

// method chaining
const hasil = angka2.filter(a => a >= 5)
    .map(a => a * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(hasil)








