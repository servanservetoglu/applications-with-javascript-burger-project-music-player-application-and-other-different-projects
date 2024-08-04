let url="https://www.sadikturan.com/";
let kursAdi="Komple Web Geliştirme Kursu";
let sonuc;


//1- url kaç karakterlidir 
//2-Kurs adı kaç kelimeden oluşmaktadır
//3- url https ile mi başlıyor 
//4- kurs adı dizisinde eğitimi kelimesi var mı 
sonuc = url.length;
console.log(sonuc);

sonuc=kursAdi.split(" ");
console.log(sonuc);

sonuc=url.startsWith("https");
console.log(sonuc);
sonuc=kursAdi.includes("Komple");
console.log(sonuc);
kursAdi=kursAdi.toLowerCase();
kursAdi=kursAdi.replaceAll(" ","-");
mesaj=`${url}${kursAdi}`;
console.log(mesaj);
