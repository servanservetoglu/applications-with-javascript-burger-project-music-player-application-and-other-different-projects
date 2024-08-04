let  ad="Şervan";
let soyad="Servetoğlu";
let yas=70;
let sehir="Kocaeli";
 
// let mesaj="Benim adım " + ad + ' ve soyadım '  + soyad +'.' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' +(65 -yas) +' yılım kaldı' ; 
// console.log(mesaj);

//backtick

// let mesaj=`Benim adım ${ad} soyadım ${soyad} . ${sehir} 'de yaşıyorum. Emekliliğe ${65-yas}' yılım kaldı`;
// console.log(mesaj)

// ternary operators 
let emeklilik =(65 - yas>0)? "Emeklilğe"+ (65-yas) + "yıl kaldı." :"zaten emekli oldunuz";
mesaj=`Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum . ${emeklilik}`;
console.log(mesaj); 