// soal 2
var readBooksPromise = require('./promise.js')

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  { name: 'komik', timeSpent: 1000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
const getPosts = () => {
  setTimeout(() => {
    //   console.log(sisaWaktu)
  }, 1000)
}


let waktu = 10000 
books.forEach(book => {
  readBooksPromise(waktu, book)
    .then(getPosts)
    .catch(error => console.log(error))
})

// jawaban soal 2
/*
saya mulai membaca LOTR
saya mulai membaca Fidas
saya mulai membaca Kalkulus
saya mulai membaca komik
saya sudah selesai membaca komik, sisa waktu saya 9000
saya sudah selesai membaca Fidas, sisa waktu saya 8000
saya sudah selesai membaca LOTR, sisa waktu saya 7000
saya sudah selesai membaca Kalkulus, sisa waktu saya 6000

*/