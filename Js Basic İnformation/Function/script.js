function yas_hesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
};
function emeklilig(dogumYili){
    let yas=yas_hesapla(dogumYili);
    let kacYılKaldı=65 - yas;

    if(kacYılKaldı>=0){
        console.log(`emekliliğe ${kacYılKaldı} yıl kaldı`);
    }
    else
    {
        console.log("Zaten emekli oldunuz");
    };
};
emeklilig(1950);