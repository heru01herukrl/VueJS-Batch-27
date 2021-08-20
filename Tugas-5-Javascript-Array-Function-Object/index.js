var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
// console.log(daftarHewan);
//urutkan array di atas dan tampilkan data seperti output di bawah ini (dengan menggunakan loop):
daftarHewan.sort();
console.log(daftarHewan);
console.log(' ');

function introduce(data) {
  return "Nama saya ".concat(data.name).concat(", umur saya ".concat(data.age).concat(" tahun, alamat saya di ".concat(data.address).concat(", dan saya punya hobby yaitu ".concat(data.hobby))))
}
var data = { name: "John", age: 30, address: "Jalan Pelesiran", hobby: "Gaming" }

var perkenalan = introduce(data)
console.log(perkenalan)
console.log(' ');

function hitung_huruf_vokal(param) {
  var vokal = 0;
  for (var index = 0; index < param.length; index++) {
    var char1 = param[index]
    var char2 = char1.toUpperCase()
    if (char2 == 'A' || char2 == 'I' || char2 == 'U' || char2 == 'E' || char2 == 'O') {
      vokal++;
    }
  }
  return vokal;
}
var hitung_1 = hitung_huruf_vokal("Muhammad")
var hitung_2 = hitung_huruf_vokal("Iqbal")
console.log(hitung_1, hitung_2) // 3 2

console.log(' ');
function hitung(nilai){
  return nilai * 2 - 2
}


console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8

/*
// soal 1
// Jawaban
daftarHewan.sort();
[ '1. Tokek', '2. Komodo', '3. Cicak', '4. Ular', '5. Buaya' ]

// soal 2
// Jawaban
function introduce(data) {
  return "Nama saya ".concat(data.name).concat(", umur saya ".concat(data.age).concat(" tahun, alamat saya di ".concat(data.address).concat(", dan saya punya hobby yaitu ".concat(data.hobby))))
}

// soal 3
// Jawaban
function hitung_huruf_vokal(param) {
  var vokal = 0;
  for (var index = 0; index < param.length; index++) {
    var char1 = param[index]
    var char2 = char1.toUpperCase()
    if (char2 == 'A' || char2 == 'I' || char2 == 'U' || char2 == 'E' || char2 == 'O') {
      vokal++;
    }
  }
  return vokal;
}

// soal 4
// Jawaban
function hitung(nilai){
  return nilai * 2 - 2
}

*/
