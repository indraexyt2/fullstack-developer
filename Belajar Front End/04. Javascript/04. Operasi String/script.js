// 1. charAt
let data1 = "Indrawansyah";
let index0 = data1.charAt(0);
console.log(index0);

let data2 = "Putri Yuhawati";
console.log(`Index ke 5 dari data 2 adalah ${data2.charAt(2)}`)

// 2. concat
let data3 = "Putri";
let data4 = "Yuhawati";
let data5 = data3.concat(" ", data4);
console.log(data5)

console.log(`data 3 dan 4 jika digabung adalah ${data3.concat(' ',data4)}`)

// 3. indexOf (Kemunculan Pertama)
let data6 = "Indrawansyah";

console.log(`n adalah index ke ${data6.indexOf('n')}`);

// 4. substring
let data7 = "Hafiza Ananta"

console.log(data7.substring(7,10));

// 5. replace
let data8 = "Ayu Tresnawati"
console.log(data8.replace('Ayu','Indra'));
console.log(`Gini juga bisa "${data8.replace('Tresnawati', 'Wansyah')}"`);

// 6. toLowe dan toUpper
let data9 = "bismillah"
console.log(data9.toLowerCase());
console.log(data9.toUpperCase());

// 7. extract string ke number
let data10 = "120" // int
let data11 = parseInt(data10);
console.log(typeof(data11));

let data12 = "10.21" //float
let data13 = parseFloat(data12)
console.log(data13, typeof(data13))