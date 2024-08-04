// değer döndürmeyen parametre almayan


// #include<stdio.h>


 void atmnonevaluenoneparametr(){
            

    printf("Bankamız tek çekimde en fazla 5 bin tl vermektedir .Çekmek istediğiniz miktarı giriniz.5 tl ve katı değer girmeniz gerekmektedir.");

    scanf("%d",&miktar);
    if (miktar>0 && miktar<=5000 && miktar%5==0)
    {
            yuzluk = miktar/100;
            onluk=(miktar-yuzluk*100)/10;
            beslik=(miktar-onluk*10-yuzluk*100)/5;

            printf("Bankamız size %d ' tane Yüzlük %d ' tane 10 luk ve %d ' tane 5 lik verecektir",yuzluk,onluk,beslik);
    }
    
    else{
        printf("Hatalı bir miktar girdiniz");
    }
    };
  int miktar;
  int beslik,onluk,yuzluk;
 int atmyesvaluenoparametr(){


          

//     printf("Bankamız tek çekimde en fazla 5 bin tl vermektedir .Çekmek istediğiniz miktarı giriniz.5 tl ve katı değer girmeniz gerekmektedir.");

//     scanf("%d",&miktar);
//     if (miktar>0 && miktar<=5000 && miktar%5==0)
//     {
//             yuzluk = miktar/100;
//             onluk=(miktar-yuzluk*100)/10;
//             beslik=(miktar-onluk*10-yuzluk*100)/5;

//     }
    
//             else{
//         printf("Hatalı bir miktar girdiniz");
//             }
//     }
    




//  void main(){
//    atmnonevaluenoneparametr();
//    atmyesvaluenoparametr();
// }

  