

// Soal 1
// buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini

let rumus = (a, b) => {
  return {
    luas: a * b,
    keliling: 2 * (a + b)
  }
}
console.log(rumus(2, 3).luas);
console.log(rumus(2, 3).keliling);
// console.log(luas);
// Soal 2
// Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana

// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//     }
//   }
// }

var newFunction = (a, b) => {
  return {
    firstname: a,
    lastname: b,
    fullName: () => { return a + " " + b; }
  }
}
let namalengkap = newFunction("William", "Imoh").fullName()
console.log(namalengkap)  // fullname());

// console.log(newFunction("William", "Imoh").firstName)  // fullname());
// //Driver Code
// newFunction("William", "Imoh").fullName() 

// Soal 3
// Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football"
};
// const [firstName, lastName, address, hobby] = newObject
// dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const address = newObject.address;
// const hobby = newObject.hobby;
// Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
// // Driver code
// console.log(firstName, lastName, address, hobby)
const {firstName, lastName, address, hobby} = newObject
console.log(firstName, lastName, address, hobby)

// soal 4
// Kombinasikan dua array berikut menggunakan array spreading ES6
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined1 = west.concat(east)
// //Driver Code
// console.log(combined1)

const combined = [
  ...west, 
  ...east
];
console.log(combined)


// soal 5
// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth";
const view = "glass";
const before = `Lorem ${view} dolor sit amet consectetur adipiscing elit, ${planet}`;
console.log(before);
