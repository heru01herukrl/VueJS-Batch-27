var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
console.log(pertama.substring(0, 5).concat(pertama.substring(12, 19)).concat(kedua.substring(0, 18))); // saya senang belajar javascript

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
console.log((Number(kataPertama) + Number(kataKedua)) * (Number(kataKeempat) - Number(kataKetiga)));

var kalimat = 'wah javascript itu keren sekali'; 
//             0123456789012345678901234567890
//             0        1         2         3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima= kalimat.substring(25, 30); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 1
// saya senang belajar javascript

// soal 2
// 24

// soal 3
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekal

