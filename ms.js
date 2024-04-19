// let  ism = "Dilshodbek";
// let yosh = "27";
// let shahar = "Toshkent";
// let info = `${ism},${yosh},${shahar}`;
// console.log(info);

//////////////////////////////////////////////////////////////////////////////////



// let ism = prompt `Ismingizni kiriting`;
// let yil = prompt `tuglulgan sanangiz!`;

// function malumot(ism,yil) {
//     let tugulgansana = new Date();
//     let tugulganyil = tugulgansana.getFullYear();

//     const tugulganyil2 = new Date(yil).getFullYear();
//     let yosh = tugulganyil - tugulganyil2;

//     let greeting = `salom, ${ism}! Siz ${yosh} yoshdasiz tanishganimdan hursandman👌.`;

//     return greeting;
// }

// let shaxs = malumot(ism,yil);
// alert(shaxs);      //Tug'ilgan sana shu formatda ustoz (YYYY-MM-DD)//


////////////////////////////////////////////////////////////////////////////////////



// function malumot(ism,yosh,shahar) {
    
//     let info = `Salom mening ismim ${ism}, yoshish ${yosh}, mening shahrim ${shahar}`;
// console.log(info);

// return info;
// }

// let shaxs = malumot(ism,yil);
// console.log(shaxs);
/////////////////////////////////////////////////////////////////////////////////////////////

// function satruzunligi(satrmatn) {
//     let uzunligi = satrmatn.length;
//     return uzunligi;
// }
// let satrkitritish = "Najot talim bilim dargohi!";
// let uzunliginihisoblash = satruzunligi(satrkitritish);
// console.log(`satr uzunligi: ${uzunliginihisoblash}`);

//////////////////////////////////////////////////////////////////////////////////

// function findMiddleCharacter(inputString) {
//     const length = inputString.length;

//     // Satr uzunligi 0 ga teng yoki juft bo'lsa, o'rtadagi belgi yo'q
//     if (length === 0 || length % 2 === 0) {
//         return "Satrda o'rtadagi belgi yo'q.";
//     }

//     // Satr uzunligi toq son, o'rtadagi belgi aniqlash
//     const middleIndex = Math.floor(length / 2);
//     const middleCharacter = inputString[middleIndex];

//     return middleCharacter;
// }

// // Misol funksiyani ishlatish:
// const inputString = "JavaScript"; // Berilgan satr
// const middleChar = findMiddleCharacter(inputString);

// if (typeof middleChar === "string") {
//     console.log(`Berilgan satrdagi o'rtadagi belgi: ${middleChar}`);
// } else {
//     console.log(middleChar); // "Satrda o'rtadagi belgi yo'q." xabari
// }

////////////////////////////////////////////////////////////////////////////////////

// function ikkistr(str1, str2) {

//     let satr1 = str1.length;
//     let satr2 = str2.length;

//     if (satr1 > satr2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let str1 = "Asus";
// let str2 = "Macbook";

// let aniqlash = ikkistr(str1, str2);

// console.log(` ${aniqlash}`);

///////////////////////////////////////////////////////////////////////////////////

// function unicodeolish(matn) {

//     let brinichiHarf = matn.charAt(0);
//     let unicodeQiymat = brinichiHarf.charCodeAt(0);

//     return unicodeQiymat;
// }

// let matn = "Apple"; 
// let unicodeQiymat = unicodeolish(matn);

// if (unicodeQiymat !== null) {
//     console.log(` "${matn.charAt(0)}"ning Unicode qiymati: ${unicodeQiymat}`);
// } else {
//     console.log("Berilgan satr bo'sh.");
// }
///////////////////////////////////////////////////////////////////////////////////

// function harflarniChiqarish(matn) {
//     for (let i = 0; i < matn.length; i++) {
//         console.log(matn[i]);
        
//     }
// }
// let matn = "svilizatsiyalashtirilmaganligidandir";
// harflarniChiqarish(matn);

//////////////////////////////////////////////////////////////////////////////////

// function harfnimassivgaaylantirish(matnsatr) {
    
//     let harfmassiv = Array.from(matnsatr);

//     return harfmassiv;
// }

// let matnsatr = "kelajak";
// let harfmassiv = harfnimassivgaaylantirish(matnsatr);

// console.log(harfmassiv);
//////////////////////////////////////////////////////////////////////////////////
// function matnorasidaginiajiratibolish(matnkiritish, boshlanishi, tugashi) {

