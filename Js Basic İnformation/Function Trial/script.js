// //1 Kendisine gönderilen kelimeyi belirtilen sayıda ekrana yazdıran kodun ekran çıktısı
// function wordwriter(word,number){
//     for(let i=1 ;i<=number;i++){
//         console.log(word);
// }
// }
// wordwriter("Hello" ,1000);

// //2 Dikdörtgenin Alan ve çevresini hazırlayan fonksiyonu yazın

// function rectangle(a,b){
//     let areaofrectangle=a*b;
//     let perimeterofrectangle=2*(a+b);
//     console.log(`Dikdörtgenin çevresi ${perimeterofrectangle} Dikdörtgenin alanı ${areaofrectangle}`);
// }

// rectangle(5,5);

// Yazı Tura uygulamasını fonksiyon kullanarak yapınız

// function headsortails(a){
//     console.log(a);
// }
// let a =(Math.random()).toFixed();
// headsortails(a);

// Kendisine gönderilen bir sayının tam bölenlerini bir dizi şeklinde döndüren fonksiyonu yazınız

    // function tambolenler(a){
    //     let bolen=[];
    //     let index=0;

    //     for(let i=1;i<=a;i++){
    //         if(a%i==0){
    //             bolen[index]=i;
    //             index++;
    //         }
    //     }
    //     console.log(bolen);
    // }

    // tambolenler(55);

//Değiiken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız

// function toplam(){
//     let sonuc=0;
//     for(let i=0;i<arguments.length;i++){
//         sonuc+=arguments[i];
//     }
//     return sonuc;
// };
// console.log(toplam(2,5));
// console.log(toplam(2,5,7));
