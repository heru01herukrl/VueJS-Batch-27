// soal 1
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

const getPosts = () => {
  setTimeout(() => {
     //   console.log(sisaWaktu)
  }, 1000)
}

let waktu = 10000 
books.forEach(book => {
    readBooks(waktu, book, getPosts)
})

// jawaban soal 1
/*
saya membaca LOTR
saya membaca Fidas
saya membaca Kalkulus
saya membaca komik
saya sudah membaca komik, sisa waktu saya 9000
saya sudah membaca Fidas, sisa waktu saya 8000
saya sudah membaca LOTR, sisa waktu saya 7000
saya sudah membaca Kalkulus, sisa waktu saya 6000

*/