//     let Aniqlash = matnkiritish.substring(boshlanishi, tugashi + 1);

//     return Aniqlash;
// }
// let matnkiritish = "Bu shunchaki matn";
// let boshlanishi = 0;
// let tugashi = 5;

// let Aniqlash = matnorasidaginiajiratibolish(matnkiritish, boshlanishi, tugashi);

// console.log(`"${Aniqlash}"`);
///////////////////////////////////////////////////////////////////////////////////
// function getLastWord(inputString) {
   
//     const words = inputString.trim().split(/\s+/);

//     const lastWord = words[words.length - 1];

//     return lastWord;
// }
// const inputString = "Bu bir test matni eng"; 
// const lastWord = getLastWord(inputString);

// if (lastWord !== null) {
//     console.log(`"${lastWord}"`);
// } else {
//     console.log("Kirish satri bo'sh.");
// }
//////////////////////////////////////////////////////////////////////////////////

// function kattaBelgilargaAylantirish(matn) {
   
//     let kattaharf = matn.toUpperCase();

//     return kattaharf;
// }

// let matn = "alisher";

// let KattaMatn = kattaBelgilargaAylantirish(matn);

// console.log(KattaMatn); 
/////////////////////////////////////////////////////////////////////////////////
// function kattaBelgilargaAylantirish(matn) {
   
//     let kattaharf = matn.toLowerCase();

//     return kattaharf;
// }

// let matn = "ALISHER";

// let KattaMatn = kattaBelgilargaAylantirish(matn);

// console.log(KattaMatn); 
////////////////////////////////////////////////////////////////////////////////
// function eskiniYangisigaAlmashtirish(matn,eski,yangi) {

//     let Almashtirish = matn.replace(eski,yangi)

//     return Almashtirish;

// }

// let matn = "Bugung quyoshli havo";
// let eski = "quyoshli";
// let yangi = "bulutli"
// let YangiMatn = eskiniYangisigaAlmashtirish(matn,eski,yangi);

// console.log(`Eski qator: "${eski}"`);
// console.log(`Yangi qator: "${yangi}"`);
// console.log(`Natija: "${YangiMatn}"`);

////////////////////////////////////////////////////////////////////////////////
// 6

// 2
// function replaceWordInString(inputString, word) {
    
//     // So'zning barcha holatlari uchun regullyar ifoda tuziladi
//     const regex = new RegExp(`${word}`, 'gi');

//     // Berilgan so'zni barcha holatlari olib tashlangan yangi qator sifatida qaytarish
//     const replacedString = inputString.replace(regex, '***');

//     return replacedString;
// }

// // Misol funksiyani ishlatish:
// const inputString = "Bugun havo yomon edi, lekin ertaga havo yaxshi bo'ladi.";
// const wordToReplace = "havo";

// const newString = replaceWordInString(inputString, wordToReplace);

// console.log(`Berilgan so'z: "${wordToReplace}"`);
// console.log(`Natija: "${newString}"`);

///////////////////////////////////////////////////////////////////////////////

// function strnibirlashtirish(str1, str2) {

//     let birlashtirish = str1 + str2;

//     return birlashtirish;
// }
// let str1 = "najot,";
// let str2 = "talim";

// let mergResult = strnibirlashtirish(str1, str2);

// console.log(`"${mergResult}"`);

///////////////////////////////////////////////////////////////////////////////

// function mergeStringArray(stringArray) {

//     const mergedString = stringArray.join('');

//     return mergedString;
// }

// const stringArray = ["Salom, ",  " Bugun ", "havo", " yaxshi."];
// const mergdResult = mergeStringArray(stringArray);
// console.log(`Natija: "${mergdResult}"`);

///////////////////////////////////////////////////////////////////////////////

// function removeExtraSpaces(inputString) {
   
//     const cleanedString = inputString.replace(/\s+/g, ' ').trim();

//     return cleanedString;
// }

// const inputString = "    Bu  shunchaki   matni    ";

// const cleanedResult = removeExtraSpaces(inputString);

// console.log(`Yangi qator: "${cleanedResult}"`);
//////////////////////////////////////////////////////////////////////////////

// function removeExtraSpaces(inputString) {
   
//     const cleanedString = inputString.replace(/\s+/g, ' ').trim();

//     return cleanedString;
// }

// const inputString = "    Bu  shunchaki   matni    ";

// const cleanedResult = removeExtraSpaces(inputString);

// console.log(`Yangi qator: "${cleanedResult}"`);

///////////////////////////////////////////////////////////////////////////////

