let soru = {
  soruMetni: "Hangisi  javascript paket yönetim uygulamasıdır",
  cevapSecenekleri: {
    a: "Node.js",
    b: "Npm",
    c: "Budget",
  },
  dogruCevap: "c",
  cevabiKontrolEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};
console.log(soru1.cevabiKontrolEt("c"))


let soru1 = {
    soruMetni: "Hangisi  javascript paket yönetim uygulamasıdır",
    cevapSecenekleri: {
      a: "Node.js",
      b: "Npm",
      c: "Budget",
    },
    dogruCevap: "a",
    cevabiKontrolEt: function (cevap) {
      return (cevap = this.dogruCevap);
    },
  };
  console.log(soru1.cevabiKontrolEt("c"))
  
