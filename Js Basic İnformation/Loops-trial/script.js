// let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// let toplam = 0;
// for(let sqrts of sayilar){
//     toplam=sqrts*sqrts;
//     console.log(toplam);
// };
// for (let sayi of sayilar) {
//     console.log(sayi * sayi);
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
// let index=0;
// for(let sayi of sayilar) {
//     if(sayi % 5 == 0) {
//         console.log(sayi);
//     }
// }
// // for(let besin_katı of sayilar){
// //     if(besin_katı%5==0){
// //         console.log(besin_katı)
// //     }
// // };

// // 3- sayilar listesindeki çift sayıların toplamını bulunuz.

    // let toplam=0;
    //     for(sayi of sayilar){
    //         if(sayi%2==0){
    //             toplam+=sayi;
    //         }

    //     }
    //     console.log(toplam);













// // let toplam = 0;
// // for(let i in sayilar) {
// //     if (sayilar[i]%2==0) {
// //         toplam += sayilar[i];
// //     }
// // }
// // // console.log(toplam);
// //     let toplam=0;
// //     for(let ciftmi of sayilar){
// //         if(ciftmi%2==0){
// //             toplam+=ciftmi;
// //         }
// //     }
// //     console.log(toplam);

// // let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// // // 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// // for(let urun of  urunler){
// //     let sonuc=urun.toUpperCase();
// //     console.log(sonuc);

// // }
// // // for(let urun of urunler) {
// //     console.log(urun.toUpperCase());
// // }

// // 5- urunler listesinde samsung geçen kaç ürün vardır?

// // let adet = 0;

// // for(let urun of urunler) {
// //     if(urun.includes("samsung")) {
// //         adet++;
// //     }
// // }

// // console.log(adet);






let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];
// // ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
  
for(let not of ogrenciler){

    let sinav=0;
    let not_ort=0;
    let toplam_puan=0;

    for(let puan of not.notlar){

        toplam_puan+=puan;
        sinav++;
    }
    not_ort=toplam_puan/sinav;

    if(not_ort >50){
        console.log(`${not.ad}, ${not.soyad}'isimli öğrencimiz ${not_ort}' ile dersten başarılıdır`)
    }
    else{
        console.log(`${not.ad}, ${not.soyad}'isimli öğrencimiz ${not_ort}' ile dersten başarısızdır`)

    }
}