// function MatngaNolQoshish(Matn, strnum) {
   
//     let uzunlik = Matn.length;
//     if (uzunlik >= strnum) {
//         return Matn; 
//     }

//     let zeroqoshish = strnum - uzunlik;
//     let qoshilganstr = '0'.repeat(zeroqoshish) + Matn;

//     return qoshilganstr;
// }

// let Matn = "hi";
// let strnum = 80;

// let paddResult = MatngaNolQoshish(Matn, strnum);

// console.log(`"${paddResult}"`);

////////////////////////////////////////////////////////////////////////////////

// function Matnga$Qoshish(Matn, strnum,strMark = '') {
   
//     let uzunlik = Matn.length;
//     if (uzunlik >= strnum) {
//         return Matn; 
//     }

//     let $oqoshish = strnum - uzunlik;
//     let qoshilganstr = Matn + strMark.repeat($oqoshish);

//     return qoshilganstr;
// }

// let Matn = "hi";
// let strnum = 100;
// let strMark = "$"

// let paddResult = Matnga$Qoshish(Matn, strnum,strMark);

// console.log(`"${paddResult}"`);

////////////////////////////////////////////////////////////////////////////////

// function MatndagiIndexniOlish(matn, index) {

//     // Belgi olish
//     const BelginiOlish = matn.charAt(index);

//     return BelginiOlish;
// }

// // Misol funksiyani ishlatish:
// const matn = "Index";
// const indexolish = 3; 

// const result = MatndagiIndexniOlish(matn, indexolish);

//     console.log(` "${result}"`);

///////////////////////////////////////////////////////////////////////////////

// function getCharacterCodeAtIndex(inputString, index) {
 
//     const charCode = inputString.charCodeAt(index);

//     return charCode;
// }


// const inputString = "Hello World";
// const indexToRetrieve = 3; 

// const resultCharCode = getCharacterCodeAtIndex(inputString, indexToRetrieve);

//     console.log(` ${resultCharCode}`);

//////////////////////////////////////////////////////////////////////////////

// function repeatString(inputString, count) {
    
//     const repeatedString = inputString.repeat(count);

//     return repeatedString;
// }

// const inputString = "Apple";
// const repeatCount = 34; 

// const resultString = repeatString(inputString, repeatCount);

// console.log(` "${resultString}"`);

///////////////////////////////////////////////////////////////////////////////

// function repeatCharacter(char, count) {

//     const repeatedCharacters = char.repeat(count);

//     return repeatedCharacters;
// }

// const character = 'Ar';
// const repeatCount = 5; 

// const resultString = repeatCharacter(character, repeatCount);

// console.log(` "${resultString}"`);

/////////////////////////////////////////////////////////////////////////////////

// function splitString(inputString, separator) {
   
//     const splittedArray = inputString.split(separator);

//     return splittedArray;
// }

// const inputString = "JavaScript,is,fun";
// const separator = ","; 

// const resultArray = splitString(inputString, separator);

// console.log( resultArray);

///////////////////////////////////////////////////////////////////////////////////

// function splitString(inputString, separator) {
   
//     const splittedArray = inputString.split(separator);

//     return splittedArray;
// }

// const inputString = "JavaScript,is,fun";
// const separator = ","; 

// const resultArray = splitString(inputString, separator);

// console.log( resultArray);

//////////////////////////////////////////////////////////////////////////////////////

// function boshlanishi(string, pastkiQator) {
   
//     if (typeof string !== 'string' || typeof pastkiQator !== 'string') {
//         return false; 
//     }

//     return string.startsWith(pastkiQator);
// }

// const satr1 = "Salom dunyo";
// const pastkiQator1 = "Salom";
// const pastkiQator2 = "dunyo";

// console.log(boshlanishi(satr1, pastkiQator1)); 
// console.log(boshlanishi(satr1, pastkiQator2)); 

///////////////////////////////////////////////////////////////////////////////////////

// function boshlanishi(string, pastkiQator) {
   
//     if (typeof string !== 'string' || typeof pastkiQator !== 'string') {
//         return false; 
//     }

//     return string.startsWith(pastkiQator);
// }

// const satr1 = "Salom dunyo";
// const pastkiQator1 = "Salom";
// const pastkiQator2 = "dunyo";

// console.log(boshlanishi(satr1, pastkiQator1)); 
// console.log(boshlanishi(satr1, pastkiQator2)); 

/////////////////////////////////////////////////////////////////////////////////////////































   



