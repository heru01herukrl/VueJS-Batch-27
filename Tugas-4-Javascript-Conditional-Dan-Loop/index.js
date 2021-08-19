
var nilai = 75;
console.log(nilai);
if (nilai >= 85) {
  console.log("indeksnya A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("indeksnya B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("indeksnya C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("indeksnya D");
} else {
  console.log("indeksnya E");
}

console.log(' ');
var tanggal = 22;
var bulan = 7;
var tahun = 2020;
var nmbln = null;
var space = ' ';

switch (bulan) {
  case 1: { nmbln = 'Januari'; break; }
  case 2: { nmbln = 'Febuari'; break; }
  case 3: { nmbln = 'Maret'; break; }
  case 4: { nmbln = 'April'; break; }
  case 5: { nmbln = 'Mei'; break; }
  case 6: { nmbln = 'Juni'; break; }
  case 7: { nmbln = 'Juli'; break; }
  case 8: { nmbln = 'Agustus'; break; }
  case 9: { nmbln = 'September'; break; }
  case 10: { nmbln = 'Oktober'; break; }
  case 11: { nmbln = 'November'; break; }
  default: { nmbln = 'Desember'; break; }
}
console.log(' ');
console.log(String(tanggal).concat(space).concat(nmbln).concat(space).concat(String(tahun))); // saya senang belajar javascript
var kata = '########';

var n=3
console.log('Output untuk n = '.concat(String(n)));
for (var angka = 1; angka <= n; angka++) {
  console.log(kata.substring(0, angka));
}
console.log(' ');
n=7
console.log('Output untuk n = '.concat(String(n)));
for (var angka = 1; angka <= n; angka++) {
  console.log(kata.substring(0, angka));
}
console.log(' ');
var flag = 0;
var angka = 0;
var m = 3;
console.log('Output untuk m = '.concat(String(m)));
console.log(' ');
while (flag < m) {
  angka = 0;
  while (angka < 3 && flag < m) {
    flag++;
    angka++;
    if (angka == 1) {
      console.log(String(flag).concat(' - I love programming'));
    } else if (angka == 2) {
      console.log(String(flag).concat(' - I love Javascript'));
    } else {
      console.log(String(flag).concat(' - I love VueJS'));
      console.log('===');
    }
  }
}
console.log(' ');
m = 5;
flag = 0;
console.log('Output untuk m = '.concat(String(m)));
console.log(' ');
while (flag < m) {
  angka = 0;
  while (angka < 3 && flag < m) {
    flag++;
    angka++;
    if (angka == 1) {
      console.log(String(flag).concat(' - I love programming'));
    } else if (angka == 2) {
      console.log(String(flag).concat(' - I love Javascript'));
    } else {
      console.log(String(flag).concat(' - I love VueJS'));
      console.log('===');
    }
  }
}
console.log(' ');
m = 7;
flag = 0;
console.log('Output untuk m = '.concat(String(m)));
console.log(' ');
while (flag < m) {
  angka = 0;
  while (angka < 3 && flag < m) {
    flag++;
    angka++;
    if (angka == 1) {
      console.log(String(flag).concat(' - I love programming'));
    } else if (angka == 2) {
      console.log(String(flag).concat(' - I love Javascript'));
    } else {
      console.log(String(flag).concat(' - I love VueJS'));
      console.log('===');
    }
  }
}
console.log(' ');
m = 10;
flag = 0;
console.log('Output untuk m = '.concat(String(m)));
console.log(' ');
while (flag < m) {
  angka = 0;
  while (angka < 3 && flag < m) {
    flag++;
    angka++;
    if (angka == 1) {
      console.log(String(flag).concat(' - I love programming'));
    } else if (angka == 2) {
      console.log(String(flag).concat(' - I love Javascript'));
    } else {
      console.log(String(flag).concat(' - I love VueJS'));
      console.log('===');
    }
  }
}

// jawaban soal 1 : indeksnya B
/*
Soal 1
75
jawaban soal 1 : indeksnya B

Soal 2
jawaban soal 2 : 22 Juli 2020

Soal 3
Output untuk n = 3
#
##
###

Output untuk n = 7
#
##
###
####
#####
######
#######

Soal 4
Output untuk m = 3

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===

Output untuk m = 5

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript

Output untuk m = 7

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript
6 - I love VueJS
===
7 - I love programming

Output untuk m = 10

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript
6 - I love VueJS
===
7 - I love programming
8 - I love Javascript
9 - I love VueJS
===
10 - I love programming
*/
