// let soru = {
//   soruMetni: "Hangisi  javascript paket yönetim uygulamasıdır",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "Npm",
//     c: "Budget",
//   },
//   dogruCevap: "c",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };
// console.log(soru1.cevabiKontrolEt("c"))


// let soru1 = {
//     soruMetni: "Hangisi  javascript paket yönetim uygulamasıdır",
//     cevapSecenekleri: {
//       a: "Node.js",
//       b: "Npm",
//       c: "Budget",
//     },
//     dogruCevap: "a",
//     cevabiKontrolEt: function (cevap) {
//       return (cevap = this.dogruCevap);
//     },
//   };
//   console.log(soru1.cevabiKontrolEt("c"))


function Soru(soruMetni,cevapSecenekleri,dogruCevap){
      this.soruMetni=soruMetni;
      this.cevapSecenekleri=cevapSecenekleri;
      this.dogruCevap=dogruCevap;

      console.log(this)
}
Soru.prototype.cevabiKontrolEt= function(cevap){
  return cevap === this.dogruCevap;
}
// console.log(sorular[0].cevapSecenekleri)
let sorular=[
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),
  new Soru ("Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm",c: "Budget",},"b"),

]
// let soru1 =new Soru (
//   "Hangisi  javascript paket yönetim uygulamasıdır",{a: "Node.js",b: "Npm", c: "Budget",},"b"
// );
  // for(let s of sorular){
  //   console.log(s.soruMetni)
  //   console.log(s.cevapSecenekleri);
  //   console.log(s.cevabiKontrolEt("c"))
  // }

// console.log(soru1.soruMetni);
// console.log(soru1.cevapSecenekleri);
// console.log(soru1.dogruCevap);

