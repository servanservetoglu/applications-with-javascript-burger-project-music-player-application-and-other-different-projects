

// //10 ile 50 arasında olup olmadığını kontrol eden test kodu
// // let  sayi = 70;

// // if((sayi>10)&&(sayi<50))
// // {
// //     console.log("sayi 10 ile 50 arasındadır")
// // }
// // else{
// //     console.log("Sayı başka bir değer aralığındadır")
// // }




// //sayının pozitif tek sayı olup olmadığını kontrol eden test kodu

// // let sayi = 21;

// // if((sayi % 2 ==1) && sayi>0){
// //     console.log("Sayı pozitif ve tektir")
// // }
// // else{
// //     console.log("Sayı değildir")
// // }

// // girilen 3 sayıyı büyüklüklerine göre sıralayan kod dizini 

// let x=22;
// let y=99;
// let z=100;
// let enBuyuk;
// if(x>y){
//     if(x>z){

//         if(y>z){
//             console.log("x>y && y>z");
//         }
//         else if(z>y){
//             console.log("x>z && z>y");
//         }
        
//     }



// }
// if(z>x){
//     if(z>y){

//         if(y>x){
//             console.log("z>y && y>x");
//         }
//         else if(z>y){
//             console.log("z>x && x>y");
//         }
       
//     }



// }
// if(y>x){
//     if(y>z){

//         if(x>z){
//             console.log("y>x && x>z");
//         }
//         else if(z>x){
//             console.log("y>z && z>x");
//         }
       
//     }


// }
// x >y>  z
// x>z>y

// z>x>y
// z>y>x

// y>x>z
// y>z>x

// 2 vize (%40) 1 final (%60) notuna göre hesaplanan ortalama için ;
//  a eğer ortallama 50 ve üstündeyse geçti değilse kaldı yazsın .
//b geçmek için eğer ortalama 50 bile olsa final notu en az 50 olmalıdır 
// c finalden 70 alındığında ortalama 50 'nin altında olsa bile dersten geçilsin


let vize1=50;
let vize2=60;
let final=49;
let notOrtalama;

notOrtalama=(vize1+vize2)*0.4 + final*0.6;


if(notOrtalama>=50 && final>=50){

    console.log("Dersten geçtiniz");

     }
     else{
        console.log("Dersten kaldınız")
     }
     
    
     
// }
// else if(final=70){
//     console.log("Dersten final notunuz 70 ve üstü olduğu için geçtiniz")
// }
