// 1- "Elma","Armut","Muz","Çilek" elelmanlarına sahip bir dizi oluşturun 
// 2-Dizi kaç elemanlıdır?
// 3-Dizinin İlk Ve son elemanı?
// 4-Elma Dizinin Bir elemanı mıdır?
// 5-Kiraz meyvesini listenin sonuna ekleyin
// 6-Dizinin son 2 elemanını siliniz 
// 7-Aşağıdaki bilgileri dizi içerisinde saklayınız  ve her öğrencinin yaşını ve not ortalamasını hesaplayınız
   
        /*
         // *Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
             Öğrenci 2: Ada Bilgi 2012 (80,80,90)  
             Öğrenci 3: Ahmet Turan 2009 (60,60,70)
        */
 


        // // 1
        //     let meyveler=["Elma","Armut","Muz","Çilek"];

        // // 2
        //     console.log(meyveler.length);
        // // 3 
        //     console.log(meyveler[0]);
        //     console.log(meyveler[meyveler.length -1 ]);
        // // 4
        //     meyveler[meyveler.length]="Kiraz";
        //     console.log(meyveler);
        // 5 


        // NOT NOT  NOT         NOT NOT  NOT
        // NOT NOT  NOT
        // NOT NOT  NOT     let ile const arasında ki fark let ile tanımlanan değişken daha sonra değiştirilebilir ama const ile değiştirilemez
        // NOT NOT  NOT
        // NOT NOT  NOT

        // 6

        let ogr1= [
            "Yiğit",
            "Bilgi",
            "2010",
            "[70,60,80]"
        ];
        let ogr2= [
            "Ada",
            "Bilgi",
            "2012",
            "[80,80,90]"
        ];
        let ogr3= [
            "Ahmet",
            "Turan",
            "2009",
            "[60,60,70]"
        ];

        let ogrenciler=[ogr1,ogr2,ogr3];

        // let yigit_yas= new Date().getFullYear()-ogrenciler[0][2];
        // console.log(yigit_yas);

        // let yigit_puan=parseInt(ogr1[3]);
        // console.log(yigit_puan);

        
        

        
        
        // Öğrencinin notlarını içeren dizi
        let notlar = JSON.parse(ogr1[3]); // Diziyi JSON.parse ile gerçek bir diziye dönüştür
        
        // Notların toplamını hesapla
        let toplam = 0;
        for (let i = 0; i < notlar.length; i++) {
            toplam += parseInt(notlar[i]);
        }
        
        // Ortalamayı hesapla
        let ortalama = toplam / notlar.length;
        console.log(ortalama);
        