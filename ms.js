
/////////////////////////////////////////////////////////////////////

// function YigindiOlish(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
        
//     }
//     return sum;
// }
// let array =[10,20,30,40,50,];
// let yigindi = YigindiOlish(array);
// console.log(yigindi);

///////////////////////////////////////////////////////////////////////

// function engyaqin(arr, R) {
//     let son1 = null;
//     let son2 = Infinity;
//     for (let num of arr) {
//         let result = Math.abs(num - R);
//         if (result < son2) {
//             son2 = result;
//             son1 = num;
//         }
//     }
//     return son1;
// }

// let arr = [1, 23, 42, 7, 14, 21, 3, 37, 22];
// let R = 16;
// console.log(engyaqin(arr, R));

////////////////////////////////////////////////////////////////////////

// function juftsontopish(arr) {
//     let son = 0;
//     for(let i = 0; i < arr.length; i++){
//         if (i % 2 === 0) {

//             if (typeof arr[i] === 'number') {
//                 son++;
//             }

//         } 
//     }
//     return son;
// };
// let arr = [10, 21, 4, 6, 12, 11,14, true];
// console.log(arr);
// console.log("Juftlar", juftsontopish(arr));

///////////////////////////////////////////////////////////////////////////

// function birxilqiymatlielementlar(arr) {
//     let sonlar = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];

//         let takrorlanishlarsoni = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === element) {
//                 takrorlanishlarsoni++;
//             }
//         }

//         if (takrorlanishlarsoni === 2) {
//             sonlar.push(i);
//         }
//     }
    
//     return sonlar.join(); 
// }

// let arr = [10, 21, 4, 1, 12, 21];

// console.log(arr);
// console.log(birxilqiymatlielementlar(arr));

////////////////////////////////////////////////////////////////////////////

// function toqsonlarsoni(arr) {
//     let toqsonlarsoni = 0; 
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             toqsonlarsoni++;
//         }
//     }
//     return toqsonlarsoni;
// }

// let arr = [1, 23, 42, 14, 21, 22];
// console.log(arr);
// console.log("Toq sonlar", toqsonlarsoni(arr));

////////////////////////////////////////////////////////////////////////////

// function kopaytirish(arr, k) {
//     let natija = []; 
    
//     for (let i = 0; i < arr.length; i++) {
//         natija.push(arr[i] * k);
//     }
    
//     return natija;
// }
// let arr = [10, 63, 16];
// let k = 8;

// console.log(arr);
// console.log(k);
// console.log(kopaytirish(arr, k));

/////////////////////////////////////////////////////////////////////////////

// function kichikvakatta(arr) {

//     let engkichik = arr[0];
//     let engkatta = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < engkichik) {
//             engkichik = arr[i];
//         }
//         if (arr[i] > engkatta) {
//             engkatta = arr[i];
//         }
//     }
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== engkichik && arr[i] !== engkatta) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// let arr = [10, 23, 56, 41, 13, 90, 76];
// console.log(arr);
// console.log(kichikvakatta(arr));

////////////////////////////////////////////////////////////////////////////////

// function birxilniochirish(arr) {
//     let natija = []; 

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
       
//         let takrorlanish_soni = 0;
//         for (let index = 0; index < arr.length; index++) {
//             if (arr[index] === element) {
//                 takrorlanish_soni++;
//             }
//         }

//         if (takrorlanish_soni === 1) {
//             natija.push(element);
//         }
//     }
//     return natija;
// }

// let arr = [10, 2, 2, 5, 13, 63, 63, 16, 5];
// console.log(arr);
// console.log("Natija:", birxilniochirish(arr));

///////////////////////////////////////////////////////////////////////////////

// function juftvatoqlar(arr) {
//     let juftlar = []; 
//     let toqlar = []; 
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juftlar.push(arr[i]);
//         } else {
//             toqlar.push(arr[i]);
//         }
//     }
    
//     for (let index = 0; index < juftlar.length; index++) {
//         console.log(juftlar[index]);
//     }
    
//     for (let k = toqlar.length - 1; k >= 0; k--) {
//         console.log(toqlar[k]);
//     }
// }
// let arr = [4, 5, 7, 8, 6, 9];
// console.log(arr);
// console.log("Juft va toqlar");
// juftvatoqlar(arr);

/////////////////////////////////////////////////////////////////////////////////////

// function engkichikvaengkattaorninialmashtir(arr) {
//     let max = arr[0]; 
//     let min = arr[0]; 
//     let maxindex = 0; 
//     let minindex = 0; 
    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             maxindex = i;
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//             minindex = i;
//         }
//     }
//     let temp = arr[maxindex];
//     arr[maxindex] = arr[minindex];
//     arr[minindex] = temp;
    
//     console.log(arr);
// }
// let arr = [7, 4, 9, 2, 3, 1, 5];
// console.log(arr);
// engkichikvaengkattaorninialmashtir(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// const bookshelf = [
//     {
//         _id: 1,
//         tittle:'Atomic Habits',
//         author:'jeyms krill',
//         genre:'something',
//         pages:295,
//         isRead: false,
//     },

//     {
//         _id: 2,
//         tittle:'Rich dad poor dad',
//         author:'Robert kiyasaki',
//         genre:'something',
//         pages:295,
//         isRead: false,
//     },
// ];

