/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let siparis1={
         
        "siparis id":101,
        "siparis tarihi":"31.12.2022",
        "Ödeme sekli":"Kredi Kartı",
         "Kargo adresi":{
                "mahalle":"Yahya Kaptan",
                "sehir":"izmit kocaeli",
         },
        "urunler":[
                {  "urun id": "5",
                    "urun başlıgı":"Iphone 13 pro ",
                    "urun url":"http://abc.com/iphone-13-pro",
                    "urun fiyat":2200
                }
                ,
                {
                    "urun id":"6",
                    "urun başlıgı":"Iphone 13 pro max",
                    "urun url":"http://abc.com/iphone-13-pro",
                    "urun fiyat":2500,

                }
        ]

};
let siparis2={
         
    "siparis id":102,
    "siparis tarihi":"31.12.2022",
    "Ödeme sekli":"Kredi Kartı",
     "Kargo adresi":{
            "mahalle":"Yahya Kaptan",
            "sehir":"izmit kocaeli",
     },
    "urunler":{  
             "urun id": "6",
                "urun başlıgı":"Iphone 13 pro ",
                "urun url":"http://abc.com/iphone-13-pro",
                "urun fiyat":2500
            
            }
          
    

};


let siparis1_toplam=(siparis1.urunler[0]["urun fiyat"]+siparis1.urunler[1]["urun fiyat"])*1.18;
let siparis2_toplam=siparis2.urunler["urun fiyat"]*1.18;


console.log(siparis1_toplam);




let siparisler=[siparis1,siparis2];