// function ShowAviableBooks(db) {
//   for (let i = 0; i < db.length; i++) {
//    console.log(`${i + 1} ${db[i].tittle}
//    ${db[i].author}
//    ${db[i].genre}
//    ${db[i].pages}
//    ${db[i].isRead}`);
    
//   }
// };

// function ShowAviableBooks(db) {
//     for (let item of db ) {
//     console.log(`${item._id} ${item.tittle}
//     ${item.author}
//     ${item.genre}
//     ${item.pages}
//     ${item.isRead}`);
      
//     }
//   };

// ShowAviableBooks(bookshelf)


// let kitoblar = [];

// function kitobqoshish(nomi, muallif, janr, sahifalar) {
//     let kitob = {
//       nomi: nomi,
//       muallif: muallif,
//       janr: janr,
//       sahifalar: sahifalar,
//       isRead: false
//     };

//     kitoblar.push(kitob);

//     for (let i = 0; i < kitoblar.length; i++) {
//       if (kitoblar[i].nomi === nomi) {
//         Mavjud = true;
//         break;
//       }
//     }
  
//     if (Mavjud) {
//       console.log(`${nomi} kitob qo'shildi.`);
//     } else {
//       console.log(`${nomi} nomli kitob qo'shishilmadi`);
//     }
//   }
  
// function KitobOqilgan(nomi) {
    
//     for (let i = 0; i < kitoblar.length; i++) {
//       if (kitoblar[i].nomi === nomi) {
//         kitob = kitoblar[i];
//         break;
//       }
//     }
//     if (kitob) {
//       kitob.isRead = true;
//       console.log(`${nomi} kitobi o'qilgan deb belgilandi.`);
//     } else {
//       console.log(`${nomi} kitob topilmadi.`);
//     }
//   }
  
// kitobqoshish('Atom Odatlar', 'James Klir', 'Biografia', 295);
// kitobqoshish(`O'tkan Kunlar`, 'Abdulla Qodriy', 'Roman', 219);
// KitobOqilgan('Atom Odatlar');



// let kontaktar = [];

// function kontaktQoshish(ism, email, telefon, adrres) {
//   let yangiKontakt = {
//       ism: ism,
//       email: email,
//       telefon: telefon,
//       adrres: adrres,
//     };

//     kontaktar.push(yangiKontakt);

//     for (let i = 0; i < kontaktar.length; i++) {
//       if (kontaktar[i].ism === ism) {
//         bor = true;
//         break;
//       }
//     }
  
//     if (bor) {
//       console.log(`${ism} yangiKontakt qo'shildi.`);
//     } else {
//       console.log(`${ism}  kontakt qo'shishilmadi`);
//     }
//   }
  
// function yangiKontaktOqilgan(ism) {
    
//     for (let i = 0; i < kontaktar.length; i++) {
//       if (kontaktar[i].ism === ism) {
//         yangiKontakt = kontaktar[i];
//         break;
//       }
//     }
//     if (yangiKontakt) {
//       yangiKontakt.call = true;
//       console.log(`${ism} yangiKontakti belgilandi.`);
//     } else {
//       console.log(`${ism} yangiKontakt topilmadi.`);
//     }
//   }
  
// kontaktQoshish('Ikrom', 'ikrom@.com', '99 897 77 76', );
// kontaktQoshish(`Axmad`, 'Axmad@.com', '90 897 87 67',);





// function sonnitekshirish(son) {
//   if (son > 0) {
//     return "musbat son";
//   }else if (son < 0) {
//     return "manfiy son";
//   }else{
//     return "son nolga teng";
//   }
// }

// let natija = sonnitekshirish();
// console.log(natija);



// function havoharorati(harorat) {
//   if (harorat > 30) {
//     return "havo issiq yengilroq kiyining";
//   }else if (harorat > 10) {
//     return "havo alo darajada ";
//   }else if (harorat > 0) {
//     return "havo salqinroq "
//   }else if (harorat > -5) {
//     return "havo salqin";
//   }else if (harorat > -10) {
//     return "havo sovuq";
//   }else if (harorat > -20) {
//     return "anomal sovuq"
//   }
// };

// let natija = havoharorati(-19);
// console.log(natija);

// function personinfo({name,age,id}) {
//   return `salom mening ismim ${name} mening yoshim ${age} da, mening id raqamim ${id}`
// }

// let person = {
//   name:"jack",
//   age : "21",
//   id:"2323",
// };

// console.log(personinfo(person));

// let name ="Bekmuhammad"
// let middle = name.length / 2;

// if (name.length / 2 == 0) {
//   console.log(name[middle - 1], name [middle]);
// }else{
//   console.log(name[Math.floor(middle)]);
// }















// let student = {
//     name: "Jasur",
//     age: 20,
//     email: "example",
//     phone: "123",
//     number: [
//       { key1: 1, key2: 2 },
//       { key1: 11, key2: 22 },
//       { key1: 1, key2: 222 },
//     ],
//     address: {
//       city: "Bishkek",
//       street: "example",
//       number: 1234,
//       location: {
//         lat: 1235,
//         lng: 1236,
//         regions: ["Ishtxon", "chilonzor", "yunusobot"],
//       },
//     },
//   };
  

//   let {
//     name,
//     age,
//     email,
    

//   } = student

//   console.log(age);


// function A() {}
// function B() {}

// let a = new A();
// let b = new B();
// console.log(a == b);

